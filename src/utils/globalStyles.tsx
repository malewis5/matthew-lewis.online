import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`

    body {
        margin: 0;
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: ${() =>
          document.readyState === "complete"
            ? "background-color 0.50s linear"
            : "none"}
    }

    * {
        font-family: "AkzidensGroteskBQ", "Arial";
    }
`;
