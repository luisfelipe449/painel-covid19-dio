import "./App.css";
import React, { useEffect, useState } from "react";
import api from "../services/api";

function App() {
  const [country, setCountry] = useState([]);

  async function getCountry() {
    try {
      const response = await api.get("/countries/brazil");
      setCountry(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCountry();
  }, []);
  return (
    <>
      <h1>{country.country}</h1>
      <p>{country.cases}</p>
      <p>{country.active}</p>
      <p>{country.deaths}</p>
      <p>{country.recovered}</p>
    </>
  );
}

export default App;
