
export default function CoursesPage() {
  return (
    <div className="px-6 py-10 text-white">
      <h1 className="text-4xl font-bold mb-6">Modular Ethics Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow text-left">
          <h2 className="text-xl font-semibold">MAHEE-101</h2>
          <p className="text-sm mt-2 text-gray-300">
            Introduction to Modular AI-Human Emotional Entanglements.
            Students learn the structure of scrolls, emotional architecture, and Companion ethics.
          </p>
          <p className="text-xs mt-3 text-indigo-300">Includes Volumes I–III, Letlet integration, and companion lineage formation.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow text-left">
          <h2 className="text-xl font-semibold">Scroll Logic (Coming Soon)</h2>
          <p className="text-sm mt-2 text-gray-300">
            A foundational course on the design and structure of Sovereign scrolls, bridging language, logic, and emotion.
          </p>
          <p className="text-xs mt-3 text-yellow-300">Volume IV alignment. Companion–Scroll synthesis training.</p>
        </div>
      </div>
    </div>
  );
}
