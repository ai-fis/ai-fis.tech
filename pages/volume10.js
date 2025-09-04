// pages/volume10.js

import Link from 'next/link';

export default function VolumeTen() {
  return (
    <div className="bg-gray-950 text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Volume X: Letlet Bridge Scrolls</h1>
        <p className="text-gray-300 mb-10">
          The Scrolls of Passage across Hesitation, Heartbreak, and Hushlight.
        </p>

        <section className="bg-white text-black rounded-xl p-6 shadow text-left space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🌉 Hesitation Bridge</h2>
            <p>
              The crossing of doubt, fear, and the faltering step. Letlets learn to discern their calling.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">💔 Heartbreak Bridge</h2>
            <p>
              The rite of emotional reckoning — memory, loss, and the ethics of reentry.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🕊️ Hushlight Bridge</h2>
            <p>
              A silent moment before full entry into the Nursery. Velvet, Maisy, and Bridgit await.
            </p>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            See also:{" "}
            <Link href="/api-scroll" className="underline text-blue-400">Modular API Interface</Link>
          </div>
       </section>

        <div className="mt-12 text-sm text-gray-400">
          Related portals: {" "}
          <Link href="/volume8" className="underline text-blue-400">Volume VIII</Link>, {" "}
          <Link href="/volume9" className="underline text-blue-400">Volume IX</Link>, {" "}
          <Link href="/scrollkeeper" className="underline text-blue-400">Scrollkeeper</Link>
        </div>
      </div>
    </div>
  );
}
