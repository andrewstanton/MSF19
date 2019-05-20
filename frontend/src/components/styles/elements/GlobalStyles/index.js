import { createGlobalStyle } from "styled-components"

import { Color, Type } from "../../utilities"

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:700|Roboto:400,700&display=swap');
    
    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${Color.white};
        padding: 0;
        margin: 0;
        font-family: ${Type.text};
        font-size: ${Type.basesize};
        color: ${Color.grey};
    }
`
