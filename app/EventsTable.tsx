"use client";

import type { ReactNode } from "react";
import { useMemo, useEffect, useState } from "react";
import qs from "qs";
import debounce from "@/lib/debounce";
import EventsPage from "./EventsPage";
import Toolbar from "./Toolbar";

const pageSize = 5;

export default function EventsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const search = useMemo(
    () => debounce((term: string) => setSearchTerm(term), 500),
    []
  );

  const [pagesCount, setPagesCount] = useState(1);
  let pages: ReactNode[] = [];
  for (let i = 0; i < pagesCount; i++) {
    const url = `/api/events?${qs.stringify({
      page: i,
      pageSize,
      search: searchTerm,
    })}`;

    pages.push(<EventsPage key={url} url={url} pageSize={pageSize} />);
  }

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [pagesCount]);

  return (
    <>
      <Toolbar setSearchTerm={search} />
      <table className="w-full text-zinc-500">
        <thead className="bg-zinc-100 font-semibold">
          <tr>
            <th className="w-[33%] p-4 text-left">ACTOR</th>
            <th className="w-[33%] p-4 text-left">ACTION</th>
            <th className="w-[33%] p-4 text-left">DATE</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-zinc-900">{pages}</tbody>
      </table>
      <button
        className="grid w-full place-items-center bg-zinc-100 p-4"
        onClick={() => setPagesCount(pagesCount + 1)}
      >
        LOAD MORE
      </button>
    </>
  );
}
