import { useGetSimilarEventQuery } from "@/lib/features/events/eventsApiSlice";
import EventCard from "./EventCard";

interface SimilarEventProps {
  slug: string;
}

export default function SimilarEvent({ slug }: SimilarEventProps) {
  const { data, isError, isLoading, isSuccess, refetch, isFetching } = useGetSimilarEventQuery(slug);

  if (!data) return <div>No Similar Event</div>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        data.map(event =>
          <EventCard
            key={event._id}
            event={event}
          />
        )
      }
    </div>
  )
}

