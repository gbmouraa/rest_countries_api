import styled from "styled-components";
import { Pagination } from "@mui/material";

export const CustomizedPagination = styled(Pagination)`
  ul li button,
  ul li div {
    color: ${({ theme }) => theme.text};
    font-size: 1.6rem;
    border-color: ${({ theme }) => theme.border_pagination};
  }

  ul li button.Mui-selected {
    background-color: ${({ theme }) => theme.element_shadow};
  }
`;
