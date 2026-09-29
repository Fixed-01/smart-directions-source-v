import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { hero, microcopy, ui , profile } from "@/lib/content";
import { Arrow, Eyebrow, FinalCTA, Magnetic, Reveal, SDivider, Statement, btn } from "@/components/site/ui";
import {
  Capabilities, ClientWall, HeroRoute, IndustriesImmersive, InsightsEditorial, IntelligenceProduct,
  MethodJourney, ResultsImpact, ScrollRoute, SectionHead, SelectedPartners, WorkShowcase,
  PortfolioGallery,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Directions | الاتجاهات الذكية — Every brand needs a direction" },
      { name: "description", content: "A strategic digital growth partner in Saudi Arabia. Strategy, creativity, media and data working together as one growth system." },
      { property: "og:title", content: "Smart Directions — Every brand needs a direction" },
      { property: "og:description", content: "Strategy, creativity, media and data working as one growth system." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();
  return (
    <>
      <ScrollRoute />

      {/* 1 — The Direction */}
      <section className="bg-night relative min-h-[100svh] overflow-hidden pt-28">
        <img src={hero} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen" />
        <div className="grid-lines absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="container-x relative grid min-h-[calc(100svh-7rem)] items-center gap-6 pb-16 lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-6">
            <Reveal>
              <Eyebrow n="01">{t({ ar: "شريك النمو الرقمي", en: "Digital growth partner" })}</Eyebrow>
              <h1 className="display-xl mt-8">
                {t({ ar: "كل علامة تحتاج إلى اتجاه.", en: "Every brand needs a direction." })}
                <span className="text-gradient mt-2 block">{t({ ar: "ونحن نصنع الاتجاه الذي يقودها للنمو.", en: "We build the one that leads to growth." })}</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
                {t({ ar: "الاستراتيجية، الإبداع، الإعلام والبيانات، تعمل معاً كنظام نمو واحد.", en: "Strategy, creativity, media and data working together as one growth system." })}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic><Link to="/start" className={btn.primary}>{t(ui.start)}<Arrow /></Link></Magnetic>
                <Link to="/work" className={btn.ghostLight}>{t(ui.viewWork)}</Link>
              </div>
            </Reveal>
          </div>
          <div className="relative lg:col-span-6">
            <HeroRoute className="mx-auto w-full max-w-[720px]" />
          </div>
        </div>
        <div className="container-x relative flex items-center justify-between border-t py-5 text-xs text-muted-foreground">
          <span className="meta">{t(microcopy.direction)}</span>
          <span className="meta hidden sm:inline">{t({ ar: "الرياض · المملكة العربية السعودية", en: "Riyadh · Saudi Arabia" })}</span>
        </div>
      </section>

      {/* 2 — Brand belief */}
      <section className="surface-ice py-20 md:py-28">
        <div className="container-x">
          <span className="meta">02 — {t(profile.tagline)}</span>
          <div className="mt-6 flex gap-6 text-lg font-bold text-sky">{profile.promise.map((p, i) => <span key={i}>{t(p)}</span>)}</div>
          <Reveal>
            <h2 className="display-2xl mt-10 max-w-6xl">
              {t({ ar: "العلامات لا تحتاج إلى ضجيج أكثر.", en: "Brands don't need more noise." })}{" "}
              <span className="text-sky">{t({ ar: "تحتاج إلى اتجاه أوضح.", en: "They need clearer direction." })}</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 border-t pt-10 md:grid-cols-3">
            {[microcopy.opinion, microcopy.spend, microcopy.move].map((m, i) => (
              <Reveal key={i} delay={i * 100}>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <p className="mt-3 text-xl font-semibold leading-snug tracking-tight">{t(m)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Capabilities */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHead n="02" eyebrow={t({ ar: "القدرات", en: "Capabilities" })}
            title={<>{t({ ar: "خمس قدرات.", en: "Five capabilities." })} <span className="text-foreground/40">{t({ ar: "نظام نمو واحد.", en: "One growth system." })}</span></>}
            action={<Link to="/services" className={btn.outline}>{t(ui.allServices)}<Arrow /></Link>} />
          <div className="mt-20"><Capabilities /></div>
        </div>
      </section>

      {/* 4 — Method */}
      <MethodJourney />

      {/* 5 — Selected work */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHead n="04" eyebrow={t({ ar: "أعمال مختارة", en: "Selected work" })}
            title={t({ ar: "كل مشروع بدأ بسؤال مختلف.", en: "Every project began with a different question." })}
            action={<Link to="/work" className={btn.outline}>{t({ ar: "كل الأعمال", en: "All work" })}<Arrow /></Link>} />
        </div>
        <div className="container-x mt-16"><PortfolioGallery limit={6} /></div>
        <div className="mt-20"><WorkShowcase /></div>
      </section>

      {/* 6 — Performance / Intelligence */}
      <section className="border-t py-20 md:py-28">
        <div className="container-x">
          <SectionHead n="05" eyebrow={t({ ar: "ثقافة الأداء", en: "Performance culture" })} title={t(microcopy.designed)} />
          <div className="mt-16"><ResultsImpact /></div>
          <SDivider className="!px-0 my-24" />
          <IntelligenceProduct />
        </div>
      </section>

      {/* 7 — Industries */}
      <IndustriesImmersive />

      {/* 8 — Clients */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHead n="07" eyebrow={t({ ar: "شركاء مختارون", en: "Selected partners" })} title={t({ ar: "علامات اختارت الاتجاه.", en: "Brands that chose direction." })}
            action={<Link to="/clients" className={btn.outline}>{t({ ar: "كل العملاء", en: "All clients" })}<Arrow /></Link>} />
          <div className="mt-16"><SelectedPartners /></div>
          <div className="mt-20"><ClientWall /></div>
        </div>
      </section>

      <Statement text={microcopy.impact} className="border-t" />

      {/* 9 — Insights */}
      <section className="border-t py-20 md:py-28">
        <div className="container-x">
          <SectionHead n="08" eyebrow={t({ ar: "رؤى", en: "Insights" })} title={t({ ar: "آراء من داخل السوق، لا من خارجه.", en: "Views from inside the market, not outside it." })}
            action={<Link to="/insights" className={btn.outline}>{t({ ar: "كل الرؤى", en: "All insights" })}<Arrow /></Link>} />
          <div className="mt-16"><InsightsEditorial /></div>
        </div>
      </section>

      {/* 10 — CTA */}
      <FinalCTA />
    </>
  );
}
