import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./style.css";
import brazil from "../../assets/brazil.png";
import usa from "../../assets/usa.png";
import germany from "../../assets/germany.png";
import china from "../../assets/china.png";
import italy from "../../assets/italy.png";

export default function Cards(props) {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState([]);

  async function getCountry() {
    try {
      const response = await api.get(`/countries/${query}`);
      setCountry(response.data);
      setQuery(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCountry();
  }, [query]);

  return (
    <>
      <div className="country-btns">
        <Button value="brazil" onClick={(e) => setQuery(e.target.value)}>
          <img src={brazil} alt="brasil" /> Brasil
        </Button>
        <Button value="usa" onClick={(e) => setQuery(e.target.value)}>
          <img src={usa} alt="usa" /> USA
        </Button>
        <Button value="germany" onClick={(e) => setQuery(e.target.value)}>
          <img src={germany} alt="germany" /> Germany
        </Button>
        <Button value="italy" onClick={(e) => setQuery(e.target.value)}>
          <img src={italy} alt="italy" /> Italy
        </Button>
        <Button value="china" onClick={(e) => setQuery(e.target.value)}>
          <img src={china} alt="china" /> China
        </Button>
      </div>
      <div className="container">
        <div className="card-wrapper">
          <Card sx={{ width: 500, borderRadius: 5, boxShadow: 10 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 24 }}
                color="text.primary"
                gutterBottom
              >
                {props.casos}
              </Typography>
              <Typography color="text.secondary" variant="h5" component="div">
                {country.cases}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className="btn-more"
                size="small"
                href="https://news.google.com/covid19/map?hl=pt-BR&gl=BR&ceid=BR%3Apt-419&mid=%2Fm%2F015fr"
                target="_blank"
              >
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="card-wrapper">
          <Card sx={{ width: 500, borderRadius: 5, boxShadow: 10 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 24 }}
                color="text.primary"
                gutterBottom
              >
                {props.mortes}
              </Typography>
              <Typography color="text.secondary" variant="h5" component="div">
                {country.deaths}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className="btn-more"
                size="small"
                href="https://news.google.com/covid19/map?hl=pt-BR&gl=BR&ceid=BR%3Apt-419&mid=%2Fm%2F015fr"
                target="_blank"
              >
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="card-wrapper">
          <Card sx={{ width: 500, borderRadius: 5, boxShadow: 10 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 24 }}
                color="text.primary"
                gutterBottom
              >
                {props.recuperados}
              </Typography>
              <Typography color="text.secondary" variant="h5" component="div">
                {country.recovered}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className="btn-more"
                size="small"
                href="https://news.google.com/covid19/map?hl=pt-BR&gl=BR&ceid=BR%3Apt-419&mid=%2Fm%2F015fr"
                target="_blank"
              >
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="card-wrapper">
          <Card sx={{ width: 500, borderRadius: 5, boxShadow: 10 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 24 }}
                color="text.primary"
                gutterBottom
              >
                {props.totalTestes}
              </Typography>
              <Typography color="text.secondary" variant="h5" component="div">
                {country.totalTests}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className="btn-more"
                size="small"
                href="https://news.google.com/covid19/map?hl=pt-BR&gl=BR&ceid=BR%3Apt-419&mid=%2Fm%2F015fr"
                target="_blank"
              >
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}
