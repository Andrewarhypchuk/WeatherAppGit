import { configureStore } from "@reduxjs/toolkit";
import currentWeatherItemsReducer from "./currentWeatherItems-reducer";
import weatherForecastReducer from "./weatherForecast-reducer";

const store = configureStore({
  reducer: {
  currentWeatherItems:currentWeatherItemsReducer,
  weatherForecast:weatherForecastReducer
  },
});
export default store;
