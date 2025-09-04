import fs from "fs";
import path from "path";
import Link from "next/link";
import Head from "next/head";

export default function CertificateDetail({ cert }) {
  if (!cert) {
    return (
      <section className="p-8">
        <h1 className="text-2xl font-bold">Certificate not found</h1>
        <Link href="/certificates" className="mt-4 inline-block underline">← Back to Certificates</Link>
      </section>
    );
  }

  return (
    <section className="p-8 space-y-6">
      <Head>
        <title>{cert.title} — Certificates — AI-FIS</title>
        <meta name="description" content={cert.description} />
      </Head>

      <nav className="text-sm">
        <Link href="/certificates" className="underline">← Back to Certificates</Link>
      </nav>

      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{cert.title}</h1>
        <div className="text-xs px-2 py-1 rounded-full border inline-block">{cert.level}</div>
        <p className="mt-2 text-gray-700">{cert.description}</p>
      </header>

      <div className="grid gap-2 text-sm text-gray-700">
        <div><strong>Prerequisites:</strong> {cert.prerequisites || "—"}</div>
        <div><strong>Signers:</strong> {cert.signers.join(", ")}</div>
        {cert.registryLabel && <div><strong>Registry:</strong> {cert.registryLabel}</div>}
      </div>

      <div className="mt-4 flex gap-3">
        {/* Future: preview / issuance flow */}
        <Link
          href={`/certificates/${encodeURIComponent(cert.key.toLowerCase())}/preview`}
          className="px-3 py-1.5 rounded border hover:shadow"
        >
          Open preview (coming soon)
        </Link>

        {cert.sampleHref ? (
          <a href={cert.sampleHref} target="_blank" rel="noopener noreferrer" className="text-sm underline">
            View sample
          </a>
        ) : null}
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public", "certificates", "types.json");
  const file = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(file);
  const types = (json.types || []).map((t) => t.key.toLowerCase());

  return { paths: types.map((t) => ({ params: { type: t } })), fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "public", "certificates", "types.json");
  const file = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(file);

  const lower = String(params.type || "").toLowerCase();
  const cert = (json.types || []).find((t) => t.key.toLowerCase() === lower) || null;

  if (!cert) return { notFound: true, revalidate: 60 };
  return { props: { cert }, revalidate: 60 };
}
