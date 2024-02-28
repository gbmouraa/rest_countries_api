import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.element_bg};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2.6rem 2rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 140rem;
  justify-content: space-between;

  @media screen and (min-width: 76.8rem) {
    .header-title {
      font-size: 2.4rem;
    }
  }
`;

export const ThemeSwitcher = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  font-weight: 600;

  svg {
    margin-right: 0.8rem;
    font-size: 1.8rem;
  }
`;
