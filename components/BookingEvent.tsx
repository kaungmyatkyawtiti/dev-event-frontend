export default function BookingEvent() {
  return (
    <div
      className="max-w-sm p-6 bg-card rounded-md shadow-sm space-y-6 border border-border"
    >
      <h2 className="text-lg font-semibold text-center">
        Join <span className="text-event-green font-bold">10</span> people who have already booked their spot!
      </h2>

      <div className="space-y-3">
        <div className="flex flex-col gap-2">
          <label className="font-medium">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-accent border border-border/60 focus:border-event-green focus:ring focus:ring-event-green outline-none hover-effect"
          />
        </div>
        <button
          className="w-full py-2 rounded-lg bg-event-green 
        hover:bg-event-green/90 hover:shadow-md
        focus:outline-none active:scale-95 
        text-white font-medium hover-effect"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
