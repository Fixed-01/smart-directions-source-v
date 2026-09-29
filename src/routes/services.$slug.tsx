import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { pillars, services, ui } from "@/lib/content";
import { Arrow, FinalCTA, Magnetic, PageHero, Reveal, btn } from "@/components/site/ui";
import { SectionHead, WorkShowcase } from "@/components/site/sections";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Capability not found" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.title.en} | Smart Directions — ${s.title.ar}` },
        { name: "description", content: s.summary.en },
        { property: "og:title", content: `${s.title.en} — Smart Directions` },
        { property: "og:description", content: s.summary.en },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  const { t } = useI18n();
  const p = pillars[s.pillar]!;
  const idx = services.findIndex((x) => x.slug === s.slug);
  const next = services[(idx + 1) % services.length]!;
  return (
    <>
      <PageHero n={p.n} eyebrow={{ ar: `${p.verb.ar} — ${p.title.ar}`, en: `${p.verb.en} — ${p.title.en}` }} title={s.title} lead={s.summary} />
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead eyebrow={t({ ar: "النطاق", en: "Scope" })} title={t({ ar: "ما يشمله العمل", en: "What the work covers" })} />
            <div className="mt-10"><Magnetic><Link to="/start" className={btn.primary}>{t(ui.start)}<Arrow /></Link></Magnetic></div>
          </div>
          <ol className="border-t lg:col-span-7">
            {s.items.map((it, i) => (
              <Reveal key={i} delay={i * 60}>
                <li className="flex items-baseline gap-6 border-b py-7">
                  <span className="font-mono text-xs text-cyan">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-2xl font-bold tracking-tight md:text-3xl">{t(it)}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-t py-24">
        <div className="container-x"><SectionHead eyebrow={t({ ar: "من أعمالنا", en: "From our work" })} title={t({ ar: "القدرة في الميدان", en: "The capability in the field" })} /></div>
        <div className="mt-14"><WorkShowcase /></div>
      </section>
      <Link to="/services/$slug" params={{ slug: next.slug }} className="group block border-t py-20">
        <div className="container-x flex items-center justify-between gap-6">
          <div>
            <span className="meta">{t({ ar: "القدرة التالية", en: "Next capability" })}</span>
            <div className="mt-3 text-4xl font-extrabold tracking-tight transition-colors group-hover:text-cyan md:text-6xl">{t(next.title)}</div>
          </div>
          <Arrow className="size-10" />
        </div>
      </Link>
      <FinalCTA />
    </>
  );
}
