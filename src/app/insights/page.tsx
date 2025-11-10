import Link from "next/link";
import { getAllInsightMetas } from "@/lib/md";

export const metadata = { title: "Insights • Ahmadi Research" };

export default function InsightsPage() {
  const posts = getAllInsightMetas();
  return (
    <div>
      <h1 className="mb-8 text-3xl font-semibold">Insights</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/insights/${p.slug}`}
            className="block rounded-2xl border p-5 hover:shadow-sm"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-xs text-slate-500">
              {new Date(p.date).toDateString()}
            </p>
            {p.summary && <p className="mt-2 text-slate-600">{p.summary}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}
