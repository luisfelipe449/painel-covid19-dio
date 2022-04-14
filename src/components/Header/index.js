import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./style.css";

export default function Header(props) {
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
            Painel Covid-19 {props.pais}
            <br />
            Atualizado em: {date}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
