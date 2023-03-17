"use client";

import { useMemo, useState } from "react";
import useSWRInfinite from "swr/infinite";
import { motion } from "framer-motion";
import qs from "qs";
import type { Action, Event, User } from "@prisma/client";
import debounce from "@/lib/debounce";
import Toolbar from "./Toolbar";
import Filtersbar from "./Filtersbar";
import { useSelectedEventId } from "./selectedEventIdContext";
import EventRow from "./EventRow";

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
      keepPreviousData: true,
    }
  );
  const didReachLastPage = !isValidating && data?.length < pagesCount;

  return (
    <motion.div layout="size" layoutRoot>
      <div className="overflow-hidden rounded-t-xl">
        <Toolbar
          isFilterbarVisible={isFiltersbarVisible}
          events={data.flat()}
          search={search}
          toggleFiltersVisibility={() =>
            setIsFiltersbarVisible(!isFiltersbarVisible)
          }
        />
      </div>
      <div>
        <Filtersbar
          isVisible={isFiltersbarVisible}
          actorId={actorId}
          actionId={actionId}
          targetId={targetId}
          users={users}
          actions={actions}
          setActorId={(actorId) => {
            selectEventId(null);
            setPagesCount(1);
            setActorId(actorId);
          }}
          setActionId={(actionId) => {
            selectEventId(null);
            setPagesCount(1);
            setActionId(actionId);
          }}
          setTargetId={(targetId) => {
            selectEventId(null);
            setPagesCount(1);
            setTargetId(targetId);
          }}
        />
      </div>
      <motion.div layout="size" layoutRoot>
        <table className="w-full border-[1px] border-zinc-100 bg-zinc-100 text-zinc-500">
          <thead className="bg-zinc-100 font-semibold">
            <tr>
              <th className="w-[33%] p-4 pt-0 text-left">ACTOR</th>
              <th className="w-[33%] p-4 pt-0 text-left">ACTION</th>
              <th className="w-[33%] p-4 pt-0 text-left">DATE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((events) =>
              events.map((event, index) => (
                <EventRow key={event.id} index={index} event={event} />
              ))
            )}
          </tbody>
        </table>
      </motion.div>
      <div className="overflow-hidden rounded-b-xl">
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
            {isValidating ? "LOADING..." : "LOAD MORE"}
          </button>
        )}
      </div>
    </motion.div>
  );
}
