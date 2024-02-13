import { useContext } from "react";
import { RestCountriesContext } from "./context/restCountries";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyle from "../src/styles/global";
import AppRouter from "./routes";

function App() {
  const { theme } = useContext(RestCountriesContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppRouter />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
