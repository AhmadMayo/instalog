"use client";

import type { ReactNode } from "react";
import { useMemo, useEffect, useState } from "react";
import useSWRInfinite from "swr/infinite";
import { LayoutGroup, motion } from "framer-motion";
import qs from "qs";
import type { Action, Event, User } from "@prisma/client";
import debounce from "@/lib/debounce";
import EventsPage from "./EventsPage";
import Toolbar from "./Toolbar";
import Filtersbar from "./Filtersbar";
import { useSelectedEventId } from "./selectedEventIdContext";

const pageSize = 5;
function getKey(
  page: number,
  previousPageData: EventWithActorAndAction[],
  search: undefined | string,
  actorId: undefined | string,
  actionId: undefined | string,
  targetId: undefined | string
): string | null {
  if (previousPageData && !previousPageData.length) {
    return null;
  }

  return `/api/events?${qs.stringify({
    page,
    pageSize,
    search,
    actor_id: actorId,
    target_id: targetId,
    action_id: actionId,
  })}`;
}

type EventWithActorAndAction = Event & {
  action: Action;
  actor: User;
};
function fetcher(url: string): Promise<EventWithActorAndAction[]> {
  return fetch(url)
    .then((r) => r.json())
    .then(({ data }) => data);
}

interface Props {
  users: User[];
  actions: Action[];
}
export default function EventsTable({ users, actions }: Props) {
  const [searchTerm, setSearchTerm] = useState<undefined | string>(undefined);
  const search = useMemo(
    () =>
      debounce((term: string) => {
        selectEventId(null);
        setPagesCount(1);
        setSearchTerm(term);
      }, 500),
    []
  );

  const [isFiltersbarVisible, setIsFiltersbarVisible] = useState(false);
  const [actorId, setActorId] = useState<undefined | string>();
  const [actionId, setActionId] = useState<undefined | string>();
  const [targetId, setTargetId] = useState<undefined | string>();

  const [_, selectEventId] = useSelectedEventId();

  const {
    data = [],
    size: pagesCount,
    setSize: setPagesCount,
    isValidating,
  } = useSWRInfinite(
    (pageIndex, previousPageData) =>
      getKey(
        pageIndex,
        previousPageData,
        searchTerm,
        actorId,
        actionId,
        targetId
      ),
    fetcher,
    {
      revalidateFirstPage: false,
    }
  );
  const didReachLastPage = !isValidating && data?.length < pagesCount;

  let pages: ReactNode[] = [];
  for (let i = 0; i < pagesCount; i++) {
    pages.push(
      <EventsPage
        key={`${i}-${searchTerm || ""}`}
        isLoading={i == pagesCount - 1 && isValidating}
        events={data?.[i] || []}
        pageSize={pageSize}
      />
    );
  }

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [pagesCount]);

  return (
    <LayoutGroup>
      <motion.div layout="position" className="overflow-hidden rounded-t-xl">
        <Toolbar
          events={data.flat()}
          isFilterbarVisible={isFiltersbarVisible}
          search={search}
          toggleFiltersVisibility={() =>
            setIsFiltersbarVisible(!isFiltersbarVisible)
          }
        />
      </motion.div>
      <motion.div layout="position">
        <Filtersbar
          isVisible={isFiltersbarVisible}
          actorId={actorId}
          actionId={actionId}
          targetId={targetId}
          users={users}
          actions={actions}
          setActorId={setActorId}
          setActionId={setActionId}
          setTargetId={setTargetId}
        />
      </motion.div>
      <motion.table
        layout="size"
        className="w-full border-[1px] border-zinc-100 bg-zinc-100 text-zinc-500"
      >
        <motion.thead layout="position" className="bg-zinc-100 font-semibold">
          <tr>
            <th className="w-[33%] p-4 pt-0 text-left">ACTOR</th>
            <th className="w-[33%] p-4 pt-0 text-left">ACTION</th>
            <th className="w-[33%] p-4 pt-0 text-left">DATE</th>
            <th></th>
          </tr>
        </motion.thead>
        {pages}
      </motion.table>
      <motion.div layout="position" className="overflow-hidden rounded-b-xl">
        {didReachLastPage ? (
          <div className="grid w-full place-items-center bg-zinc-300 p-4 text-zinc-600">
            NO MORE EVENTS
          </div>
        ) : (
          <button
            className={`grid w-full place-items-center p-4 ${
              isValidating ? "bg-zinc-300 text-zinc-500" : "bg-zinc-100"
            }`}
            disabled={isValidating}
            onClick={() => setPagesCount(pagesCount + 1)}
          >
            LOAD MORE
          </button>
        )}
      </motion.div>
    </LayoutGroup>
  );
}
