import { createGlobalStyle } from 'styled-components';

/* Octopus Energy brand colours used in the design */
export const GlobalStyle = createGlobalStyle`
  :root {
    --hemocyanin: #180048; //Azul muy oscuro //backgroundPrimaryColor
    --ice: #f0ffff; // Azul muy clarito primaryColor
    --plum: #600e6b; //Morado oscuro borders, secondaryButtons
    --purpleHaze: #a49fc8; // Lila claro secondaryColor
    --siphon: #100030; //Negro backgroundSecondaryColor
    --sohoLights: #f050f8; //Rosa buttons
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: Gotham, helvetica, arial, sans-serif;
    color: var(--ice);
  }

  body {
    background: var(--siphon);
  }

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0 auto;
  }
`;
