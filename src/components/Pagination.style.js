import styled from "styled-components";
import { Pagination } from "@mui/material";

export const CustomizedPagination = styled(Pagination)`
  ul li button,
  ul li div {
    color: ${({ theme }) => theme.text};
    font-size: 1.6rem;
    border-color: ${({ theme }) => theme.border_pagination};
    max-width: 2rem;
    height: 3rem;
    font-size: 1.4rem;
    min-width: 3rem;

    @media screen and (min-width: 467px) {
      height: 4rem;
      font-size: 1.6rem;
      min-width: 4rem;
    }
  }

  ul li button.Mui-selected {
    background-color: ${({ theme }) => theme.element_shadow};
  }
`;
