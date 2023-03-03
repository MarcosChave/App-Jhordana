import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Adicionando regras de responsividade */
  @media screen and (max-width: 600px) {
    /* Altere o tamanho da fonte em telas menores */
    html {
      font-size: 14px;
    }

    /* Centralize os elementos do corpo */
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 768px) {
    /* Altere o tamanho da fonte em telas um pouco maiores */
    html {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1024px) {
    /* Adicione mais regras de responsividade para telas maiores */
    /* ... */
  }
`

export default GlobalStyle
