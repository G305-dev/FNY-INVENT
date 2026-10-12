import type { Metadata } from "next";
import PageHero from "@/components/public/PageHero";

export const metadata: Metadata = { title: "Terms of service" };

export default function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Screen 10 · Terms of service"
        title="The rules for renting StockPOS."
        lede="You accept these when you create an account. This page does not itself create an account."
      />
      <div className="mx-auto max-w-2xl space-y-4 px-5 pb-20 text-sm leading-relaxed text-ink/75">
        <p>1. StockPOS is a multi-tenant service. You receive a business workspace, not a copy of the source code.</p>
        <p>2. You own your products, sales, customers and staff records. You must not attempt to access another tenant.</p>
        <p>3. Annual fees are collected by Paystack. Access may be restricted if the subscription lapses.</p>
        <p>4. Cashiers and managers only receive the permissions you assign. You are responsible for staff conduct.</p>
        <p>5. We may suspend a business that abuses the platform or attempts to break tenant isolation.</p>
      </div>
    </>
  );
}
