import { createFileRoute } from "@tanstack/react-router";
import { microcopy } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { FinalCTA, PageHero, Statement } from "@/components/site/ui";
import { Capabilities, ProfileServices, SectionHead } from "@/components/site/sections";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Capabilities | Smart Directions — قدراتنا" },
      { name: "description", content: "Five capabilities, one growth system: Think, Create, Activate, Manage, Measure — from strategy to executive reporting." },
      { property: "og:title", content: "Capabilities — Smart Directions" },
      { property: "og:description", content: "Think. Create. Activate. Manage. Measure." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow={{ ar: "القدرات", en: "Capabilities" }} title={{ ar: "خمس قدرات. نظام نمو واحد.", en: "Five capabilities. One growth system." }}
        lead={{ ar: "لا نبيع خدمات منفصلة. نبني نظاماً تتغذى فيه كل قدرة على الأخرى.", en: "We don't sell separate services. We build a system where every capability feeds the next." }} />
      <section className="py-24 md:py-32"><div className="container-x"><Capabilities /></div></section>
      <section className="border-t py-24 md:py-32"><div className="container-x"><SectionHead eyebrow="Marketing · Programming · Design" title={<ServicesTitle />} /><div className="mt-16"><ProfileServices /></div></div></section>
      <Statement text={microcopy.spend} className="border-t" />
      <FinalCTA />
    </>
  ),
});

function ServicesTitle() {
  const { t } = useI18n();
  return <>{t({ ar: "ما نقدّمه بالتفصيل.", en: "What we deliver, in detail." })}</>;
}
