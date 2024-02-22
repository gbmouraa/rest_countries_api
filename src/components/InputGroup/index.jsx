import { useState, useContext } from "react";
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

function InputGroup() {
  const { fetchCountries, filterByRegion } = useContext(RestCountriesContext);

  const [menuActive, setMenuActive] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const regionsList = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

  function handleDropDownMenu(menuID) {
    setMenuActive((prevState) => (prevState === menuID ? "" : menuID));
  }

  function handleSearch(query) {
    if (query.trim() === "") {
      fetchCountries("all");
      return;
    }

    fetchCountries(`name/${query}`);
  }

  function handleFilter(filter) {
    setRegionFilter(filter);
    filterByRegion(filter);
  }

  return (
    <Container>
      <InputGroupWrapper>
        <div className="search-area">
          <SearchBar htmlFor="search">
            <IoMdSearch size={24} />
            <InputSearch
              onChange={(e) => handleSearch(e.target.value)}
              id="search"
              placeholder="Search for a country..."
            />
          </SearchBar>
        </div>

        <DropDownMenu
          id="region"
          active={menuActive === "region"}
          height="27.6rem"
          onClick={(e) => handleDropDownMenu(e.currentTarget.id)}
        >
          <Label>
            {regionFilter === "All" || regionFilter === ""
              ? "Filter by Region"
              : regionFilter}
            <IoIosArrowDown />
          </Label>
          <FiltersList>
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
