import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`

    #main {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: background-color 0.50s ease;
        transition: color 0.50s ease;
    }

    * {
        font-family: "AkzidensGroteskBQ", "Arial";
    }
    body {
        margin: 0;
        padding: 0;
    }
`;
