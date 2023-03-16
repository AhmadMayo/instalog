"use client";

import { useMemo } from "react";
import { parse } from "devalue";
import type { Action, Event, User } from "@prisma/client";
import EventsTable from "./EventsTable";

interface Props {
  // Stringified events
  // Because we cannot send `Date`s from a server component to a client component
  eventsStringified: string;
  eventsCount: number;
}
export default function Events({ eventsStringified, eventsCount }: Props) {
  const events = useMemo<
    Array<
      Event & {
        action: Action;
        actor: User;
      }
    >
  >(() => parse(eventsStringified), [eventsStringified]);

  return <EventsTable events={events} />;
}
