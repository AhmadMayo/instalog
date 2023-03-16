"use client";

import type { Action, Event, User } from "@prisma/client";
import { useLayoutEffect } from "react";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import useSWR from "swr";
import EventRow from "./EventRow";
import EventRowSkeleton from "./EventRowSkeleton";

const initial = { opacity: 0, scaleY: 0 };
const animate = { opacity: 1, scaleY: 1 };
const exit = { opacity: 0, scaleY: 0 };

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

  return (
    <motion.tbody
      className="text-zinc-900"
      layout="size"
      style={{ originY: 0 }}
      transition={{
        duration: 0.3,
      }}
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <AnimatePresence mode="wait">
        <LayoutGroup>
          {isLoading
            ? Array.from({ length: pageSize }).map((_, index) => (
                <EventRowSkeleton key={index} />
              ))
            : events?.map((event, index) => (
                <EventRow key={event.id} index={index} event={event} />
              ))}
        </LayoutGroup>
      </AnimatePresence>
    </motion.tbody>
  );
}
