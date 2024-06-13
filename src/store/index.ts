import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import scheduleReducer from './slices/scheduleSlice';

export const store = configureStore({
    reducer: {
        schedule: scheduleReducer,
        user: userReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>