import type { Event, Action, User } from "@prisma/client";
import prisma from "@/prisma";

type GetEventByIdResult =
  | null
  | (Pick<Event, "id" | "occurred_at" | "metadata"> & {
      action: Action;
      actor: User;
      target?: User | null;
    });
export default async function getEventById(
  eventId: string
): Promise<GetEventByIdResult> {
  return await prisma.event.findUnique({
    select: {
      id: true,
      occurred_at: true,
      metadata: true,
      action: true,
      actor: true,
    },
    where: {
      id: eventId,
    },
  });
}
