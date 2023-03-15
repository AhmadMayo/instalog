import type { Event, Action, User, Prisma } from "@prisma/client";
import prisma from "@/prisma";

interface GetEventsArgs {
  userId?: string;
  userLocation?: string;
  page?: number;
  pageSize?: number;
  search?: string;
  filters?: {
    action_id?: string;
    actor_id?: string;
    target_id?: string;
  };
}
interface GetEventsResult {
  data: Array<
    Event & {
      action: Action;
      actor: User;
    }
  >;
  count: number;
}
export default async function getEvents({
  userId,
  userLocation = "",
  page = 0,
  pageSize = 5,
  search,
  filters,
}: GetEventsArgs = {}): Promise<GetEventsResult> {
  const where: Prisma.EventAggregateArgs["where"] = {
    OR: [
      {
        action: {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
      },
      {
        actor: {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
      },
      {
        actor: {
          email: {
            contains: search,
            mode: "insensitive",
          },
        },
      },
      {
        target: {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
      },
      {
        target: {
          email: {
            contains: search,
            mode: "insensitive",
          },
        },
      },
    ],
    ...filters,
  };

  const [data, count] = await prisma.$transaction([
    prisma.event.findMany({
      include: {
        action: true,
        actor: true,
      },
      take: pageSize,
      skip: page * pageSize,
      where,
      orderBy: {
        occurred_at: "desc",
      },
    }),
    prisma.event.count({
      where,
    }),
  ]);

  if (userId) {
    prisma.action
      .findFirst({
        where: {
          name: "user.searched_activity_log_events",
        },
      })
      .then(async (searchAction) => {
        if (!searchAction) {
          throw new Error(
            "Cannot find `user.searched_activity_log_events` action in DB"
          );
        }

        await prisma.event.create({
          data: {
            action_id: searchAction.id,
            location: userLocation,
            actor_id: userId,
            metadata: {
              search,
              ...filters,
            },
          },
        });
      })
      .catch((error) => {
        console.error("Get Events:", error);
      });
  }

  return {
    data,
    count,
  };
}
