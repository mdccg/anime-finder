import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    user-select: none;
  }
`;

const shadowValue = `2.8px 2.8px 2.2px rgba(0, 0, 0, .02), 6.7px 6.7px 5.3px rgba(0, 0, 0, .028), 12.5px 12.5px 10px rgba(0, 0, 0, .035), 22.3px 22.3px 17.9px rgba(0, 0, 0, .042), 41.8px 41.8px 33.4px rgba(0, 0, 0, .05), 100px 100px 80px rgba(0, 0, 0, .07);`;

export const smoothShadow = {
  text: css`
    text-shadow: ${shadowValue};
  `,
  box: css`
    box-shadow: ${shadowValue};
  `
};

export default GlobalStyles;