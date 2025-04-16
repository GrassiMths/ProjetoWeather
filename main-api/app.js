const express = require("express");
const axios = require("axios");
const app = express();

const WeatherController = require("./Controllers/WeatherController");
const weatherController = new WeatherController(axios);

app.get("/", (req, res) => {
  res.json({
    api: "API-MAIN",
    descricao:
      "Main Weather API - Consulta e histórico de aquisições climáticas",
    rotas: ["/weather?cidade=NomeDaCidade", "/historico"],
  });
});

app.get("/weather", (req, res) => weatherController.acessData(req, res));

app.get("/historico", (req, res) =>
  res.json({
    api: "API-MAIN",
    aquisicoes: weatherController.historico,
  })
);

app.listen(3000, () => console.log("API Principal rodando na porta 3000"));
