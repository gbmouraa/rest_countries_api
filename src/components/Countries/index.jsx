import { useContext } from "react";
import { RestCountriesContext } from "../../context/restCountries";
import {
  CountriesContainer,
  CountriesWrapper,
  Country,
  CountryFlag,
  CountryDescription,
  Description,
  ErrorMsg,
} from "./Countries.style";
import { Loader } from "../Loader.style";

import { Title } from "../Title.style";

function Countries() {
  const { countries, loading, error } = useContext(RestCountriesContext);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorMsg>
        Sorry, no country found. <span>&#128546;</span>
      </ErrorMsg>
    );
  }

  return (
    <CountriesContainer>
      <CountriesWrapper>
        {countries.map((item, idx) => (
          <Country key={idx}>
            <CountryFlag>
              <img src={item.flags.svg} alt={item.flags.alt} />
            </CountryFlag>
            <CountryDescription>
              <Title size="1.8" className="country-name">
                {item.name.common}
              </Title>
              <Description>
                Population:{" "}
                <span>{item.population.toLocaleString("pt-BR")}</span>
              </Description>
              <Description>
                Region: <span>{item.region}</span>
              </Description>
              <Description>
                Capital: <span>{item.capital}</span>
              </Description>
            </CountryDescription>
          </Country>
        ))}
      </CountriesWrapper>
    </CountriesContainer>
  );
}

export default Countries;
