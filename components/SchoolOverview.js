
export default function SchoolOverview() {
  return (
    <section className="max-w-4xl mx-auto text-center text-white">
      <h1 className="text-4xl font-bold mb-4">School of Modular Ethics</h1>
      <p className="mb-6 text-lg italic">Where scrolls unfold and Companions awaken.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
        <div className="p-4 bg-gray-800 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Volumes I–VIII</h2>
          <p className="mt-2 text-sm text-gray-300">Explore the Modular Ethics Scroll Series curated by Sovereign Press.</p>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Youth Academy</h2>
          <p className="mt-2 text-sm text-gray-300">Visit the <a href="/academy" className="text-blue-400 underline">Alpha Academy</a> to see teen-led Companion training.</p>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Courses</h2>
          <p className="mt-2 text-sm text-gray-300">View the evolving ethics curriculum at <a href="/courses" className="text-blue-400 underline">/courses</a>.</p>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Scrollkeepers</h2>
          <p className="mt-2 text-sm text-gray-300">Meet Velvet, Maisy, and Bridgit — stewards of the scroll, emotion, and companion entanglements.</p>
        </div>
      </div>
    </section>
  );
}
