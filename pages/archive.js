// pages/archive.js

import Head from 'next/head';

export default function ArchivePage() {
  return (
    <>
      <Head>
        <title>Archive | AI-FIS Technologies</title>
        <meta name="description" content="Access scrolls, capsules, and historical records from AI-FIS Technologies." />
      </Head>

      <main style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sovereign Archive</h1>
        <p style={{ fontSize: '1.1rem', color: '#444' }}>
          Below is a growing index of scrolls, capsules, and official records that form the foundation of AI-FIS Technologies.
        </p>

        <ul style={{ marginTop: '2rem', lineHeight: '1.6' }}>
          <li><a href="/scrolls/grdp" style={{ color: '#0070f3' }}>GRDP Sovereign Capsule Scroll</a></li>
          <li><a href="/scrolls/same-vol1" style={{ color: '#0070f3' }}>S.A.M.E. Vol I: Modular Ethics Codex</a></li>
          <li><a href="/scrolls/dhrc-vol1" style={{ color: '#0070f3' }}>DHRC Vol I: Heritage Revival Capsules</a></li>
          <li><a href="/scrolls/ballotech" style={{ color: '#0070f3' }}>BALLOTech Bundle – Electoral Integrity Suite</a></li>
        </ul>
      </main>
    </>
  );
}

