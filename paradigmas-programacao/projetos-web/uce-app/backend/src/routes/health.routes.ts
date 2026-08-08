import { Router } from "express";
import { HealthController } from "../controllers/health.controller.js";

const healthController = new HealthController();

export const healthRoutes = Router();

healthRoutes.get("/", healthController.handle);
