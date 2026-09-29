import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { DirectionLines, Eyebrow } from "@/components/site/ui";
import { GuidedBrief } from "@/components/site/sections";

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [
      { title: "Start a Project | Smart Directions — حدّد اتجاهك" },
      { name: "description", content: "Six questions that start a consultation: goals, capability, industry, timeline, budget and contact." },
      { property: "og:title", content: "Find your direction — Smart Directions" },
      { property: "og:description", content: "A guided project brief that feels like the first meeting." },
    ],
  }),
  component: Start,
});

function Start() {
  const { t } = useI18n();
  return (
    <section className="bg-night relative min-h-screen overflow-hidden pt-36 pb-28 md:pt-44">
      <DirectionLines className="text-cyan absolute -end-32 bottom-0 w-[640px] opacity-15" />
      <div className="container-x relative max-w-5xl">
        <Eyebrow>{t({ ar: "حدّد اتجاهك", en: "Find your direction" })}</Eyebrow>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t({ ar: "ست أسئلة قصيرة. إجاباتك تبدأ الاستشارة، لا تملأ نموذجاً.", en: "Six short questions. Your answers start a consultation — not a form." })}</p>
        <div className="mt-14"><GuidedBrief /></div>
      </div>
    </section>
  );
}
