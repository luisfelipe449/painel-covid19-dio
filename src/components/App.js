import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  // Quer usar async/await? Adicione o prefixo `async` na sua função/método
  async function getUser() {
    try {
      const response = await axios.get(
        "https://coronavirus-19-api.herokuapp.com/countries/brazil"
      );
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {data.map((datas) => {
        return <p>{datas.cases}</p>;
      })}
    </>
  );
}

export default App;
