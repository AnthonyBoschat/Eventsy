import "./style.scss";
import { useState } from "react";



export default function Dashboard_Layout(){

    const [modalOpen, setModalOpen] = useState(false);

    const actions = [
        {label:"Ajouter un évènement", onClick:() => setModalOpen(true)},
        {label:"Autre 1", onClick:() => console.log("Autre 1")},
        {label:"Autre 2", onClick:() => console.log("Autre 2")},
    ]

    return(
        <div id="dashboard_layout">
            <div className="container">

                <div className="actions-container">
                </div>

            </div>




            
            
        </div>
    )
}