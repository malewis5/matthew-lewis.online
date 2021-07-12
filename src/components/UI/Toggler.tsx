import styled from "styled-components";

interface ToggleProps {
  toggleTheme: any;
}
const Toggle: React.FC<ToggleProps> = ({ toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

export default Toggle;
