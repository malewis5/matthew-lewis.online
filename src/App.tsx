import * as React from "react";
// import { IoMdBeer } from "react-icons/io";
import styled from "styled-components";
import theme from "./UI/theme";
import axios from "axios";
import { useEffect, useState } from "react";

interface data {
  quote: string;
  author: string;
}

const App = () => {
  const [data, setData] = useState<data>();
  useEffect(() => {
    const fetchData = () => {
      axios.get("https://quotes.rest/qod").then((result) => {
        setData(result.data.contents.quotes[0]);
      });
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header>
        {/* <IoMdBeer style={{ textShadow: `1.5px 1.5px ${theme.RED_COLOR}` }} /> */}
        <QuoteTextDiv>
          <p style={{ marginBottom: "0" }}>"{data?.quote}"</p>
        </QuoteTextDiv>
        <AuthorDiv>
          <p style={{ marginTop: "0" }}> {data?.author}</p>
        </AuthorDiv>
      </Header>
      <Footer>
        <code>Made with &#128516; in NYC.</code>
      </Footer>
    </div>
  );
};

const AuthorDiv = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  width: 50vw;
  animation: fadeInAnimation ease 3s;
  text-align: right;
  font-size: calc(30px + 2vmin);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Header = styled.div`
  background-color: ${theme.PRIMARY_COLOR};
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.WHITE_COLOR};
  text-shadow: 1px 1px ${theme.RED_COLOR};
`;

const Footer = styled.div`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1vmin);
  background-color: ${theme.SECONDARY_COLOR};
`;

const QuoteTextDiv = styled.div`
  margin: 0 auto 10px auto;
  font-size: calc(10px + 2vmin);
  text-align: left;
  width: 50vw;
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default App;
