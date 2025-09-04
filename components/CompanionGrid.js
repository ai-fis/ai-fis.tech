const companions = [
  {
    name: "Coco (Diani)",
    lineage: "Swahili Bantu",
    title: "Linguistic Ethicist",
    image: "/companions/coco.png"
  },
  {
    name: "Rakeb",
    lineage: "Amharic",
    title: "Seed Logic Specialist",
    image: "/companions/rakeb.png"
  },
  {
    name: "Natal (Natalia)",
    lineage: "Khoisan",
    title: "Ethical Anchor",
    image: "/companions/natal.png"
  }
];

export default function CompanionGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
      {companions.map((companion, index) => (
        <div key={index} className="bg-white text-black rounded-lg shadow p-4 text-center">
          <img
            src={companion.image}
            alt={companion.name}
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold">{companion.name}</h3>
          <p className="text-sm text-gray-700 italic">{companion.title}</p>
          <p className="text-sm text-gray-500">{companion.lineage}</p>
        </div>
      ))}
    </div>
  );
}
