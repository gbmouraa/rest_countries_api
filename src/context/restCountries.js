import { createContext, useState } from "react";

export const RestCountriesContext = createContext({});

export function RestCountriesProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("@restCountries") || "light";
  });

  return (
    <RestCountriesContext.Provider value={{ theme, setTheme }}>
      {children}
    </RestCountriesContext.Provider>
  );
}
