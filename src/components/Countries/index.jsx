import { useContext, useState } from "react";
import { RestCountriesContext } from "../../context/restCountries";
import {
  CountriesContainer,
  CountriesWrapper,
  Country,
  CountryFlag,
  CountryDescription,
  Description,
} from "./Countries.style";
import { ErrorMsg } from "../ErrorMsg";
import { Loader } from "../Loader.style";

import { Title } from "../Title.style";

function Countries() {
  const { allCountries, loading, error } = useContext(RestCountriesContext);

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
        {allCountries.map((item, idx) => (
          <Country
            key={idx}
            to={`coutry/${encodeURIComponent(item.name.common)}`}
          >
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
