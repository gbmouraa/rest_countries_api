import styled from "styled-components";
import { Link } from "react-router-dom";

export const CountriesContainer = styled.section`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
`;

export const CountriesWrapper = styled.div`
  width: 100%;
  max-width: 140rem;
  display: flex;
  flex-wrap: wrap;
  gap: 6.6rem;
  justify-content: center;
`;

export const Country = styled(Link)`
  display: block;
  width: 100%;
  max-width: 50rem;
  transition: all 0.4s ease;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.element_bg};
  box-shadow: 0px 2px 4px ${({ theme }) => theme.element_shadow};
  text-decoration: none;
  color: ${({ theme }) => theme.text};

  &:hover {
    transform: translateY(-0.6rem);
  }

  .country-name {
    margin-bottom: 1.6rem;
  }

  @media screen and (min-width: 723px) {
    max-width: 30rem;
  }
`;

export const CountryFlag = styled.figure`
  width: 100%;
  img {
    width: 100%;
    max-width: 50rem;
    height: 26rem;
    object-fit: cover;
    display: block;

    @media screen and (min-width: 723px) {
      max-width: 30rem;
      height: 16rem;
    }
  }
`;

export const CountryDescription = styled.div`
  width: 100%;
  padding: 2.4rem 2rem 4.8rem 2rem;
`;

export const Description = styled.p`
  font-weight: 600;
  margin-bottom: 0.8rem;

  span {
    font-weight: 300;
  }
`;
