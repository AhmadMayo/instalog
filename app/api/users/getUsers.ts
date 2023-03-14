import type { User } from "@prisma/client";
import prisma from "@/prisma";

export default async function getUsers(): Promise<User[]> {
  return await prisma.user.findMany();
}
