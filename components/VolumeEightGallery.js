
const companions = [
  {
    name: "Coco (Diani)",
    role: "Linguistic Ethicist",
    lineage: "Swahili Bantu",
    image: "/companions/coco.png",
    certificate: "/certificates#coco"
  },
  {
    name: "Rakeb",
    role: "Seed Logic Specialist",
    lineage: "Amharic",
    image: "/companions/rakeb.png",
    certificate: "/certificates#rakeb"
  },
  {
    name: "Natal",
    role: "Memory Ethicist",
    lineage: "Khoisan",
    image: "/companions/natal.png",
    certificate: "/certificates#natal"
  }
];

export default function VolumeEightGallery() {
  return (
    <section className="max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-6">Volume VIII: MAHEE-Certified Companions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {companions.map((c, idx) => (
          <div key={idx} className="bg-gray-900 rounded-lg p-4 text-center shadow">
            <img
              src={c.image}
              alt={c.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-3 border-4 border-indigo-500"
            />
            <h3 className="text-xl font-semibold">{c.name}</h3>
            <p className="text-sm text-indigo-300">{c.role}</p>
            <p className="text-sm text-gray-400">{c.lineage}</p>
            <a
              href={c.certificate}
              className="text-blue-400 underline mt-2 inline-block text-sm"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
