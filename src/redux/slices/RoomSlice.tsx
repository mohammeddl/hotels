import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  room: {},
  loading: false,
  error: null,
};

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    getRoom: (state, action) => {
      state.room = state.rooms.find((room) => room.id === action.payload);
    },
    addRoom: (state, action) => {
      state.rooms.push(action.payload);
    },
    deleteRoom: (state, action) => {
      state.rooms = state.rooms.filter((room) => room.id !== action.payload);
    },
  },
});

export const { setRooms, getRoom, addRoom, deleteRoom } = roomSlice.actions;
export default roomSlice.reducer;
