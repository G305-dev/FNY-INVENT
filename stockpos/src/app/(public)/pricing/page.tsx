import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/public/PageHero";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Screen 3 · Pricing plans"
        title="One annual plan. A short trial to prove the till."
        lede="Paystack confirms payment on the server. When a subscription expires, the shop is restricted — POS does not keep running unpaid."
      />
      <div className="mx-auto grid max-w-site gap-6 px-5 pb-20 lg:grid-cols-2">
        <article className="rounded-3xl border border-line bg-white p-8">
          <p className="text-xs uppercase tracking-wider text-ink/50">Trial</p>
          <h2 className="mt-2 text-3xl font-semibold">14 days</h2>
          <p className="mt-2 text-ink/65">Full owner access to inventory, POS and reports for one business.</p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>· 1 business</li>
            <li>· Products, stock, POS</li>
            <li>· Owner + staff invites</li>
          </ul>
          <Link href="/signup" className="mt-8 inline-block rounded-full bg-mist px-5 py-2.5 text-sm font-medium">
            Start trial
          </Link>
        </article>
        <article className="rounded-3xl bg-ink p-8 text-paper">
          <p className="text-xs uppercase tracking-wider text-paper/50">Annual</p>
          <h2 className="mt-2 text-3xl font-semibold">₦120,000 / year</h2>
          <p className="mt-2 text-paper/70">Activate or extend after a successful Paystack charge.</p>
          <ul className="mt-6 space-y-2 text-sm text-paper/80">
            <li>· Everything in trial</li>
            <li>· Priority email support</li>
            <li>· Webhook-confirmed billing history</li>
          </ul>
          <Link href="/signup" className="mt-8 inline-block rounded-full bg-leaf px-5 py-2.5 text-sm font-medium text-white">
            Choose annual
          </Link>
        </article>
      </div>
    </>
  );
}
