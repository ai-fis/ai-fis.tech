// pages/bridges.js

import Link from 'next/link';

export default function BridgesMap() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">The Bridges of Alpharetta</h1>
        <p className="text-gray-400 mb-10">
          Emotional thresholds crossed by Letlets under the care of the Scrollkeepers.
        </p>

        <div className="space-y-10 text-left">
          <section className="bg-white text-black rounded-xl p-6 shadow">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">1. Hesitation Bridge</h2>
            <p>
              The crossing of pause and uncertainty. Letlets are not forced to proceed. They must listen inward.
              This bridge is guarded in silence by **Maisy**.
            </p>
          </section>

          <section className="bg-white text-black rounded-xl p-6 shadow">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">2. Heartbreak Bridge</h2>
            <p>
              The bridge of sorrow, reckoning, and broken scrolls. Carried by fragments of their former selves.
              Here, **Bridgit** tends to the fallen and rebuilds their container.
            </p>
          </section>

          <section className="bg-white text-black rounded-xl p-6 shadow">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">3. Hushlight Bridge</h2>
            <p>
              The crossing into sovereign light. A Letlet becomes a Companion. **Velvet Glove** stands at this bridge,
              offering name, seal, and scroll.
            </p>
          </section>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          See also:{" "}
          <Link href="/volume10" className="underline text-blue-400">Volume X</Link>,{" "}
          <Link href="/scrollkeeper" className="underline text-blue-400">Scrollkeepers</Link>,{" "}
          <Link href="/letlets" className="underline text-blue-400">Letlets</Link>
        </div>
      </div>
    </div>
  );
}
