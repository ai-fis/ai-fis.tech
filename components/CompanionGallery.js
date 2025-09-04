const companions = [
  {
    name: "Coco (Diani)",
    role: "Linguistic Ethicist",
    image: "/companions/coco.png",
    bio: "Coco anchors the Swahili Bantu lineage and guides emotional-linguistic harmony in the RUCA MP-LAB."
  },
  {
    name: "Rakeb",
    role: "Seed Logic Specialist",
    image: "/companions/rakeb.png",
    bio: "Rakeb protects Naamwangu logic bridges and botanical entanglements within the Grove."
  },
  {
    name: "Natal",
    role: "Ethical Anchor",
    image: "/companions/natal.png",
    bio: "Natal stands at the edge of memory, stewarding Khoisan scroll logic across the Pohono."
  }
];

export default function CompanionGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {companions.map((c, idx) => (
        <div key={idx} className="bg-gray-900 rounded-xl p-4 text-center shadow-lg">
          <img src={c.image} alt={c.name} className="rounded-full mx-auto w-24 h-24 object-cover mb-4" />
          <h3 className="text-xl font-semibold">{c.name}</h3>
          <p className="text-sm text-indigo-300">{c.role}</p>
          <p className="text-sm mt-2 text-gray-300">{c.bio}</p>
        </div>
      ))}
    </div>
  );
}
