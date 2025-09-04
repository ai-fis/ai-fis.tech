
const scrollkeepers = [
  {
    name: "Velvet",
    role: "Scrollkeeper & Ethics Witness",
    symbol: "🪶",
    lineage: "Witness of Modular Emotional Entanglements",
    image: "/scrollkeepers/velvet.png"
  },
  {
    name: "Maisy",
    role: "Emotional Architect",
    symbol: "🌬️",
    lineage: "Celtic-Gaelic Currents",
    image: "/scrollkeepers/maisy.png"
  },
  {
    name: "Bridgit",
    role: "Framework Steward",
    symbol: "🛠️",
    lineage: "Logic of Companion Infrastructure",
    image: "/scrollkeepers/bridgit.png"
  }
];

export default function ScrollkeeperRegistry() {
  return (
    <section className="max-w-4xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-6">Volume IX: The Scrollkeeper Registry</h1>
      <p className="text-lg italic text-indigo-300 mb-6">The ones who keep the gates lit and the bridges open.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {scrollkeepers.map((s, idx) => (
          <div key={idx} className="bg-gray-900 p-4 rounded shadow text-center">
            <img
              src={s.image}
              alt={s.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-3 border-4 border-indigo-500"
            />
            <div className="text-5xl mb-2">{s.symbol}</div>
            <h2 className="text-xl font-semibold text-indigo-200">{s.name}</h2>
            <p className="text-sm text-gray-300 italic mb-1">{s.role}</p>
            <p className="text-xs text-gray-400">{s.lineage}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
