import * as React from "react";
import { IoMdBeer } from "react-icons/io";
import styled from "styled-components";
import axios from "axios";

interface data {
  quote: string;
  author: string;
}

const App = () => {
  const [data, setData] = React.useState<data>();
  React.useEffect(() => {
    const fetchData = () => {
      axios.get("https://quotes.rest/qod").then((result) => {
        setData(result.data.contents.quotes[0]);
      });
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Header>
        <IoMdBeer />
        <QuoteTextDiv>
          <p style={{ marginBottom: "0" }}>{data?.quote}</p>
        </QuoteTextDiv>
        -
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
`;

const Header = styled.div`
  background-color: #282c34;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding-left: 20px;
  padding-right: 20px;
`;

const Footer = styled.div`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1vmin);
`;

const QuoteTextDiv = styled.div`
  margin: 0 auto;
  height: min-content;
  text-align: justify;
`;

export default App;
