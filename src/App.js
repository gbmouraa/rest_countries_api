import { useContext } from "react";
import { RestCountriesContext } from "./context/restCountries";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyle from "../src/styles/global";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup";

function App() {
  const { theme } = useContext(RestCountriesContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <Header />
        <InputGroup />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
