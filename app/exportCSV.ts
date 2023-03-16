import dayjs from "dayjs";
import type { Action, Event, User } from "@prisma/client";

type EventWithActorAndAction = Event & {
  action: Action;
  actor: User;
};

export default function exportCSV(events: EventWithActorAndAction[]) {
  const rows = events.map(
    (event) =>
      `"${event.actor.email}","${event.action.name}","${dayjs(
        event.occurred_at
      ).format("MMM D, h:m A")}"`
  );

  const content = rows.join("\n");
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const a = document.createElement("a");
  a.setAttribute("href", URL.createObjectURL(blob));
  a.setAttribute("download", "events.csv");
  a.click();
}
