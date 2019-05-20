import { createGlobalStyle } from "styled-components"

import { Color, Type } from "../../utilities"

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:700|Roboto:400,700&display=swap');
    
    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${Color.grey};
        padding: 0;
        margin: 0;
        font-family: ${Type.text};
        font-size: ${Type.basesize};
        color: ${Color.grey};
    }

    p {
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6, h7, h8, h9 {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 2.25rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.75rem;
    }

    h4 {
        font-size: 1.5rem;
    }
`

export default GlobalStyles
