import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import "./style.css";

export default function Header(props) {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()} às ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

  const navigatorHasShare = navigator.share;

  const textCovid19 = `Painel Covid19`;

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid 19`,
      text: textCovid19,
      url: "/",
    });
  };
  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  );

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className="header">
          <Typography variant="h4" color="inherit" align="center">
            Painel Covid-19 {props.pais}
            <br />
            Atualizado em: {date}
            <br />
            {navigatorHasShare ? renderShareButton : null}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
