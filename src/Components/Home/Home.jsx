import { useSelector } from 'react-redux'
import Header from '../Header/Header'
import Countries from '../countries/Countries'

export default function Home() {
  const countries = useSelector(state=> state.countries)

  return (
    <div>
      {
        countries.search || countries.error ? 
        <Countries />
        : 
        <Header />
      }
    </div>
  )
}
