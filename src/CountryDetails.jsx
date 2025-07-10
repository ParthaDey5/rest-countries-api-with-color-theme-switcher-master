import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useTheme } from "./ThemeContext";
import Spinner from "./component/Spinner";
import { motion } from "framer-motion";


function CountryDetails() {
  const { darkMode, setDarkMode } = useTheme(); 
  const { name } = useParams(); 
  const isFirstLoadRef = useRef(true); // 👈 persists across renders
  const [country, setCountry] = useState(null);
  const [borderCountry, setborderCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    // fetch now respects BASE_URL for GitHub Pages
    
    const fetchData= ()=>{

      fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((data) => {
        const foundCountry = data.find((c) => c.name === name);
        setCountry(foundCountry);

        if (foundCountry?.borders) {
          const borders = data.filter((c) =>
            foundCountry.borders.includes(c.alpha3Code)
          );
          setborderCountry(borders.map((b) => b.name));
        } else {
          setborderCountry([]);
        }
        setIsLoading(false)
        isFirstLoadRef.current=false
      })  
    }
    if (isFirstLoadRef.current) {
      setIsLoading(true)
      setTimeout(() => 
        fetchData(), 800);
      } else {
        fetchData()
    }
  }, [name]);

  

  return (
    <div
      id="bg" 
      className={`max-w-screen min-h-screen transition-colors duration-400 ease-linear ${darkMode ? 'Blue950' : 'Grey50'}`}
    >
      <section className="sm:px-[5dvw] px-[10dvw] sm:py-16 pt-[6dvw]">
        <Link className="inline-flex w-auto" to="/">
          <button className="button-back hover:bg-red-600 hover:scale-111 transition-all duration-0 hover:duration-700 cursor-pointer sm:px-[2dvw] px-[5dvw] sm:py-[0.6dvw] py-[2.1dvw] rounded-[5%] nunito-sans-600 shadow-fluid flex items-center 2xl:gap-4 sm:gap-[1dvw] gap-[2dvw]">
            <i className="fa-solid fa-arrow-left-long"></i>Back
          </button>
        </Link>
        
      {isLoading?
      <div className={`w-full mt-12 flex justify-center`}>
        <Spinner />
      </div> :
      
        <motion.div
        key={name}
        initial={{ opacity: 0, y:30, filter: "blur(1rem)" }}
        animate={{ opacity: 1, y: -10, filter: "blur(0)" }}
        exit={{ opacity: 0, y: 30, filter: "blur(1rem)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex sm:!flex-row flex-col sm:items-center items-start justify-between sm:gap-[10dvw] gap-[8dvw] sm:mt-[6dvw] mt-[10dvw] ">
          <img
            className="sm:w-1/2 w-full sm:h-[27dvw] h-[60dvw] shadow-fluid"
            src={country.flags.png}
            alt={`Flag of ${country.name}`}
          />

          <div className="flex flex-col justify-between sm:w-1/2 w-full">
            <h1 className="nunito-sans-800 font-bold sm:mb-[1.4dvw] sm:mt-0 mb-[8dvw] mt-[8dvw]">
              {country.name}
            </h1>

            <div className="flex sm:flex-row flex-col 2xl:mb-14 xl:mb-10 lg:mb-8 md:mb-6 sm:mb-4 mb-8 justify-between sm:gap-[15dvw] gap-[14dvw]">
              <div className="sm:w-1/2 flex flex-col sm:gap-[0.2dvw] gap-[2.2dvw]">
                <p className="nunito-sans-600">
                  <strong className="nunito-sans-800 tracking-normal">
                    Native Name:
                  </strong>{" "}
                  {country.nativeName}
                </p>
                <p className="nunito-sans-600">
                  <strong className="nunito-sans-800 tracking-normal">
                    Population:
                  </strong>{" "}
                  {country.population}
                </p>
                <p className="nunito-sans-600">
                  <strong className="nunito-sans-800 tracking-normal">
                    Region:
                  </strong>{" "}
                  {country.region}
                </p>
                <p className="nunito-sans-600">
                  <strong className="nunito-sans-800 tracking-normal">
                    Sub Region:
                  </strong>{" "}
                  {country.subregion}
                </p>
                <p className="nunito-sans-600">
                  <strong className="nunito-sans-800 tracking-normal">
                    Capital:
                  </strong>{" "}
                  {country.capital}
                </p>
              </div>
              <div className="sm:w-1/2 flex flex-col sm:gap-[0.2dvw] gap-[2.2dvw]">
                <p className="nunito-sans-600 tracking-wide">
                  <strong className="nunito-sans-800 tracking-normal">
                    Top Level Domain:
                  </strong>{" "}
                  {country.topLevelDomain}
                </p>
                <p className="nunito-sans-600 tracking-wide">
                  <strong className="nunito-sans-800 tracking-normal">
                    Currencies:
                  </strong>{" "}
                  {country.currencies
                    ? country.currencies.map((e) => `${e.name} (${e.symbol})`).join(",")
                    : "None"}
                </p>
                <p className="nunito-sans-600 tracking-wide">
                  <strong className="nunito-sans-800 tracking-normal">
                    Languages:
                  </strong>{" "}
                  {country.languages.map((e) => e.name).join(", ")}
                </p>
              </div>
            </div>

            <p className="nunito-sans-600 sm:!hidden !block py-1 sm:mb-0 mb-[4dvw] whitespace-nowrap">
              <strong>Border Countries:</strong>
            </p>
            <div className="flex sm:!pb-0 !pb-5 gap-y-4">
              <p className="nunito-sans-600 sm:!block !hidden py-1 whitespace-nowrap mr-[1dvw]">
                <strong>Border Countries:</strong>{" "}
              </p>
              <div className="grid sm:grid-cols-4 grid-cols-3 sm:gap-[1dvw] gap-[4dvw] space-x-[5dvw]">
                {borderCountry?.length ? (
                  borderCountry.map((country) => {
                    const displayName = country.split(" (")[0];
                    return (
                      <Link
                        key={country}
                        to={`/country/${encodeURIComponent(country)}`}
                        className="flex w-full m-auto nunito-sans-600 shadow-fluid rounded-[2px] !p-0"
                      >
                        <button className="!w-full !h-full my-auto rounded-[2px] cursor-pointer text-center sm:px-[0.2dvw] px-[2dvw] sm:py-[0.1dvw] py-[1dvw] hover:scale-111 hover:bg-red-600 transform hover:duration-700">{displayName}</button>
                      </Link>
                    );
                  })
                ) : (
                  "None"
                )}
              </div>
            </div>
          </div>
        </motion.div>
    }
      </section>
    </div>
  );
}

export default CountryDetails;
