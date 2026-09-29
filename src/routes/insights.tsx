import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, PageHero } from "@/components/site/ui";
import { InsightsEditorial } from "@/components/site/sections";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights | Smart Directions — رؤى" },
      { name: "description", content: "Point-of-view writing on Saudi digital trends, brand strategy, performance, content and marketing intelligence." },
      { property: "og:title", content: "Insights — Smart Directions" },
      { property: "og:description", content: "Views from inside the market, not outside it." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow={{ ar: "رؤى", en: "Insights" }} title={{ ar: "آراء من داخل السوق، لا من خارجه.", en: "Views from inside the market, not outside it." }} />
      <section className="py-24"><div className="container-x"><InsightsEditorial all /></div></section>
      <FinalCTA />
    </>
  ),
});
