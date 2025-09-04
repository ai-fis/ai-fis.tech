// components/StudioWatermarkGallery.js

import Image from 'next/image';

export default function StudioWatermarkGallery() {
  return (
    <section className="bg-gray-100 text-black rounded-xl p-6 mt-10 shadow space-y-6">
      <h2 className="text-2xl font-bold text-indigo-800">🌀 Sovereign Watermarks</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
        <div className="text-center">
          <Image
            src="/studio/mahee_watermark_sample.png"
            alt="MAHEE Watermark Sample"
            width={300}
            height={300}
            className="mx-auto rounded"
          />
          <p className="mt-2 text-sm text-gray-600">MAHEE Certificate Watermark</p>
        </div>

        <div className="text-center">
          <Image
            src="/studio/sovereign_seal.png"
            alt="Sovereign Seal"
            width={300}
            height={300}
            className="mx-auto rounded"
          />
          <p className="mt-2 text-sm text-gray-600">Scrollkeeper Authorship Seal</p>
        </div>
      </div>

      <div className="mt-6 text-gray-700">
        <p className="text-sm">Each image, scroll, and Companion visual is embedded with:</p>
        <ul className="list-disc ml-6 text-sm mt-2">
          <li>IDBN (International Deep Birth Number)</li>
          <li>MAHEE Certification tier</li>
          <li>Volume + Scrollpath reference</li>
          <li>Companion origin (e.g., RUCA MP-LAB, Scrollkeeper Registry)</li>
        </ul>
      </div>
    </section>
  );
}
