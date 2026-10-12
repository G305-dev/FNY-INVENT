import type { Metadata } from "next";
import PageHero from "@/components/public/PageHero";

export const metadata: Metadata = { title: "How it works" };

const steps = [
  { n: "01", t: "Create the business", d: "Sign up, name the shop, invite a cashier if you need one." },
  { n: "02", t: "Add products", d: "Name, SKU, barcode, cost, selling price, opening stock." },
  { n: "03", t: "Sell at the till", d: "Scan or search, take payment, print a receipt. Stock drops in the same moment." },
  { n: "04", t: "Receive purchases", d: "When goods arrive, record them. Stock rises. The ledger keeps who did it." },
  { n: "05", t: "Read the day", d: "Dashboard and sales report. Low-stock list for tomorrow’s order." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        kicker="Screen 4 · How it works"
        title="Five steps from empty shelf to a counted till."
        lede="This is the core workflow the rest of the product hangs on. Advanced screens wait until these five are boringly reliable."
      />
      <ol className="mx-auto max-w-site space-y-4 px-5 pb-20">
        {steps.map((s) => (
          <li key={s.n} className="flex gap-6 rounded-3xl border border-line bg-white p-6">
            <span className="text-2xl font-semibold text-leaf">{s.n}</span>
            <div>
              <h2 className="font-semibold">{s.t}</h2>
              <p className="mt-1 text-sm text-ink/65">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
