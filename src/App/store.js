import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "../Slice/StatusSlice";
import weatherReducer from "../Slice/WeatherSlice";
import rainReducer from "../Slice/RainSlice";
import muteAllReducer from "../Slice/MuteAllSlice";
const rootReducer = {
  status: statusReducer,
  weather: weatherReducer,
  rain: rainReducer,
  muteall: muteAllReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
