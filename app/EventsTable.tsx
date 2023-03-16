"use client";

import type { ReactNode } from "react";
import { useMemo, useEffect, useState } from "react";
import qs from "qs";
import debounce from "@/lib/debounce";
import EventsPage from "./EventsPage";
import Toolbar from "./Toolbar";
import { useSelectedEventId } from "./selectedEventIdContext";

const pageSize = 5;

export default function EventsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const search = useMemo(
    () =>
      debounce((term: string) => {
        selectEventId(null);
        setDidReachLastPage(false);
        setPagesCount(1);
        setSearchTerm(term);
      }, 500),
    []
  );

  const [_, selectEventId] = useSelectedEventId();

  const [pagesCount, setPagesCount] = useState(1);
  const [didReachLastPage, setDidReachLastPage] = useState(false);
  let pages: ReactNode[] = [];
  for (let i = 0; i < pagesCount; i++) {
    const url = `/api/events?${qs.stringify({
      page: i,
      pageSize,
      search: searchTerm,
    })}`;

    pages.push(
      <EventsPage
        key={url}
        url={url}
        pageSize={pageSize}
        onNoMoreData={() => setDidReachLastPage(true)}
      />
    );
  }

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [pagesCount]);

  return (
    <>
      <div className="overflow-hidden rounded-t-xl">
        <Toolbar setSearchTerm={search} />
      </div>
      <table className="w-full border-[1px] border-zinc-100 text-zinc-500">
        <thead className="bg-zinc-100 font-semibold">
          <tr>
            <th className="w-[33%] p-4 pt-0 text-left">ACTOR</th>
            <th className="w-[33%] p-4 pt-0 text-left">ACTION</th>
            <th className="w-[33%] p-4 pt-0 text-left">DATE</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-zinc-900">{pages}</tbody>
      </table>
      <div className="overflow-hidden rounded-b-xl">
        {didReachLastPage ? (
          <div className="grid w-full place-items-center bg-zinc-300 p-4 text-zinc-600">
            NO MORE EVENTS
          </div>
        ) : (
          <button
            className="grid w-full place-items-center bg-zinc-100 p-4"
            onClick={() => setPagesCount(pagesCount + 1)}
          >
            LOAD MORE
          </button>
        )}
      </div>
    </>
  );
}
