import { PrismaClient } from "@prisma/client";

// Create a global variable for PrismaClient to prevent multiple instances
const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
};

// Check if PrismaClient is already defined in the global scope; if not, instantiate it
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
