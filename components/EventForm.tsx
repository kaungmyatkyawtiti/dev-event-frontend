export default function EventForm() {
  return (
    <div className="space-y-6">
      <h2 className="subtitle">Create Event</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
        />

        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
        />

        <textarea
          placeholder="Overview"
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Venue"
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          className="w-full p-2 border rounded"
        />

        <input
          type="time"
          className="w-full p-2 border rounded"
        />

        <select className="w-full p-2 border rounded bg-background">
          <option value="">Select Mode</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
          <option value="hybrid">Hybrid</option>
        </select>

        <input
          type="text"
          placeholder="Audience"
          className="w-full p-2 border rounded"
        />

        <div className="space-y-2">
          <label className="font-medium">Agenda (array)</label>

          <input
            type="text"
            placeholder="Agenda item 1"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Agenda item 2"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Agenda item 3"
            className="w-full p-2 border rounded"
          />
        </div>

        <input
          type="text"
          placeholder="Organizer"
          className="w-full p-2 border rounded"
        />

        <div className="space-y-2">
          <label className="font-medium">Tags (array)</label>

          <input
            type="text"
            placeholder="Tag 1"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Tag 2"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Tag 3"
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-event-green text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
