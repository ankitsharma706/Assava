import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
:root{
--max-width: 1200px;
}
html, body, #root{
height: 100%;
}
html{
box-sizing: border-box;
font-size: 16px; /* base for rem */
}
*, *:before, *:after{ box-sizing: inherit; }
body{
margin: 0;
font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
background: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.text};
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
transition: background 250ms ease, color 250ms ease;
}


a{ color: inherit; text-decoration: none }


img{ max-width: 100%; height: auto; display: block }


/* Utility containers */
.container{ max-width: var(--max-width); margin: 0 auto; padding: 1rem }


/* Accessibility: keep zooming allowed by default. The viewport meta in index.html sets initial scale = 1. */
/* Hide scrollbar for Chrome, Safari */
:: -webkit - scrollbar {
  width: 0;
  height: 0;
}

/* Hide scrollbar for Firefox */
html {
  scrollbar - width: none;
}
  `;


export default GlobalStyles;