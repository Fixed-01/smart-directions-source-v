import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode, type PointerEvent } from "react";
import { cn } from "@/lib/utils";
import { useI18n, type L } from "@/lib/i18n";
import { ui } from "@/lib/content";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add("is-in"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const btnBase = "relative inline-flex items-center justify-center gap-2.5 rounded-full px-7 h-13 min-h-12 text-sm font-semibold transition-[background,color,border,transform] duration-300 whitespace-nowrap";
export const btn = {
  primary: cn(btnBase, "bg-sky text-accent-foreground hover:bg-cyan hover:text-ink"),
  ghostLight: cn(btnBase, "border border-line-dark text-foreground hover:border-cyan hover:text-cyan"),
  dark: cn(btnBase, "bg-ice text-ice-foreground hover:bg-cyan"),
  outline: cn(btnBase, "border border-border text-foreground hover:border-cyan hover:text-cyan"),
  onIce: cn(btnBase, "bg-ice-foreground text-ice hover:bg-sky"),
};

/** Magnetic hover for primary CTAs (desktop pointers only). */
export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const move = (e: PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.25;
    const y = (e.clientY - r.top - r.height / 2) * 0.35;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <span ref={ref} onPointerMove={move} onPointerLeave={leave} className={cn("inline-block transition-transform duration-300 ease-out", className)}>
      {children}
    </span>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4 rtl:-scale-x-100", className)} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Eyebrow({ children, className, n }: { children: ReactNode; className?: string; n?: string | undefined }) {
  return (
    <span className={cn("meta inline-flex items-center gap-3 !text-cyan", className)}>
      {n && <span className="font-mono text-foreground/40">{n}</span>}
      <SMarker />
      {children}
    </span>
  );
}

/** Tiny S-route marker used as the navigation / section marker */
export function SMarker({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 16" className={cn("h-3 w-6", className)} fill="none" aria-hidden>
      <path d="M26 2H9a5 5 0 0 0 0 10h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="2.5" cy="12" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function PlaceholderTag({ className, sample }: { className?: string; sample?: boolean }) {
  const { t } = useI18n();
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border border-placeholder/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-placeholder", className)}>
      <span className="size-1.5 rounded-full bg-placeholder" />{t(sample ? ui.sample : ui.placeholder)}
    </span>
  );
}

/** Section divider: a thin route that bends like the S */
export function SDivider({ className }: { className?: string }) {
  return (
    <div className={cn("container-x", className)} aria-hidden>
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="h-10 w-full text-border">
        <path d="M0 8H540a12 12 0 0 1 12 12 12 12 0 0 0 12 12H1200" stroke="currentColor" strokeWidth="1.2" fill="none" vectorEffect="non-scaling-stroke" />
        <circle cx="552" cy="20" r="3" className="fill-cyan" />
      </svg>
    </div>
  );
}

/** Logo-inspired directional lines */
export function DirectionLines({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} fill="none" aria-hidden>
      <path className="draw-line" d="M560 40H200a120 120 0 0 0 0 240h200a60 60 0 0 1 0 120H40" stroke="url(#dl-g)" strokeWidth="10" strokeLinecap="round" />
      <path className="draw-line" style={{ animationDelay: ".3s" }} d="M520 90H210a70 70 0 0 0 0 140h190a110 110 0 0 1 0 220" stroke="currentColor" strokeOpacity=".4" strokeWidth="2" strokeLinecap="round" />
      <circle cx="590" cy="40" r="7" fill="currentColor" />
      <defs>
        <linearGradient id="dl-g" x1="0" x2="600" y1="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--sky)" /><stop offset=".5" stopColor="var(--sky-soft)" /><stop offset="1" stopColor="var(--cyan)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Statement({ text, className }: { text: L; className?: string }) {
  const { t } = useI18n();
  return (
    <div className={cn("container-x py-16 md:py-24", className)}>
      <Reveal>
        <p className="flex items-start gap-5 text-2xl font-semibold leading-snug tracking-tight md:text-4xl">
          <SMarker className="mt-2 h-4 w-8 shrink-0 text-cyan md:mt-3" />
          <span className="max-w-5xl">{t(text)}</span>
        </p>
      </Reveal>
    </div>
  );
}

export function PageHero({ eyebrow, title, lead, n }: { eyebrow: L; title: L; lead?: L; n?: string }) {
  const { t } = useI18n();
  return (
    <section className="bg-night relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
      <div className="grid-lines absolute inset-0 opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <DirectionLines className="text-cyan absolute -end-24 top-16 w-[680px] opacity-30 max-md:hidden" />
      <div className="container-x relative">
        <Eyebrow n={n}>{t(eyebrow)}</Eyebrow>
        <h1 className="display-xl mt-8 max-w-5xl">{t(title)}</h1>
        {lead && <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{t(lead)}</p>}
      </div>
    </section>
  );
}

export function FinalCTA() {
  const { t } = useI18n();
  return (
    <section className="bg-night relative overflow-hidden border-t py-24 md:py-32">
      <DirectionLines className="text-cyan absolute -start-40 -bottom-10 w-[900px] opacity-25" />
      <div className="container-x relative">
        <Reveal>
          <span className="meta">{t({ ar: "المحطة التالية", en: "Next stop" })}</span>
          <h2 className="display-2xl mt-6 max-w-6xl">
            {t({ ar: "خلّنا نحدد", en: "Let's find" })} <span className="text-gradient">{t({ ar: "الاتجاه الصحيح.", en: "the right direction." })}</span>
          </h2>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Magnetic><Link to="/start" className={btn.primary}>{t(ui.start)}<Arrow /></Link></Magnetic>
            <Link to="/contact" className={btn.ghostLight}>{t(ui.contact)}</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export const field = "h-14 w-full rounded-lg border border-input bg-ink/40 px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-cyan focus:ring-2 focus:ring-cyan/20";
