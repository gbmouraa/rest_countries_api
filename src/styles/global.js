import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html{
    // isso torna a utilização da unidade de medida rem mais fácil
    // ex: 30px = 3rem; 32px = 3.2rem
    font-size: 62.5%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body{
    width: 100%;
    min-height: 100vh;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.body_bg};
    color: ${({ theme }) => theme.text};
  }

  body,input,button{
    font-family: 'Nunito Sans', sans-serif;
  }

  button{
    border: none;
    outline: none;
    cursor: pointer;
    transition: all .7s ease;
  }

  .default-shadow{
    box-shadow: 0px 2px 4px ${({ theme }) => theme.element_shadow};
  }

  .App{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
