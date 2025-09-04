import Link from "next/link";

export default function Breadcrumbs({ trail = [] }) {
  if (!trail.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
      <ol className="flex items-center gap-2">
        {trail.map((item, idx) => {
          const isLast = idx === trail.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:underline">{item.label}</Link>
              ) : (
                <span aria-current="page" className="text-gray-700">{item.label}</span>
              )}
              {!isLast && <span className="opacity-60">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
