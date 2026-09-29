import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { packages, packagesContent, contactInfo } from "@/lib/content";
import { PageHero, FinalCTA, Reveal, Eyebrow, Arrow, btn } from "@/components/site/ui";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Social Media Packages | Smart Directions — باقات إدارة السوشيال ميديا" },
      { name: "description", content: "Monthly social media management packages from Smart Directions: content, design, ad campaigns, community management and reporting. From 2,000 SAR/month." },
      { property: "og:title", content: "Social Media Packages — Smart Directions" },
      { property: "og:description", content: "Pick the package that matches your brand's ambition. From 2,000 SAR/month, save 20% yearly." },
      { property: "og:url", content: "https://sd-media.lovable.app/packages" },
    ],
    links: [{ rel: "canonical", href: "https://sd-media.lovable.app/packages" }],
  }),
  component: PackagesPage,
});

const waIcon = (
  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 1-2.3.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z" /></svg>
);

function PackagesPage() {
  const { t, lang } = useI18n();
  const [yearly, setYearly] = useState(false);
  const fmt = (n: number) => n.toLocaleString(lang === "ar" ? "ar-SA" : "en-US");

  return (
    <>
      <PageHero
        eyebrow={{ ar: "الباقات", en: "Packages" }}
        title={{ ar: "باقات إدارة السوشيال ميديا", en: "Social media management packages" }}
        lead={packagesContent.lead}
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          {/* Billing toggle */}
          <Reveal className="flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-full border border-line-dark bg-navy p-1.5">
              <button
                onClick={() => setYearly(false)}
                className={cn("rounded-full px-6 py-2.5 text-sm font-semibold transition", !yearly ? "bg-sky text-accent-foreground" : "text-foreground/70 hover:text-foreground")}
              >
                {t(packagesContent.monthly)}
              </button>
              <button
                onClick={() => setYearly(true)}
                className={cn("flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition", yearly ? "bg-sky text-accent-foreground" : "text-foreground/70 hover:text-foreground")}
              >
                {t(packagesContent.yearly)}
                <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-bold", yearly ? "bg-ink/20 text-accent-foreground" : "bg-cyan/15 text-cyan")}>
                  {t(packagesContent.yearlyOff)}
                </span>
              </button>
            </div>
          </Reveal>

          {/* Cards */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {packages.map((p, i) => {
              const price = yearly ? p.yearly : p.monthly;
              const waText = encodeURIComponent(
                lang === "ar"
                  ? `مرحباً، أرغب بطلب ${p.name.ar} (${yearly ? "سنوي" : "شهري"})`
                  : `Hello, I'd like to order the ${p.name.en} (${yearly ? "yearly" : "monthly"})`
              );
              return (
                <Reveal key={p.name.en} delay={i * 100}>
                  <article
                    className={cn(
                      "relative flex h-full flex-col rounded-2xl border p-8 transition-colors",
                      p.featured ? "border-cyan/60 bg-navy shadow-elegant" : "border-line-dark bg-ink/40 hover:border-cyan/40"
                    )}
                  >
                    {p.featured && (
                      <span className="absolute -top-3.5 start-8 rounded-full bg-cyan px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                        {t(packagesContent.popular)}
                      </span>
                    )}
                    <Eyebrow n={`0${i + 1}`}>{t(p.tagline)}</Eyebrow>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight">{t(p.name)}</h2>

                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-4xl font-bold tracking-tight text-gradient" dir="ltr">{fmt(price)}</span>
                      <span className="text-sm text-muted-foreground">{t(yearly ? packagesContent.perYear : packagesContent.perMonth)}</span>
                    </div>

                    <div className="mt-6 space-y-2 border-t border-line-dark pt-6 text-sm">
                      <p className="flex items-center justify-between">
                        <span className="text-muted-foreground">{t(packagesContent.postsLabel)}</span>
                        <span className="font-semibold">{p.posts}</span>
                      </p>
                      <div>
                        <p className="text-muted-foreground">{t(packagesContent.platformsLabel)}</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {p.platforms.map((pl) => (
                            <span key={pl} className="rounded-full border border-line-dark px-2.5 py-1 text-[11px] font-medium text-foreground/80">{pl}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <ul className="mt-6 flex-1 space-y-3 text-sm">
                      {p.features.map((f) => (
                        <li key={f.label.en} className={cn("flex items-center gap-3", !f.included && "text-muted-foreground/50 line-through")}>
                          <span className={cn("grid size-5 shrink-0 place-items-center rounded-full text-[10px]", f.included ? "bg-cyan/15 text-cyan" : "bg-foreground/5 text-muted-foreground/50")} aria-hidden>
                            {f.included ? "✓" : "✕"}
                          </span>
                          {t(f.label)}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/${contactInfo.whatsapp}?text=${waText}`}
                      target="_blank"
                      rel="noreferrer"
                      className={cn("mt-8", p.featured ? btn.primary : btn.ghostLight, "w-full")}
                    >
                      {waIcon}{t(packagesContent.orderWa)}<Arrow />
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-12 text-center text-sm text-muted-foreground">
            {t({
              ar: "جميع الباقات شهرية وقابلة للتجديد. تحتاج باقة مخصصة؟ تواصل معنا وسنصممها لك.",
              en: "All packages are monthly and renewable. Need a custom package? Contact us and we'll design one for you.",
            })}
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
