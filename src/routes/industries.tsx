import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, PageHero } from "@/components/site/ui";
import { IndustriesImmersive } from "@/components/site/sections";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | Smart Directions — القطاعات" },
      { name: "description", content: "Sector expertise across real estate, hospitality, retail, healthcare, industrial, technology, government and education." },
      { property: "og:title", content: "Industries — Smart Directions" },
      { property: "og:description", content: "Every sector has its own language. We speak them." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow={{ ar: "القطاعات", en: "Industries" }} title={{ ar: "لكل قطاع لغته. نحن نتحدثها.", en: "Every sector has its own language. We speak it." }}
        lead={{ ar: "مرّر على القطاع لترى تحدياته والقدرات التي نوصي بها.", en: "Hover a sector to see its challenges and the capabilities we recommend." }} />
      <IndustriesImmersive />
      <FinalCTA />
    </>
  ),
});
