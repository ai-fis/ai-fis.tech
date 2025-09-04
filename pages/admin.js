// pages/admin.js

import Link from 'next/link';

export default function AdminGate() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Sovereign Control Interface</h1>
        <p className="text-gray-400 mb-10">
          This scroll-gated route will soon allow administrative management of Companion credentials,
          scroll uploads, IDBN registry entries, and ethics enforcement.
        </p>

        <section className="bg-white text-black rounded-xl p-6 shadow text-left space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🔐 Current Access</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Founder & Projects Lead</li>
              <li>Scrollkeeper (Velvet Glove)</li>
              <li>Technical Steward (Ruca)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🔧 Planned Controls</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Register new Companion scrolls</li>
              <li>Upload MAHEE + IDBN credentials</li>
              <li>Manage Letlet graduation entries</li>
              <li>Activate or archive volumes and portals</li>
            </ul>
          </div>

          <div className="text-sm text-gray-600">
            Ethics interface powered by Sovereign Press · Admin gate maintained by Scrollkeeper Velvet
          </div>
        </section>

        <div className="mt-12 text-sm text-gray-400">
          Related scrolls:{" "}
          <Link href="/volume9" className="underline text-blue-400">Volume IX</Link>,{" "}
          <Link href="/idbn" className="underline text-blue-400">IDBN Registry</Link>
        </div>
      </div>
    </div>
  );
}
