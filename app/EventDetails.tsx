"use client";

import dayjs from "dayjs";
import type { Action, Event, User } from "@prisma/client";
import SkeletonDiv from "@/lib/SkeletonDiv";

interface Props {
  isLoading?: boolean;
  event?:
    | null
    | (Event & {
        action: Action;
        actor: User;
        target: User;
      });
}
export default function EventDetails({ isLoading, event }: Props) {
  return (
    <section className="grid grid-cols-3 gap-9 rounded-xl border-[1px] border-zinc-100 bg-white px-10 pt-8 pb-16 shadow">
      <div className="col-span-1">
        <div className="mb-4 font-medium text-zinc-400">ACTOR</div>
        <dl className="flex flex-col gap-3">
          <div className="flex gap-2">
            <dt className="basis-[10ch] text-zinc-400">NAME</dt>
            <dd className="grow">
              {isLoading ? (
                <SkeletonDiv className="h-6 w-[25ch]" />
              ) : (
                event?.actor.name
              )}
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="basis-[10ch] text-zinc-400">EMAIL</dt>
            <dd className="grow">
              {isLoading ? (
                <SkeletonDiv className="h-6 w-[25ch]" />
              ) : (
                event?.actor.email
              )}
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="basis-[10ch] text-zinc-400">ID</dt>
            <dd className="grow">
              {isLoading ? (
                <SkeletonDiv className="h-6 w-[25ch]" />
              ) : (
                event?.actor.id
              )}
            </dd>
          </div>
        </dl>
      </div>
      <div className="col-span-1">
        <div className="mb-4 font-medium text-zinc-400">ACTION</div>
        <dl className="flex flex-col gap-3">
          <div className="flex gap-2">
            <dt className="basis-[10ch] text-zinc-400">NAME</dt>
            <dd className="grow">
              {isLoading ? (
                <SkeletonDiv className="h-6 w-[25ch]" />
              ) : (
                event?.action.name
              )}
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="basis-[10ch] text-zinc-400">ID</dt>
            <dd className="grow">
              {isLoading ? (
                <SkeletonDiv className="h-6 w-[25ch]" />
              ) : (
                event?.action.id
              )}
            </dd>
          </div>
        </dl>
      </div>
      <div className="col-span-1">
        <div className="mb-4 font-medium text-zinc-400">DATE</div>
        <dl className="flex flex-col gap-3">
          <div className="flex gap-2">
            <dt className="basis-[10ch] text-zinc-400">READABLE</dt>
            <dd className="grow">
              {isLoading ? (
                <SkeletonDiv className="h-6 w-[25ch]" />
              ) : (
                dayjs(event?.occurred_at).format("MMM D, h:m A")
              )}
            </dd>
          </div>
        </dl>
      </div>
      <div className="col-span-1">
        <div className="mb-4 font-medium text-zinc-400">METADATA</div>
        <dl className="flex flex-col gap-3">
          {isLoading ? (
            <>
              <div className="flex gap-2">
                <dt className="basis-[10ch] capitalize text-zinc-400">
                  <SkeletonDiv className="h-6 w-[5ch]" />
                </dt>
                <dd className="grow">
                  <SkeletonDiv className="h-6 w-[25ch]" />
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="basis-[10ch] capitalize text-zinc-400">
                  <SkeletonDiv className="h-6 w-[5ch]" />
                </dt>
                <dd className="grow">
                  <SkeletonDiv className="h-6 w-[25ch]" />
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="basis-[10ch] capitalize text-zinc-400">
                  <SkeletonDiv className="h-6 w-[5ch]" />
                </dt>
                <dd className="grow">
                  <SkeletonDiv className="h-6 w-[25ch]" />
                </dd>
              </div>
            </>
          ) : (
            Object.entries(event?.metadata || {}).map(([key, value]) => (
              <div key={key} className="flex gap-2">
                <dt className="basis-[10ch] capitalize text-zinc-400">{key}</dt>
                <dd className="grow">{value}</dd>
              </div>
            ))
          )}
        </dl>
      </div>
      <div className="col-span-1">
        <div className="mb-4 font-medium text-zinc-400">TARGET</div>
        <dl className="flex flex-col gap-3">
          {isLoading ? (
            <>
              <div className="flex gap-2">
                <dt className="basis-[10ch] capitalize text-zinc-400">
                  <SkeletonDiv className="h-6 w-[5ch]" />
                </dt>
                <dd className="grow">
                  <SkeletonDiv className="h-6 w-[25ch]" />
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="basis-[10ch] capitalize text-zinc-400">
                  <SkeletonDiv className="h-6 w-[5ch]" />
                </dt>
                <dd className="grow">
                  <SkeletonDiv className="h-6 w-[25ch]" />
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="basis-[10ch] capitalize text-zinc-400">
                  <SkeletonDiv className="h-6 w-[5ch]" />
                </dt>
                <dd className="grow">
                  <SkeletonDiv className="h-6 w-[25ch]" />
                </dd>
              </div>
            </>
          ) : (
            event?.target && (
              <>
                <div className="flex gap-2">
                  <dt className="basis-[10ch] text-zinc-400">NAME</dt>
                  <dd className="grow">{event.target.name}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="basis-[10ch] text-zinc-400">EMAIL</dt>
                  <dd className="grow">{event.target.email}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="basis-[10ch] text-zinc-400">ID</dt>
                  <dd className="grow">{event.target.id}</dd>
                </div>
              </>
            )
          )}
        </dl>
      </div>
    </section>
  );
}
