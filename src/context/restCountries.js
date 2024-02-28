import { createContext, useState } from "react";
import { api } from "../services/api";

export const RestCountriesContext = createContext({});

export function RestCountriesProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("@restCountries") || "light";
  });

  const [allCountries, setAllCountries] = useState([]);
  const [regionFilter, setRegionFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchCountries(query) {
    try {
      const fetch = await api.get(`/${query}`);
      const data = fetch.data;
      setAllCountries(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  return (
    <RestCountriesContext.Provider
      value={{
        theme,
        setTheme,
        allCountries,
        loading,
        fetchCountries,
        error,
        currentPage,
        setCurrentPage,
        regionFilter,
        setRegionFilter,
      }}
    >
      {children}
    </RestCountriesContext.Provider>
  );
}
