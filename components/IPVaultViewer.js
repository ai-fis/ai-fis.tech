import { useState } from 'react';

const batchData = {
  'Batch 1': {
    entries: 200,
    date: 'March 2025',
    summary: '/ip/batch1-summary.pdf'
  },
  'Batch 2': {
    entries: 625,
    date: 'June 2025',
    summary: '/ip/batch2-summary.pdf'
  },
  'Batch 3': {
    entries: 90,
    date: 'July 2025',
    summary: '/ip/batch3-summary.pdf'
  }
};

export default function IPVaultViewer() {
  const [selected, setSelected] = useState('Batch 1');
  const current = batchData[selected];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Sovereign IP Vault</h1>
      <select
        className="mb-4 p-2 border rounded"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {Object.keys(batchData).map((batch, idx) => (
          <option key={idx} value={batch}>{batch}</option>
        ))}
      </select>

      <div className="bg-white text-black p-4 rounded shadow">
        <h2 className="text-lg font-semibold">{selected}</h2>
        <p>📦 Entries: {current.entries}</p>
        <p>📅 Filing Date: {current.date}</p>
        <a
          href={current.summary}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline mt-2 inline-block"
        >
          View Redline Summary PDF
        </a>
      </div>
    </div>
  );
}
