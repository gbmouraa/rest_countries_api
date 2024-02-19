import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 140rem;
  margin: auto;
  padding: 0 2rem;
  margin-top: 4rem;
  padding-bottom: 6rem;
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
  font-size: 1.4rem;
  border-radius: 0.4rem;
  box-shadow: 0px 2px 4px ${({ theme }) => theme.element_shadow};
`;

export const CoutryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;

export const CoutryFlag = styled.figure`
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
    height: 26rem;
  }
`;

export const CoutryInfos = styled.div`
  margin-top: 4rem;
`;

export const DescriptionsWrapper = styled.div`
  margin-bottom: 4rem;

  .coutry-name {
    margin-bottom: 2rem;
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
  }

  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
`;
