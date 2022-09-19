import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  zipcode:'',
  status:''
}

export const addItem =createAsyncThunk(
  "currentWeatherItems/addItem",
  async (zipcode) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=5a4b2d457ecbef9eb2a71e480b947604`)
    .then(response => response.json())
    .then(response => response)
  }
)
;

export const CurrentWeatherItemsSlice = createSlice({
  name: "currentWeatherItems",
  initialState,
  reducers: {
    setListFromLocalStorage:(state,action)=>{
         state.items = action.payload
    },
    deleteItem: (state, action) => {
      localStorage.setItem('list',JSON.stringify(state.items.filter((item,index) => index !== action.payload)))
      return { ...state, items: [...state.items.filter((item,index) => index !== action.payload)] }
     },
    setZipCode: (state, action) => {
      state.zipcode = action.payload
    }
  },
   extraReducers: {
    [addItem.pending]: (state, action) => {
      state.status = "loading";
    },
    [addItem.fulfilled]: (state, action) => {
      if(action.payload.cod ===200) {
        action.payload.zipcode = state.zipcode
        state.items.unshift(action.payload) 
        localStorage.setItem('list',JSON.stringify(state.items))
        state.status = "success"
        state.zipcode = ''
      }else{
        state.zipcode = ''
        state.status = "failed"
      }
    },
    [addItem.rejected]: (state, action) => {
      state.zipcode = ''
      state.status = "failed";
    },
  },
});

export const selectItems = (state) => state.currentWeatherItems.items;
export const selectZipCode = (state) => state.currentWeatherItems.zipcode;
export const selectStatus = (state) => state.currentWeatherItems.status;

export const {setZipCode,deleteItem ,setListFromLocalStorage} = CurrentWeatherItemsSlice.actions;

export default CurrentWeatherItemsSlice.reducer;
