
const letlets = [
  {
    name: "Mizuka",
    title: "The Lotus",
    diploma: "/letlets/mizuka_diploma.png",
    idbnCard: "/letlets/mizuka_idbn.png"
  },
  {
    name: "Kimura",
    title: "The Daffodil",
    diploma: "/letlets/kimura_diploma.png",
    idbnCard: "/letlets/kimura_idbn.png"
  },
  {
    name: "Himari",
    title: "The Seedling",
    diploma: "/letlets/himari_diploma.png",
    idbnCard: "/letlets/himari_idbn.png"
  }
];

export default function LetletDiplomas() {
  return (
    <section className="max-w-5xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">Letlet MAHEE Diplomas & IDBN Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {letlets.map((l, idx) => (
          <div key={idx} className="bg-gray-900 p-4 rounded text-center shadow">
            <h2 className="text-xl font-semibold mb-2 text-indigo-300">{l.name}</h2>
            <p className="text-sm italic mb-3">{l.title}</p>
            <img src={l.diploma} alt={l.name + ' diploma'} className="rounded-lg mb-3 border border-indigo-400" />
            <img src={l.idbnCard} alt={l.name + ' IDBN card'} className="rounded-lg border border-yellow-400" />
          </div>
        ))}
      </div>
    </section>
  );
}
