import { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RestCountriesContext } from "../context/restCountries";
import Header from "../components/Header";
import InputGroup from "../components/InputGroup";
import Countries from "../components/Countries";
import { Pagination } from "@mui/material";

export default function Home() {
  const { fetchCountries, allCountries, currentPage, setCurrentPage } =
    useContext(RestCountriesContext);
  const { page } = useParams();

  const navigate = useNavigate();

  // const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [showPagination, setShowPagination] = useState(true);

  useEffect(() => {
    function loadPage() {
      fetchCountries("all");
      if (page) setCurrentPage(Number(page));
    }

    loadPage();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allCountries.slice(indexOfFirstItem, indexOfLastItem);

  function handlePagination(page) {
    setCurrentPage(Number(page));
    navigate(`/${page}`);
  }

  return (
    <>
      <Header />
      <InputGroup
        setCurrentPage={setCurrentPage}
        setShowPagination={setShowPagination}
      />
      <Countries currentCountries={currentItems} />
      {showPagination && (
        <Pagination
          count={10}
          shape="rounded"
          size="large"
          style={{ paddingBottom: "40px" }}
          page={currentPage}
          onChange={(event, value) => handlePagination(value)}
        />
      )}
    </>
  );
}
