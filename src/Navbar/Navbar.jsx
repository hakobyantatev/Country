import {Link} from 'react-router-dom'
import "./Navbar.scss"
import { useDispatch, useSelector } from 'react-redux'
import {  getCountries, searchCountry } from '../features/countries/CountriesSlice'
import { useEffect } from 'react'

export default function Navbar() {
  const countries = useSelector(state=> state.countries)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
  }, [countries.search])

  const handleChange =(e) => {
    dispatch(searchCountry({country: e.target.value}))
  }

  return (
    <nav>
      <div className="container">
        <div className="logo">
        <ul>
          <li>
            <Link to="/">Logo</Link>
          </li>
        </ul>
        </div>
        <div className="search">
          <input type="text" placeholder='Search for Country' onChange={handleChange} value={countries.search}/>
          <ul>
            <li>
              <Link to="#">
                <button>Search</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
