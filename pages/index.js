// pages/index.js
import fs from "fs";
import path from "path";
import LatestIPB4Band from "../components/LatestIPB4Band";

export default function Home({ data, latestIPB4 }) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{data.hero.title}</h1>
      <p className="mt-2 text-lg">{data.hero.subtitle}</p>

      <div className="mt-6 flex gap-4">
        <a
          href={data.hero.primaryCta.href}
          className="px-4 py-2 bg-black text-white rounded"
        >
          {data.hero.primaryCta.label}
        </a>
        <a
          href={data.hero.secondaryCta.href}
          className="px-4 py-2 border rounded"
        >
          {data.hero.secondaryCta.label}
        </a>
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {data.features.map((f) => (
          <a key={f.title} href={f.href} className="p-4 border rounded-xl shadow">
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-sm text-gray-600">{f.desc}</p>
          </a>
        ))}
      </section>

      <blockquote className="mt-12 italic">
        “{data.quote.text}” — {data.quote.author}
      </blockquote>

      {/* Latest IPB-4 band */}
      <LatestIPB4Band items={latestIPB4} />
    </main>
  );
}

export async function getStaticProps() {
  // home.json
  const homePath = path.join(process.cwd(), "public", "site", "home.json");
  const homeJson = fs.readFileSync(homePath, "utf-8");
  const data = JSON.parse(homeJson);

  // registry.json
  const regPath = path.join(process.cwd(), "public", "scrolls", "registry.json");
  const regJson = fs.readFileSync(regPath, "utf-8");
  const registry = JSON.parse(regJson);

  // take the latest 3 IPB-4 entries (naive: first 3 where ipb === 4)
  const latestIPB4 = (registry.entries || [])
    .filter((e) => e.ipb === 4)
    .slice(0, 3);

  return {
    props: { data, latestIPB4 },
    revalidate: 60, // ISR for both home + band
  };
}
