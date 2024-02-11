import { useContext, useEffect } from "react";
import { RestCountriesContext } from "../../context/restCountries";
import { HeaderWrapper, ThemeSwitcher, HeaderContainer } from "./Header.style";
import { Title } from "../Title.style";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";

export default function Header() {
  const { theme, setTheme } = useContext(RestCountriesContext);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    localStorage.setItem("@restCountries", theme);
  }, [theme]);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Title size="2">Where in the world?</Title>
        <ThemeSwitcher onClick={toggleTheme}>
          {theme === "light" ? (
            <>
              <FiMoon color="#111517" />
              <span>Dark Mode</span>
            </>
          ) : (
            <>
              <IoSunnyOutline color="#ffffff" />
              <span>Light Mode</span>
            </>
          )}
        </ThemeSwitcher>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
