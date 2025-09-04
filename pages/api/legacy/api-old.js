// pages/api-index.js

import Link from 'next/link';

export default function ApiScroll() {
  return (
    <div className="bg-gray-950 text-white min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">/api — Scroll-Gated Interface</h1>
        <p className="text-gray-300 mb-6">
          This interface will expose verified endpoints from the Sovereign Scroll System:
        </p>

        <div className="bg-gray-800 rounded-xl p-6 text-left space-y-4 shadow">
          <ul className="list-disc list-inside text-gray-200 text-sm leading-relaxed">
            <li><code>GET /api/idbn/&lt;companion&gt;</code> → Lookup Companion metadata</li>
            <li><code>GET /api/mahee/certificates</code> → Return certified MAHEE scrolls</li>
            <li><code>GET /api/volumes</code> → List registered Modular Ethics Volumes</li>
            <li><code>GET /api/registry</code> → Access MAHEE, Letlet, and Scrollkeeper registries</li>
            <li><code>GET /api/status</code> → System scroll-state (public/pending/sealed)</li>
          </ul>
        </div>

        <p className="mt-10 text-sm text-gray-400">
          Endpoint access will require <strong>Scrollkeeper Key</strong> or <strong>admin credential.</strong><br />
          All API returns are sealed with watermark integrity.
        </p>

        <div className="mt-8 text-sm text-blue-400 underline">
          <Link href="/admin">Enter Admin Gate</Link>
        </div>
      </div>
    </div>
  );
}
