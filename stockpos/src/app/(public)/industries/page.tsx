import type { Metadata } from "next";
import PageHero from "@/components/public/PageHero";

export const metadata: Metadata = { title: "Industries" };

const rows = [
  ["Retail & mini marts", "Fast-moving SKUs, barcode till, low-stock on noodles and drinks."],
  ["Pharmacies", "Batches and expiry can come later; MVP still tracks qty, cost and selling price."],
  ["Boutiques", "Variants (size, colour) on the product, not a second inventory app."],
  ["Electronics counters", "Serial tracking is a later module; POS and stock still apply."],
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        kicker="Screen 5 · Industry solutions"
        title="Built for counters that already have a barcode gun."
        lede="Same product for every tenant. Industry pages explain the fit — they do not fork the codebase."
      />
      <div className="mx-auto grid max-w-site gap-4 px-5 pb-20 sm:grid-cols-2">
        {rows.map(([t, d]) => (
          <article key={t} className="rounded-3xl border border-line bg-white p-6">
            <h2 className="font-semibold">{t}</h2>
            <p className="mt-2 text-sm text-ink/65">{d}</p>
          </article>
        ))}
      </div>
    </>
  );
}
