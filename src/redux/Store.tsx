import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./slices/RoomSlice";
import hotelsReducer from "./slices/HotelSlice"; 
import userReducer from "./slices/userSlice";   

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    hotels: hotelsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
