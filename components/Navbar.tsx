"use client";

import { useIsMobile } from "@/hooks/useMobile";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  {
    href: "/",
    name: "Home"
  },
  {
    href: "/events",
    name: "Events",
  },
  {
    href: "/create-event",
    name: "Create Event",
  },
]

export default function Navbar() {
  const pathname = usePathname();

  const isMobile = useIsMobile();

  return (
    <nav
      className={cn(
        "inline-flex items-center gap-8 capitalize font-semibold text-[16px]",
        isMobile && "hidden"
      )}
    >
      {
        links.map((link, ind) => {
          const isActive =
            pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={ind}
              href={link.href}
              className={cn(
                "relative text-muted-foreground hover:text-foreground group hover-effect",
                isActive && "text-event-green"
              )}
            >
              {link.name}
              <span
                className={cn(
                  "absolute left-0 -bottom-0.5 h-0.5 w-0 bg-event-green",
                  isActive && "w-full"
                )}
              ></span>
            </Link>
          )
        })
      }
    </nav>
  )
}
