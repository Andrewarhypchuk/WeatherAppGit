import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  forecast:[],
  status:''
}

export const setForecast =createAsyncThunk(
  "weatherForecast/setForecast",
  async (zipcode) => {
    try {    return await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&appid=5a4b2d457ecbef9eb2a71e480b947604`)
    .then(response => response.json())
    .then(response => response)
      
    } catch (error) {
      return  error.message
    }

  }
)
;

export const WeatherForecastSlice = createSlice({
  name: "weatherForecast",
  initialState,
  reducers: {
  },
   extraReducers: {
    [setForecast.pending]: (state, action) => {
      state.status = "loading";
    },
    [setForecast.fulfilled]: (state, action) => {
      if(action.payload.cod === '200') {
        state.forecast = action.payload
        state.status = "success"
      }else{
        state.status = "failed"
      }
    },
    [setForecast.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectForecast = (state) =>state.weatherForecast.forecast.list && state.weatherForecast.forecast.list.slice(0,5)

export const {setZipCode,deleteItem} = WeatherForecastSlice.actions;

export default WeatherForecastSlice.reducer;
