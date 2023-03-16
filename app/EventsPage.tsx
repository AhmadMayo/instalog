"use client";

import type { Action, Event, User } from "@prisma/client";
import { useLayoutEffect } from "react";
import useSWR from "swr";
import EventRow from "./EventRow";
import EventRowSkeleton from "./EventRowSkeleton";

type EventWithActorsAndActions = Event & {
  action: Action;
  actor: User;
};
function eventsFetcher(url: string): Promise<EventWithActorsAndActions[]> {
  return fetch(url)
    .then((r) => r.json())
    .then(({ data }) => data);
}

interface Props {
  url: string;
  pageSize: number;
  onNoMoreData: () => void;
}
export default function EventsPage({ url, pageSize, onNoMoreData }: Props) {
  const { isLoading, data: events } = useSWR(url, eventsFetcher);

  useLayoutEffect(() => {
    if (events && events.length < pageSize) {
      onNoMoreData();
    }
  }, [events, pageSize]);

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
