import { useEffect, useContext } from "react";
import { RestCountriesContext } from "../context/restCountries";
import Header from "../components/Header";
import InputGroup from "../components/InputGroup";
import Countries from "../components/Countries";

export default function Home() {
  const { fetchCountries } = useContext(RestCountriesContext);

  useEffect(() => {
    fetchCountries("all");
  }, []);

  return (
    <>
      <Header />
      <InputGroup />
      <Countries />
    </>
  );
}
