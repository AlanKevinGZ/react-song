import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle `
  
    body{
        font-family: ${props => props.theme.fonts.base};
        background-color: ${ props => props.theme.colors.primary};
    }

    h1{
     margin:0;
     color: ${ props => props.theme.colors.textInfo};
    }

    a{
       text-decoration:none;
       color: ${ props => props.theme.colors.textInfo};
    }
    

`

export default GlobalStyle;