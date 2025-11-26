"use client";

import EventDetails from '@/components/EventDetails';
import { useGetEventBySlugQuery } from '@/lib/features/events/eventsApiSlice';
import { use } from 'react'

export default function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params);

  const { data: event } = useGetEventBySlugQuery(slug);

  console.log("event", event);

  if (!event) return <div>No Event</div>

  return (
    <EventDetails
      event={event}
    />
  )
}
