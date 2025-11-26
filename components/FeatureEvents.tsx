import EventCard from "./EventCard";
import { Event } from "@/types/event";

interface Props {
  events: Event[];
}

export default function FeatureEvents({ events }: Props) {
  return (
    <div
      className="space-y-6"
    >
      <h2 className="subtitle">Feature Events</h2>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-5
      ">
        {
          events.map(event =>
            <EventCard
              key={event._id}
              event={event}
            />
          )
        }
      </div>
    </div>
  );
}
