import * as React from "react";
import { FaBeer } from "react-icons/fa";
import "./App.css";
import axios, { AxiosResponse } from "axios";

const App = () => {
  const [data, setData] = React.useState<AxiosResponse>();
  React.useEffect(() => {
    const fetchData = () => {
      axios.get("https://quotes.rest/qod").then((result) => setData(result));
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <FaBeer />
        <p>{data?.data.contents.quotes[0].quote}</p>
      </header>
    </div>
  );
};

export default App;
