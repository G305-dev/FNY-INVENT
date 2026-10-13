/**
 * CSS-built POS till mockup for the landing page product showcase.
 * Real text (no image gibberish), on-brand colours, honest sample data.
 */

const catalog = [
  { name: "Indomie Noodles", price: "₦1,250" },
  { name: "Peak Milk 900g", price: "₦4,750" },
  { name: "Coca-Cola 75cl", price: "₦1,500" },
  { name: "Golden Penny 1kg", price: "₦2,100" },
  { name: "Dettol Soap 70g", price: "₦1,200" },
  { name: "Bic Pen (pack)", price: "₦900" },
];

const categories = ["All", "Food", "Drinks", "Household"];

const cart = [
  { name: "Peak Milk 900g", qty: 1, total: "₦4,750" },
  { name: "Coca-Cola 75cl", qty: 2, total: "₦3,000" },
  { name: "Dettol Soap 70g", qty: 1, total: "₦1,200" },
];

export default function PosMockup() {
  return (
    <div className="rounded-3xl border border-white/10 bg-paper p-3 text-ink shadow-2xl">
      {/* till chrome */}
      <div className="flex items-center justify-between px-3 py-2 text-[11px] text-ink/50">
        <span className="font-medium">StockPOS · Till 1</span>
        <span>Amaka · Shift open</span>
      </div>

      <div className="grid gap-3 md:grid-cols-5">
        {/* left: catalogue + search */}
        <div className="rounded-2xl border border-line bg-white p-4 md:col-span-3">
          <div className="flex items-center gap-2 rounded-xl border border-line px-3 py-2 text-sm text-ink/45">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
            Scan barcode or search…
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <span
                key={c}
                className={`rounded-full px-3 py-1 text-xs ${
                  i === 0 ? "bg-leaf text-white" : "bg-mist text-ink/60"
                }`}
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {catalog.map((p) => (
              <div key={p.name} className="rounded-xl border border-line bg-paper p-3">
                <div className="text-xs font-medium leading-snug">{p.name}</div>
                <div className="mt-1 text-xs text-leaf">{p.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* right: cart */}
        <div className="flex flex-col rounded-2xl bg-ink p-4 text-paper md:col-span-2">
          <div className="text-xs uppercase tracking-wider text-paper/50">Current sale</div>

          <ul className="mt-3 flex-1 space-y-2 text-sm">
            {cart.map((l) => (
              <li key={l.name} className="flex items-start justify-between gap-2">
                <span className="text-paper/85">
                  <span className="mr-1.5 rounded bg-white/10 px-1.5 py-0.5 text-xs text-paper/70">
                    {l.qty}×
                  </span>
                  {l.name}
                </span>
                <span className="tabular-nums text-paper/70">{l.total}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t border-white/10 pt-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-paper/60">Total</span>
              <span className="text-lg font-semibold tabular-nums">₦8,950</span>
            </div>

            <div className="mt-3 flex gap-2 text-xs">
              <span className="rounded-full bg-leaf px-3 py-1 font-medium text-white">Cash</span>
              <span className="rounded-full border border-white/20 px-3 py-1 text-paper/70">
                Transfer
              </span>
              <span className="rounded-full border border-white/20 px-3 py-1 text-paper/70">
                Card
              </span>
            </div>

            <div className="mt-3 rounded-xl bg-leaf py-2.5 text-center text-sm font-medium text-white">
              Charge ₦8,950
            </div>
          </div>
        </div>
      </div>

      <p className="px-3 pb-1 pt-3 text-[11px] text-ink/50">
        Stock falls the instant you charge — one ledger row records who, what and when.
      </p>
    </div>
  );
}
