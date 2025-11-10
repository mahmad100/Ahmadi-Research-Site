import Link from "next/link";
import { getAllInsightMetas } from "@/lib/md";

export default function Home() {
  const latest = getAllInsightMetas().slice(0, 3);
  return (
    <div>
      <section className="mb-14">
        <img src="/logo.png" alt="Ahmadi Research" className="h-12 mb-6" />
        <h1 className="text-4xl font-semibold">Cut Through the Noise.</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Evidence-driven insights on markets, strategy, and companies.
        </p>
        <div className="mt-6">
          <Link href="/insights" className="rounded-xl border px-4 py-2">Explore Insights</Link>
        </div>
      </section>
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Featured Insights</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((p) => (
            <Link key={p.slug} href={`/insights/${p.slug}`} className="block rounded-2xl border p-5 hover:shadow-sm">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-500">{new Date(p.date).toDateString()}</p>
              <p className="mt-1 text-slate-600">{p.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
