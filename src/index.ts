import express, { Request, Response } from "express";

const app = express();
const port = 8080;

// Criar a ROTA GET principal
app.get("/", (_req: Request, res: Response) => {
  res.send("Bem-vindo, Rafael! Servidor Express com TypeScript funcionando.");
});

// Iniciar o servidor na porta 8080
app.listen(port, () => {
  console.log(`Servidor iniciado na porta 8080 http://localhost:8080 ${port}`);
});


  


