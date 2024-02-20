import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import Header from "../../components/Header";
import { ErrorMsg } from "../../components/ErrorMsg";
import { Loader } from "../../components/Loader.style";
import {
  Container,
  Button,
  CoutryWrapper,
  CoutryFlag,
  CoutryInfos,
  DescriptionsWrapper,
  Description,
  BorderCountries,
} from "./CountryInfo.style";
import { Title } from "../../components/Title.style";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function CoutryInfo() {
  const { coutryName } = useParams();
  const navigate = useNavigate();

  const [coutry, setCoutry] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchCountry() {
    setLoading(true);
    try {
      const fetchData = await api.get(`name/${coutryName}`);
      const data = fetchData.data[0];
      data.borders
        ? await loadCountry(data, data.borders)
        : await loadCountry(data);
      setError(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  // countryCodes é os codigos dos países que fazem fronteira, ex Brasil = 'BRA'
  async function loadCountry(coutry, countryCodes = false) {
    if (!countryCodes) {
      formatCoutryData(coutry);
      return;
    }

    try {
      const data = await Promise.all(
        countryCodes.map(async (item) => {
          const response = await api.get(`alpha?codes=${item}`);
          return response.data[0].name.common;
        })
      );
      formatCoutryData(coutry, data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function loadData() {
      await fetchCountry();
    }
    loadData();
  }, [coutryName]);

  function formatCoutryData(coutry, borderCountries = false) {
    const formatedCountry = {
      flag: coutry.flags.svg,
      alt: coutry.flags.alt,
      name: coutry.name.common,
      nativeName: Object.values(coutry.name.nativeName)[0].common,
      population: coutry.population.toLocaleString(),
      region: coutry.region,
      subRegion: coutry.subregion,
      capital: coutry.capital[0],
      topLevelDomain: coutry.tld[0],
      currencies: Object.keys(coutry.currencies).map(
        (currency) => coutry.currencies[currency].name
      ),
      languages: Object.keys(coutry.languages).map((lang) =>
        Object.values(coutry.languages[lang]).join("")
      ),
      borders: borderCountries,
    };

    setCoutry(formatedCountry);
    setLoading(false);
  }

  if (error) {
    return (
      <ErrorMsg>
        Sorry, something went wrong, go back to the <Link to="/">home</Link>{" "}
        page.
      </ErrorMsg>
    );
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Container>
        <Button onClick={() => navigate("/")}>
          <FaArrowLeftLong /> Back
        </Button>
        <CoutryWrapper>
          <CoutryFlag>
            <img src={coutry.flag} alt={coutryName.alt} />
          </CoutryFlag>
          <CoutryInfos>
            <DescriptionsWrapper>
              <Title size="2.4" className="coutry-name">
                {coutry.name}
              </Title>
              <Description>
                Native name: <span>{coutry.nativeName}</span>
              </Description>
              <Description>
                Population: <span>{coutry.population}</span>
              </Description>
              <Description>
                Region: <span>{coutry.region}</span>
              </Description>
              <Description>
                Sub Region: <span>{coutry.subRegion}</span>
              </Description>
              <Description>
                Capital: <span>{coutry.capital}</span>
              </Description>
            </DescriptionsWrapper>
            <DescriptionsWrapper>
              <Description>
                Top Level Domain: <span>{coutry.topLevelDomain}</span>
              </Description>
              <Description>
                Currencies: <span>{coutry.currencies.join(", ")}</span>
              </Description>
              <Description>
                Languages: <span>{coutry.languages.join(", ")}</span>
              </Description>
            </DescriptionsWrapper>
            {coutry.borders && (
              <BorderCountries className="border-countries">
                <p>Border Countries:</p>
                <div>
                  {coutry.borders.map((item) => (
                    <Button
                      key={item}
                      className="border-labels"
                      onClick={() =>
                        navigate(`/coutry/${encodeURIComponent(item)}`)
                      }
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </BorderCountries>
            )}
          </CoutryInfos>
        </CoutryWrapper>
      </Container>
    </>
  );
}
