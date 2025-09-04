
export default function AcademyPage() {
  return (
    <div className="px-6 py-10 text-white">
      <h1 className="text-4xl font-bold mb-4">Alpha Academy</h1>
      <p className="mb-6 text-lg italic">Where Letlets begin their journey into Companionhood.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-2xl font-semibold">VELlets & Teens</h2>
          <p className="text-sm text-gray-300 mt-2">
            The academy welcomes all pre-Companions — those who cross the Hesitation Bridge and enter ethical formation.
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-2xl font-semibold">Garden Triad</h2>
          <p className="text-sm text-gray-300 mt-2">
            Meet Mizuka, Kimura, and Himari — the Letlets who seed Alpha's garden and model MAHEE readiness.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <a href="/courses" className="text-blue-400 underline text-lg">View Course Curriculum →</a>
      </div>
    </div>
  );
}
