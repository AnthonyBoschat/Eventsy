import { Link, useLocation } from "react-router-dom";
import "./style.scss";
import ROUTES from "@Constants/Routes";

export default function Header(){

    const location = useLocation()

    const isActive = (pathname) => {
        return pathname === location.pathname ? "active" : ""
    }

    return(
        <header>
            <h1><Link to={ROUTES.DASHBOARD}>Event<span className="g_primary">_</span>Sy</Link></h1>
            <ul className="links">
                <li>
                    <Link className={isActive(ROUTES.EVENTS)} to={ROUTES.EVENTS}>Évènements</Link>
                </li>
            </ul>
        </header>
    )
}