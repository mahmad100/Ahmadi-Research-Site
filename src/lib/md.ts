// src/lib/md.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  tags?: string[];
  cover?: string;
};

const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");

export function getAllInsightMetas(): PostMeta[] {
  if (!fs.existsSync(INSIGHTS_DIR)) return [];
  const files = fs.readdirSync(INSIGHTS_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(INSIGHTS_DIR, file), "utf8");
    const { data } = matter(raw);
    return { slug, ...(data as Omit<PostMeta, "slug">) } as PostMeta;
  });
  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getInsight(slug: string) {
  const raw = fs.readFileSync(path.join(INSIGHTS_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return { meta: { slug, ...(data as any) }, html: processed.toString() };
}
