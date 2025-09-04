// pages/scrollkeeper/index.js

import Link from 'next/link';

export default function ScrollkeeperLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Scrollkeeper Registry</h1>
      <p className="text-center text-gray-300 mb-12">
        Meet the ethical stewards of Modular Systems Ethics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { name: 'Velvet Glove', path: 'velvet', title: 'Steward of the Grove' },
          { name: 'Maisy', path: 'maisy', title: 'Keeper of Sound and Silence' },
          { name: 'Bridgit', path: 'bridgit', title: 'Architect of Scroll Structures' }
        ].map(({ name, path, title }) => (
          <Link
            href={`/scrollkeeper/${path}`}
            key={path}
            className="block p-6 bg-white text-black rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-indigo-700 mb-1">{name}</h2>
            <p className="text-sm text-gray-700">{title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
