const express = require("express");
const axios = require("axios");
const app = express();

const WeatherController = require("./Controllers/WeatherController");
const weatherController = new WeatherController(axios);

app.get("/weather", (req, res) => weatherController.acessData(req, res));

app.listen(3000, () => console.log("API Principal rodando na porta 3000"));