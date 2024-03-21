import { configureStore } from '@reduxjs/toolkit';
import CountriesSlice from '../features/countries/CountriesSlice'


const store =configureStore({
  reducer:{
    countries: CountriesSlice
  }
})

export default store