import React, { useEffect, useState } from "react";

interface QuoteObject {
  author: string;
  quote: string;
}

const Quote: React.FC = () => {
  const [quote, setQuote] = useState({} as QuoteObject);

  const fetchData = () => {
    fetch("https://quotes.rest/od")
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
    fetchData();
  }, []);

  return <div>{quote.quote}</div>;
};

export { Quote };
