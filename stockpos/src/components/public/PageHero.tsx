export default function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="mx-auto max-w-site px-5 pb-10 pt-16">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">{kicker}</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/70">{lede}</p>
    </section>
  );
}
