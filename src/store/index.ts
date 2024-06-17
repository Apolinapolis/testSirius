import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import calendarReducer from './slices/CalendarSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        calendar: calendarReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>