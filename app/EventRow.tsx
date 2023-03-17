"use client";

import dayjs from "dayjs";
import useSWR from "swr";
import { FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import type { Action, Event, User } from "@prisma/client";
import { useSelectedEventId } from "./selectedEventIdContext";
import classes from "./EventRow.module.css";
import EventDetails from "./EventDetails";

const transition = { duration: 0.3, ease: "linear" };
const initial = { height: 0 };
const animate = { height: "auto" };
const exit = { height: 0 };

type EventDetails = Event & {
  action: Action;
  actor: User;
  target: User;
};
function fetcher(url: string): Promise<EventDetails> {
  return fetch(url).then((r) => r.json());
}

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
    <tr
      className={`origin-center bg-white transition-colors hover:cursor-pointer ${
        isSelected ? "" : "hover:bg-zinc-50"
      }`}
      role="button"
      onClick={() => selectEventId(isSelected ? null : event.id)}
    >
      <AnimatePresence mode="wait">
        {isSelected ? (
          <td key="event" colSpan={4}>
            <motion.div
              className="overflow-hidden rounded-xl border-[1px] border-zinc-100 bg-white shadow"
              transition={transition}
              initial={{ height: 0, scale: 1 }}
              animate={{ height: "auto", scale: 1.05 }}
              exit={{ height: 0, scale: 1 }}
            >
              <EventDetails isLoading={isLoading} event={eventDetails} />
            </motion.div>
          </td>
        ) : (
          <>
            <td key="actor">
              <motion.div
                className="overflow-hidden"
                transition={transition}
                initial={initial}
                animate={animate}
                exit={exit}
              >
                <div className="flex gap-3 p-4">
                  <span
                    className={`grid h-6 w-6 place-items-center rounded-full text-sm font-bold capitalize text-white ${
                      classes[`gradient-${index % 3}`]
                    }`}
                  >
                    {event.action.name.charAt(0)}
                  </span>
                  <span>{event.actor.email}</span>
                </div>
              </motion.div>
            </td>
            <td key="action">
              <motion.div
                className="overflow-hidden"
                transition={transition}
                initial={initial}
                animate={animate}
                exit={exit}
              >
                <div className="p-4">{event.action.name}</div>
              </motion.div>
            </td>
            <td key="date">
              <motion.div
                className="overflow-hidden"
                transition={transition}
                initial={initial}
                animate={animate}
                exit={exit}
              >
                <div className="p-4">
                  {dayjs(event.occurred_at).format("MMM D, h:m A")}
                </div>
              </motion.div>
            </td>
            <td key="icon">
              <motion.div
                className="overflow-hidden"
                transition={transition}
                initial={initial}
                animate={animate}
                exit={exit}
              >
                <div className="p-4">
                  <FaChevronRight className="text-zinc-200" />
                </div>
              </motion.div>
            </td>
          </>
        )}
      </AnimatePresence>
    </tr>
  );
}
