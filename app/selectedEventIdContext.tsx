"use client";

import type { PropsWithChildren } from "react";
import { useContext, useState, createContext } from "react";

type SelectedId = string | null;
type Select = (id: string | null) => void;
const SelectedEventIdContext = createContext<[SelectedId, Select]>([
  null,
  () => undefined,
]);

function SelectedEventIdProvider({ children }: PropsWithChildren<{}>) {
  const selectedIdState = useState<string | null>(null);

  return (
    <SelectedEventIdContext.Provider value={selectedIdState}>
      {children}
    </SelectedEventIdContext.Provider>
  );
}

function useSelectedEventId() {
  return useContext(SelectedEventIdContext);
}

export { SelectedEventIdProvider, useSelectedEventId };
