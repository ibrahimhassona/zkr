"use client";
import { configureStore } from "@reduxjs/toolkit";
import prayerTimesReducer from './slices/prayerTimesSlice'; // Make sure to adjust the import path

export const store = configureStore({
  reducer: {
    prayerTimes: prayerTimesReducer,
  },
});
