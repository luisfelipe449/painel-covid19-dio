import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./style.css";

export default function Footer() {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="/">
          Painel Covid-19 Brasil
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  return (
    <div className="container-footer">
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Desenvolvido por Luis Felipe
        </Typography>
        <Copyright />
      </Box>
    </div>
  );
}
