import EventsTable from "./EventsTable";

export default async function Home() {
  return (
    <main className="container py-10 px-6">
      <div className="overflow-hidden rounded-xl border-[1px] border-zinc-100">
        <EventsTable />
      </div>
    </main>
  );
}
