import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Adicionando regras de responsividade */
  @media screen and (max-width: 380px) {
    /* Altere o tamanho da fonte em telas menores */
    html {
      font-size: 12px;
    }

    /* Centralize os elementos do corpo */
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
  }

  @media screen and (max-width: 768px) {
    /* Altere o tamanho da fonte em telas um pouco maiores */
    html {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1048px) {
    /* Adicione mais regras de responsividade para telas maiores */
    /* ... */
  }

  @media screen and (min-width: 1049px) {
    /* Adicione mais regras de responsividade para telas ainda maiores */
    /* ... */
  }
`

export default GlobalStyle
