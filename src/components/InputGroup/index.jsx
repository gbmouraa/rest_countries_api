import { useRef, useState } from "react";
import {
  InputGroupWrapper,
  InputSearch,
  FiltersSection,
  SearchBar,
  DropDownMenu,
  Label,
  FiltersList,
  Filter,
} from "./InputGroup.style";
import { IoMdSearch, IoIosArrowDown } from "react-icons/io";

function InputGroup() {
  const searchRef = useRef(null);
  const [menuActive, setMenuActive] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const query = searchRef.current.value;

    if (query !== null && query !== "") {
      console.log(query);
    }
  }

  function handleDropDownMenu(menuID) {
    setMenuActive((prevState) => (prevState === menuID ? "" : menuID));
  }

  return (
    <InputGroupWrapper>
      <form onSubmit={handleSubmit}>
        <SearchBar htmlFor="search">
          <IoMdSearch size={24} />
          <InputSearch
            ref={searchRef}
            id="search"
            placeholder="Search for a country..."
          />
        </SearchBar>
      </form>

      <FiltersSection>
        <DropDownMenu
          id="region"
          active={menuActive === "region"}
          onClick={(e) => handleDropDownMenu(e.currentTarget.id)}
        >
          <Label>
            {regionFilter === "All" || regionFilter === ""
              ? "Filter by Region"
              : regionFilter}
            <IoIosArrowDown />
          </Label>
          <FiltersList>
            <Filter onClick={(e) => setRegionFilter(e.currentTarget.innerText)}>
              All
            </Filter>
            <Filter onClick={(e) => setRegionFilter(e.currentTarget.innerText)}>
              Africa
            </Filter>
            <Filter onClick={(e) => setRegionFilter(e.currentTarget.innerText)}>
              America
            </Filter>
            <Filter onClick={(e) => setRegionFilter(e.currentTarget.innerText)}>
              Asia
            </Filter>
            <Filter onClick={(e) => setRegionFilter(e.currentTarget.innerText)}>
              Europe
            </Filter>
            <Filter onClick={(e) => setRegionFilter(e.currentTarget.innerText)}>
              Oceania
            </Filter>
          </FiltersList>
        </DropDownMenu>
      </FiltersSection>
    </InputGroupWrapper>
  );
}

export default InputGroup;
