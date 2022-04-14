import "./App.css";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Cards from "./Card";
import Footer from "./Footer";

function App() {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      

      <Cards
        casos="Casos registrados"
        mortes="Total de mortes"
        recuperados="Recuperados"
        totalTestes="Testes realizados"
      />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
