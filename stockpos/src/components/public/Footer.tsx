import Link from "next/link";
import { publicFooter, publicNav, site } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-lg font-semibold">{site.name}</div>
          <p className="mt-2 text-sm text-paper/70">{site.tagline}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-paper/50">Product</div>
          <ul className="mt-3 space-y-2 text-sm">
            {publicNav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-paper/50">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            {publicFooter.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-paper/70">
          <div className="text-xs uppercase tracking-wider text-paper/50">Contact</div>
          <p className="mt-3">{site.email}</p>
          <p>{site.phone}</p>
          <Link href="/signup" className="mt-4 inline-block text-white underline">
            Start free trial →
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-paper/40">
        Multi-tenant inventory & POS · Each business keeps its own stock, sales and staff.
      </div>
    </footer>
  );
}
