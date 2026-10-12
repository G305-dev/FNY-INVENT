"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { publicNav, site } from "@/lib/nav";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {publicNav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`rounded-full px-3 py-1.5 text-sm ${
                path === n.href ? "bg-ink text-paper" : "text-ink/70 hover:bg-mist"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/login" className="px-3 py-1.5 text-sm text-ink/80">
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-leaf px-4 py-2 text-sm font-medium text-white"
          >
            Start free trial
          </Link>
        </div>
        <button
          className="lg:hidden rounded-lg border border-line px-3 py-1 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="border-t border-line px-5 py-3 lg:hidden">
          {publicNav.map((n) => (
            <Link key={n.href} href={n.href} className="block py-2 text-sm" onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link href="/login" className="block py-2 text-sm" onClick={() => setOpen(false)}>
            Sign in
          </Link>
          <Link href="/signup" className="block py-2 text-sm font-medium" onClick={() => setOpen(false)}>
            Start free trial
          </Link>
        </div>
      )}
    </header>
  );
}
