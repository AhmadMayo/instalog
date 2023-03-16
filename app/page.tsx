import { stringify } from "devalue";
import getEvents from "./api/events/getEvents";
import Events from "./Events";

export default async function Home() {
  const { data: events, count: eventsCount } = await getEvents();

  return (
    <main className="container">
      <div className="border-[1px] border-zinc-100 rounded-xl overflow-hidden">
        <Events
          eventsStringified={stringify(events)}
          eventsCount={eventsCount}
        />
      </div>
    </main>
  );
}
