import type { Event, Action, User } from "@prisma/client";
import prisma from "@/prisma";

type GetEventByIdResult =
  | null
  | (Event & {
      action: Action;
      actor: User;
      target?: User | null;
    });
export default async function getEventById(
  eventId: string
): Promise<GetEventByIdResult> {
  return await prisma.event.findUnique({
    include: {
      action: true,
      actor: true,
      target: true,
    },
    where: {
      id: eventId,
    },
  });
}
