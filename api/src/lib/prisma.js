import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
// Exclude keys from user
function exclude(user, keys) {
    return Object.fromEntries(
      Object.entries(user).filter(([key]) => !keys.includes(key))
    );
  }
  
export { prisma,exclude};