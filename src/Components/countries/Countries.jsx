import { useDispatch, useSelector } from 'react-redux'
import './Countries.scss'
import { Link } from 'react-router-dom'
import { resetInput } from '../../features/countries/CountriesSlice'

export default function Countries() {
  const countries = useSelector(state=> state.countries)
  const dispatch=useDispatch()
  

  if(countries.error){
    return(
      <div className="Countries">
        <div className="container">
          <h1>{countries.error.message}</h1>
        </div>
      </div>
    )
  }

  if(countries.isPending){
    return(
      <div className="Countries">
        <div className="container">
          <h1>Pending...</h1>
        </div>
      </div>
    )
  }

  const handleClick =() =>{
    dispatch(resetInput())
  }

  return (
    <div className='Countries'>
      <div className="container">
        {
          countries.filtered.length > 0 ?
          countries.filtered.map(country => {
            return(
              <Link onClick={handleClick} to={`/country/${country.name?.common}`} key={country.name?.common} >
                {country.name?.common}
              </Link>
            )
          })
          :
          <h1>Not found!!!</h1>
        }
      </div>
    </div>
  )
}