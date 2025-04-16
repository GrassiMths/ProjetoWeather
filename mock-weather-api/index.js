const express = require("express");
const app = express();

const mockData = [
  { cidade: "Curitiba", temperatura: "18°C", clima: "Nublado" },
  { cidade: "São Paulo", temperatura: "22°C", clima: "Ensolarado" },
  { cidade: "Rio de Janeiro", temperatura: "28°C", clima: "Quente e úmido" },
  { cidade: "Londrina", temperatura: "20°C", clima: "Parcialmente nublado" },
];

app.get("/", (req, res) => {
  res.json({
    api: "API-MOCK",
    descricao: "Mock Weather API - Fonte dos dados climáticos simulados",
    rotas: ["/weather", "/weather?cidade=NomeDaCidade"],
  });
});

app.get("/weather", (req, res) => {
  const cidade = req.query.cidade;
  if (cidade) {
    const resultado = mockData.find(
      (item) => item.cidade.toLowerCase() === cidade.toLowerCase()
    );
    if (resultado) {
      res.json({ api: "API-MOCK", ...resultado });
    } else {
      res.status(404).json({ api: "API-MOCK", erro: "Cidade não encontrada" });
    }
  } else {
    res.json({ api: "API-MOCK", dados: mockData });
  }
});

app.listen(4000, () => console.log("Mock Weather API rodando na porta 4000"));
