import { combineReducers } from "@reduxjs/toolkit";
import { defaultNameReducer } from "./Slices/test";

const rootReducer = combineReducers({
    test:defaultNameReducer
});

export default rootReducer