import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, PageHero } from "@/components/site/ui";
import { ClientWall, SelectedPartners, Testimonials, WorkShowcase, SectionHead } from "@/components/site/sections";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients | Smart Directions — عملاؤنا" },
      { name: "description", content: "Selected partners, a client wall grouped by industry, and featured client stories." },
      { property: "og:title", content: "Clients — Smart Directions" },
      { property: "og:description", content: "Brands that chose direction." },
    ],
  }),
  component: Clients,
});

function Clients() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={{ ar: "عملاؤنا", en: "Clients" }} title={{ ar: "علامات اختارت الاتجاه.", en: "Brands that chose direction." }} />
      <section className="py-24"><div className="container-x"><SectionHead eyebrow={t({ ar: "شركاء مختارون", en: "Selected partners" })} title="" /><div className="mt-6"><SelectedPartners /></div></div></section>
      <section className="border-t py-24"><div className="container-x"><SectionHead eyebrow={t({ ar: "جدار العملاء", en: "Client wall" })} title={t({ ar: "مصنّفون حسب القطاع", en: "Grouped by industry" })} /><div className="mt-12"><ClientWall filter /></div></div></section>
      <section className="border-t py-24">
        <div className="container-x"><SectionHead eyebrow={t({ ar: "قصص العملاء", en: "Featured client stories" })} title={t({ ar: "ما صنعناه معاً", en: "What we built together" })} /></div>
        <div className="mt-12"><WorkShowcase /></div>
      </section>
      <section className="border-t py-24 md:py-36"><div className="container-x"><Testimonials /></div></section>
      <FinalCTA />
    </>
  );
}
