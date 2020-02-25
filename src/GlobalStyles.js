import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Poppins', sans-serif;
        color: #302d2d;
        background-color: #c9cfd1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        
    }

    button > * {
        pointer-events: none;
    }
`;
