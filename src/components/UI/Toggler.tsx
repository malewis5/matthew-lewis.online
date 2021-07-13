import styled, { keyframes } from "styled-components";
import { FiSun, FiMoon } from "react-icons/fi";

interface ToggleProps {
  theme: any;
  toggleTheme: any;
}
const Toggle: React.FC<ToggleProps> = ({ toggleTheme, theme }) => {
  return (
    <>
      {theme === "light" ? (
        <SpinDiv>
          <FiSun onClick={toggleTheme} size={40} />
        </SpinDiv>
      ) : (
        <MoonDiv>
          <FiMoon onClick={toggleTheme} size={40} />
        </MoonDiv>
      )}
    </>
  );
};

const spin = keyframes` {
  from {
    transform: rotate(0);
  }
  to  {
    transform: rotate(360deg);
  }
}`;

const SpinDiv = styled.div`
  cursor: pointer;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s;
  &:hover {
    transition: background-color 0.5s;
    background-color: white;
    animation-name: ${spin};
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

const MoonDiv = styled.div`
  border-radius: 50%;
  cursor: pointer;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s;
  &:hover {
    transition: background-color 0.5s;
    background-color: rgb(255, 204, 0);
  }
`;

export default Toggle;
