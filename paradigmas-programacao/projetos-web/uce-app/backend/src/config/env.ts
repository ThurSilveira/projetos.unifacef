import "dotenv/config";

const port = Number(process.env.PORT ?? 3333);

if (!Number.isInteger(port) || port <= 0 || port > 65_535) {
  throw new Error("PORT deve ser um número inteiro entre 1 e 65535.");
}

export const env = Object.freeze({
  nodeEnv: process.env.NODE_ENV ?? "development",
  port,
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:5173",
  databaseUrl:
    process.env.DATABASE_URL ??
    "postgresql://postgres:postgres@localhost:5432/uce?schema=public",
});
