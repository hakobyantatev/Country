import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const inittialStateValue = {
  data: [],
  filtered: [],
  isPending: false,
  search: ""
}

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  () => {
    return fetch("https://restcountries.com/v3.1/all?fields=name,name")
    .then(res => res.json())
    .then(data => data)
  }
)

export const countriesSlice = createSlice({
  name: "countries",
  initialState: inittialStateValue,
  reducers:{
    searchCountry(state, action){
      state.search = action.payload.country
      state.filtered = state.data.filter(country => 
        country.name.common.toLowerCase().includes(state.search.toLowerCase()))
    },
    resetInput(state){
      state.search = ""
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getCountries.pending, (state) => {
      state.isPending = true;
      state.status = "pending"
    })
    .addCase(getCountries.fulfilled, (state, action) => {
      return {...state, 
        status: "success",
        isPending: false,
        data: action.payload,
      }
    })
    .addCase(getCountries.rejected, (_, action) => {
      return {
        isPending: false,
        status: "failure",
        data: [],
        filtered: [],
        error: action.error
      }
    })
  }
})

export default countriesSlice.reducer
export const {searchCountry, resetInput} = countriesSlice.actions