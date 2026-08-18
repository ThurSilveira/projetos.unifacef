import "dotenv/config";
import express from "express";
import cors from "cors";
import { errorHandler } from
  "./middlewares/errorHandler";
import taskRoutes from "./routes/taskRoutes";

const app = express(); // app representa servidor http
app.use(cors());// servidor vai usar cors
app.use(express.json()); // servidor vai receber json do body

app.get("/", (req, res) => { // cria primeira rota da api 
  res.json({ status: "API no ar" });
});

app.use("/tasks", taskRoutes);
app.use(errorHandler); // middleware de tratamento de erros

app.listen(3000); // servidor vai ouvir na porta 3000