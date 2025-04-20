import { useState } from "react";
import "./style.scss";
import AddForm from "./components/addForm";
import List from "./components/list";


const actions = {
    list:{label:"Liste des évènements", content:<List/>},
    add:{label:"Ajouter un évènement", content:<AddForm/>},
}

export default function Events_Layout(){

    const [selectedAction, setSelectedAction] = useState(actions.list)

    const isActionActive = (action) => {
        return action === selectedAction ? "active" : ""
    }

    return(
        <div id="events-layout">
            <div id="container">
                <div className="actions">
                    {Object.values(actions).map((action, index) => (
                        <button key={index} className={isActionActive(action)} onClick={() => setSelectedAction(action)}>{action.label}</button>
                    ))}
                </div>
                <div className="content">
                    {selectedAction.content}
                </div>
            </div>
        </div>
    )
}