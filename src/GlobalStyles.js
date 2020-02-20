import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Poppins', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`;
