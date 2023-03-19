import { createSlice } from "@reduxjs/toolkit";

const rainSlice = createSlice({
  name: "rain",
  initialState: false,
  reducers: {
    setRain(state) {
      return !state;
    },
  },
});

const { actions, reducer } = rainSlice;
export const { setRain } = actions;
export default reducer;
