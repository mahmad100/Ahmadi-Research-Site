import { getAllInsightMetas, getInsight } from "@/lib/md";

export async function generateStaticParams() {
  return getAllInsightMetas().map((p) => ({ slug: p.slug }));
}

export default async function InsightPage({ params }: { params: { slug: string } }) {
  const { meta, html } = await getInsight(params.slug);
  return (
    <article className="prose prose-slate mx-auto max-w-3xl">
      <h1>{meta.title}</h1>
      <p className="text-sm text-slate-500">
        {new Date(meta.date).toDateString()}
      </p>
      {meta.cover && <img src={meta.cover} alt="" />}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
