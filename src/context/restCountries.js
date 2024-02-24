import { createContext, useState } from "react";
import { api } from "../services/api";

export const RestCountriesContext = createContext({});

export function RestCountriesProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("@restCountries") || "light";
  });

  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchCountries(query) {
    try {
      const fetchData = await api.get(`/${query}`);
      const data = fetchData.data;
      setAllCountries(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  async function filterByRegion(region) {
    if (region === "All") {
      await fetchCountries("all");
      return;
    }

    await fetchCountries(`region/${region}`);
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
        filterByRegion,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </RestCountriesContext.Provider>
  );
}
