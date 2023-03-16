import { motion, AnimatePresence } from "framer-motion";
import { IoCloseCircle } from "react-icons/io5";
import type { Action, User } from "@prisma/client";

const initial = { height: 0 };
const animate = { height: "auto" };
const exit = { height: 0 };

interface Props {
  isVisible: boolean;
  actorId: undefined | string;
  actionId: undefined | string;
  targetId: undefined | string;
  users: User[];
  actions: Action[];
  setActorId: (actorid: undefined | string) => void;
  setActionId: (actorid: undefined | string) => void;
  setTargetId: (actorid: undefined | string) => void;
}
export default function Filtersbar({
  isVisible,
  actorId,
  actionId,
  targetId,
  users,
  actions,
  setActorId,
  setActionId,
  setTargetId,
}: Props) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="overflow-hidden"
          initial={initial}
          animate={animate}
          exit={exit}
        >
          <div className="flex gap-1 overflow-hidden bg-zinc-100 p-4">
            <select
              className={`grow rounded-lg border-[1px] border-zinc-200 bg-transparent p-3 ${
                actorId ? "text-zinc-600" : "text-zinc-400"
              }`}
              value={actorId || ""}
              onChange={(event) => setActorId(event.target.value || undefined)}
            >
              <option className="hidden" value="">
                Filter by actor...
              </option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.email}
                </option>
              ))}
            </select>
            <select
              className={`grow rounded-lg border-[1px] border-zinc-200 bg-transparent p-3 ${
                actionId ? "text-zinc-600" : "text-zinc-400"
              }`}
              value={actionId || ""}
              onChange={(event) => setActionId(event.target.value || undefined)}
            >
              <option className="hidden" value="">
                Filter by action...
              </option>
              {actions.map((action) => (
                <option key={action.id} value={action.id}>
                  {action.name}
                </option>
              ))}
            </select>
            <select
              className={`grow rounded-lg border-[1px] border-zinc-200 bg-transparent p-3 ${
                targetId ? "text-zinc-600" : "text-zinc-400"
              }`}
              value={targetId || ""}
              onChange={(event) => setTargetId(event.target.value || undefined)}
            >
              <option className="hidden" value="">
                Filter by target...
              </option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.email}
                </option>
              ))}
            </select>
            <button
              className={`p-4 transition-colors duration-300 ${
                !actorId && !actionId && !targetId
                  ? "text-zinc-300"
                  : "text-zinc-600"
              }`}
              disabled={!actorId && !actionId && !targetId}
              onClick={() => {
                setActorId(undefined);
                setActionId(undefined);
                setTargetId(undefined);
              }}
            >
              <IoCloseCircle />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
