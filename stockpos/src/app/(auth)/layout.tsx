import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-5">
        <Link href="/" className="font-semibold">
          StockPOS
        </Link>
        <Link href="/" className="text-sm text-paper/60">
          Back to site
        </Link>
      </div>
      <div className="grid min-h-[80vh] place-items-center px-5 py-10">{children}</div>
    </div>
  );
}
