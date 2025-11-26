"use client";

import FeatureEvents from "@/components/FeatureEvents";
import { useGetAllEventsQuery } from "@/lib/features/events/eventsApiSlice";

export default function EventPage() {
  const { data, isError, isLoading, isSuccess, refetch, isFetching } = useGetAllEventsQuery();

  if (!data) return <div>No Events</div>

  console.log("data", data);

  return (
    <div className="px-4 lg:px-16 my-10">
      <FeatureEvents
        events={data}
      />
    </div>
  )
}

