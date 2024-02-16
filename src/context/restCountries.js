import { createContext, useState } from "react";
import { api } from "../services/api";

export const RestCountriesContext = createContext({});

export function RestCountriesProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("@restCountries") || "light";
  });

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchCountries(query) {
    try {
      const fetchData = await api.get(`/${query}`);
      const response = fetchData.data;
      setCountries(response);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  return (
    <RestCountriesContext.Provider
      value={{ theme, setTheme, countries, loading, fetchCountries, error }}
    >
      {children}
    </RestCountriesContext.Provider>
  );
}
