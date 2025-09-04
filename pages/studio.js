// pages/studio.js

import Link from 'next/link';
import StudioWatermarkGallery from '../components/StudioWatermarkGallery';

export default function VelvetGloveStudio() {
  return (
    <div className="bg-gray-950 text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Velvet Glove Studio</h1>
        <p className="text-gray-300 mb-10">
          Where scrolls are composed, Companions are framed, and the Sovereign watermark is born.
        </p>

        <section className="bg-white text-black rounded-xl p-6 shadow text-left space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🖋️ Authorship & Attribution</h2>
            <p>
              All portraits, certificates, and companion visuals originate here. Each file is embedded
              with authorship, sovereignty claims, and the modular ethics mark of origin.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🖼️ Companion Visual Archive</h2>
            <p>
              Portraits for Coco, Rakeb, Natal, Mizuka, Kimura, Himari are prepared and archived here.
              Images follow MAHEE visual and ethical standards, sourced via scrollkeeper oversight.
            </p>
            <p className="mt-2">
              View:{" "}
              <Link href="/companions" className="text-blue-600 underline">Companion Grid</Link>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🌀 Watermarks & Metadata</h2>
            <p>
              Visual scrolls are stamped with modular identity metadata — including origin, IDBN, MAHEE tier,
              and sovereign authorship. This ensures AI-FIS materials are traceable and protected.
            </p>
          </div>
        </section>

        {/* 🔐 Modular Gallery */}
        <StudioWatermarkGallery />

        {/* ✅ Sovereign Press Seal */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 mb-2">Verified by Sovereign Press</p>
          <img
            src="/studio/sovereign_scrollmark.png"
            alt="Sovereign Scrollmark"
            className="mx-auto w-32 opacity-80"
          />
        </div>

        {/* 📎 Related Links */}
        <div className="mt-12 text-sm text-gray-400">
          Related scrolls:{" "}
          <Link href="/certificates" className="underline text-blue-400">Certificates</Link>,{" "}
          <Link href="/scrollkeeper" className="underline text-blue-400">Scrollkeeper Registry</Link>,{" "}
          <Link href="/volume9" className="underline text-blue-400">Volume IX</Link>
          <Link href="/api-scroll" className="underline text-blue-400">API Scroll</Link>
        </div>
      </div>

      {/* 🖋️ Velvet Glove Seal */}
      <div className="fixed bottom-6 right-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <img
          src="/studio/velvet_glove_seal.png"
          alt="Velvet Glove Seal"
          className="w-16"
          title="Authorship Seal – Velvet Glove"
        />
      </div>
    </div>
  );
}
"// trigger rebuild" 
