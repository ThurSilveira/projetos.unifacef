import { HealthRepository } from "../repository/health.repository.js";
import type { HealthResponse } from "../types/http.js";

export class HealthService {
  constructor(private readonly healthRepository = new HealthRepository()) {}

  async execute(): Promise<HealthResponse> {
    try {
      await this.healthRepository.checkDatabase();

      return {
        status: "ok",
        database: "connected",
        timestamp: new Date().toISOString(),
      };
    } catch {
      return {
        status: "error",
        database: "disconnected",
        timestamp: new Date().toISOString(),
      };
    }
  }
}
