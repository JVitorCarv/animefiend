import { createGlobalStyle } from "styled-components";
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: "#FFF",
      },
    },
  });

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Kanit', sans-serif;
    }
    
    body {
        background: fixed;
        background-image: url('../src/assets/backgroundImage.png');
    }
`

export default GlobalStyle