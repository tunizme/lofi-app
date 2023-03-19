import { createSlice } from "@reduxjs/toolkit";

const muteAllSlice = createSlice({
  name: "muteall",
  initialState: false,
  reducers: {
    setMuteAll(state) {
      return !state;
    },
  },
});

const { actions, reducer } = muteAllSlice;
export const { setMuteAll } = actions;
export default reducer;
