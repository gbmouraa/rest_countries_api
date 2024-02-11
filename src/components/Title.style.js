import { styled } from "styled-components";

export const Title = styled.p`
  font-weight: 700;
  font-size: ${(props) => `${props.size}rem`};

  @media screen and (min-width: 76.8rem) {
    font-size: 2.4rem;
  }
`;
