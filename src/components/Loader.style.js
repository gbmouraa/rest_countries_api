import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid ${({ theme }) => theme.icon_search};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
  margin-top: 15rem;
`;
