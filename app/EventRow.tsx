"use client";

import dayjs from "dayjs";
import useSWR from "swr";
import { FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import type { Action, Event, User } from "@prisma/client";
import { useSelectedEventId } from "./selectedEventIdContext";
import classes from "./EventRow.module.css";
import EventDetails from "./EventDetails";

type EventDetails = Event & {
  action: Action;
  actor: User;
  target: User;
};
function fetcher(url: string): Promise<EventDetails> {
  return fetch(url).then((r) => r.json());
}

const initial = { opacity: 0, scale: 0.9 };
const animate = { opacity: 1, scale: 1 };
const exit = { opacity: 0, scale: 0.97 };

interface Props {
  index: number;
  event: Event & {
    actor: User;
    action: Action;
  };
}
export default function EventRow({ index, event }: Props) {
  const [selectedEventId, selectEventId] = useSelectedEventId();
  const isSelected = selectedEventId == event.id;

  const { isLoading, data: eventDetails } = useSWR<EventDetails>(
    isSelected ? `/api/events/${event.id}` : null,
    fetcher
  );

  return (
    <motion.tr
      layout
      style={{ scaleX: isSelected ? "1.02" : "1" }}
      className={`origin-center bg-white transition-colors hover:cursor-pointer ${
        isSelected ? "" : "hover:bg-zinc-50"
      }`}
      role="button"
      onClick={() => selectEventId(isSelected ? null : event.id)}
    >
      <AnimatePresence mode="wait">
        {isSelected ? (
          <motion.td
            key="details"
            colSpan={4}
            initial={initial}
            animate={animate}
            exit={exit}
          >
            <EventDetails isLoading={isLoading} event={eventDetails} />
          </motion.td>
        ) : (
          <>
            <motion.td
              key="actor"
              className="p-4"
              initial={initial}
              animate={animate}
              exit={exit}
            >
              <div className="flex gap-3">
                <span
                  className={`grid h-6 w-6 place-items-center rounded-full text-sm font-bold capitalize text-white ${
                    classes[`gradient-${index % 3}`]
                  }`}
                >
                  {event.action.name.charAt(0)}
                </span>
                <span>{event.actor.email}</span>
              </div>
            </motion.td>
            <motion.td
              key="action"
              className="p-4"
              initial={initial}
              animate={animate}
              exit={exit}
            >
              {event.action.name}
            </motion.td>
            <motion.td
              key="date"
              className="p-4"
              initial={initial}
              animate={animate}
              exit={exit}
            >
              {dayjs(event.occurred_at).format("MMM D, h:m A")}
            </motion.td>
            <motion.td
              key="icon"
              className="p-4"
              initial={initial}
              animate={animate}
              exit={exit}
            >
              <FaChevronRight className="text-zinc-200" />
            </motion.td>
          </>
        )}
      </AnimatePresence>
    </motion.tr>
  );
}
