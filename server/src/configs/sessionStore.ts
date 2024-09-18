import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import prisma from "./db.js";

const sessionStore = new PrismaSessionStore(prisma, {
  checkPeriod: 2 * 60 * 1000,
});
export default sessionStore;
