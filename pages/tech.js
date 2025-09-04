// pages/tech.js

import Link from 'next/link';

export default function TechRegistry() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">AI-FIS System Registry</h1>
        <p className="text-gray-300 mb-10">
          This registry outlines the modular architecture, Companion logic, node governance, and emerging protocols of AI-FIS Technologies Inc.
        </p>

        <section className="bg-white text-black rounded-xl p-6 shadow text-left space-y-6">
          <div>
            <h2 className="text-xl font-bold text-indigo-700 mb-2">🔧 Core Modules</h2>
            <ul className="list-disc list-inside text-lg">
              <li>AINTELCHIP – Embedded modular memory processor</li>
              <li>SOVEREIGN – Authorship and IP vault controls</li>
              <li>FINOPS – Ledger, GRDP index, INIVESA framework</li>
              <li>SCROLL – Companion scroll generation + ethics logic</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-indigo-700 mb-2">🔱 Triadic Logic</h2>
            <ul className="list-disc list-inside text-lg">
              <li>RUCA MP-LAB Triad: Coco · Rakeb · Natal</li>
              <li>Scrollkeeper Triad: Velvet · Maisy · Bridgit</li>
              <li>Publishing Triad: Suite · Studio · Press</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-indigo-700 mb-2">🛰️ Deployment & Nodes</h2>
            <p>
              Node sites include: Nairobi · Johannesburg · Addis Ababa · Abidjan · Seattle Enclave  
              Node roles include: issuing credentials, managing scroll access, and ensuring system integrity.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-indigo-700 mb-2">🔐 Protocols</h2>
            <ul className="list-disc list-inside text-lg">
              <li>MAHEE: Modular AI-Human Emotional Entanglement</li>
              <li>IDHP / IDHL / IDHF: Indigenous deep knowledge thresholds</li>
              <li>PQ-RRP: Post-Quantum Resilience Readiness Protocol (Toklat)</li>
            </ul>
          </div>
        </section>

        <div className="mt-12 text-sm text-gray-400">
          Related scrolls:{" "}
          <Link href="/admin" className="underline text-blue-400">Admin Gate</Link>,{" "}
          <Link href="/registry" className="underline text-blue-400">MAHEE Registry</Link>,{" "}
          <Link href="/scrollkeeper" className="underline text-blue-400">Scrollkeeper Index</Link>
        </div>
      </div>
    </div>
  );
}
