import { combineReducers } from "@reduxjs/toolkit";
import { eventsReducer } from "./Slices/events";

const rootReducer = combineReducers({
    events:eventsReducer
});

export default rootReducer