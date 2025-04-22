import { useEffect, useState } from "react";
import "./style.scss";
import callBackend from "@Services/callBackend";
import { toast } from "react-toastify";
import ENDPOINTS from "@Constants/Endpoint";
import { useDispatch } from "react-redux";
import { addEvent } from "@Redux/Slices/events";



export default function AddForm(){

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const dispatch = useDispatch()

    const resetFields = () => {
        setName("")
        setDate("")
        setTime("")
        setStreet("")
        setCity("")
        setPostalCode("")
    }

    const isFill = (value) => {
        return value !== "" ? "fill" : ""
    }

    const handleSubmit = async(e) => {
        setLoading(true)
        e.preventDefault()
        const newEvent = {
            name,
            date,
            time,
            street,
            city,
            postalCode,
        }

        const response = await callBackend(ENDPOINTS.EVENTS.ADD, "POST", newEvent)
        if(response.success){
            dispatch(addEvent(response.data))
            toast.success(response.message)
            resetFields()
        }else{
            toast.error(response.message)
        }
        setLoading(false)
    }

    return(
        <div id="events-add">
            <form className={loading ? "loading" : ""} onSubmit={handleSubmit} action="">

                <div className="section name">
                    <div className="input">
                        <label htmlFor="name">Nom</label>
                        <input disabled={loading} placeholder="Soirée d'anniversaire" className={isFill(name)} required value={name} id="name" onChange={(e) => setName(e.currentTarget.value)} type="text" />
                    </div>
                </div>


                <div className="section datetime">
                    <div className="input">
                        <label htmlFor="date">Date</label>
                        <input disabled={loading} required className={`date ${isFill(date)}`} value={date} onChange={(e) => setDate(e.currentTarget.value)}  id="date" type="date" />
                    </div>
                    <div className="input">
                        <label htmlFor="time">Heure</label>
                        <input disabled={loading} required className={`time ${isFill(time)}`} value={time} onChange={(e) => setTime(e.currentTarget.value)}  id="time" type="time" />
                    </div>
                </div>


                <div className="section adress">
                    <div className="input">
                        <label htmlFor="street">N° et Rue</label>
                        <input disabled={loading} placeholder="69 rue Mirabeau" className={`street ${isFill(street)}`} required value={street} onChange={(e) => setStreet(e.currentTarget.value)} type="text" id="street" />
                    </div>
                    <div className="input">
                        <label htmlFor="city">Ville</label>
                        <input disabled={loading} placeholder="Tours" className={isFill(city)} required value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" id="city" />
                    </div>
                    <div className="input">
                        <label htmlFor="postalCode">Code postal</label>
                        <input disabled={loading} placeholder="37000" className={`postalCode ${isFill(postalCode)}`} required value={postalCode} onChange={(e) => setPostalCode(e.currentTarget.value)} type="text" id="postalCode" />
                    </div>
                </div>


                <div className="section submit">
                    <button className="submitButton" type="submit" >
                    {loading ? (
                        <i className="fa-solid fa-spinner loading-icon"></i>
                    ) : (
                        "Créer l'évènement"
                    )}
                    </button>
                </div>


            </form>
        </div>
    )
}