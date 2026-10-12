import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <form className="w-full max-w-md rounded-3xl bg-paper p-8 text-ink">
      <p className="text-xs uppercase tracking-wider text-leaf">Screen 13 · Section B</p>
      <h1 className="mt-2 text-2xl font-semibold">Sign in</h1>
      <p className="mt-1 text-sm text-ink/60">Existing businesses only. New shops use Sign up.</p>
      <label className="mt-6 block text-sm">
        Email
        <input type="email" className="mt-1 w-full rounded-xl border border-line px-3 py-2" required />
      </label>
      <label className="mt-4 block text-sm">
        Password
        <input type="password" className="mt-1 w-full rounded-xl border border-line px-3 py-2" required />
      </label>
      <button className="mt-6 w-full rounded-xl bg-leaf py-2.5 text-sm font-medium text-white">
        Continue
      </button>
      <p className="mt-4 text-center text-sm text-ink/60">
        No account?{" "}
        <Link href="/signup" className="text-leaf underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
