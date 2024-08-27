import {createGlobalStyle} from 'styled-components'

export const cores = {
    yellow: '#B8952E',
    gray: '#F5F4F5',
    dark: '#19181B'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        background-color: ${cores.dark};
}
`

