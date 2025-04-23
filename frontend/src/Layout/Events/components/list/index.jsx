import { format, isAfter, isBefore, parse } from "date-fns";
import { fr } from 'date-fns/locale';
import fake_events from "./fake";
import "./style.scss";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import callBackend from "@Services/callBackend";
import ENDPOINTS from "@Constants/Endpoint";
import { toggleEventFavorite } from "@Redux/Slices/events";



export default function List(){

    const eventsList = useSelector(store => store.events.list)
    const [sortedEvents, setSortedEvents] = useState([])
    const dispatch = useDispatch()

    const parseDate = (date) => new Date(date);

    useEffect(() => {
        const now   = new Date()
        const eventsSort = [...eventsList].sort((a, b) => {
            const aDate = parseDate(a.date)
            const bDate = parseDate(b.date)
          
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
    }, [eventsList])

    

    const isToLateEvent = (eventDate) => {
        return isBefore(parseDate(eventDate), new Date()) ? "passed" : ""
    }

    const fullPlace = (place) => {
        return `${place?.street}, ${place?.postal_code}, ${place?.city}`
    }

    const formatDate = (date) => {
        const parsed = parseDate(date)
        return format(parsed, "d MMMM yyyy", { locale: fr });
    }

    const isFavorite = (favorite) => {
        return favorite ? "active" : ""
    }

    const toggleFavorite = async (isFavorite, eventID) => {
        dispatch(toggleEventFavorite(eventID))
        if(isFavorite){
            toast.success(`Retirer des favoris`, {icon:<Heart style={{stroke:"none", fill:"rgba(236, 236, 236, 0.5)"}}/>, autoClose: 2000, hideProgressBar: true, closeOnClick: true})
        }else{
            toast.success(`Ajouter aux favoris`, {icon:<Heart style={{stroke:"none", fill:"rgb(255, 114, 196)"}}/>,autoClose: 2000, hideProgressBar: true, closeOnClick: true})
        }
        const response = await callBackend(ENDPOINTS.EVENTS.TOGGLE_FAVORITE, "POST", {id:eventID})
        if(!response.success){
            toast.dismiss()
            dispatch(toggleEventFavorite(eventID))
            toast.error(response.message)
        }
    }

    return(
        <ul id="events-list">
            {sortedEvents.map((event, index) => (
                <li key={event.id} className={`event ${isToLateEvent(event.date)}`}>
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
                        <Heart onClick={() => toggleFavorite(event.favorite, event.id)} className={`favorite ${isFavorite(event.favorite)}`} />
                    </div>
                </li>
            ))}
        </ul>
    )
}