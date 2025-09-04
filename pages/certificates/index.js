import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Certificates({ types }) {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold">Certificates</h1>
      <p className="mt-2 text-gray-600">
        Issue scroll-bound credentials with Senate signatories.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {types.map((c) => (
          <article key={c.key} className="rounded-xl border p-5 shadow-sm">
            <header className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold">{c.title}</h2>
              <span className="text-xs px-2 py-1 rounded-full border">{c.level}</span>
            </header>

            <p className="mt-2 text-sm text-gray-700">{c.description}</p>

            <div className="mt-3 grid gap-1 text-xs text-gray-600">
              <div><strong>Prerequisites:</strong> {c.prerequisites || "—"}</div>
              <div><strong>Signers:</strong> {c.signers.join(", ")}</div>
              {c.registryLabel && <div><strong>Registry:</strong> {c.registryLabel}</div>}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <Link
                href={`/certificates/${encodeURIComponent(c.key.toLowerCase())}`}
                className="px-3 py-1.5 rounded border hover:shadow"
                aria-label={`Details for ${c.title}`}
              >
                Details
              </Link>

              {c.sampleHref ? (
                <a
                  href={c.sampleHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline"
                >
                  View sample
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
Certificates.title = "Certificates — AI-FIS";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "certificates", "types.json");
  const file = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(file);

  return { props: { types: json.types || [] }, revalidate: 60 };
}
