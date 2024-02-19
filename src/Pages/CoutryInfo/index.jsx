import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../../services/api";
import Header from "../../components/Header";
import { ErrorMsg } from "../../components/ErrorMsg";
import { Loader } from "../../components/Loader.style";

export default function CountryInfo() {
  const { coutryName } = useParams();
  const [country, setCountry] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function loadCountry(country, countryCodes = false) {
    if (!countryCodes) {
      formatCoutryData(country);
      return;
    }

    try {
      const data = await Promise.all(
        countryCodes.map(async (item) => {
          const response = await api.get(`alpha?codes=${item}`);
          return response.data[0].name.common;
        })
      );
      formatCoutryData(country, data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCountry() {
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

  useEffect(() => {
    async function loadData() {
      await fetchCountry();
    }
    loadData();
  }, []);

  function formatCoutryData(country, borderCountries = false) {
    const formatedCountry = {
      flag: country.flags.svg,
      alt: country.flags.alt,
      name: country.name.common,
      nativeName: Object.values(country.name.nativeName)[0].common,
      population: country.population.toLocaleString(),
      region: country.region,
      subRegion: country.subregion,
      capital: country.capital[0],
      topLevelDomain: country.tld[0],
      currencies: Object.keys(country.currencies).map(
        (currency) => country.currencies[currency].name
      ),
      languages: Object.keys(country.languages).map((lang) =>
        Object.values(country.languages[lang]).join("")
      ),
      borders: borderCountries,
    };

    setCountry(formatedCountry);
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
      {/* container */}
      <div>
        <button></button>
        {/* Country Wrapper */}
        <div>
          <figure>
            <img
              src={country.flag}
              alt={coutryName.alt}
              style={{ width: "200px" }}
            />
          </figure>
          {/* coutry info */}
          <div>
            {/* description */}
            <div>
              <h1>{country.name}</h1>
              <p>
                Native name: <span>{country.nativeName}</span>
              </p>
              <p>
                Population: <span>{country.population}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subRegion}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>
            {/* description */}
            <div>
              <p>
                Top Level Domain: <span>{country.topLevelDomain}</span>
              </p>
              <p>
                Currencies: <span>{country.currencies.join(", ")}</span>
              </p>
              <p>
                Languages: <span>{country.languages.join(", ")}</span>
              </p>
            </div>
            {/* border countries */}
            {country.borders && (
              <div>
                <p>Border Countries:</p>
                <div>
                  {country.borders.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
