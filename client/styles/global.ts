import { createGlobalStyle } from "styled-components";

/* Octopus Energy brand colours used in the design */
export const GlobalStyle = createGlobalStyle`
  :root {
    --hemocyanin: #180048; 
    --ice: #f0ffff; 
    --plum: #600e6b; 
    --purpleHaze: #a49fc8; 
    --siphon: #100030; 
    --sohoLights: #f050f8; 
  }
    
  *,
  *::before,
  *::after {
    box-sizing: border-box;
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
    min-height: 100vh;
    margin: 0 auto;
   }  
`;
