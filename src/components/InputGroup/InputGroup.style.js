import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const InputGroupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 140rem;
  flex-wrap: wrap;
  row-gap: 3.4rem;
  margin-top: 2.8rem;

  .search-area {
    width: 100%;
    max-width: 48rem;
  }
`;

export const SearchBar = styled.label`
  display: flex;
  padding: 1.6rem 2rem 1.6rem 2.6rem;
  width: 100%;
  background-color: ${({ theme }) => theme.element_bg};
  box-shadow: 0px 2px 4px ${({ theme }) => theme.element_shadow};
  border-radius: 0.4rem;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.icon_search};
    margin-right: 2.6rem;
  }
`;

export const InputSearch = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: #ccc;
    font-weight: 400;
  }
`;

export const DropDownMenu = styled.div`
  width: 20rem;

  ul {
    height: ${({ active, height }) => (active ? height : "0rem")};
    z-index: 999;
    width: 20rem;
  }

  p {
    svg {
      transform: ${({ active }) => active && "rotate(180deg)"};
    }
  }
`;

export const Label = styled.p`
  background-color: ${({ theme }) => theme.element_bg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.4rem;
  padding: 1.2rem 2.2rem;
  width: 20rem;
  box-shadow: 0px 2px 4px ${({ theme }) => theme.element_shadow};
  font-weight: 600;
  cursor: pointer;

  svg {
    transition: all 0.3s ease;
  }
`;

export const FiltersList = styled.ul`
  list-style: none;
  background-color: ${({ theme }) => theme.element_bg};
  margin-top: 0.8rem;
  border-radius: 0.4rem;
  box-shadow: 0px 2px 4px ${({ theme }) => theme.element_shadow};
  overflow: hidden;
  height: 0rem;
  transition: all 0.3s ease;
  position: absolute;
  width: 100%;
`;

export const Filter = styled.li`
  font-weight: 600;
  padding: 1.2rem 2.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.hover_menu};
  }
`;
