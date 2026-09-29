import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { nav, services, ui, contactInfo, microcopy } from "@/lib/content";
import logo from "@/assets/sd-logo.png.asset.json";
import mark from "@/assets/sd-mark.png.asset.json";
import { btn, Arrow, SMarker } from "./ui";

function LangToggle() {
  const { lang, setLang } = useI18n();
  return (
    <button
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      className="h-10 rounded-full border border-line-dark px-4 text-xs font-semibold tracking-wider text-foreground transition-colors hover:border-cyan hover:text-cyan"
      aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
    >
      {lang === "ar" ? "EN" : "عربي"}
    </button>
  );
}

function Brand() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Smart Directions — الاتجاهات الذكية">
      <img src={mark.url} alt="" className="h-9 w-auto" />
      <span className="leading-tight">
        <span className="block text-sm font-bold tracking-tight">Smart Directions</span>
        <span className="block text-[11px] text-muted-foreground">شركة الاتجاهات الذكية</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "border-b bg-navy-deep/85 backdrop-blur-xl" : "bg-transparent")}>
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Brand />
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {nav.slice(1).map((n) => (
            <Link key={n.to} to={n.to}
              className="group relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "!text-foreground" }}>
              {({ isActive }) => (<>
                <SMarker className={cn("h-2 w-4 text-cyan transition-all", isActive ? "opacity-100" : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100")} />
                {t(n.label)}
              </>)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
          <Link to="/start" className={cn(btn.primary, "hidden !h-10 sm:inline-flex")}>{t(ui.start)}</Link>
          <button onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-full border border-line-dark xl:hidden" aria-expanded={open} aria-label="Menu">
            <span className="relative block h-3 w-4">
              <span className={cn("absolute inset-x-0 top-0 h-0.5 bg-current transition", open && "top-1.5 rotate-45")} />
              <span className={cn("absolute inset-x-0 bottom-0 h-0.5 bg-current transition", open && "bottom-1 -rotate-45")} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="h-[calc(100dvh-5rem)] overflow-y-auto bg-navy-deep xl:hidden">
          <nav className="container-x flex flex-col py-6" aria-label="Mobile">
            {nav.map((n, i) => (
              <Link key={n.to} to={n.to} className="flex items-baseline justify-between border-b py-5 text-3xl font-bold tracking-tight" activeProps={{ className: "text-cyan" }}>
                {t(n.label)}<span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </Link>
            ))}
            <p className="mt-8 text-sm text-muted-foreground">{t(microcopy.direction)}</p>
          </nav>
        </div>
      )}
    </header>
  );
}

/** Mobile sticky CTA + desktop WhatsApp */
export function StickyActions() {
  const { t } = useI18n();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const wa = (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 1-2.3.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z" /></svg>
  );
  return (
    <>
      <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="wa-pulse fixed bottom-6 end-6 z-40 hidden size-14 place-items-center rounded-full border border-line-dark bg-navy text-foreground shadow-elegant transition hover:bg-sky md:grid">
        {wa}
      </a>
      {path !== "/start" && (
        <div className="fixed inset-x-3 bottom-3 z-40 flex gap-2 rounded-full border border-line-dark bg-navy-deep/90 p-1.5 backdrop-blur-xl md:hidden">
          <Link to="/start" className={cn(btn.primary, "!h-12 flex-1")}>{t(ui.start)}<Arrow /></Link>
          <a href={`https://wa.me/${contactInfo.whatsapp}`} aria-label="WhatsApp" className="wa-pulse grid size-12 place-items-center rounded-full bg-navy">{wa}</a>
        </div>
      )}
    </>
  );
}

export function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink pb-24 md:pb-0">
      <div className="container-x border-b py-16">
        <p className="display-lg max-w-4xl text-foreground/90">{t(microcopy.impact)}</p>
      </div>
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="inline-block rounded-lg bg-ice p-4"><img src={logo.url} alt="Smart Directions" className="h-10 w-auto" loading="lazy" /></div>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
            {t({ ar: "شريك نمو رقمي يجمع الاستراتيجية والإبداع والإعلام والبيانات في نظام واحد.", en: "A digital growth partner uniting strategy, creativity, media and data in one system." })}
          </p>
          <div className="mt-6 flex gap-2">
            {["X", "IG", "in", "TT", "SC"].map((s) => (
              <a key={s} href="#" className="grid size-10 place-items-center rounded-full border border-line-dark text-xs font-semibold transition hover:border-cyan hover:text-cyan" aria-label={s}>{s}</a>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="meta">{t({ ar: "الموقع", en: "Explore" })}</h3>
          <ul className="mt-5 space-y-3 text-sm text-foreground/70">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-cyan">{t(n.label)}</Link></li>)}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="meta">{t({ ar: "القدرات", en: "Capabilities" })}</h3>
          <ul className="mt-5 space-y-3 text-sm text-foreground/70">
            {services.slice(0, 7).map((s) => <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-cyan">{t(s.title)}</Link></li>)}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="meta">{t({ ar: "تواصل", en: "Contact" })}</h3>
          <ul className="mt-5 space-y-3 text-sm text-foreground/70">
            <li><a href={`mailto:${contactInfo.email}`} className="hover:text-cyan">{contactInfo.email}</a></li>
            <li><span dir="ltr">{contactInfo.phone}</span></li>
            <li>{t(contactInfo.location)}</li>
            <li>{t(contactInfo.hours)}</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-muted-foreground">
          <span>© {year} {t({ ar: "شركة الاتجاهات الذكية", en: "Smart Directions" })}</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">{t({ ar: "سياسة الخصوصية", en: "Privacy Policy" })}</a>
            <a href="#" className="hover:text-foreground">{t({ ar: "الشروط والأحكام", en: "Terms" })}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
