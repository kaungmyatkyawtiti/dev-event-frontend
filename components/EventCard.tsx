import { Event } from "@/types/event";
import { CalendarClock, CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link"

interface Props {
  event: Event;
}

export default function EventCard({
  event
}: Props) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-border hover-effect"
    >
      <Image
        src={event.image}
        alt={event.title}
        width={300}
        height={300}
        loading="eager"
        className="w-full h-auto object-cover object-bottom"
      />

      <div className="p-4 flex flex-col gap-5">
        {/* Location */}
        <div className="flex items-center gap-2 text-event-green font-medium">
          <MapPin size={20} className="opacity-80" />
          <span>{event.location}</span>
        </div>

        {/* Title */}
        <p className="font-semibold text-lg text-foreground leading-tight">
          {event.title}
        </p>

        {/* Date & Time */}
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} className="opacity-80" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarClock size={16} className="opacity-80" />
            <span>{event.time}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
