// GlobalStyle: Styling global untuk reset CSS, font, dan style dasar seluruh aplikasi
// Import Global Style
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(135deg, #e0ffe0 0%, #f9fff9 100%);
    color: #222;
    min-width: 320px;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #222;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 0;
    margin-bottom: 0.5em;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyle;
