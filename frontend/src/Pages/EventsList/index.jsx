import ENDPOINTS from "@Constants/Endpoint";
import Events_Layout from "@Layout/Events";
import { setList } from "@Redux/Slices/events";
import callBackend from "@Services/callBackend";
import useLoadData from "@Services/useLoadData";

export default function Events_Page(){

    
    const {loading} = useLoadData(() => callBackend(ENDPOINTS.EVENTS.INDEX), setList)

    if(!loading){
        return(
            <Events_Layout/>
        )
    }
}