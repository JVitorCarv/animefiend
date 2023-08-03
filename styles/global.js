import { createGlobalStyle } from "styled-components";


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