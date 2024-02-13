import { useRef, useState } from "react";
import {
  InputGroupWrapper,
  InputSearch,
  FiltersSection,
  DropDownMenu,
  SearchBar,
  Label,
  FiltersList,
  Filter,
} from "./InputGroup.style";
import { IoMdSearch, IoIosArrowDown } from "react-icons/io";

function InputGroup() {
  const searchRef = useRef(null);
  const [menuActive, setMenuActive] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [sortFilter, setSortFilter] = useState("");

  const regionsList = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];
  const sortList = ["Population", "Name"];

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
                onClick={(e) => setRegionFilter(e.currentTarget.innerText)}
              >
                {item}
              </Filter>
            ))}
          </FiltersList>
        </DropDownMenu>

        <DropDownMenu
          id="sort"
          active={menuActive === "sort"}
          height="9.2rem"
          onClick={(e) => handleDropDownMenu(e.currentTarget.id)}
        >
          <Label style={{ width: "14.6rem" }}>
            {sortFilter === "" ? "Sort" : sortFilter}
            <IoIosArrowDown />
          </Label>
          <FiltersList>
            {sortList.map((item, idx) => (
              <Filter
                key={idx}
                onClick={(e) => setSortFilter(e.currentTarget.innerText)}
              >
                {item}
              </Filter>
            ))}
          </FiltersList>
        </DropDownMenu>
      </FiltersSection>
    </InputGroupWrapper>
  );
}

export default InputGroup;
