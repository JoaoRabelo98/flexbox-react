import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html, body, #root { 
    font-family: Arial, Helvetica, sans-serif;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;