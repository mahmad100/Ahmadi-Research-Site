import Link from "next/link";
export function Navbar() {
  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Ahmadi Research" className="h-8" />
          <span className="font-semibold tracking-tight">Ahmadi Research</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-700">
          <Link href="/insights" className="hover:text-slate-900">Insights</Link>
          <Link href="/about" className="hover:text-slate-900">About</Link>
          <Link href="/contact" className="hover:text-slate-900">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
