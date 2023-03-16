"use client";

import type { Action, Event, User } from "@prisma/client";
import EventRow from "./EventRow";

interface Props {
  events: Array<
    Event & {
      action: Action;
      actor: User;
    }
  >;
}
export default function EventsTable({ events }: Props) {
  return (
    <table className="w-full text-zinc-500">
      <thead className="bg-zinc-100 font-semibold">
        <tr>
          <th className="w-[33%] p-4 text-left">ACTOR</th>
          <th className="w-[33%] text-left p-4">ACTION</th>
          <th className="w-[33%] text-left p-4">DATE</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="text-zinc-900">
        {events.map((event, index) => (
          <EventRow key={event.id} index={index} event={event} />
        ))}
      </tbody>
    </table>
  );
}
