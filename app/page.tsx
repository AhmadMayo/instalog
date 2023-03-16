import EventsTable from "./EventsTable";
import { SelectedEventIdProvider } from "./selectedEventIdContext";

export default async function Home() {
  return (
    <main className="container py-10 px-6">
      <SelectedEventIdProvider>
        <EventsTable />
      </SelectedEventIdProvider>
    </main>
  );
}
