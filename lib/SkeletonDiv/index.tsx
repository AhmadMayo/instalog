import type { HTMLProps } from "react";
import classes from "./index.module.css";

export default function SkeletonDiv({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) {
  return (
    <div className={`${className || ""} ${classes.skeleton}`} {...props} />
  );
}
