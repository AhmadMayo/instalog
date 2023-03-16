"use client";

import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import type { Action, Event, User } from "@prisma/client";
import EventRow from "./EventRow";
import EventRowSkeleton from "./EventRowSkeleton";

const initial = { opacity: 0, scaleY: 0 };
const animate = { opacity: 1, scaleY: 1 };
const exit = { opacity: 0, scaleY: 0 };

interface Props {
  isLoading: boolean;
  events: Array<
    Event & {
      action: Action;
      actor: User;
    }
  >;
  pageSize: number;
}
export default function EventsPage({ isLoading, events, pageSize }: Props) {
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
