"use client";

import type { Action, Event, User } from "@prisma/client";
import useSWR from "swr";
import EventRow from "./EventRow";
import EventRowSkeleton from "./EventRowSkeleton";

type EventsWithActorsAndActions = Event & {
  action: Action;
  actor: User;
};
function eventsFetcher(url: string): Promise<EventsWithActorsAndActions[]> {
  return fetch(url)
    .then((r) => r.json())
    .then(({ data }) => data);
}

interface Props {
  url: string;
  pageSize: number;
}
export default function EventsPage({ url, pageSize }: Props) {
  const { isLoading, data: events } = useSWR(url, eventsFetcher);

  if (isLoading) {
    return (
      <>
        {Array.from({ length: pageSize }).map((_, index) => (
          <EventRowSkeleton key={index} />
        ))}
      </>
    );
  }

  return (
    <>
      {events?.map((event, index) => (
        <EventRow key={event.id} index={index} event={event} />
      ))}
    </>
  );
}
