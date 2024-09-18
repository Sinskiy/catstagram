import { Prisma } from "@prisma/client";
import prisma from "../configs/db.js";

export async function getUser(whereClause: Prisma.UserWhereUniqueInput) {
  return await prisma.user.findUnique({ where: whereClause });
}

export async function createUser(data: Prisma.UserCreateInput) {
  await prisma.user.create({ data: data });
}
