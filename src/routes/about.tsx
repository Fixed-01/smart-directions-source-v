import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { microcopy, studio } from "@/lib/content";
import { Eyebrow, FinalCTA, PlaceholderTag, Reveal, Statement } from "@/components/site/ui";
import { MethodJourney, Offices, ProfilePillars } from "@/components/site/sections";
import { profile } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Smart Directions — We believe in clearer direction" },
      { name: "description", content: "Smart Directions' point of view: brands don't need more noise, they need clearer direction. Our philosophy, method and the minds behind it." },
      { property: "og:title", content: "About Smart Directions" },
      { property: "og:description", content: "Brands don't need more noise. They need clearer direction." },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();
  const philosophy = [
    { h: { ar: "الاتجاه قبل التنفيذ", en: "Direction before execution" }, p: { ar: "لا نبدأ بالمحتوى. نبدأ بقرار: إلى أين يجب أن تتحرك العلامة، ولماذا.", en: "We don't start with content. We start with a decision: where the brand should move, and why." } },
    { h: { ar: "نظام، لا خدمات", en: "A system, not services" }, p: { ar: "الاستراتيجية والإبداع والإعلام والبيانات ليست أقساماً منفصلة لدينا، بل دائرة واحدة.", en: "Strategy, creative, media and data aren't separate departments here — they're one loop." } },
    { h: { ar: "العربية أولاً", en: "Arabic first" }, p: { ar: "نفكر ونكتب بالعربية، ونفهم الجمهور السعودي من الداخل.", en: "We think and write in Arabic, and understand the Saudi audience from the inside." } },
    { h: { ar: "مساءلة تنفيذية", en: "Executive accountability" }, p: { ar: "كل ما نفعله يُقاس بلغة الإدارة: عملاء، مبيعات، كلفة، نمو.", en: "Everything we do is measured in leadership language: leads, sales, cost, growth." } },
  ];
  const disciplines = [
    ["الاستراتيجيون","Strategists","يحوّلون الغموض إلى قرار.","Turn ambiguity into decisions."],
    ["الكتّاب","Writers","يكتبون بالعربية لا يترجمون إليها.","Write in Arabic, never into it."],
    ["المصممون","Designers","يبنون أنظمة، لا منشورات.","Build systems, not posts."],
    ["المنتجون","Producers","يصنعون صورة تليق بالعلامة.","Make images worthy of the brand."],
    ["خبراء الإعلام","Media specialists","يجعلون كل ريال يعمل.","Make every riyal work."],
    ["المحللون","Analysts","يقرؤون الإشارات قبل الأرقام.","Read signals before numbers."],
  ];
  return (
    <>
      <section className="bg-night pt-44 pb-24 md:pt-56">
        <div className="container-x">
          <Eyebrow>{t({ ar: "وجهة نظرنا", en: "Our point of view" })}</Eyebrow>
          <h1 className="display-2xl mt-10 max-w-6xl">
            {t({ ar: "العلامات لا تحتاج إلى ضجيج أكثر.", en: "Brands don't need more noise." })}{" "}
            <span className="text-gradient">{t({ ar: "تحتاج إلى اتجاه أوضح.", en: "They need clearer direction." })}</span>
          </h1>
        </div>
      </section>
      <section className="py-24 md:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <img src={studio} alt={t({ ar: "فريق الاتجاهات الذكية", en: "The Smart Directions team" })} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover lg:sticky lg:top-28" />
          </Reveal>
          <div className="lg:col-span-7">
            <p className="text-2xl leading-relaxed text-foreground/85 md:text-3xl">
              {t(profile.about)}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t({ ar: "تأسست الاتجاهات الذكية على قناعة بسيطة: السوق مليء بالمحتوى، وفقير بالوضوح. دورنا أن نمنح العلامة موقفاً واضحاً، ثم نبني حوله نظاماً يعمل كل يوم.", en: "Smart Directions was founded on a simple conviction: the market is full of content and short on clarity. Our role is to give a brand a clear stance, then build a system around it that works every day." })}
            </p>
            <div className="mt-16 divide-y border-y">
              {philosophy.map((p, i) => (
                <Reveal key={i}>
                  <div className="grid gap-4 py-10 md:grid-cols-[4rem_14rem_1fr]">
                    <span className="font-mono text-xs text-cyan">0{i + 1}</span>
                    <h2 className="text-2xl font-bold tracking-tight">{t(p.h)}</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">{t(p.p)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="border-t py-24 md:py-32">
        <div className="container-x">
          <Eyebrow>{t(profile.tagline)}</Eyebrow>
          <h2 className="display-lg mt-6">{profile.promise.map((p) => t(p)).join(" · ")}</h2>
          <div className="mt-16"><ProfilePillars /></div>
          <div className="mt-20"><Eyebrow>{t({ ar: "أين نحن", en: "Where we are" })}</Eyebrow><div className="mt-8 max-w-3xl"><Offices /></div></div>
        </div>
      </section>
      <MethodJourney />
      <section className="py-28 md:py-40">
        <div className="container-x">
          <Eyebrow>{t({ ar: "الفريق والثقافة", en: "Team & culture" })}</Eyebrow>
          <h2 className="display-lg mt-6">{t({ ar: "العقول خلف الاتجاه.", en: "The minds behind the direction." })}</h2>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
            {disciplines.map(([ar, en, par, pen], i) => (
              <div key={i} className="group bg-navy-deep p-8 transition-colors hover:bg-mist md:p-10">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-10 text-3xl font-extrabold tracking-tight">{t({ ar: ar!, en: en! })}</h3>
                <p className="mt-3 text-muted-foreground group-hover:text-foreground">{t({ ar: par!, en: pen! })}</p>
              </div>
            ))}
          </div>
          <PlaceholderTag className="mt-4" />
          <p className="mt-2 text-xs text-muted-foreground">{t({ ar: "صور وأسماء الفريق تُضاف عند توفرها.", en: "Team portraits and names will be added when available." })}</p>
        </div>
      </section>
      <Statement text={microcopy.designed} className="border-t" />
      <FinalCTA />
    </>
  );
}
