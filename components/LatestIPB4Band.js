// components/LatestIPB4Band.js
export default function LatestIPB4Band({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="mt-12 border-t pt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Latest IPB-4</h2>
        <a href="/scrolls?tab=ipb4" className="text-sm underline">View all</a>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((e) => (
          <a
            key={e.id}
            href={`/scrolls/${e.slug}`}
            className="block rounded-xl border p-4 shadow-sm hover:shadow"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{e.title}</h3>
              <span className="text-xs px-2 py-1 rounded-full border">
                {e.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600 line-clamp-3">{e.summary}</p>
            <div className="mt-3 text-xs text-gray-500">OU: {e.ou?.join(", ")}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
