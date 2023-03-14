import type { Action } from "@prisma/client";
import prisma from "@/prisma";

export default async function getActions(): Promise<Action[]> {
  return await prisma.action.findMany();
}
