import { createSlice } from "@reduxjs/toolkit";

const initialState = { pray: { name: "", time: "" } };

const prayerTimesReducer = createSlice({
  name: "prayerTimesReducer",
  initialState,
  reducers: {
    setCurrentPrayer: (state, action) => {
      // Ensure the time is stored as a string (ISO format)
      state.pray = {
        name: action.payload.name,
        time: action.payload.time, 
      };
    },
  },
});

// Export the action creator
export const { setCurrentPrayer } = prayerTimesReducer.actions;

// Export the reducer
export default prayerTimesReducer.reducer;
