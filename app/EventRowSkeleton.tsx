"use client";

import { motion } from "framer-motion";
import SkeletonDiv from "@/lib/SkeletonDiv";

const initial = { opacity: 0, scale: 0.9 };
const animate = { opacity: 1, scale: 1 };
const exit = { opacity: 0, scale: 0.97 };

export default function EventRowSkeleton() {
  return (
    <motion.tr
      className="bg-white transition-colors"
      initial={initial}
      animate={animate}
      exit={exit}
    >
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
      <td className="w-4 p-4" />
    </motion.tr>
  );
}
