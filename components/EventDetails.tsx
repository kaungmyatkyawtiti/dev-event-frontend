import Image from "next/image";
import { Event } from "@/types/event";
import { Calendar, Clock, MapPin, Presentation, User } from "lucide-react";
import IconSet from "./IconSet";
import BookingEvent from "./BookingEvent";
import SimilarEvent from "./SimilarEvent";
import { useRouter } from "next/navigation";
import BackBtn from "./BackBtn";

const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => (
  <div className="space-y-3">
    <h2 className="subtitle">Agenda</h2>
    <ul className="space-y-1">
      {agendaItems.map((item, index) =>
        <li key={index} className="desc">{item}</li>
      )}
    </ul>
  </div>
);

const EventTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag, ind) =>
      <span
        key={ind}
        className="bg-event-green px-4 py-2 rounded-full text-sm font-medium shadow-sm text-white"
      >
        {tag}
      </span>
    )}
  </div>
);

interface EventDetailProps {
  event: Event;
}

const EventDetails = ({ event }: EventDetailProps) => {
  const router = useRouter();

  const handleBack = () => router.push("/events");

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10"
      id="event"
    >
      <div className="flex items-center gap-4 mb-6">
        <BackBtn onBack={handleBack} />
        <h2 className="text-4xl font-bold">{event.title}</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LHS - event content */}
        <div className="lg:col-span-2 space-y-5">
          <div className="relative h-100 max-w-xl overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="auto-fit"
              className="rounded-lg object-cover object-bottom"
            />
          </div>

          <div className="space-y-8">
            <p className="text-foreground/90 text-lg font-semibold">{event.description}</p>

            <section className="space-y-3">
              <h2 className="subtitle">Overview</h2>
              <p className="desc">{event.overview}</p>
            </section>

            <section className="space-y-3">
              <h2 className="subtitle">Event Details</h2>
              <div className="desc space-y-1">
                <IconSet><Calendar size={18} />{event.date}</IconSet>
                <IconSet><Clock size={18} />{event.time}</IconSet>
                <IconSet><MapPin size={18} />{event.location}</IconSet>
                <IconSet><Presentation size={18} />{event.mode}</IconSet>
                <IconSet><User size={18} />{event.audience}</IconSet>
              </div>
            </section>

            <EventAgenda agendaItems={event.agenda} />

            <section className="space-y-3">
              <h2 className="subtitle">About the Organizer</h2>
              <p className="desc">{event.organizer}</p>
            </section>

            <EventTags tags={event.tags} />
          </div>
        </div>

        {/* RHS - booking form */}
        <aside className="space-y-5">
          <h2 className="subtitle">Book Your Spot</h2>
          <BookingEvent />
        </aside>
      </div>

      {/* similar events */}
      <div className="mt-12 space-y-5">
        <h2 className="subtitle">Similar Events</h2>
        <SimilarEvent
          slug={event.slug}
        />
      </div>
    </section>
  );
};

export default EventDetails;
