const backendURL = "http://localhost:8000/api"

const ENDPOINTS = {
    EVENTS:{
        INDEX:`${backendURL}/events/index`,
        ADD:`${backendURL}/events/add`,
        TOGGLE_FAVORITE:`${backendURL}/events/toggleFavorite`,
    }
}

export default ENDPOINTS