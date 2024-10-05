import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    hotels: [],
    hotel: {},
    loading: false,
    error: null,
    };

const hotelSlice = createSlice({
    name: "hotels",
    initialState,
    reducers: {
        setHotels: (state, action) => {
            state.hotels = action.payload;
        },
        
        getHotel: (state, action) => {
            state.hotel = state.hotels.find((hotel) => hotel.id === action.payload);
        }
    },
});

export const { setHotels, getHotel } = hotelSlice.actions;
export default hotelSlice.reducer;