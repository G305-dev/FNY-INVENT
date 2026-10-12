import type { Metadata } from "next";
import PageHero from "@/components/public/PageHero";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Screen 11 · Privacy policy"
        title="What we store, and what we do not mix."
        lede="Business inventory stays inside that business. Billing may involve Paystack as a payment processor."
      />
      <div className="mx-auto max-w-2xl space-y-4 px-5 pb-20 text-sm leading-relaxed text-ink/75">
        <p>We store account name, email, phone, hashed passwords, and the business data you enter (products, sales, customers, staff).</p>
        <p>Session cookies keep you signed in. They are httpOnly. We do not put your business id in a field you can edit to become another shop.</p>
        <p>Paystack processes subscription charges. We store payment references and status, not full card numbers.</p>
        <p>You may request export or deletion of a tenant by writing to hello@stockpos.app.</p>
      </div>
    </>
  );
}
