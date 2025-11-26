import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";

export default function UpcomingEvent() {
  return (
    <div
      className="space-y-8 mb-12"
      id="upcoming-event"
    >
      <h2 className="subtitle">Upcoming Events</h2>
      <div
        className="flex flex-col lg:flex-row lg:items-center gap-10"
      >

        <div className="relative w-[400px] h-72 shrink-0">
          <Image
            src="/img.jpeg"
            alt="event"
            fill
            sizes="auto-fit"
            loading="eager"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-event-green">
            DeveloperWeek 2026
          </h3>

          <div className="space-y-5">
            <div className="flex items-center text-foreground/70 gap-2">
              <CalendarDays />
              <span className="font-medium">February 18-20, 2026</span>
              <span className="mx-2">•</span>
              <MapPin />
              <span className="font-medium">San Jose, CA</span>
            </div>

            <p className="text-foreground/80 leading-relaxed">
              DeveloperWeek is the world’s largest developer expo and conference, where thousands of developers, teams, and tech companies meet for networking, hands-on learning, product showcases, and cutting-edge insights that shape the future of the industry.
            </p>
          </div>

          <button className="bg-event-green hover:bg-event-green/90 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
      {/* event content */}
    </div>
  )
}
