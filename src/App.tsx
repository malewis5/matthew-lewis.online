import * as React from "react";
import { IoMdBeer } from "react-icons/io";
import "./App.css";
import axios, { AxiosResponse } from "axios";

const App = () => {
  const [data, setData] = React.useState<AxiosResponse>();
  React.useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://quotes.rest/qod")
        .then((result) => setData(result.data.contents.quotes[0].quote));
    };
    fetchData();
  }, [data]);
  return (
    <div className="App">
      <header className="App-header">
        <IoMdBeer />
        <p>{data}</p>
      </header>
      <div id="footer">
        <code>Made with &#128516; in NYC.</code>
      </div>
    </div>
  );
};

export default App;
