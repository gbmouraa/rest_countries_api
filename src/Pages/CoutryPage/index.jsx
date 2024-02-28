import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../../services/api";
import { ErrorMsg } from "../../components/ErrorMsg";
import { Loader } from "../../components/Loader.style";
import Coutry from "../../components/Coutry";

export default function CoutryInfo() {
  const { coutryName } = useParams();

  const [coutry, setCoutry] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchCountry() {
    setLoading(true);
    try {
      const fetch = await api.get(`name/${coutryName}`);
      const data = fetch.data[0];
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

  return <Coutry data={coutry} />;
}
