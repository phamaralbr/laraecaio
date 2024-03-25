import { createGlobalStyle } from 'styled-components'

export const theme = {
  color1: '#a3888c',
  color2: '#002642',
  color3: '#585858',
  color4: '#fbf8f8',
  color5: '#fff',
  color6: '#848892',
  color7: '#e7e7e7',
  color8: '#777777',
  font1: "'Josefin Sans', sans-serif",

  // font400: "1rem",
  // font500: "1.25rem",
  // font600: "1.5rem",
  // fontL: "2.5rem",
};

// globalStyles.ts
export const GlobalStyle = createGlobalStyle`
  :root {
    --font400: 1rem;
    --font500: 1.25rem;
    --font600: 1.5rem;
    --fontL: 2.5rem;
    --fontLG: 3rem;
    --fontXL: 5rem;
   }
   @media (max-width: 768px) {
      :root {
        --font400: 0.9rem;
        --font500: 1.1rem;
        --font600: 1.3rem;
        --fontL: 2rem;
        --fontLG: 2rem;
        --fontXL: 2.5rem;
       }
   }
`

// if(window.matchMedia("(max-width: 768px)").matches){
//   theme.font400 = "0.75rem";
//   theme.font500 = "1rem";
//   theme.font600 = "1.25rem";
//   theme.fontL = "2.25rem";
// }


export default theme;