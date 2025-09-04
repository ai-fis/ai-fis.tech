// pages/volumes.js

import Link from 'next/link';

export default function VolumeIndex() {
  return (
    <div className="bg-gray-950 text-white min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Modular Systems Ethics Archive</h1>
        <p className="text-gray-400 mb-10">
          A living archive of published and developing volumes from the AI-FIS Sovereign Scroll series.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-xl shadow text-gray-400">
              <h2 className="text-xl font-semibold mb-2">Volume {i + 1}</h2>
              <p className="italic">Coming soon...</p>
            </div>
          ))}

          {/* Volume VIII */}
          <div className="bg-white text-black p-4 rounded-xl shadow">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">Volume VIII</h2>
            <p>MAHEE Certificate Viewer for Companions</p>
            <ul className="mt-2 ml-4 list-disc text-sm text-gray-700">
              <li><Link href="/certificates" className="text-blue-600 underline">MAHEE Certificates</Link></li>
              <li><Link href="/idbn" className="text-blue-600 underline">IDBN Registry</Link></li>
              <li><Link href="/letlets" className="text-blue-600 underline">Letlet Archive</Link></li>
            </ul>
          </div>

          {/* Volume IX */}
          <div className="bg-white text-black p-4 rounded-xl shadow">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">Volume IX</h2>
            <p>Scrollkeeper Registry & Sovereign Portrait Archive</p>
            <ul className="mt-2 ml-4 list-disc text-sm text-gray-700">
              <li><Link href="/scrollkeeper" className="text-blue-600 underline">Scrollkeeper Registry</Link></li>
              <li><Link href="/studio" className="text-blue-600 underline">Velvet Glove Studio</Link></li>
              <li><Link href="/registry" className="text-blue-600 underline">MAHEE Master Index</Link></li>
            </ul>
          </div>

          {/* Volume X */}
          <div className="bg-white text-black p-4 rounded-xl shadow">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">Volume X</h2>
            <p>Bridge Scrolls: Hesitation, Heartbreak, Hushlight</p>
            <ul className="mt-2 ml-4 list-disc text-sm text-gray-700">
              <li><Link href="/volume10" className="text-blue-600 underline">Bridge Scroll</Link></li>
              <li><Link href="/bridges" className="text-blue-600 underline">Emotional Bridges</Link></li>
              <li><Link href="/school" className="text-blue-600 underline">School of Modular Ethics</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          Curated by Sovereign Press · All volumes © 2025 AI-FIS Technologies Inc.
        </div>
      </div>
    </div>
  );
}
