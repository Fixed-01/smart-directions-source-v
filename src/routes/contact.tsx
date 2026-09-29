import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { contactInfo } from "@/lib/content";
import { DirectionLines, Eyebrow, btn } from "@/components/site/ui";
import { GuidedBrief, Offices } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Smart Directions — تواصل معنا" },
      { name: "description", content: "Let's find the right direction. Start a guided project brief or reach Smart Directions in Riyadh by email, phone or WhatsApp." },
      { property: "og:title", content: "Let's find the right direction — Smart Directions" },
      { property: "og:description", content: "A guided brief that starts the consultation." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useI18n();
  const info = [
    { k: t({ ar: "البريد", en: "Email" }), v: contactInfo.email, href: `mailto:${contactInfo.email}`, ltr: true },
    { k: t({ ar: "الهاتف", en: "Phone" }), v: contactInfo.phone, ltr: true },
    { k: t({ ar: "المكتب", en: "Office" }), v: t(contactInfo.location) },
    { k: t({ ar: "ساعات العمل", en: "Hours" }), v: t(contactInfo.hours) },
  ];
  return (
    <section className="bg-night relative min-h-screen overflow-hidden pt-36 pb-28 md:pt-44">
      <DirectionLines className="text-cyan absolute -end-40 top-20 w-[700px] opacity-15" />
      <div className="container-x relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Eyebrow>{t({ ar: "تواصل معنا", en: "Contact" })}</Eyebrow>
          <h1 className="display-xl mt-8">{t({ ar: "خلّنا نحدد الاتجاه الصحيح لمشروعك.", en: "Let's find the right direction." })}</h1>
          <div className="mt-16"><GuidedBrief /></div>
        </div>
        <aside className="lg:col-span-4 lg:pt-40">
          <div className="rounded-2xl border bg-ink/50 p-8 backdrop-blur">
            <dl className="divide-y">
              {info.map((i) => (
                <div key={i.k} className="py-4 first:pt-0">
                  <dt className="meta">{i.k}</dt>
                  <dd className="mt-2 text-lg font-semibold">{i.href ? <a href={i.href} dir="ltr" className="hover:text-cyan">{i.v}</a> : <span dir={i.ltr ? "ltr" : undefined}>{i.v}</span>}</dd>
                </div>
              ))}
            </dl>
            <a href={`https://wa.me/${contactInfo.whatsapp}`} className={`${btn.dark} mt-6 w-full`} target="_blank" rel="noreferrer">{t({ ar: "تحدث معنا على واتساب", en: "Talk to us on WhatsApp" })}</a>
          </div>
          <div className="mt-8"><div className="meta mb-4">{t({ ar: "مكاتبنا", en: "Our offices" })}</div><Offices /></div>
        </aside>
      </div>
    </section>
  );
}
