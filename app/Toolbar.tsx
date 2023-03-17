"use client";
import { IoDownload, IoFilter } from "react-icons/io5";
import type { Action, Event, User } from "@prisma/client";
import exportCSV from "./exportCSV";

interface Props {
  isFilterbarVisible: boolean;
  events: Array<
    Event & {
      action: Action;
      actor: User;
    }
  >;
  search: (term: string) => void;
  toggleFiltersVisibility: () => void;
}
export default function Toolbar({
  isFilterbarVisible,
  events,
  search,
  toggleFiltersVisibility,
}: Props) {
  return (
    <div className="flex bg-zinc-100 p-4">
      <input
        className="grow rounded-l-lg border-[1px] border-r-0 border-zinc-200 bg-transparent p-3 text-zinc-600 placeholder:text-zinc-400 focus-visible:z-10"
        placeholder="Search name, email or action..."
        onChange={(event) => search(event.target.value)}
      />
      <button
        className="flex items-center border-[1px] border-r-0 border-zinc-200 bg-transparent/0 p-3 text-zinc-600 transition-colors duration-300 hover:bg-transparent/5 focus-visible:z-10"
        onClick={toggleFiltersVisibility}
      >
        <div className="flex gap-1">
          <IoFilter
            className={`text-sm transition-colors duration-300 ${
              isFilterbarVisible ? "text-zinc-600" : "text-zinc-300"
            }`}
          />
          <span className="text-xs">FILTERS</span>
        </div>
      </button>
      <button
        className="flex items-center rounded-r-lg border-[1px] border-zinc-200 bg-transparent/0 p-3 text-zinc-600 transition-colors duration-300 hover:bg-transparent/5 focus-visible:z-10"
        onClick={() => exportCSV(events)}
      >
        <div className="flex gap-1">
          <IoDownload className="text-sm" />
          <span className="text-xs">EXPORT</span>
        </div>
      </button>
    </div>
  );
}
