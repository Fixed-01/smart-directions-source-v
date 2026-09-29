import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { cases, microcopy, ui } from "@/lib/content";
import { PortfolioGallery, SectionHead } from "@/components/site/sections";
import { Arrow, FinalCTA, PageHero, PlaceholderTag, Reveal, Statement } from "@/components/site/ui";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work | Smart Directions — أعمالنا" },
      { name: "description", content: "Immersive case studies: context, insight, strategic direction, creative system, execution and results." },
      { property: "og:title", content: "Work — Smart Directions" },
      { property: "og:description", content: "Every project began with a different question." },
    ],
  }),
  component: Work,
});

function Work() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={{ ar: "أعمالنا", en: "Work" }} title={{ ar: "كل مشروع بدأ بسؤال مختلف.", en: "Every project began with a different question." }} />
      <section className="py-24"><div className="container-x"><SectionHead eyebrow={t({ ar: "من ملف أعمالنا", en: "From our portfolio" })} title={t({ ar: "أعمال حقيقية لعلامات حقيقية.", en: "Real work for real brands." })} /><div className="mt-12"><PortfolioGallery /></div></div></section>
      <div className="container-x pb-6"><span className="meta">{t({ ar: "دراسات حالة نموذجية", en: "Sample case studies" })}</span></div>
      {cases.map((c, i) => (
        <Link key={c.slug} to="/work/$slug" params={{ slug: c.slug }} className="group relative block min-h-[90svh] overflow-hidden border-t">
          <img src={c.img} alt={t(c.title)} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-[1.4s] group-hover:scale-105 group-hover:opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
          <div className="container-x relative flex min-h-[90svh] flex-col justify-between py-12">
            <div className="flex justify-between"><span className="meta !text-foreground/80">{String(i + 1).padStart(2, "0")} — {t(c.kind)}</span><span className="meta !text-cyan">{t(c.industry)}</span></div>
            <Reveal>
              <p className="max-w-2xl text-lg text-foreground/75">“{t(c.insight)}”</p>
              <h2 className="display-xl mt-6 max-w-5xl">{t(c.title)}</h2>
              <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-line-dark pt-6">
                <div className="flex flex-wrap items-center gap-10">
                  {c.results.map((r, k) => <div key={k}><div className="text-3xl font-bold text-cyan" dir="ltr">{r.v}</div><div className="text-xs text-foreground/70">{t(r.k)}</div></div>)}
                  <PlaceholderTag sample />
                </div>
                <span className="inline-flex items-center gap-2 font-semibold transition-all group-hover:gap-4">{t(ui.viewCase)}<Arrow /></span>
              </div>
            </Reveal>
          </div>
        </Link>
      ))}
      <Statement text={microcopy.opinion} className="border-t" />
      <FinalCTA />
    </>
  );
}
