import Link from "next/link";
import Image from "next/image";
import PosMockup from "@/components/public/PosMockup";

/**
 * Screen 1 — Homepage / landing page (creative pass).
 * Goal mapping unchanged: hero → mission · pillars → stock/POS/tenancy · loop → core workflow
 *   showcase → counter POS + ledger · isolation → server-side tenancy & roles
 *   industries → one app every counter · stats → commercial goals · CTA → conversion
 * Creative language: hard-offset shadows, dashed stickers, serif italics,
 * gold squiggles, dot grids, polaroid photo, outlined numerals, staggered cards.
 */

const loop = [
  { n: "01", t: "Create the business", d: "Sign up, name the shop, invite a cashier if you need one." },
  { n: "02", t: "Add products", d: "Name, SKU, barcode, cost, selling price, opening stock." },
  { n: "03", t: "Sell at the till", d: "Scan or search, take payment, print a receipt. Stock drops in the same moment." },
  { n: "04", t: "Receive purchases", d: "When goods arrive, record them. Stock rises. The ledger keeps who did it." },
  { n: "05", t: "Read the day", d: "Dashboard and sales report. Low-stock list for tomorrow's order." },
];

const pillars = [
  {
    n: "01",
    t: "Stock that stays honest",
    d: "Sales drop stock. Receiving raises it. Every change is a ledger row you can read back.",
  },
  {
    n: "02",
    t: "A till built for the counter",
    d: "Scan or search, take cash or transfer, print the receipt. Stock falls in the same moment.",
  },
  {
    n: "03",
    t: "One app, many businesses",
    d: "Your products, sales, staff and reports never touch another shop's. Isolation is a server rule.",
  },
];

const isolation = [
  {
    t: "Business id from your session",
    d: "Every row carries your business id — taken from the signed-in session, never from a field the browser can edit.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 1 1 8 0v3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    t: "Roles enforced on the server",
    d: "Owner, manager, cashier. A cashier cannot see cost price or open the full P&L — whatever the UI shows.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 11a3 3 0 1 0 0-6m1.5 14a5.5 5.5 0 0 0-2-4.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    t: "Billing confirmed by webhook",
    d: "Paystack tells the server the truth. When a subscription lapses, the till is restricted — never unpaid running.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M7 15h4" strokeLinecap="round" />
      </svg>
    ),
  },
];

