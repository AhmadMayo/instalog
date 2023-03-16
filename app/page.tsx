import getActions from "./api/actions/getActions";
import getUsers from "./api/users/getUsers";
import EventsTable from "./EventsTable";
import { SelectedEventIdProvider } from "./selectedEventIdContext";

export default async function Home() {
  const [users, actions] = await Promise.all([getUsers(), getActions()]);
  return (
    <main className="container py-10 px-6">
      <SelectedEventIdProvider>
        <EventsTable users={users} actions={actions} />
      </SelectedEventIdProvider>
    </main>
  );
}
