import cors from "cors";
import express from "express";
import { env } from "./config/env.js";
import {
  errorHandler,
  notFoundHandler,
} from "./middlewares/error.middleware.js";
import { routes } from "./routes/index.js";

export const app = express();

app.disable("x-powered-by");
app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());
app.use("/api", routes);
app.use(notFoundHandler);
app.use(errorHandler);
