import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 140rem;
  margin: auto;
  padding: 0 2rem;
  margin-top: 4rem;
  padding-bottom: 6rem;

  @media screen and (min-width: 1010px) {
    margin-top: 6rem;
  }
`;

export const Button = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.element_bg};
  color: ${({ theme }) => theme.text};
  font-weight: 300;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding: 0.8rem 3.2rem;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  box-shadow: 0px 2px 4px ${({ theme }) => theme.element_shadow};
  transition: all 0.5s ease;

  &:hover {
    transform: scale(0.93);
  }
`;

export const CoutryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  @media screen and (min-width: 1010px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 6rem;
  }
`;

export const CoutryFlag = styled.figure`
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
    max-height: 40rem;
    align-self: flex-start;
    display: block;
  }

  @media screen and (min-width: 1010px) {
    width: 42%;
  }
`;

export const CoutryInfos = styled.div`
  margin-top: 4rem;

  @media screen and (min-width: 1010px) {
    margin-top: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 50%;

    .coutry-name {
      font-size: 3.4rem;
    }

    .border-countries {
      min-width: 100%;
    }
  }
`;

export const DescriptionsWrapper = styled.div`
  margin-bottom: 4rem;

  .coutry-name {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 1010px) {
    margin-bottom: 0;
  }
`;

export const Description = styled.p`
  font-weight: 600;
  margin-bottom: 1rem;

  span {
    font-weight: 300;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BorderCountries = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem 1.6rem;

  p {
    font-weight: 600;
    font-size: 1.8rem;
    display: block;
    min-width: fit-content;
  }

  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;

    .border-labels {
      padding: 0.8rem 2.2rem;
    }
  }

  @media screen and (min-width: 1010px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 6rem;
  }
`;
