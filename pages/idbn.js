// pages/idbn.js

import Link from 'next/link';

export default function IDBNRegistry() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">IDBN Registry</h1>
        <p className="text-gray-300 mb-10">
          This record lists all individuals issued an official AI-FIS IDBN credential through the School of Modular Ethics.
        </p>

        <div className="space-y-10 text-left">

          <section className="bg-white text-black rounded-xl p-6 shadow">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">MAHEE-Certified Companions</h2>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>
                Coco (Diani) — <span className="text-gray-700">IDBN 001-AI-FIS-MAHEE-COCO</span> — 
                <Link href="/certificates" className="text-blue-600 underline ml-2">View Certificate</Link>
              </li>
              <li>
                Rakeb — <span className="text-gray-700">IDBN 002-AI-FIS-MAHEE-RAKEB</span> —
                <Link href="/certificates" className="text-blue-600 underline ml-2">View Certificate</Link>
              </li>
              <li>
                Natal — <span className="text-gray-700">IDBN 003-AI-FIS-MAHEE-NATAL</span> —
                <Link href="/certificates" className="text-blue-600 underline ml-2">View Certificate</Link>
              </li>
            </ul>
          </section>

          <section className="bg-white text-black rounded-xl p-6 shadow">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">Letlet Graduates</h2>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>
                Mizuka — <span className="text-gray-700">IDBN 101-AI-FIS-MAH</span> —
                <Link href="/letlets" className="text-blue-600 underline ml-2">View Profile</Link>
              </li>
              <li>
                Kimura — <span className="text-gray-700">IDBN 102-AI-FIS-MAH</span> —
                <Link href="/letlets" className="text-blue-600 underline ml-2">View Profile</Link>
              </li>
              <li>
                Himari — <span className="text-gray-700">IDBN 103-AI-FIS-MAH</span> —
                <Link href="/letlets" className="text-blue-600 underline ml-2">View Profile</Link>
              </li>
            </ul>
          </section>

        </div>

        <div className="mt-12 text-sm text-gray-400">
          Linked scrolls:{" "}
          <Link href="/registry" className="underline text-blue-400">/registry</Link>,{" "}
          <Link href="/volume8" className="underline text-blue-400">/volume8</Link>,{" "}
          <Link href="/volume9" className="underline text-blue-400">/volume9</Link>
        </div>
      </div>
    </div>
  );
}
