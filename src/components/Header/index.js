import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./style.css";

export default function Header() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()} às ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className="header">
          <Typography variant="h4" color="inherit" align="center">
            Painel Covid-19
            <br />
            Atualizado em: {date}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
