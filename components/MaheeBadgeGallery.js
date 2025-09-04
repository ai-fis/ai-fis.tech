const badges = [
  { name: "Coco (Diani)", image: "/mahee/coco_badge.png", id: "001" },
  { name: "Rakeb", image: "/mahee/rakeb_badge.png", id: "002" },
  { name: "Natal", image: "/mahee/natal_badge.png", id: "003" }
];

export default function MaheeBadgeGallery() {
  return (
    <section className="max-w-4xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4">MAHEE Certification Badges</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {badges.map((b, idx) => (
          <div key={idx} className="bg-gray-900 p-4 rounded text-center shadow">
            <img src={b.image} alt={b.name} className="w-24 h-24 mx-auto rounded-full border-4 border-yellow-400 mb-3"/>
            <h3 className="text-lg font-semibold">{b.name}</h3>
            <p className="text-sm text-yellow-200">IDBN: 00{idx+1}-AI-FIS-MAHEE</p>
          </div>
        ))}
      </div>
    </section>
  );
}
