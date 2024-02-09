import { createContext, useState } from "react";

export const RestCountriesContext = createContext({});

export function RestCountriesProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <RestCountriesContext.Provider value={{ theme, setTheme }}>
      {children}
    </RestCountriesContext.Provider>
  );
}
