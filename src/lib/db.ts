import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
	prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma || new PrismaClient();

export const db = prisma;
