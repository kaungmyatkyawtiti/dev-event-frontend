import { ArrowDown } from "lucide-react";
import ExploreBtn from "./ExploreBtn";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <section
      className="flex flex-col items-start lg:items-center justify-center 
      text-start lg:text-center gap-8 min-h-dvh relative"
    >
      <h2 className="text-[min(8vw,3.5rem)] text-foreground font-bold">
        The Hub for Every Dev
        <p>Event You Can't Miss </p>
      </h2>

      <p className="text-[min(3.8vw,1.4rem)] text-foreground/85">
        Hackathons, Meetups, and Conferences — All in one place, curated just for developers like you.
      </p>

      <ExploreBtn />

      <Link
        href="#upcoming-event"
        className="absolute bottom-25 left-1/2 -translate-x-1/2 
        animate-bounce bg-accent p-2 rounded-full"
      >
        <ArrowDown size={28} className="text-foreground" />
      </Link>
    </section >
  )
}
