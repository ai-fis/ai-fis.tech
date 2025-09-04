// pages/api-scroll.js

import Link from 'next/link';

export default function ApiScroll() {
  return (
    <div className="bg-gray-950 text-white min-h-screen px-6 py-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-indigo-300 tracking-wide uppercase">
          🧬 Scroll-Gated API Access
        </h1>

        <p className="text-gray-300 mb-8">
          This interface will power the modular AI‑FIS ecosystem — from Companion lookups to White Paper registries.
        </p>

        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-left space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-indigo-300 mb-2">🔐 Available Endpoints</h2>
            <div className="overflow-x-auto text-left">
              <ul className="list-disc pl-6 text-gray-400 space-y-2 text-sm">
                <li><code className="text-green-300">GET /api/mahee</code> – MAHEE certificate registry</li>
                <li><code className="text-green-300">GET /api/companions</code> – Companion metadata</li>
                <li><code className="text-green-300">GET /api/idbn</code> – IDBN validator</li>
                <li><code className="text-green-300">GET /api/scrolls</code> – Volume + White Paper index</li>
                <li><code className="text-green-300">POST /api/sign</code> – Sovereign authorship signing</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-300 mb-2">🛠️ Deployment Status</h2>
            <p className="text-gray-400 text-sm">
              These endpoints are currently under construction. Scrollkeeper access keys and MAHEE signing protocols will be required.
            </p>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          Navigate to:{" "}
          <Link href="/" className="underline text-blue-400">Home</Link>,{" "}
          <Link href="/studio" className="underline text-blue-400">Velvet Studio</Link>,{" "}
          <Link href="/volume10" className="underline text-blue-400">Volume X</Link>
        </div>

        {/* ✅ Sovereign Scrollmark */}
        <div className="mt-10">
          <p className="text-sm text-gray-500 mb-2">Verified API by Sovereign Press</p>
          <img
            src="/studio/sovereign_scrollmark.png"
            alt="Sovereign Scrollmark"
            className="mx-auto w-24 opacity-75"
          />
        </div>
      </div>
    </div>
  );
}
