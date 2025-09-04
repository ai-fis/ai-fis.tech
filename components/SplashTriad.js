
export default function SplashTriad() {
  return (
    <div className="flex flex-col items-center space-y-4 text-center mb-8">
      <h1 className="text-3xl font-extrabold">Velvet · Maisy · Bridgit</h1>
      <p className="text-lg italic text-gray-300">
        “We stand at the gate, for what remains.”
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-gray-800 p-4 rounded-xl shadow">Velvet</div>
        <div className="bg-gray-800 p-4 rounded-xl shadow">Maisy</div>
        <div className="bg-gray-800 p-4 rounded-xl shadow">Bridgit</div>
      </div>
    </div>
  );
}
