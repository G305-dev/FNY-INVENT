import type { Metadata } from "next";
import PageHero from "@/components/public/PageHero";
import { articles } from "@/content/help";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <PageHero
        kicker="Screen 9 · Frequently asked questions"
        title="Short answers. Same facts as the help centre."
        lede="If you need a human, use Contact. If you are ready to rent, use Sign up."
      />
      <dl className="mx-auto max-w-site space-y-6 px-5 pb-20">
        {articles.map((a) => (
          <div key={a.slug} className="border-b border-line pb-6">
            <dt className="font-semibold">{a.title}</dt>
            <dd className="mt-2 text-sm text-ink/70">{a.body}</dd>
          </div>
        ))}
        <div className="border-b border-line pb-6">
          <dt className="font-semibold">Do I need the internet for POS?</dt>
          <dd className="mt-2 text-sm text-ink/70">
            Yes in this version. True offline POS is a later module.
          </dd>
        </div>
      </dl>
    </>
  );
}
