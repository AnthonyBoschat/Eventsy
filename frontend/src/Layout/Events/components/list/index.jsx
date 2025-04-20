import { format, isAfter, isBefore, parse } from "date-fns";
import { fr } from 'date-fns/locale';
import fake_events from "./fake";
import "./style.scss";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";



export default function List(){

    const [events, setEvents] = useState(fake_events)
    const [sortedEvents, setSortedEvents] = useState([])

    const parseFRDate = (date) => parse(date, "dd/MM/yyyy", new Date(), { locale: fr });

    useEffect(() => {
        const now   = new Date()
        const eventsSort = events.sort((a, b) => {
            const aDate = parseFRDate(a.date)
            const bDate = parseFRDate(b.date)
          
            // 1) A futur & B passé → A avant
            if (isAfter(aDate, now) && isBefore(bDate, now)) return -1
            // 2) A passé & B futur → B avant
            if (isBefore(aDate, now) && isAfter(bDate, now)) return 1
            // 3) Tous deux futurs → plus proche → plus lointain
            if (isAfter(aDate, now) && isAfter(bDate, now))
                return aDate.getTime() - bDate.getTime()
            // 4) Tous deux passés → plus récent → plus ancien
            return bDate.getTime() - aDate.getTime()
        })
        setSortedEvents(eventsSort)
    }, [events])

    

    const isToLateEvent = (eventDate) => {
        return isBefore(parseFRDate(eventDate), new Date()) ? "passed" : ""
    }

    const fullPlace = (place) => {
        return `${place.street}, ${place.postal_code}, ${place.city}`
    }

    const formatDate = (date) => {
        const parsed = parseFRDate(date)
        return format(parsed, "d MMMM yyyy", { locale: fr });
    }

    const isFavorite = (favorite) => {
        return favorite ? "active" : ""
    }

    const toggleFavorite = (index) => {
        const newEvents = [...events]
        newEvents[index].favorite = !newEvents[index].favorite
        setEvents(newEvents)
        if(newEvents[index].favorite){
            toast.success(`Ajouter aux favoris`, {icon:<Heart style={{stroke:"none", fill:"rgb(255, 114, 196)"}}/>,autoClose: 2000, hideProgressBar: true, closeOnClick: true})
        }else{
            toast.success(`Retirer des favoris`, {icon:<Heart style={{stroke:"none", fill:"rgba(236, 236, 236, 0.5)"}}/>, autoClose: 2000, hideProgressBar: true, closeOnClick: true})
        }
    }

    return(
        <ul id="events-list">
            {sortedEvents.map((event, index) => (
                <li key={index} className={`event ${isToLateEvent(event.date)}`}>
                    <div className="name-place">
                        <h2 className="name">{event.name}</h2>
                        <div className="place"><i className="fa-solid fa-location-dot"></i> <span>{fullPlace(event.place)}</span></div>
                    </div>
                    <div className="informations">
                        
                        <div className="participant">
                            <i className="fa-solid fa-user"></i>
                            <span>{event.participant}</span>
                        </div>
                        <div className="date">
                            <i className="fa-solid fa-calendar"></i>
                            <span>{formatDate(event.date)}</span>
                        </div>
                    </div>

                    <div className="actions">
                        <Heart onClick={() => toggleFavorite(index)} className={`favorite ${isFavorite(event.favorite)}`} />
                    </div>
                </li>
            ))}
        </ul>
    )
}