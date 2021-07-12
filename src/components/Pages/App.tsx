import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../utils/globalStyles";
import { lightTheme, darkTheme } from "../../utils/theme";
import { useDarkMode } from "../../hooks/useDarkMode";
import Toggle from "../UI/Toggler";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <MainApp>
          <Toggle toggleTheme={themeToggler} />
        </MainApp>
      </>
    </ThemeProvider>
  );
}

const MainApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
