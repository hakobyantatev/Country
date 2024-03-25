import { useEffect, useState } from "react";
import { useParams } from "react-router";
import './Country.scss'
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../features/countries/CountriesSlice";
import { IoIosArrowDown } from "react-icons/io";
import Countries from "../countries/Countries";
import classNames from "classnames";

export default function Country() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const countries = useSelector(state=> state.countries)
  const dipatch = useDispatch()
  const [flagEnable, setFlagEnable] = useState(false)
  const [currencyEnable, setCurrencyEnable] = useState(false)
  const [populationEnable, setPopulationEnable] = useState(false)
  const [capitalEnable, setCapitalEnable] = useState(false)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) { 
          setCountry(data[0]);
        } else {
          setCountry(null); 
        }
      })
      .catch(error => {
        console.error(error);
        setCountry(null);
      });
  }, [countryName]);

  useEffect(() => {
    dipatch(getCountries())
  }, [countries.search])
  
  if(countries.isPending){
    return(
      <div className="Countries">
        <div className="container">
          <h1>Pending...</h1>
        </div>
      </div>
    )
  }

  const activeFlag =() =>{
    setFlagEnable(!flagEnable)
  }

  const activeCurrency=() =>{
    setCurrencyEnable(!currencyEnable)
  }

  const activePopulation=() =>{
    setPopulationEnable(!populationEnable)
  }

  const activeCapital=() =>{
    setCapitalEnable(!capitalEnable)
  }

  return (
    <>
      {
        countries.search ? 
        <Countries/>
        :
        <div className="Country">
          <div className="container">
            {country ? (
              <div className="information">
                <div className="item" onClick={activeFlag}>
                  <div className="info">
                    <p>Flag</p>
                    <IoIosArrowDown/>
                  </div>
                  <div className={classNames('disable', {
                    active: flagEnable
                  })}>
                    <img src={country.flags.png} alt={country.flags.alt} />
                  </div>
                </div>
                <div className="item" onClick={activeCurrency}>
                  <div className="info">
                    <p>Currency</p>
                    <IoIosArrowDown/>
                  </div>
                  <div className={classNames('disable', {
                    active: currencyEnable
                  })}>
                    <p>
                      {
                        Object.values(country.currencies).map((currencie, index) => (
                        <span key={index}> {currencie.symbol}{currencie.name}  </span>
                        ))
                      }
                    </p>
                    </div>
                </div>
                <div className="item" onClick={activePopulation}>
                  <div className="info">
                    <p>Population</p>
                    <IoIosArrowDown/>
                  </div>
                  <div className={classNames('disable', {
                    active: populationEnable
                  })}>
                    <p>{country.population}</p>
                  </div>
                </div>
                <div className="item" onClick={activeCapital}>
                  <div className="info">
                    <p>Capital</p>
                    <IoIosArrowDown/>
                  </div>
                  <div className={classNames('disable', {
                    active: capitalEnable
                  })}>
                    <p><b>{country.capital}</b> is the capital city of <b>{country.name.common}:</b></p>
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading...</p> 
            )}
          </div>
    </div>
      }
    </>
  );
}




//Another version of information about countries

// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import './Country.scss'
// import { useDispatch, useSelector } from "react-redux";
// import { getCountries } from "../../features/countries/CountriesSlice";
// import Countries from "../countries/Countries";

// export default function Country() {
//   const { countryName } = useParams();
//   const [country, setCountry] = useState(null);
//   const countries = useSelector(state=> state.countries)
//   const dipatch = useDispatch()

//   useEffect(() => {
//     fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
//       .then(res => res.json())
//       .then(data => {
//         if (data.length > 0) { 
//           setCountry(data[0]);
//         } else {
//           setCountry(null); 
//         }
//       })
//       .catch(error => {
//         console.error(error);
//         setCountry(null);
//       });
//   }, [countryName]);

//   useEffect(() => {
//     dipatch(getCountries())
//   }, [countries.search])
  
//   if(countries.isPending){
//     return(
//       <div className="Countries">
//         <div className="container">
//           <h1>Pending...</h1>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <>
//       {
//         countries.search ? 
//         <Countries/>
//         :
//         <div className="Country">
//           <div className="container">
//             {country ? (
//               <>
//                 <h1>{country.name.common}</h1> 
//                 <div className="info">
//                   <div className="flag">
//                     <img src={country.flags.png} alt={country.flags.alt} />
//                     <p><b>{country.capital}</b> is the capital city of <b>{country.name.common}:</b></p>
//                   </div>
//                   <div className="infoCountry">
//                     {
//                       country.languages && <p><b>Languages:</b> 
//                       {
//                         Object.values(country.languages)?.map((language, index) => (
//                         <span key={index}> {language} </span>
//                         ))
//                       }
//                     </p>
//                     }
//                     {
//                       country.currencies && <p><b>Currencies:</b> 
//                       {
//                         Object.values(country.currencies).map((currencie, index) => (
//                         <span key={index}> {currencie.symbol}{currencie.name}  </span>
//                         ))
//                       }
//                     </p>
//                     }
//                     <p><b>Population:</b> {country.population}</p>
//                     {
//                       country.borders && <p><b>Neighboring countries:</b>
//                       {country.borders?.map((border, index) =>(
//                         <span key={index}>{border} </span>
//                       ))}
//                     </p>
//                     }
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <p>Loading...</p> 
//             )}
//           </div>
//     </div>
//       }
//     </>
//   );
// }