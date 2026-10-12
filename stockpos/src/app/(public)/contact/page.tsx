"use client";

import { useState } from "react";
import PageHero from "@/components/public/PageHero";
import { site } from "@/lib/nav";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const r = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fd.get("name"),
        email: fd.get("email"),
        message: fd.get("message"),
      }),
    });
    setStatus(r.ok ? "Message received. We will reply by email." : "Could not send. Try again.");
  }
  return (
    <>
      <PageHero
        kicker="Screen 7 · Contact us"
        title="Talk to a person before you rent — or after."
        lede="This form does not create a business. For a shop account use Sign up. For an existing till use Sign in."
      />
      <div className="mx-auto grid max-w-site gap-10 px-5 pb-20 lg:grid-cols-2">
        <form onSubmit={submit} className="space-y-4 rounded-3xl border border-line bg-white p-8">
          <label className="block text-sm">
            Name
            <input name="name" required className="mt-1 w-full rounded-xl border border-line px-3 py-2" />
          </label>
          <label className="block text-sm">
            Email
            <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-line px-3 py-2" />
          </label>
          <label className="block text-sm">
            Message
            <textarea name="message" required rows={5} className="mt-1 w-full rounded-xl border border-line px-3 py-2" />
          </label>
          <button className="rounded-full bg-leaf px-5 py-2.5 text-sm font-medium text-white">Send</button>
          {status && <p className="text-sm text-leaf">{status}</p>}
        </form>
        <div className="text-sm text-ink/70">
          <p>{site.email}</p>
          <p className="mt-1">{site.phone}</p>
          <p className="mt-6">Lagos, Nigeria</p>
        </div>
      </div>
    </>
  );
}
