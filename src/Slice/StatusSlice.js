import { createSlice } from "@reduxjs/toolkit";
const today = new Date();
const initialState = today.getHours() < 18 ? "true" : "false";

const statusSlice = createSlice({
  name: "status",
  initialState: initialState,
  reducers: {
    setStatus(state) {
      return !state;
    },
  },
});

const { actions, reducer } = statusSlice;
export const { setStatus } = actions;
export default reducer;
