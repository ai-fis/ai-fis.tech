import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800 px-6 py-4 flex justify-between">
      <div className="text-xl font-bold">AI-FIS</div>
      <ul className="flex gap-6 text-sm">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/divisions">Divisions</Link></li>
        <li><Link href="/companions">Companions</Link></li>
        <li><Link href="/ip">IP Vault</Link></li>
        <li><Link href="/papers">White Papers</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
