// GlobalStyle: Styling global untuk reset CSS, font, dan style dasar seluruh aplikasi
// Import Global Style
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

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

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background: linear-gradient(90deg, #4cbb17 60%, #39ff12 100%);
    color: #fff;
    cursor: pointer;
    transition: border-color 0.25s, background 0.2s, box-shadow 0.2s, transform 0.2s;
    box-shadow: 0 2px 8px rgba(76, 187, 23, 0.08);
  }
  button:hover {
    border-color: #4cbb17;
    background: linear-gradient(90deg, #39ff12 60%, #4cbb17 100%);
    box-shadow: 0 4px 16px rgba(76, 187, 23, 0.16);
    transform: translateY(-2px) scale(1.04);
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
