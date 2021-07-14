import * as React from "react";
import styled from "styled-components";
import Spinner from "react-spinkit";

export interface LoadingProps {
  // color of the loader
  color?: string;
  size?: number;
}

const Loading: React.FunctionComponent<LoadingProps> = ({ color }) => {
  return (
    <Div>
      <Spinner name="line-scale-pulse-out" color={color} fadeIn="none" />
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Loading };
