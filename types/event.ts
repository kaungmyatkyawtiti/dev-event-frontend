export interface DummyEvent {
  id: number;
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export interface Event {
  _id: string;
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: string;
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
