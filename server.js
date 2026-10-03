const express = require("express"); // criando servidor
const cors = require("cors"); // autoriza que o frontend acesse o backend 

const app = express();

app.use(cors());
app.use(express.json());

// =========================================================================
// Configuração do Agente SkillForge AI (Foundry)
// Substitua as variáveis abaixo pelas suas chaves e endpoints reais.
// =========================================================================
//const API_KEY = "";
//const AGENT_ENDPOINT = "?api-version=v1";

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await fetch(AGENT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY
      },
      body: JSON.stringify({
        input: message
      })
    });

    const data = await response.json();
    console.log("[SkillForge AI] Resposta bruta:", data);

    // Adaptação para capturar a resposta gerada.
    const resposta =
      data?.output?.[0]?.content?.[0]?.text ||
      "Não foi possível gerar uma resposta.";

    res.json({
      response: resposta
    });

  } catch (error) {
    console.error("[Erro] SkillForge AI:", error);
    res.status(500).json({
      response: "Erro ao consultar a SkillForge AI. Verifique se o servidor backend está rodando e a chave da API está correta."
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("=========================================");
  console.log("🚀 Servidor AndaSP Backend Online!");
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log("🤖 Conectado à SkillForge AI");
  console.log("=========================================");
});
