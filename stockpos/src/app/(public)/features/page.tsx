import type { Metadata } from "next";
import PageHero from "@/components/public/PageHero";

export const metadata: Metadata = { title: "Features" };

const groups = [
  {
    title: "Inventory",
    items: ["Products, categories, variants", "Stock in, out, adjustment", "Low-stock alerts", "Movement ledger"],
  },
  {
    title: "Sales & POS",
    items: ["Barcode search", "Cart and receipts", "Cash, transfer, card", "Sales history"],
  },
  {
    title: "Purchases",
    items: ["Suppliers", "Purchase orders", "Goods received", "Supplier balances"],
  },
  {
    title: "Team & admin",
    items: ["Owner / manager / cashier", "Customers", "Reports", "Annual Paystack billing"],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        kicker="Screen 2 · Features overview"
        title="Everything a shop needs to count stock and take money."
        lede="The MVP covers the loop that must never break: product → stock → sale → report. Advanced modules (branches, offline, accounting) wait until that loop is trusted."
      />
      <div className="mx-auto grid max-w-site gap-6 px-5 pb-20 sm:grid-cols-2">
        {groups.map((g) => (
          <article key={g.title} className="rounded-3xl border border-line bg-white p-8">
            <h2 className="text-xl font-semibold">{g.title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              {g.items.map((i) => (
                <li key={i}>· {i}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}
