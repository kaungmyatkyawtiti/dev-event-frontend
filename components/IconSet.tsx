import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IconSetProps {
  className?: string;
  children: ReactNode;
}

export default function IconSet({
  className,
  children,
}: IconSetProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        className
      )}
    >
      {children}
    </div>
  )
}

