import cors from "cors";
import express from "express";

const app = express();
app.use(express.json());

// 🔥 Adicione CORS para permitir conexões do frontend:
app.use(cors({
    origin: "http://localhost:5173" // Permite apenas o frontend acessar a API
}));
