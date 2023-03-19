import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: false,
  reducers: {
    setWeather(state) {
      return !state;
    },
  },
});

const { actions, reducer } = weatherSlice;
export const { setWeather } = actions;
export default reducer;
