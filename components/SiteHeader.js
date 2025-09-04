import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Divisions", href: "/divisions" },
  { label: "Companions", href: "/companions" },
  { label: "Scrolls", href: "/scrolls" }, // (formerly IP Vault)
  { label: "White Papers", href: "/white-papers" },
  { label: "Contact", href: "/contact" }
];

export default function SiteHeader() {
  const router = useRouter();
  const { asPath } = router;                 // includes query/hash
  const [open, setOpen] = useState(false);

  // Close mobile menu on navigation
  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeComplete", close);
    router.events.on("hashChangeComplete", close);
    return () => {
      router.events.off("routeChangeComplete", close);
      router.events.off("hashChangeComplete", close);
    };
  }, [router.events]);

  const isActive = (href) => (href === "/" ? asPath === "/" : asPath.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <a href="#main" className="sr-only focus:not-sr-only focus:block p-2">
        Skip to content
      </a>

      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wide">
          AI-FIS
        </Link>

        <button
          className="md:hidden border rounded px-3 py-1"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <nav aria-label="Main" className="hidden md:flex items-center gap-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                isActive(item.href) ? "font-semibold underline" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-nav" className="md:hidden border-t">
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`text-sm ${isActive(item.href) ? "font-semibold underline" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
