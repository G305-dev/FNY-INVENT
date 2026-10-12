import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/content/help";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = articles.find((x) => x.slug === params.slug);
  return { title: a?.title || "Help" };
}

export default function Article({ params }: { params: { slug: string } }) {
  const a = articles.find((x) => x.slug === params.slug);
  if (!a) notFound();
  return (
    <article className="mx-auto max-w-2xl px-5 py-16">
      <Link href="/help" className="text-sm text-leaf">
        ← Help centre
      </Link>
      <h1 className="mt-4 text-3xl font-semibold">{a.title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-ink/75">{a.body}</p>
    </article>
  );
}
