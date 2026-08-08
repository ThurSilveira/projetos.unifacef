import type { Request, Response } from "express";
import { HealthService } from "../services/health.service.js";
import type { HealthResponse } from "../types/http.js";

export class HealthController {
  constructor(private readonly healthService = new HealthService()) {}

  handle = async (
    _request: Request,
    response: Response<HealthResponse>,
  ): Promise<void> => {
    const health = await this.healthService.execute();
    const statusCode = health.status === "ok" ? 200 : 503;

    response.status(statusCode).json(health);
  };
}
