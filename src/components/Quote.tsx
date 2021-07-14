import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Loading } from "../components/UI/Loading";

interface QuoteObject {
  author: string;
  quote: string;
}

const Quote: React.FC = () => {
  const [quote, setQuote] = useState({} as QuoteObject);
  const [loading, setLoading] = useState(true);

  const fetchQuote = () => {
    setLoading(true);
    fetch("https://quotes.rest/qod")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else return response;
      })
      .then((response) => response.json())
      .then((data) => {
        setQuote({
          author: data?.contents?.quotes[0]?.author,
          quote: data?.contents?.quotes[0]?.quote,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <QuoteContainer>
      {!loading ? (
        <>
          <QuoteTextDiv>{`"${
            quote?.quote ?? "I talk to myself but I rarely listen"
          }"`}</QuoteTextDiv>

          <AuthorDiv>{quote?.author ?? "Matthew Lewis"}</AuthorDiv>
        </>
      ) : (
        <Loading />
      )}
    </QuoteContainer>
  );
};

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const QuoteTextDiv = styled.div`
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
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    width: 70vw;
  }
`;

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

export { Quote };