const industries = [
  {
    title: "Retail & mini marts",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 9l3-5h12l3 5M3 9h18M5 9l1.5 9h11L19 9M9.5 13h5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Pharmacies",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="3.5" y="8.5" width="17" height="7" rx="3.5" transform="rotate(-45 12 12)" />
        <path d="M9.5 9.5l5 5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Boutiques",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 7a2 2 0 1 1 2-2m-2 2v2m0 0L4.5 15.5A1.5 1.5 0 0 0 5.4 18h13.2a1.5 1.5 0 0 0 .9-2.5L12 9Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Electronics counters",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M9 3v4m6-4v4M6.5 7h11v3.5a5.5 5.5 0 0 1-11 0V7ZM12 16v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const stats = [
  { big: "₦120k", label: "One flat annual price — inventory, POS and reports included." },
  { big: "14 days", label: "Free trial with full owner access. No card required to start." },
  { big: "3 roles", label: "Owner, manager, cashier — permissions enforced server-side." },
  { big: "Every move", label: "Stock changes written to an auditable ledger: who, what, when." },
];

/* Hand-drawn gold squiggle used to underline key phrases */
function Squiggle() {
  return (
    <svg
      viewBox="0 0 300 10"
      preserveAspectRatio="none"
      className="absolute -bottom-1.5 left-0 h-2.5 w-full"
      aria-hidden
    >
      <path
        d="M2 7 C 60 2, 120 9, 180 4 S 280 6, 298 3"
        fill="none"
        stroke="#b0893a"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.22em] text-leaf">
      <span className="mr-2 text-gold">◆</span>
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ——— Hero · mission ——— */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-mist to-paper">
        <div
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(28,92,64,.14)_1.5px,transparent_1.5px)] [background-size:24px_24px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-moss/25 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-site items-center gap-14 px-5 py-24 lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative">
            <span className="absolute -top-7 right-0 hidden rotate-[-6deg] rounded-full border-2 border-dashed border-gold bg-paper px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold shadow-[3px_3px_0_#141c18] lg:inline-block">
              14 days free
            </span>

            <Kicker>Screen 1 · Public website</Kicker>

            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.06] tracking-tight sm:text-6xl">
              Know your stock.{" "}
              <span className="relative inline-block">
                Sell faster.
                <Squiggle />
              </span>{" "}
              Rent it to <span className="serif italic font-medium text-leaf">every shop</span>.
            </h1>

            <p className="mt-7 max-w-xl text-lg text-ink/70">
              One cloud application where independent businesses manage products, inventory,
              sales, customers, staff and reports — each shop&apos;s data locked to its own
              workspace, never mixed with another tenant.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="rounded-full bg-leaf px-7 py-3 text-sm font-semibold text-white shadow-[4px_4px_0_#141c18] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#141c18]"
              >
                Start free trial
              </Link>
              <Link
                href="/login"
                className="rounded-full border-2 border-ink/20 bg-paper px-7 py-3 text-sm font-medium hover:border-ink/50"
              >
                Sign in
              </Link>
              <Link
                href="/pricing"
                className="rounded-full px-5 py-3 text-sm font-medium text-leaf underline decoration-gold decoration-2 underline-offset-4"
              >
                See pricing
              </Link>
            </div>

            <p className="mt-6 text-sm text-ink/55">
              14-day free trial · No card required · ₦120,000/year after trial
            </p>
          </div>

          {/* collage: polaroid photo + floating ledger chip */}
          <div className="relative hidden lg:block">
            <div className="rotate-2 rounded-3xl border border-line bg-white p-3 shadow-[10px_10px_0_rgba(20,28,24,.10)]">
              <Image
                src="/images/counter-lagos.jpg"
                alt="A mini-mart checkout counter with a barcode scanner and shelves of goods behind it"
                width={960}
                height={720}
                className="h-72 w-full rounded-2xl object-cover"
                priority
              />
              <p className="serif py-3 text-center text-sm italic text-ink/55">
                “The counter we were built for.”
              </p>
            </div>

            <div className="absolute -left-8 -bottom-8 w-64 -rotate-3 rounded-2xl bg-ink p-4 text-paper shadow-[6px_6px_0_rgba(20,28,24,.25)]">
              <p className="text-[10px] uppercase tracking-widest text-paper/50">
                Today · Till 1 · Amaka
              </p>
              <p className="mt-2 text-sm">
                Peak Milk 900g <span className="text-paper/50">× 1</span>
              </p>
              <p className="mt-1 text-sm text-moss">
                stock 24 → 23 <span className="text-paper/40">· ledger row ✓</span>
              </p>
            </div>

            <span className="absolute -top-6 left-4 rotate-[-8deg] rounded-full border-2 border-dashed border-leaf bg-paper px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-leaf shadow-[3px_3px_0_#141c18]">
              Scan · Sell · Done
            </span>
          </div>
        </div>
      </section>

      {/* ——— Pillars · staggered editorial cards ——— */}
      <section className="mx-auto max-w-site px-5 pb-8 pt-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.t}
              className={`relative rounded-3xl border-2 p-6 transition hover:-translate-y-1 ${
                i === 1
                  ? "mt-0 border-leaf bg-leaf text-white shadow-[6px_6px_0_#141c18] sm:mt-10"
                  : "mt-0 border-line bg-white shadow-[6px_6px_0_rgba(20,28,24,.08)] sm:mt-0"
              } ${i === 2 ? "sm:mt-20" : ""}`}
            >
              <span
                className={`serif text-4xl font-bold ${i === 1 ? "text-white/40" : "text-gold"}`}
              >
                {p.n}
              </span>
              <h2 className={`mt-3 font-semibold ${i === 1 ? "" : "text-ink"}`}>{p.t}</h2>
              <p
                className={`mt-2 text-sm ${
                  i === 1 ? "text-white/80" : "text-ink/65"
                }`}
              >
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Core loop · dashed tickets with outlined numerals ——— */}
      <section className="mt-12 border-y border-line bg-mist/60">
        <div className="mx-auto max-w-site px-5 py-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Kicker>The core loop</Kicker>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                Five steps from empty shelf to a{" "}
                <span className="serif italic font-medium text-leaf">counted till</span>.
              </h2>
            </div>
            <span className="rotate-[-3deg] rounded-full border-2 border-dashed border-leaf bg-paper px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-leaf shadow-[3px_3px_0_#141c18]">
              must stay boring
            </span>
          </div>

          <p className="mt-5 max-w-2xl text-ink/70">
            Product → stock → sale → report. This is the loop the whole system is built to make
            boringly reliable — everything else waits until these five never surprise you.
          </p>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {loop.map((s, i) => (
              <li
                key={s.n}
                className={`rounded-2xl border-2 border-dashed border-line bg-white p-5 transition hover:-translate-y-1 hover:border-leaf ${
                  i % 2 === 1 ? "lg:mt-6" : ""
                }`}
              >
                <span className="text-3xl font-bold text-transparent [-webkit-text-stroke:1.5px_#1c5c40]">
                  {s.n}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-ink">{s.t}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink/60">{s.d}</p>
              </li>
            ))}
          </ol>

          <Link
            href="/how-it-works"
            className="mt-10 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper shadow-[4px_4px_0_#1c5c40] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1c5c40]"
          >
            How it works in detail →
          </Link>
        </div>
      </section>

      {/* ——— Product showcase · glow + dot grid ——— */}
      <section className="relative overflow-hidden border-b border-white/5 bg-ink text-paper">
        <div
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(247,244,238,.07)_1.5px,transparent_1.5px)] [background-size:26px_26px]"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-site items-center gap-14 px-5 py-20 lg:grid-cols-2">
          <div>
            <Kicker>
              <span className="text-moss">At the counter</span>
            </Kicker>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Search, scan, take money — stock falls in the{" "}
              <span className="serif italic font-medium text-moss">same moment</span>.
            </h2>
            <p className="mt-4 max-w-lg text-paper/70">
              The till is a first-class screen, not a hidden feature. USB and Bluetooth scanners
              type straight into search; cash, transfer and card all settle against the same
              receipt.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-paper/85">
              {[
                "Barcode search with manual entry fallback",
                "Cash, bank transfer and card on one receipt",
                "Every sale writes its ledger row — no surprises at stock count",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="font-bold text-gold">✦</span> {t}
                </li>
              ))}
            </ul>
            <Link
              href="/features"
              className="mt-8 inline-block rounded-full border-2 border-white/25 px-6 py-3 text-sm font-semibold hover:border-white/60"
            >
              See all features →
            </Link>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-8 rounded-full bg-leaf/30 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <PosMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ——— Isolation · dashed-wall cards ——— */}
      <section className="mx-auto max-w-site px-5 py-20">
        <Kicker>Multi-tenant by design</Kicker>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          One application.{" "}
          <span className="serif italic font-medium text-leaf">Hard walls</span> between shops.
        </h2>
        <p className="mt-4 max-w-2xl text-ink/70">
          Isolation is a server rule, not a courtesy of the user interface. Here is what that
          means in practice:
        </p>

        <div className="mt-9 grid gap-6 sm:grid-cols-3">
          {isolation.map((i) => (
            <article
              key={i.t}
              className="rounded-3xl border-2 border-dashed border-line bg-white p-6 transition hover:-translate-y-1 hover:border-solid hover:border-leaf"
            >
              <span className="inline-grid h-10 w-10 place-items-center rounded-full bg-gold/15 text-gold">
                {i.icon}
              </span>
              <h3 className="mt-4 font-semibold text-ink">{i.t}</h3>
              <p className="mt-2 text-sm text-ink/65">{i.d}</p>
            </article>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap gap-3 text-sm">
          {[
            ["/about", "About the platform"],
            ["/terms", "Terms"],
            ["/privacy", "Privacy"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="rounded-full border border-line bg-white px-4 py-2 hover:border-leaf"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* ——— Industries · polaroid + chips ——— */}
      <section className="border-y border-line bg-mist/60">
        <div className="mx-auto grid max-w-site items-center gap-14 px-5 py-20 lg:grid-cols-2">
          <figure className="relative mx-auto w-full max-w-md rotate-[-2deg] bg-white p-3 pb-12 shadow-[10px_10px_0_rgba(20,28,24,.10)]">
            <div
              className="absolute -top-3.5 left-1/2 h-7 w-28 -translate-x-1/2 rotate-[-4deg] border border-gold/40 bg-gold/30"
              aria-hidden
            />
            <Image
              src="/images/counter-lagos.jpg"
              alt="A mini-mart checkout counter with a barcode scanner and shelves of goods behind it"
              width={960}
              height={720}
              className="h-64 w-full rounded-lg object-cover sm:h-72"
            />
            <figcaption className="serif absolute bottom-3 left-0 w-full text-center text-sm italic text-ink/55">
              Lagos, Nigeria — 10:42am
            </figcaption>
          </figure>

          <div>
            <Kicker>Who it&apos;s for</Kicker>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              Every kind of counter runs on{" "}
              <span className="serif italic font-medium text-leaf">the same app</span>.
            </h2>
            <p className="mt-4 max-w-lg text-ink/70">
              One product serves every tenant. The industry pages explain the fit — they never
              fork the codebase.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {industries.map((i) => (
                <div
                  key={i.title}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-leaf"
                >
                  <span className="text-leaf">{i.icon}</span>
                  {i.title}
                </div>
              ))}
            </div>
            <Link
              href="/industries"
              className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper shadow-[4px_4px_0_#1c5c40] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1c5c40]"
            >
              Explore industries →
            </Link>
          </div>
        </div>
      </section>

      {/* ——— Stats · outlined numerals over dark photo ——— */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <Image
          src="/images/shelves-dark.jpg"
          alt=""
          aria-hidden
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/70"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-site gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((t, i) => (
            <div key={t.big}>
              <div
                className={`text-4xl font-bold tracking-tight text-transparent ${
                  i % 2 === 0
                    ? "[-webkit-text-stroke:1.5px_#f7f4ee]"
                    : "[-webkit-text-stroke:1.5px_#b0893a]"
                }`}
              >
                {t.big}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-paper/75">{t.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Closing CTA · diagonal stripes ——— */}
      <section className="relative bg-leaf text-white [background-image:repeating-linear-gradient(45deg,transparent_0_14px,rgba(255,255,255,.06)_14px_28px)]">
        <div className="mx-auto max-w-site px-5 py-24 text-center">
          <span className="inline-block rotate-[-3deg] rounded-full border-2 border-dashed border-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-[3px_3px_0_rgba(0,0,0,.35)]">
            No card needed
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Ready to{" "}
            <span className="serif italic font-medium">count your stock</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/85">
            Open a shop in minutes. Sell from the till the same day. Fourteen days free — decide
            later whether the counter needs it.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-leaf shadow-[5px_5px_0_rgba(0,0,0,.35)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_rgba(0,0,0,.35)]"
            >
              Start free trial
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border-2 border-white/50 px-7 py-3.5 text-sm font-semibold hover:border-white"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
