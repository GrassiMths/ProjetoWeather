class WeatherController {
  constructor(axios) {
    this.axios = axios;
    this.weather = "http://mock-weather-api:4000/weather";
    this.historico = [];
  }

  async acessData(req, res) {
    const cidade = req.query.cidade;

    if (!cidade) {
      return res
        .status(400)
        .json({ api: "API-MAIN", erro: "Cidade não especificada" });
    }

    try {
      const response = await this.axios.get(this.weather, {
        params: { cidade },
      });

      const resultado = {
        data: response.data,
        timestamp: new Date().toISOString(),
      };

      this.historico.push(resultado);

      res.json({ api: "API-MAIN", resultado: response.data });
    } catch (err) {
      res.status(500).json({
        api: "API-MAIN",
        erro: "Erro ao acessar dados climáticos",
        detalhes: err.message,
      });
    }
  }
}

module.exports = WeatherController;
