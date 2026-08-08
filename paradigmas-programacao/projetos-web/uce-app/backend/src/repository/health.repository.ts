import { prisma } from "../config/prisma.js";

export class HealthRepository {
  async checkDatabase(): Promise<void> {
    await prisma.$queryRaw`SELECT 1`;
  }
}
