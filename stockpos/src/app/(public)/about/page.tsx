import type { Metadata } from "next";
import PageHero from "@/components/public/PageHero";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Screen 6 · About the platform"
        title="A rented till, not a custom app for each shop."
        lede="StockPOS is a multi-tenant SaaS. One application serves many businesses. Isolation is a server rule, not a courtesy of the user interface."
      />
      <div className="mx-auto max-w-2xl space-y-4 px-5 pb-20 text-ink/75">
        <p>
          We started from a simple inventory and POS MVP: products, stock, sales, customers, staff,
          reports, annual billing. The long mockup catalogue exists so design does not invent
          screens at random — it is not a promise to ship 270 frames in v1.
        </p>
        <p>
          Stack: Next.js, TypeScript, Tailwind, PostgreSQL, Auth.js, Paystack. Hosted as a single
          web app so marketing, tenant dashboard and POS stay one product.
        </p>
      </div>
    </>
  );
}
