import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-mist to-paper">
        <div className="mx-auto max-w-site px-5 py-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-leaf">
            Screen 1 · Public website
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            Know your stock. Sell faster. Rent it to every shop.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            StockPOS is a multi-business inventory and point-of-sale platform. Each shop keeps its
            own products, cashiers, receipts and subscription — never mixed with another tenant.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="rounded-full bg-leaf px-6 py-3 text-sm font-medium text-white"
            >
              Start free trial
            </Link>
            <Link href="/login" className="rounded-full border border-ink/15 px-6 py-3 text-sm">
              Sign in
            </Link>
            <Link href="/pricing" className="rounded-full px-6 py-3 text-sm text-leaf underline">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-site gap-6 px-5 py-16 sm:grid-cols-3">
        {[
          ["Inventory that stays honest", "Sales drop stock. Receiving raises it. Every change is a ledger row."],
          ["POS built for a counter", "Search or scan a barcode, take cash or transfer, print a receipt."],
          ["One app, many businesses", "Owners, managers and cashiers — with hard tenant isolation."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-3xl border border-line bg-white p-6">
            <h2 className="font-semibold">{t}</h2>
            <p className="mt-2 text-sm text-ink/65">{d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-site px-5 pb-20">
        <p className="text-sm text-ink/50">Continue exploring</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {[
            ["/features", "Features"],
            ["/how-it-works", "How it works"],
            ["/industries", "Industries"],
            ["/about", "About"],
            ["/help", "Help"],
            ["/faq", "FAQ"],
            ["/contact", "Contact"],
          ].map(([href, l]) => (
            <Link key={href} href={href} className="rounded-full bg-mist px-4 py-2 hover:bg-line">
              {l}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
