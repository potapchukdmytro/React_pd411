import { combineReducers } from "@reduxjs/toolkit"
import { bookReducer } from "./bookReducer/bookReducer"

export const rootReducer = combineReducers({
    // наші редюсери
    // name: reducer
    book: bookReducer
})