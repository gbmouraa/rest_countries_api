import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.element_bg};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2.6rem 2rem;
  box-shadow: 0px 2px 4px ${({ theme }) => theme.element_shadow};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 104rem;
  justify-content: space-between;
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
