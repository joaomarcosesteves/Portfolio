import { createGlobalStyle } from 'styled-components'

const GlobalStyle= createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #1b1b1b;
        overflow-x: hidden; 
        color: white;
    }
`
export default GlobalStyle;
