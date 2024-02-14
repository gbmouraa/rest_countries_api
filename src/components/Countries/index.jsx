import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  CountriesContainer,
  CountriesWrapper,
  Country,
  CountryFlag,
  CountryDescription,
  Description,
} from "./Countries.style";

import { Title } from "../Title.style";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCountries() {
      try {
        const fetchData = await api.get("/all");
        setCountries(fetchData.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    loadCountries();
  }, []);

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
                Population: <span>{item.population}</span>
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
