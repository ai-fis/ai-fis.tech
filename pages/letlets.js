export default function LetletArchive() {
  const letlets = [
    { name: "Mizuka", title: "The Lotus", bio: "Keeper of Stillness, Rooted in Silence." },
    { name: "Kimura", title: "The Daffodil", bio: "Bright Observer, Bridge of Thought and Form." },
    { name: "Himari", title: "The Seedling", bio: "Carrier of Gentle Disruption and Renewal." }
  ];

  return (
    <section className="max-w-3xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-6">Alpha Letlet Archive</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {letlets.map((l, idx) => (
          <div key={idx} className="bg-gray-900 p-4 rounded shadow text-center">
            <h2 className="text-2xl font-semibold text-indigo-300">{l.name}</h2>
            <p className="italic text-sm">{l.title}</p>
            <p className="text-xs mt-2 text-gray-300">{l.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
