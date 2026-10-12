import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Sign up" };

export default function SignupPage() {
  return (
    <form className="w-full max-w-md rounded-3xl bg-paper p-8 text-ink">
      <p className="text-xs uppercase tracking-wider text-leaf">Screen 12 · Section B starts</p>
      <h1 className="mt-2 text-2xl font-semibold">Create your shop</h1>
      <p className="mt-1 text-sm text-ink/60">14-day trial. You accept Terms and Privacy to continue.</p>
      <label className="mt-6 block text-sm">
        Business name
        <input className="mt-1 w-full rounded-xl border border-line px-3 py-2" required />
      </label>
      <label className="mt-4 block text-sm">
        Your name
        <input className="mt-1 w-full rounded-xl border border-line px-3 py-2" required />
      </label>
      <label className="mt-4 block text-sm">
        Email
        <input type="email" className="mt-1 w-full rounded-xl border border-line px-3 py-2" required />
      </label>
      <label className="mt-4 block text-sm">
        Password
        <input type="password" className="mt-1 w-full rounded-xl border border-line px-3 py-2" required />
      </label>
      <label className="mt-4 flex gap-2 text-xs text-ink/70">
        <input type="checkbox" required className="mt-0.5" />
        <span>
          I agree to the{" "}
          <Link href="/terms" className="underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      <button className="mt-6 w-full rounded-xl bg-leaf py-2.5 text-sm font-medium text-white">
        Create account
      </button>
      <p className="mt-4 text-center text-sm text-ink/60">
        Already renting?{" "}
        <Link href="/login" className="text-leaf underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
