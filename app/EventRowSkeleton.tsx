"use client";

import SkeletonDiv from "@/lib/SkeletonDiv";

export default function EventRowSkeleton() {
  return (
    <tr className="bg-white transition-colors">
      <td className="p-4">
        <div className="flex gap-3">
          <SkeletonDiv className="h-6 w-6 rounded-full" />
          <SkeletonDiv className="h-6 w-[25ch]" />
        </div>
      </td>
      <td className="p-4">
        <SkeletonDiv className="h-6 w-[25ch]" />
      </td>
      <td className="p-4">
        <SkeletonDiv className="h-6 w-[25ch]" />
      </td>
    </tr>
  );
}
