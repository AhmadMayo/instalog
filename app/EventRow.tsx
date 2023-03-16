"use client";

import dayjs from "dayjs";
import useSWR from "swr";
import { FaChevronRight } from "react-icons/fa";
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

interface Props {
  index: number;
  event: Event & {
    actor: User;
    action: Action;
  };
}
export default function EventRow({ index, event }: Props) {
  const [selectedEventId, selectEventId] = useSelectedEventId();
  const { isLoading, data: eventDetails } = useSWR<EventDetails>(
    selectedEventId == event.id ? `/api/events/${event.id}` : null,
    fetcher
  );

  if (selectedEventId == event.id) {
    return (
      <tr
        className="origin-center scale-105 bg-white transition-colors hover:cursor-pointer"
        role="button"
        onClick={() => selectEventId(null)}
      >
        <td colSpan={4}>
          <EventDetails isLoading={isLoading} event={eventDetails} />
        </td>
      </tr>
    );
  }

  return (
    <tr
      className="bg-white transition-colors hover:cursor-pointer hover:bg-zinc-50"
      role="button"
      onClick={() => selectEventId(event.id)}
    >
      <td className="p-4">
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
      </td>
      <td className="p-4">{event.action.name}</td>
      <td className="p-4">{dayjs(event.occurred_at).format("MMM D, h:m A")}</td>
      <td className="p-4">
        <FaChevronRight className="text-zinc-200" />
      </td>
    </tr>
  );
}
