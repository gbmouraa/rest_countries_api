import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RestCountriesContext } from "../../context/restCountries";
import {
  InputGroupWrapper,
  InputSearch,
  DropDownMenu,
  SearchBar,
  Label,
  FiltersList,
  Filter,
  Container,
} from "./InputGroup.style";
import { IoMdSearch, IoIosArrowDown } from "react-icons/io";

function InputGroup({ setShowPagination }) {
  const {
    fetchCountries,
    setCurrentPage,
    currentPage,
    regionFilter,
    setRegionFilter,
  } = useContext(RestCountriesContext);

  const navigate = useNavigate();

  const [menuActive, setMenuActive] = useState("");
  const regionsList = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

  function handleDropDownMenu(menuID) {
    setMenuActive((prevState) => (prevState === menuID ? "" : menuID));
  }

  function handleSearch(query) {
    if (query.trim() === "") {
      fetchCountries("all");
      setShowPagination(true);
      navigate(`/${currentPage}`);
      return;
    }

    fetchCountries(`name/${query}`);
    setShowPagination(false);
    setCurrentPage(1);
  }

  function handleFilter(filter) {
    setCurrentPage(1);
    setRegionFilter(filter);
    navigate(`/1`);
  }

  return (
    <Container>
      <InputGroupWrapper>
        <div className="search-area">
          <SearchBar htmlFor="search" className="default-shadow">
            <IoMdSearch size={24} />
            <InputSearch
              onChange={(e) => handleSearch(e.target.value)}
              id="search"
              placeholder="Search for a country..."
              autoComplete="off"
            />
          </SearchBar>
        </div>

        <DropDownMenu
          id="region"
          active={menuActive === "region"}
          height="27.6rem"
          onClick={(e) => handleDropDownMenu(e.currentTarget.id)}
        >
          <Label className="default-shadow">
            {regionFilter === "All" ? "Filter by Region" : regionFilter}
            <IoIosArrowDown />
          </Label>
          <FiltersList className="default-shadow">
            {regionsList.map((item, idx) => (
              <Filter
                key={idx}
                onClick={(e) => handleFilter(e.currentTarget.innerText)}
              >
                {item}
              </Filter>
            ))}
          </FiltersList>
        </DropDownMenu>
      </InputGroupWrapper>
    </Container>
  );
}

export default InputGroup;
