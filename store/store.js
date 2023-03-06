import { configureStore } from "@reduxjs/toolkit";
import expencesReducer from "./expenses";



export const store = configureStore({
    reducer: {
        expenses: expencesReducer
    }
})