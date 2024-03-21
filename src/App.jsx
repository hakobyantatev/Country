import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from 'react-router-dom'
import Layouts from './Components/Layouts/Layouts'
import Home from './Components/Home/Home'
import Country from './Components/Country/Country'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts/>}>
        <Route index element={<Home />}/>
        <Route path="country/:countryName" element={<Country/>}/>
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
