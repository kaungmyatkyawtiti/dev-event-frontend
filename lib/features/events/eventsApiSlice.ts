import { Event } from "@/types/event";
import { apiBaseUrl } from "@/utils/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventsApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl + "/api",
  }),

  reducerPath: "eventsApi",

  endpoints: (build) => ({
    getAllEvents: build.query<Event[], void>({
      query: () => `/events`,
      transformResponse: (response: { data: Event[] }, meta, arg) => response.data,
    }),

    getEventBySlug: build.query<Event, string>({
      query: (slug) => `/events/${slug}`,
      transformResponse: (response: { data: Event }, meta, arg) => response.data,
    }),

    getSimilarEvent: build.query<Event[], string>({
      query: (slug) => `/events/${slug}/similar`,
      transformResponse: (response: { data: Event[] }, meta, arg) => response.data,
    }),

  })
})

export const {
  useGetAllEventsQuery,
  useGetEventBySlugQuery,
  useGetSimilarEventQuery,
} = eventsApiSlice;
