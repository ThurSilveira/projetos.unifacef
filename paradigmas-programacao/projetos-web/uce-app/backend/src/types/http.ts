export interface HealthResponse {
  status: "ok" | "error";
  database: "connected" | "disconnected";
  timestamp: string;
}

export interface ErrorResponse {
  message: string;
}
