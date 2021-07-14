import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../utils/globalStyles";
import { lightTheme, darkTheme } from "../../utils/theme";
import { useDarkMode } from "../../hooks/useDarkMode";
import Toggle from "../UI/Toggler";

//Custom Component
import { Quote } from "../Quote";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <MainApp id={"main"}>
          <TogglerDiv>
            <Toggle
              toggleTheme={themeToggler}
              theme={theme}
              themeMode={themeMode}
            />
          </TogglerDiv>
          <Quote />
          <footer>
            <code>Made with &#128516; in NYC. Coming soon.</code>
          </footer>
        </MainApp>
      </>
    </ThemeProvider>
  );
}

const MainApp = styled.div`
  min-height: 100vh;
  @media only screen and (max-device-width: 1000px) {
    min-height: -webkit-fill-available;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TogglerDiv = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export default App;
