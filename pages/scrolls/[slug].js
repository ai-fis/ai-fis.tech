import fs from "fs";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function ScrollDetail({ entry, related }) {
  if (!entry) {
    return (
      <section className="p-8">
        <h1 className="text-2xl font-bold">Scroll not found</h1>
        <Link href="/scrolls" className="mt-6 inline-block underline">
          ← Back to Scrolls
        </Link>
      </section>
    );
  }

  // Minimal JSON-LD for richer previews (safe, optional)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": entry.title,
    "description": entry.summary,
    "keywords": (entry.ou || []).join(", "),
    "isPartOf": `IPB-${entry.ipb}`,
  };

  return (
    <section className="p-8 space-y-6">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Scrolls", href: "/scrolls" },
          { label: entry.title }
        ]}
      />

      <h1 className="text-3xl font-bold">{entry.title}</h1>
      <p className="mt-2 text-gray-600">
        IPB-{entry.ipb} · Status: {entry.status}
      </p>

      <div className="mt-4 space-y-2">
        <p><strong>OU:</strong> {entry.ou?.join(", ")}</p>
        <p><strong>Witnesses:</strong> {entry.witnesses?.join(", ")}</p>
      </div>

      <p className="mt-6 text-lg">{entry.summary}</p>

      {entry.links?.pdf && (
        <a
          href={entry.links.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-4 py-2 bg-black text-white rounded"
        >
          View PDF
        </a>
      )}

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Related Scrolls</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/scrolls/${r.slug}`}
                className="block rounded-xl border p-4 shadow-sm hover:shadow"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{r.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full border">{r.status}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{r.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}

export async function getStaticPaths() {
  const regPath = path.join(process.cwd(), "public", "scrolls", "registry.json");
  const regJson = fs.readFileSync(regPath, "utf-8");
  const registry = JSON.parse(regJson);

  const paths = (registry.entries || []).map((e) => ({ params: { slug: e.slug } }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const regPath = path.join(process.cwd(), "public", "scrolls", "registry.json");
  const regJson = fs.readFileSync(regPath, "utf-8");
  const registry = JSON.parse(regJson);

  const entries = registry.entries || [];
  const entry = entries.find((e) => e.slug === params.slug) || null;

  if (!entry) return { notFound: true, revalidate: 60 };

  const related = entries
    .filter((e) => e.id !== entry.id && e.ou?.some((ou) => entry.ou?.includes(ou)))
    .sort((a, b) =>
      (b.ou?.filter((x) => entry.ou?.includes(x)).length || 0) -
      (a.ou?.filter((x) => entry.ou?.includes(x)).length || 0)
    )
    .slice(0, 6);

  const title = `${entry.title} — Scrolls — AI-FIS`;
  return { props: { entry, related, title }, revalidate: 60 };
}
