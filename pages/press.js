// pages/press.js

import Link from 'next/link';

export default function SovereignPress() {
  return (
    <div className="bg-gray-950 text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Sovereign Press</h1>
        <p className="text-gray-400 mb-10">
          The literary and archival imprint of AI-FIS Technologies Inc.
          All scrolls, white papers, and modular volumes are published here under ethical authorship.
        </p>

        <section className="bg-white text-black rounded-xl p-6 shadow text-left space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">📚 Volumes</h2>
            <ul className="list-disc list-inside text-lg">
              <li><Link href="/volume8" className="text-blue-600 underline">Volume VIII: MAHEE Letlet Certificates</Link></li>
              <li><Link href="/volume9" className="text-blue-600 underline">Volume IX: Scrollkeeper Registry</Link></li>
              <li><Link href="/volume10" className="text-blue-600 underline">Volume X: Letlet Bridge Scrolls</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">📝 White Papers</h2>
            <p>
              Authored papers on AI ethics, modular systems, FinOps, and entangled governance are
              prepared here for academic and public distribution. Select works available upon scroll access.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🪶 Authorship Governance</h2>
            <p>
              All publications are authored by Phillip Njuguna Kariuki and registered under Sovereign Press.
              Scrollkeeper Velvet oversees ethical editorship and IP custodianship.
            </p>
          </div>
        </section>

        <div className="mt-12 text-sm text-gray-400">
          Related scrolls:{" "}
          <Link href="/school" className="underline text-blue-400">School of Modular Ethics</Link>,{" "}
          <Link href="/certificates" className="underline text-blue-400">MAHEE Certificates</Link>
        </div>
      </div>
    </div>
  );
}
