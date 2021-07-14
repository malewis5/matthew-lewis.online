import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface QuoteObject {
  author: string;
  quote: string;
}

const Quote: React.FC = () => {
  const [quote, setQuote] = useState({} as QuoteObject);

  const fetchQuote = () => {
    fetch("https://quotes.rest/qod")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else return response;
      })
      .then((response) => response.json())
      .then((data) =>
        setQuote({
          author: data?.contents?.quotes[0]?.author ?? "Matthew Lewis",
          quote:
            data?.contents?.quotes[0]?.quote ??
            "I talk to myself and but I rarely listen.",
        })
      )
      .catch((error) => {
        console.log(error);
        setQuote({
          author: "Matthew Lewis",
          quote: "I talk to myself but I rarely listen.",
        });
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <QuoteTextDiv>{quote.quote}</QuoteTextDiv>
      <AuthorDiv>{quote.author}</AuthorDiv>
    </div>
  );
};

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
