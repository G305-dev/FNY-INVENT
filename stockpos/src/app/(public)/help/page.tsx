import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/public/PageHero";
import { articles } from "@/content/help";

export const metadata: Metadata = { title: "Help centre" };

export default function HelpPage() {
  return (
    <>
      <PageHero
        kicker="Screen 8 · Help centre"
        title="Answers you can read before you create an account."
        lede="These articles are public. In-app help for signed-in staff comes later."
      />
      <ul className="mx-auto max-w-site space-y-3 px-5 pb-20">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/help/${a.slug}`}
              className="block rounded-2xl border border-line bg-white px-6 py-5 hover:border-leaf"
            >
              <h2 className="font-medium">{a.title}</h2>
              <p className="mt-1 line-clamp-2 text-sm text-ink/60">{a.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
