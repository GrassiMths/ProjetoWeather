class WeatherController {
  constructor(axios) {
    this.axios = axios;
    this.weather = "http://mock-weather-api:4000/weather"; // comunicação via nome do serviço docker
  }

  async acessData(req, res) {
    const cidade = req.query.cidade;

    try {
      const response = await this.axios.get(this.weather, {
        params: { cidade }
      });
      res.json(response.data);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao acessar dados climáticos", detalhes: err.message });
    }
  }
}

module.exports = WeatherController;