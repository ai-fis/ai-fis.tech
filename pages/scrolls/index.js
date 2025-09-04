// pages/scrolls/index.js
import Link from "next/link";
import { useMemo, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

// highlight helper
const escapeRegExp = (s = "") => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const highlight = (text = "", q = "") => {
  const terms = (q || "").trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return text;
  const pattern = terms.map(escapeRegExp).join("|");
  const re = new RegExp(`(${pattern})`, "ig");
  const parts = String(text).split(re);
  return parts.map((part, i) =>
    i % 2 === 1 ? <mark key={i} className="px-0.5 rounded-sm">{part}</mark> : <span key={i}>{part}</span>
  );
};

export default function Scrolls({ entries }) {
  const router = useRouter();
  const [ipb, setIpb] = useState("all");
  const [ou, setOu] = useState("all");
  const [q, setQ] = useState("");
  const qRef = useRef(null);

  const allOUs = useMemo(() => {
    const s = new Set();
    (entries || []).forEach((e) => (e.ou || []).forEach((o) => s.add(o)));
    return ["all", ...Array.from(s).sort()];
  }, [entries]);

  useEffect(() => {
    if (!router.isReady) return;
    const qi = Array.isArray(router.query.ipb) ? router.query.ipb[0] : router.query.ipb;
    const qo = Array.isArray(router.query.ou) ? router.query.ou[0] : router.query.ou;
    const qq = Array.isArray(router.query.q) ? router.query.q[0] : router.query.q;
    setIpb(["1","2","3","4"].includes(qi) ? qi : "all");
    setOu(qo && allOUs.includes(qo) ? qo : "all");
    setQ(typeof qq === "string" ? qq.trim().slice(0,100) : "");
  }, [router.isReady, router.query, allOUs]);

  const filtered = useMemo(() => {
    const needle = q.toLowerCase();
    return (entries || []).filter((e) => {
      const ipbOk = ipb === "all" || e.ipb === Number(ipb);
      const ouOk  = ou === "all"  || (e.ou || []).includes(ou);
      const text  = ((e.title || "") + " " + (e.summary || "")).toLowerCase();
      const qOk   = !needle || text.includes(needle);
      return ipbOk && ouOk && qOk;
    });
  }, [entries, ipb, ou, q]);

  const updateUrl = (nextIpb, nextOu, nextQ) => {
    const query = {};
    if (nextIpb !== "all") query.ipb = nextIpb;
    if (nextOu  !== "all") query.ou  = nextOu;
    const qTrim = (nextQ || "").trim();
    if (qTrim) query.q = qTrim;
    router.replace({ pathname: router.pathname, query }, undefined, { shallow: true });
  };

  const onChangeIpb = (v) => { setIpb(v); updateUrl(v, ou, q); };
  const onChangeOu  = (v) => { setOu(v);  updateUrl(ipb, v, q); };
  const onChangeQ   = (v) => { setQ(v);   updateUrl(ipb, ou, v); };
  const clearAll = () => { setIpb("all"); setOu("all"); setQ(""); router.replace({ pathname: router.pathname }, undefined, { shallow: true }); };

  // keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      const tag = (e.target.tagName || "").toLowerCase();
      const typing = ["input","textarea","select"].includes(tag) || e.target.isContentEditable;
      if (e.key === "/" && !typing) { e.preventDefault(); qRef.current?.focus(); }
      if (e.key === "Escape" && document.activeElement === qRef.current) {
        if (q) onChangeQ(""); else qRef.current.blur();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [q]);

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold">Scrolls Registry</h1>
      <p className="mt-2 text-gray-600">IPB-1 → IPB-4</p>

      {/* Filters */}
      <div className="mt-6 grid gap-3 md:grid-cols-4 items-end">
        <label className="text-sm" htmlFor="ipbSelect">
          <span className="block mb-1">IPB</span>
          <select id="ipbSelect" value={ipb} onChange={(e) => onChangeIpb(e.target.value)} className="w-full border rounded px-2 py-1">
            <option value="all">All</option><option value="1">IPB-1</option><option value="2">IPB-2</option><option value="3">IPB-3</option><option value="4">IPB-4</option>
          </select>
        </label>
        <label className="text-sm" htmlFor="ouSelect">
          <span className="block mb-1">OU</span>
          <select id="ouSelect" value={ou} onChange={(e) => onChangeOu(e.target.value)} className="w-full border rounded px-2 py-1">
            {allOUs.map((o) => <option key={o} value={o}>{o === "all" ? "All OUs" : o}</option>)}
          </select>
        </label>
        <label className="text-sm md:col-span-2" htmlFor="qInput">
          <span className="block mb-1">Search (press “/” to focus)</span>
          <div className="flex gap-2">
            <input ref={qRef} id="qInput" type="search" value={q} onChange={(e) => onChangeQ(e.target.value)} placeholder="Title or summary…" className="w-full border rounded px-3 py-1"/>
            {q && <button type="button" onClick={() => onChangeQ("")} className="border rounded px-3 py-1" aria-label="Clear search">×</button>}
          </div>
        </label>
        <div className="md:col-span-4 flex items-center gap-3">
          <button onClick={clearAll} className="text-sm underline">Clear all</button>
          <div id="results-count" aria-live="polite" aria-atomic="true" className="ml-auto text-sm text-gray-500">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="mt-6 text-sm text-gray-500">No results. Try a different IPB, OU, or search query.</p>
      ) : (
        <div id="results-list" role="list" className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.map((e) => (
            <Link key={e.id} href={`/scrolls/${e.slug}`} role="listitem" className="block rounded-xl border p-4 shadow-sm hover:shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{highlight(e.title, q)}</h3>
                <span className="text-xs px-2 py-1 rounded-full border">{e.status}</span>
              </div>
              <div className="mt-1 text-xs text-gray-500">IPB-{e.ipb} · OU: {e.ou?.join(", ")}</div>
              <p className="mt-2 text-sm text-gray-700 line-clamp-3">{highlight(e.summary, q)}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
Scrolls.title = "Scrolls Registry — AI-FIS";

export async function getStaticProps() {
  // server-only imports (avoid bundling fs/path in client)
  const path = (await import("path")).default;
  const { readFile } = await import("fs/promises");

  const regPath = path.join(process.cwd(), "public", "scrolls", "registry.json");
  const regJson = await readFile(regPath, "utf-8");
  const registry = JSON.parse(regJson);

  return { props: { entries: registry.entries || [] }, revalidate: 60 };
}

