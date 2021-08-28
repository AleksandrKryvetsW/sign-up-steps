import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Arial', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
    color: #343434;
    background: ${({theme}) => theme?.body.background};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const AppWrapper = styled.div`
  
`;