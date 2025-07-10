import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import Spinner from "./component/Spinner";
import {motion} from "framer-motion"

function App() {
  const { darkMode, setDarkMode } = useTheme();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    
      // ← fetch now uses Vite’s BASE_URL so it works in GitHub Pages subpath
      
      setTimeout(() => {
        fetch(`${import.meta.env.BASE_URL}data.json`)
          .then((res) => res.json())
          .then((data) => {
            setCountries(data);
            sessionStorage.setItem("countries", JSON.stringify(data));
            setLoading(false);
          })
      }, 800);
      
    }, []);

    useEffect(() => {
      setIsOpen(false); // Close dropdown when mode changes
    }, [darkMode]);
    

  const showRegion = (region) => {
   setTimeout(() => {
     setSelectedRegion(region);
    }, 300); 
  };

  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdownMenu");
    setIsOpen(prev => !prev);

  };

  

  
  const filteredCountries = countries.filter(
    (i) =>
      (selectedRegion === "All Regions" || i.region === selectedRegion) &&
      i.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  return (
    <>
      <div
        className={`min-w-screen min-h-[1024px] overflow-x-hidden transition-all duration-400 ease-linear ${
          darkMode ? "Blue950" : "Grey50"
        }`}
      >
        <section className="sm:py-[3.5dvw] py-[8dvw] sm:px-[5dvw] px-[5dvw] w-full h-full">
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-[11dvw] sm:mb-0 mb-[11dvw] justify-between">
            <div className="relative">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  id="country_select"
                  type="text"
                  placeholder="Search for a country..."
                  className={`sm:pl-[4dvw] pl-[15dvw] shadow-fluid sm:w-[30dvw] w-full sm:h-[3.5dvw]  h-[12dvw]  ${
                    darkMode
                      ? "Blue950 input-light"
                      : "Grey50 input-dark"
                  } rounded nunito-sans-300  transition-colors duration-400 ease-linear input-placeholder-size !my-auto`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i
                  className={`absolute sm:left-[2dvw] left-[7dvw] sm:top-[1.8dvw] top-[5.8dvw] transform -translate-y-1/2 fa fa-search ${
                    darkMode ? "text-white" : "Grey200"
                  }`}
                ></i>
              </form>
            </div>

            <div className="sm:w-[12dvw] w-[50dvw] relative">
              <button
                onClick={toggleDropdown}
                className={`nunito-sans-600 cursor-pointer w-full sm:h-[3.5dvw] h-[14dvw] small-text shadow-fluid sm:px-[1.2dvw] px-[4dvw] flex items-center transition-colors duration-400 ease-linear justify-between rounded ${
                  darkMode ? "Blue950" : "Grey50"
                }`}
              >
                Filter by Region <i id="fa-chevron" className={`fa fa-chevron-down transition-transform duration-300 ease small-text ${isOpen ? ('rotate-180') : 'rotate-0'}`}></i>
              </button>
              {}
              <div
                id="dropdownMenu"
                className={`${isOpen ? 'dropdown-open' : 'dropdown-closed'
                } nunito-sans-600 transition-all duration-400 ease-linear sm:py-[1dvw] py-[3dvw] shadow-fluid rounded absolute w-full mt-2 z-30 ${
                  darkMode ? "Blue950" : "Grey50"
                }`}
              >
                {[
                  "All Regions",
                  "Africa",
                  "Americas",
                  "Asia",
                  "Europe",
                  "Oceania",
                ].map((region) => (
                  <button
                    key={region}
                    type="button"
                    onClick={() => {
                      showRegion(region);
                      document
                        .getElementById("dropdownMenu")
                        ?.classList.add("hidden");
                        setIsOpen(false);
                    }}
                    className={`cursor-pointer region_button small-text w-full block text-left px-5 py-1 ${
                      darkMode ? "hover:bg-gray-300" : "hover:bg-gray-100"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <main className="!mt-[3.5dvw] sm:px-0 px-[4dvw]">
            {loading? <div className="w-full flex flex-grow justify-center"><Spinner/></div> :
            
              !loading && filteredCountries.length === 0 && searchQuery.length > 0 ? (
                <div className="w-full text-center">
                <i className="fa fa-search-location text-gray-400"></i>
                <h1 className="nunito-sans-800 whitespace-nowrap">
                  No country found!
                </h1>
                <p className="text-gray-400">
                  Try adjusting your search or check your selected region.
                </p>
                </div>
              ) : <motion.div
              key={selectedRegion}  // 👈 triggers re-render on region change
              initial={{ opacity: 0, y:30, filter: "blur(1rem)" }}
        animate={{ opacity: 1, y: -10, filter: "blur(0)" }}
        exit={{ opacity: 0, y: 30, filter: "blur(1rem)" }}
        transition={{ duration: 1, ease: "easeOut" }}
              id="countries"
              className="grid sm:grid-cols-4 grid-cols-1 sm:gap-[7dvw] gap-[15dvw]"
            >
                {filteredCountries.map((i) => (
                  /* ← Link is now relative so basename handles the prefix */
                  <div>
                  <Link
                    key={i.name}
                    to={`country/${encodeURIComponent(i.name)}`}
                    >
                    <div className="w-full shadow-custom flex flex-col rounded-md opacity-0 animate-fade-in hover:scale-105 transition-transform duration-500 ease-linear">
                      <img
                        className="sm:h-[11dvw] h-[54dvw] rounded-t-md"
                        src={i.flags.png}
                        alt={`Flag of ${i.name}`}
                      />
                      <h4 className="!transition-none nunito-sans-900 pl-5 pt-5">
                        {i.name}
                      </h4>
                      <p className="!transition-none nunito-sans-800 small-text pl-5 pt-3">
                        <strong>Population:</strong>{" "}
                        <span className="prc opacity-65">{i.population}</span>
                      </p>
                      <p className="!transition-none nunito-sans-800 small-text pl-5 pt-1">
                        <strong>Region:</strong>{" "}
                        <span className="prc opacity-65">{i.region}</span>
                      </p>
                      <p className="!transition-none nunito-sans-800 small-text pl-5 pt-1 pb-9">
                        <strong>Capital:</strong>{" "}
                        <span className="prc opacity-65">{i.capital}</span>
                      </p>
                    </div>
                  </Link>
                </div>
                ))
                }
            </motion.div>}
          </main>
        </section>
      </div>
    </>
  );
}

export default App;
