"use client";

import dayjs from "dayjs";
import { FaChevronRight } from "react-icons/fa";
import type { Action, Event, User } from "@prisma/client";
import classes from "./EventRow.module.css";

interface Props {
  index: number;
  event: Event & {
    actor: User;
    action: Action;
  };
}
export default function EventRow({ index, event }: Props) {
  return (
    <tr
      className="bg-white transition-colors hover:cursor-pointer hover:bg-zinc-100"
      role="button"
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
