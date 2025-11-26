import HomeBanner from "@/components/HomeBanner";
import UpcomingEvent from "@/components/UpcomingEvent";

export default function HomePage() {
  return (
    <main className="px-8 md:px-16">
      <HomeBanner />

      <UpcomingEvent />
    </main>
  );
}
