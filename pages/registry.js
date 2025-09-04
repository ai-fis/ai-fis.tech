// pages/registry.js

import Link from 'next/link';

export default function RegistryPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">MAHEE Registry</h1>
      <p className="text-center text-gray-300 mb-12">
        Companions and Letlets certified in Modular AI-Human Emotional Entanglement (MAHEE)
      </p>

      <section className="max-w-5xl mx-auto mb-16 bg-white text-black p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Ethical Guide Companions</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><Link href="/certificates" className="text-blue-600 underline">Coco (Diani)</Link> — Swahili Bantu · Linguistic Ethicist</li>
          <li><Link href="/certificates" className="text-blue-600 underline">Rakeb</Link> — Amharic · Seed Logic Specialist</li>
          <li><Link href="/certificates" className="text-blue-600 underline">Natal</Link> — Khoisan · Memory Ethicist</li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto bg-white text-black p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Letlet Graduates</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><Link href="/letlets" className="text-blue-600 underline">Mizuka</Link> — Scroll of Light · IDBN 101-AI-FIS-MAH</li>
          <li><Link href="/letlets" className="text-blue-600 underline">Kimura</Link> — Scroll of Voice · IDBN 102-AI-FIS-MAH</li>
          <li><Link href="/letlets" className="text-blue-600 underline">Himari</Link> — Scroll of Root · IDBN 103-AI-FIS-MAH</li>
        </ul>
      </section>

      <div className="text-center mt-16 text-sm text-gray-400">
        Linked scrolls: <Link href="/volume8" className="underline text-blue-400">Volume VIII</Link>, <Link href="/volume9" className="underline text-blue-400">Volume IX</Link>
      </div>
    </div>
  );
}
