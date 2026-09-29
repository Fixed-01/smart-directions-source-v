import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { cases } from "@/lib/content";
import { Arrow, Eyebrow, FinalCTA, PlaceholderTag, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const c = cases.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    return { c };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Case study not found" }, { name: "robots", content: "noindex" }] };
    const c = loaderData.c;
    return {
      meta: [
        { title: `${c.title.en} | Smart Directions Case Study` },
        { name: "description", content: c.challenge.en },
        { property: "og:title", content: `${c.title.en} — Smart Directions` },
        { property: "og:description", content: c.insight.en },
      ],
    };
  },
  component: CasePage,
});

function CasePage() {
  const { c } = Route.useLoaderData();
  const { t } = useI18n();
  const idx = cases.findIndex((x) => x.slug === c.slug);
  const next = cases[(idx + 1) % cases.length]!;
  const story = [
    { h: { ar: "السياق", en: "Context" }, p: c.context },
    { h: { ar: "التحدي", en: "Challenge" }, p: c.challenge },
    { h: { ar: "الاتجاه الاستراتيجي", en: "Strategic direction" }, p: c.direction },
    { h: { ar: "النظام الإبداعي", en: "Creative system" }, p: c.system },
    { h: { ar: "التنفيذ", en: "Execution" }, p: c.execution },
    { h: { ar: "الإعلام", en: "Media" }, p: c.media },
  ];
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <img src={c.img} alt={t(c.title)} width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-ink/60 to-ink/30" />
        <div className="container-x relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32">
          <Eyebrow>{t(c.kind)} · {t(c.industry)}</Eyebrow>
          <h1 className="display-xl mt-6 max-w-5xl">{t(c.title)}</h1>
          <dl className="mt-12 grid gap-6 border-t border-line-dark pt-6 text-sm sm:grid-cols-3">
            <div><dt className="meta">{t({ ar: "العميل", en: "Client" })}</dt><dd className="mt-2 font-semibold">{t(c.client)}</dd></div>
            <div><dt className="meta">{t({ ar: "القطاع", en: "Industry" })}</dt><dd className="mt-2 font-semibold">{t(c.industry)}</dd></div>
            <div><dt className="meta">{t({ ar: "القنوات", en: "Channels" })}</dt><dd className="mt-2 font-semibold">{t(c.media)}</dd></div>
          </dl>
        </div>
      </section>

      <section className="surface-ice py-28 md:py-40">
        <div className="container-x">
          <span className="meta">{t({ ar: "الرؤية", en: "The insight" })}</span>
          <Reveal><p className="display-lg mt-8 max-w-5xl">“{t(c.insight)}”</p></Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x space-y-0 divide-y border-y">
          {story.map((b, i) => (
            <Reveal key={i}>
              <div className="grid gap-6 py-12 md:grid-cols-12">
                <h2 className="meta !text-cyan md:col-span-4">{String(i + 1).padStart(2, "0")} — {t(b.h)}</h2>
                <p className="text-2xl font-medium leading-snug tracking-tight md:col-span-8 md:text-3xl">{t(b.p)}</p>
              </div>
            </Reveal>
          ))}
          <div className="grid gap-6 py-12 md:grid-cols-12">
            <h2 className="meta !text-cyan md:col-span-4">07 — {t({ ar: "المخرجات", en: "Deliverables" })}</h2>
            <ul className="flex flex-wrap gap-2 md:col-span-8">{c.deliverables.map((d, i) => <li key={i} className="rounded-full border px-5 py-2.5">{t(d)}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="bg-night border-t py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-between gap-4"><span className="meta">08 — {t({ ar: "النتائج", en: "Results" })}</span><PlaceholderTag sample /></div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
            {c.results.map((r, i) => (
              <div key={i} className="bg-navy-deep p-10">
                <div className="text-6xl font-extrabold md:text-7xl" dir="ltr" style={{ textAlign: "start" }}><span className="text-gradient">{r.v}</span></div>
                <div className="mt-3 text-foreground/75">{t(r.k)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Link to="/work/$slug" params={{ slug: next.slug }} className="group relative block overflow-hidden border-t">
        <img src={next.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-1000 group-hover:scale-105 group-hover:opacity-50" />
        <div className="container-x relative flex items-center justify-between gap-6 py-28">
          <div><span className="meta">{t({ ar: "المشروع التالي", en: "Next project" })}</span>
            <div className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">{t(next.title)}</div></div>
          <Arrow className="size-10" />
        </div>
      </Link>
      <FinalCTA />
    </>
  );
}
