import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { cases, industries, insights, method, pathNodes, pillars, portfolio, profile, services, testimonials, ui, workKinds, type WorkKind } from "@/lib/content";
import { clientLogos } from "@/lib/logos";
import { Arrow, Eyebrow, Magnetic, PlaceholderTag, Reveal, SMarker, btn } from "./ui";

export function SectionHead({ eyebrow, n, title, lead, action, className }: { eyebrow: string; n?: string; title: ReactNode; lead?: string; action?: ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-end justify-between gap-8", className)}>
      <Reveal className="max-w-4xl">
        <Eyebrow n={n}>{eyebrow}</Eyebrow>
        <h2 className="display-lg mt-6">{title}</h2>
        {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>}
      </Reveal>
      {action}
    </div>
  );
}

/* ================= HERO: the S becomes a route ================= */
const S_PATH = "M720 70H290a150 150 0 0 0 0 300h230a115 115 0 0 1 0 230H70";
const NODE_POS = [[600, 70], [150, 220], [400, 370], [630, 485], [420, 600], [110, 600]] as const;

export function HeroRoute({ className }: { className?: string }) {
  const { t } = useI18n();
  return (
    <svg viewBox="0 0 800 680" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id="hr-g" x1="0" x2="800" y1="0" y2="680" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--cyan)" /><stop offset=".5" stopColor="var(--sky-soft)" /><stop offset="1" stopColor="var(--sky)" />
        </linearGradient>
        <filter id="hr-blur"><feGaussianBlur stdDeviation="10" /></filter>
      </defs>
      <path d={S_PATH} stroke="var(--sky)" strokeOpacity=".35" strokeWidth="26" strokeLinecap="round" filter="url(#hr-blur)" />
      <path d={S_PATH} className="draw-line" style={{ strokeDasharray: 2400, strokeDashoffset: 2400 }} stroke="url(#hr-g)" strokeWidth="14" strokeLinecap="round" />
      <path d="M680 130H300a90 90 0 0 0 0 180h220a175 175 0 0 1 0 350" stroke="var(--foreground)" strokeOpacity=".22" strokeWidth="2" strokeLinecap="round" />
      <path d={S_PATH} className="animate-signal" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="760" cy="70" r="10" fill="var(--foreground)" />
      <circle r="9" fill="var(--cyan)">
        <animateMotion dur="7s" repeatCount="indefinite" path={S_PATH} />
      </circle>
      {NODE_POS.map(([x, y], i) => (
        <g key={i} className="reveal is-in" style={{ transitionDelay: `${600 + i * 180}ms` }}>
          <circle cx={x} cy={y} r="7" fill="var(--navy-deep)" stroke="var(--cyan)" strokeWidth="2.5" />
          <text x={x} y={y - 22} textAnchor="middle" fill="var(--foreground)" fontSize="17" fontWeight="600" style={{ letterSpacing: ".02em" }}>{t(pathNodes[i]!)}</text>
        </g>
      ))}
    </svg>
  );
}

/* ================= Scroll-linked route (home) ================= */
export function ScrollRoute() {
  const { t } = useI18n();
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setP(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("scroll", on); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className={cn("pointer-events-none fixed end-6 top-1/2 z-30 hidden -translate-y-1/2 transition-opacity duration-500 2xl:block", p < 0.06 && "opacity-0")} aria-hidden>
      <div className="relative h-[52vh] w-px bg-border">
        <div className="bg-brand-line absolute inset-x-0 top-0 w-px" style={{ height: `${p * 100}%`, background: "linear-gradient(var(--sky), var(--cyan))" }} />
        {pathNodes.map((n, i) => {
          const at = i / (pathNodes.length - 1);
          const on = p >= at - 0.02;
          return (
            <div key={i} className="absolute end-0 flex translate-x-[calc(50%-0.5px)] items-center gap-3 rtl:-translate-x-[calc(50%-0.5px)]" style={{ top: `${at * 100}%`, transform: undefined }}>
              <span className={cn("meta transition-colors", on ? "!text-cyan" : "")}>{t(n)}</span>
              <span className={cn("size-2.5 -translate-y-1/2 rounded-full border transition-all", on ? "border-cyan bg-cyan glow" : "border-border bg-navy-deep")} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ================= Capabilities (5 pillars) ================= */
export function Capabilities() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const panel = (i: number) => {
    const list = services.filter((s) => s.pillar === i);
    const pl = pillars[i]!;
    return (
      <div key={i} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <p className="text-xl leading-relaxed text-foreground/85 md:text-2xl">{t(pl.line)}</p>
        <ul className="mt-10 border-t">
          {list.map((s) => (
            <li key={s.slug}>
              <Link to="/services/$slug" params={{ slug: s.slug }} className="group grid grid-cols-[1fr_auto] items-center gap-6 border-b py-6">
                <span>
                  <span className="block text-xl font-bold tracking-tight transition-colors group-hover:text-cyan md:text-2xl">{t(s.title)}</span>
                  <span className="mt-2 block max-w-xl text-sm leading-relaxed text-muted-foreground">{t(s.summary)}</span>
                </span>
                <span className="grid size-11 place-items-center rounded-full border transition group-hover:border-cyan group-hover:bg-cyan group-hover:text-ink"><Arrow /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5" role="tablist" aria-orientation="vertical">
        {pillars.map((p, i) => {
          const on = active === i;
          return (
            <div key={p.n} className="border-b first:border-t">
              <button role="tab" aria-selected={on} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)}
                className="group flex w-full items-baseline gap-5 py-6 text-start">
                <span className={cn("font-mono text-xs transition-colors", on ? "text-cyan" : "text-muted-foreground")}>{p.n}</span>
                <span className="flex-1">
                  <span className={cn("block text-4xl font-extrabold tracking-tight transition-colors md:text-5xl", on ? "text-foreground" : "text-foreground/25 group-hover:text-foreground/60")}>{t(p.verb)}</span>
                  <span className={cn("meta mt-2 block transition-colors", on && "!text-cyan")}>{t(p.title)}</span>
                </span>
                <SMarker className={cn("h-3 w-7 text-cyan transition-opacity", on ? "opacity-100" : "opacity-0")} />
              </button>
              {on && <div className="pb-8 lg:hidden">{panel(i)}</div>}
            </div>
          );
        })}
      </div>
      <div className="hidden lg:col-span-7 lg:block">{panel(active)}</div>
    </div>
  );
}

/* ================= The Smart Direction Method ================= */
export function MethodJourney() {
  const { t, lang } = useI18n();
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(!!e?.isIntersecting), { threshold: 0.3 });
    io.observe(el); return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!auto || !visible) return;
    const id = setInterval(() => setI((x) => (x + 1) % method.length), 3800);
    return () => clearInterval(id);
  }, [auto, visible]);
  const s = method[i]!;
  const pick = (k: number) => { setAuto(false); setI(k); };
  return (
    <section ref={ref} className="bg-night relative overflow-hidden py-28 md:py-40">
      <div className="grid-lines absolute inset-0 opacity-20" />
      <div className="container-x relative">
        <SectionHead n="03" eyebrow={t({ ar: "منهجية الاتجاهات الذكية™", en: "The Smart Direction Method™" })}
          title={t({ ar: "ستّ محطات. اتجاه واحد لا يضيع.", en: "Six stops. One direction that never drifts." })} />

        {/* route */}
        <div className="relative mt-20">
          <div className="absolute inset-x-0 top-5 h-px bg-border" />
          <div className="absolute start-0 top-5 h-px transition-all duration-700" style={{ width: `${(i / (method.length - 1)) * 100}%`, background: "var(--gradient-brand)" }} />
          <ol className="relative grid grid-cols-6">
            {method.map((m, k) => (
              <li key={m.en}>
                <button onClick={() => pick(k)} className="group flex flex-col items-start gap-4 text-start" aria-current={k === i}>
                  <span className={cn("relative grid size-10 place-items-center rounded-full border font-mono text-xs transition-all duration-500",
                    k === i ? "border-cyan bg-cyan text-ink glow" : k < i ? "border-cyan bg-navy-deep text-cyan" : "border-border bg-navy-deep text-muted-foreground group-hover:border-foreground")}>
                    {k === i && <span className="animate-ping-soft absolute inset-0 rounded-full border border-cyan" />}
                    0{k + 1}
                  </span>
                  <span className={cn("hidden text-sm font-semibold transition-colors md:block", k === i ? "text-foreground" : "text-muted-foreground")}>{lang === "ar" ? m.ar : m.en}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        {/* active stop */}
        <div key={i} className="animate-in fade-in slide-in-from-bottom-3 mt-16 grid gap-10 duration-500 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-baseline gap-6">
              <span className="font-mono text-7xl font-bold text-foreground/10 md:text-9xl">0{i + 1}</span>
              <div>
                <h3 className="text-5xl font-extrabold tracking-tight md:text-7xl">{lang === "ar" ? s.ar : s.en}</h3>
                <p className="meta mt-3 !text-cyan">{lang === "ar" ? s.en : s.ar}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xl leading-relaxed text-foreground/85">{t(s.d)}</p>
            <div className="mt-8 flex items-center gap-4 rounded-xl border bg-mist/60 p-5">
              <span className="meta">{t({ ar: "المخرج", en: "Output" })}</span>
              <span className="h-4 w-px bg-border" />
              <span className="font-semibold">{t(s.out)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= Selected Work — horizontal cinema ================= */
export function WorkShowcase() {
  const { t, dir } = useI18n();
  const track = useRef<HTMLDivElement>(null);
  const scroll = (d: 1 | -1) => {
    const el = track.current; if (!el) return;
    const w = el.clientWidth * 0.8;
    el.scrollBy({ left: (dir === "rtl" ? -d : d) * w, behavior: "smooth" });
  };
  return (
    <div>
      <div className="container-x mb-6 flex justify-end gap-2">
        <button onClick={() => scroll(-1)} aria-label="Previous" className="grid size-12 place-items-center rounded-full border hover:border-cyan hover:text-cyan"><Arrow className="rotate-180" /></button>
        <button onClick={() => scroll(1)} aria-label="Next" className="grid size-12 place-items-center rounded-full border hover:border-cyan hover:text-cyan"><Arrow /></button>
      </div>
      <div ref={track} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth ps-5 pe-5 md:ps-10 md:pe-10">
        {cases.map((c, i) => (
          <Link key={c.slug} to="/work/$slug" params={{ slug: c.slug }}
            className="group relative block w-[86vw] shrink-0 snap-center overflow-hidden rounded-2xl md:w-[72vw] lg:w-[62vw]">
            <img src={c.img} alt={t(c.title)} loading="lazy" width={1600} height={1008} className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05] md:aspect-[16/10]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 md:p-8">
              <span className="meta !text-foreground/80">{String(i + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}</span>
              <span className="rounded-full border border-line-dark bg-ink/40 px-3 py-1 text-xs backdrop-blur">{t(c.kind)}</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <span className="meta !text-cyan">{t(c.industry)}</span>
              <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">{t(c.title)}</h3>
              <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
                <div className="flex gap-8">
                  {c.results.slice(0, 2).map((r, k) => (
                    <div key={k}><div className="text-2xl font-bold text-cyan md:text-3xl" dir="ltr">{r.v}</div><div className="text-xs text-foreground/70">{t(r.k)}</div></div>
                  ))}
                  <PlaceholderTag sample className="self-center" />
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3">{t(ui.viewCase)}<Arrow /></span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ================= Results / Impact ================= */
export function ResultsImpact() {
  const { t } = useI18n();
  const items = [
    { v: "+148%", k: t({ ar: "عملاء مؤهلون", en: "Qualified leads" }), w: 88 },
    { v: "3.6x", k: t({ ar: "العائد على الإنفاق الإعلاني", en: "Return on ad spend" }), w: 72 },
    { v: "+92%", k: t({ ar: "التفاعل", en: "Engagement" }), w: 64 },
    { v: "−31%", k: t({ ar: "كلفة العميل المحتمل", en: "Cost per lead" }), w: 45 },
  ];
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-2">
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 80} className="bg-navy-deep">
          <div className="group relative h-full overflow-hidden p-8 md:p-12">
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <PlaceholderTag sample />
            </div>
            <div className="mt-10 text-6xl font-extrabold tracking-tight md:text-8xl" dir="ltr" style={{ textAlign: "start" }}>
              <span className="text-gradient">{it.v}</span>
            </div>
            <div className="mt-3 text-lg text-foreground/80">{it.k}</div>
            <div className="mt-8 h-1 w-full rounded-full bg-border">
              <div className="h-1 rounded-full transition-all duration-1000 group-hover:brightness-125" style={{ width: `${it.w}%`, background: "var(--gradient-brand)" }} />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ================= Data + Creative: intelligence product ================= */
const modules = [
  { k: { ar: "صحة الحملة", en: "Campaign health" }, score: 86, spark: [30, 42, 38, 55, 61, 58, 72, 80, 86] },
  { k: { ar: "إشارات الجمهور", en: "Audience signals" }, score: 74, spark: [50, 48, 56, 52, 60, 66, 63, 70, 74] },
  { k: { ar: "جودة العملاء", en: "Lead quality" }, score: 68, spark: [40, 44, 41, 50, 47, 55, 60, 64, 68] },
  { k: { ar: "أداء المحتوى", en: "Content performance" }, score: 91, spark: [45, 60, 52, 70, 76, 72, 84, 88, 91] },
  { k: { ar: "كفاءة الإعلام", en: "Media efficiency" }, score: 79, spark: [62, 58, 64, 60, 69, 71, 74, 77, 79] },
];

export function IntelligenceProduct() {
  const { t } = useI18n();
  const [m, setM] = useState(0);
  const mod = modules[m]!;
  const pts = mod.spark.map((v, i) => `${(i / (mod.spark.length - 1)) * 100},${100 - v}`).join(" ");
  const C = 2 * Math.PI * 42;
  return (
    <div className="grid gap-16 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <Eyebrow n="05">{t({ ar: "الإبداع + البيانات", en: "Creative + Data" })}</Eyebrow>
        <div className="mt-8 space-y-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          <Reveal><p>{t({ ar: "الإبداع يلفت الانتباه.", en: "Creative gets attention." })}</p></Reveal>
          <Reveal delay={120}><p className="text-foreground/60">{t({ ar: "البيانات تخبرنا بما ينجح.", en: "Data tells us what works." })}</p></Reveal>
          <Reveal delay={240}><p className="text-gradient">{t({ ar: "والاستراتيجية تقرر ما يحدث بعد ذلك.", en: "Strategy decides what happens next." })}</p></Reveal>
        </div>
        <p className="mt-8 text-muted-foreground">{t({ ar: "كل عميل يحصل على لوحة ذكاء تسويقي حية وتقرير تنفيذي شهري.", en: "Every client gets a live marketing intelligence view and a monthly executive report." })}</p>
      </div>

      <Reveal className="lg:col-span-8">
        <div className="overflow-hidden rounded-2xl border bg-ink shadow-elegant" dir="ltr">
          <div className="flex items-center justify-between border-b px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-foreground/20" /><span className="size-2.5 rounded-full bg-foreground/20" /><span className="size-2.5 rounded-full bg-foreground/20" />
              <span className="ms-4 text-xs text-muted-foreground">SD · Intelligence</span>
            </div>
            <span className="flex items-center gap-2 text-xs text-muted-foreground"><span className="relative size-2 rounded-full bg-cyan"><span className="animate-ping-soft absolute inset-0 rounded-full bg-cyan" /></span>Live · sample data</span>
          </div>
          <div className="grid md:grid-cols-[13rem_1fr]">
            <nav className="flex gap-1 overflow-x-auto border-b p-3 no-scrollbar md:flex-col md:border-e md:border-b-0">
              {modules.map((x, i) => (
                <button key={i} onClick={() => setM(i)} className={cn("flex shrink-0 items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-start text-sm transition", m === i ? "bg-navy text-foreground" : "text-muted-foreground hover:text-foreground")}>
                  {t(x.k)}<span className={cn("font-mono text-xs", m === i ? "text-cyan" : "")}>{x.score}</span>
                </button>
              ))}
            </nav>
            <div key={m} className="animate-in fade-in grid gap-4 p-5 duration-500 md:grid-cols-3 md:p-6">
              <div className="rounded-xl border p-5">
                <div className="text-xs text-muted-foreground">{t(mod.k)} · score</div>
                <div className="relative mx-auto mt-4 size-32">
                  <svg viewBox="0 0 100 100" className="-rotate-90">
                    <circle cx="50" cy="50" r="42" stroke="var(--line)" strokeWidth="8" fill="none" />
                    <circle cx="50" cy="50" r="42" stroke="url(#ip-g)" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - mod.score / 100)} style={{ transition: "stroke-dashoffset 1s ease" }} />
                    <defs><linearGradient id="ip-g"><stop stopColor="var(--sky)" /><stop offset="1" stopColor="var(--cyan)" /></linearGradient></defs>
                  </svg>
                  <span className="absolute inset-0 grid place-items-center text-3xl font-bold">{mod.score}</span>
                </div>
              </div>
              <div className="rounded-xl border p-5 md:col-span-2">
                <div className="flex justify-between text-xs text-muted-foreground"><span>9-week trend</span><span className="text-cyan">▲ {mod.spark[8]! - mod.spark[0]!} pts</span></div>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="mt-4 h-32 w-full">
                  <polygon points={`0,100 ${pts} 100,100`} fill="var(--sky)" fillOpacity=".15" />
                  <polyline points={pts} fill="none" stroke="var(--cyan)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              <div className="rounded-xl border p-5 md:col-span-3">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  {["Signal", "Status", "Next action"].map((h) => <div key={h} className="text-xs text-muted-foreground">{h}</div>)}
                  {[["Top creative", "Scaling", "Shift +15% budget"], ["Audience B", "Fatigue", "Refresh hook"], ["Landing page", "Stable", "A/B headline"]].map((r, k) => r.map((c, j) => (
                    <div key={`${k}${j}`} className={cn("border-t pt-3", j === 1 && (c === "Fatigue" ? "text-placeholder" : "text-cyan"))}>{c}</div>
                  )))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* ================= Industries — immersive ================= */
export function IndustriesImmersive() {
  const { t } = useI18n();
  const [a, setA] = useState(0);
  const ind = industries[a]!;
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden py-28 md:py-36">
      {industries.map((x, i) => (
        <img key={i} src={x.img} alt="" loading="lazy" className={cn("absolute inset-0 -z-10 h-full w-full object-cover transition-all duration-1000", i === a ? "scale-100 opacity-45" : "scale-105 opacity-0")} />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-e from-ink via-ink/85 to-ink/40" style={{ background: "linear-gradient(90deg, var(--ink) 0%, color-mix(in oklab, var(--ink) 80%, transparent) 45%, color-mix(in oklab, var(--ink) 35%, transparent) 100%)" }} />
      <div className="container-x">
        <Eyebrow n="06">{t({ ar: "القطاعات", en: "Industries" })}</Eyebrow>
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <ul className="lg:col-span-7">
            {industries.map((x, i) => (
              <li key={i}>
                <button onMouseEnter={() => setA(i)} onFocus={() => setA(i)} onClick={() => setA(i)}
                  className={cn("group flex w-full items-baseline gap-4 py-2 text-start text-4xl font-extrabold tracking-tight transition-all duration-300 md:text-6xl",
                    i === a ? "text-foreground" : "text-foreground/20 hover:text-foreground/50")}>
                  <span className="font-mono text-xs font-normal text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  {t(x.name)}
                  <SMarker className={cn("h-4 w-9 self-center text-cyan transition-all", i === a ? "opacity-100" : "opacity-0")} />
                </button>
              </li>
            ))}
          </ul>
          <div key={a} className="animate-in fade-in slide-in-from-bottom-3 self-end duration-500 lg:col-span-5">
            <div className="rounded-2xl border bg-ink/60 p-8 backdrop-blur-xl">
              <span className="meta">{t({ ar: "التحديات الرئيسية", en: "Key challenges" })}</span>
              <ul className="mt-4 space-y-3">
                {ind.challenges.map((c, k) => <li key={k} className="flex items-center gap-3 text-lg"><span className="size-1.5 rounded-full bg-cyan" />{t(c)}</li>)}
              </ul>
              <span className="meta mt-8 block">{t({ ar: "القدرات الموصى بها", en: "Recommended capabilities" })}</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {ind.caps.map((c) => <span key={c} className="rounded-full border border-cyan/40 px-4 py-2 text-sm text-cyan">{t(pillars[c]!.verb)} · {t(pillars[c]!.title)}</span>)}
              </div>
              <Link to="/start" className={cn(btn.ghostLight, "mt-8")}>{t({ ar: "ناقش قطاعك", en: "Discuss your sector" })}<Arrow /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= Clients — elevated ================= */
export function SelectedPartners() {
  const { t } = useI18n();
  const featured = portfolio.filter((_, i) => [0, 3, 8, 7].includes(i));
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {featured.map((x, i) => (
        <div key={i} className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden bg-navy-deep p-6">
          <img src={x.img} alt={t(x.client)} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <span className="relative meta !text-cyan">{t(x.sector)}</span>
          <span className="relative mt-2 text-2xl font-extrabold tracking-tight">{t(x.client)}</span>
        </div>
      ))}
    </div>
  );
}

export function ClientWall({ filter = false }: { filter?: boolean }) {
  const { t } = useI18n();
  const [all, setAll] = useState(filter);
  const [zoom, setZoom] = useState<number | null>(null);

  useEffect(() => {
    if (zoom === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(null);
      if (e.key === "ArrowRight") setZoom((z) => (z === null ? null : (z + 1) % clientLogos.length));
      if (e.key === "ArrowLeft") setZoom((z) => (z === null ? null : (z - 1 + clientLogos.length) % clientLogos.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoom]);

  const alt = t({ ar: "شعار عميل", en: "Client logo" });
  const tile = (src: string, i: number, keyPrefix = "") => (
    <div key={`${keyPrefix}${i}`} className="logo-tile">
      <img src={src} alt={alt} loading="lazy" className="h-16 w-auto max-w-[11rem] object-contain" />
    </div>
  );
  return (
    <div>
      {all ? (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {clientLogos.map((src, i) => (
            <button
              key={i}
              onClick={() => setZoom(i)}
              aria-label={`${alt} ${i + 1}`}
              className="grid aspect-[3/2] cursor-zoom-in place-items-center rounded-xl bg-white p-4 transition duration-300 hover:shadow-elegant"
            >
              <img src={src} alt={alt} loading="lazy" className="h-16 w-auto max-w-[11rem] object-contain" />
            </button>
          ))}
        </div>
      ) : (
        <div className="logo-marquee" dir="ltr">
          <div className="logo-marquee-track">
            {clientLogos.map((src, i) => tile(src, i))}
            {clientLogos.map((src, i) => tile(src, i, "dup-"))}
          </div>
        </div>
      )}
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span>{t({ ar: `أكثر من ${clientLogos.length} علامة في السعودية والأردن والخليج`, en: `${clientLogos.length}+ brands across Saudi Arabia, Jordan and the Gulf` })}</span>
        {!all && <button onClick={() => setAll(true)} className="text-cyan underline-offset-4 hover:underline">{t({ ar: "عرض الكل", en: "Show all" })}</button>}
      </div>

      {zoom !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setZoom(null)}
          className="fixed inset-0 z-[100] grid cursor-zoom-out place-items-center bg-ink/90 p-4 backdrop-blur"
        >
          <button
            onClick={() => setZoom(null)}
            aria-label={t({ ar: "إغلاق", en: "Close" })}
            className="absolute end-5 top-5 grid size-11 place-items-center rounded-full border border-white/20 text-2xl text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            ×
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setZoom((z) => (z === null ? null : (z - 1 + clientLogos.length) % clientLogos.length)); }}
            aria-label={t({ ar: "السابق", en: "Previous" })}
            className="absolute start-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-xl text-white/80 transition hover:bg-white/10 hover:text-white md:start-8"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setZoom((z) => (z === null ? null : (z + 1) % clientLogos.length)); }}
            aria-label={t({ ar: "التالي", en: "Next" })}
            className="absolute end-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-xl text-white/80 transition hover:bg-white/10 hover:text-white md:end-8"
          >
            ›
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="flex max-h-[86vh] w-full max-w-2xl cursor-default flex-col items-center">
            <div className="grid min-h-[16rem] w-full place-items-center rounded-2xl bg-white p-12 shadow-elegant">
              <img src={clientLogos[zoom]!} alt={`${alt} ${zoom + 1}`} className="max-h-[26rem] w-auto max-w-full object-contain" />
            </div>
            <figcaption dir="ltr" className="mt-4 text-sm text-white/60">{zoom + 1} / {clientLogos.length}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

/* ================= Portfolio gallery (from company profile) ================= */
export function PortfolioGallery({ limit }: { limit?: number }) {
  const { t } = useI18n();
  const [k, setK] = useState<WorkKind | "all">("all");
  const [open, setOpen] = useState<number | null>(null);
  const items = portfolio.filter((p) => k === "all" || p.kind === k).slice(0, limit);
  return (
    <div>
      {!limit && (
        <div className="no-scrollbar mb-10 flex gap-2 overflow-x-auto">
          {[{ k: "all" as const, label: { ar: "الكل", en: "All" } }, ...workKinds].map((x) => (
            <button key={x.k} onClick={() => setK(x.k)} className={cn("shrink-0 rounded-full border px-4 py-2 text-sm transition", k === x.k ? "border-cyan text-cyan" : "hover:border-foreground")}>{t(x.label)}</button>
          ))}
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <button key={p.img} onClick={() => setOpen(portfolio.indexOf(p))} className="group overflow-hidden rounded-2xl border bg-navy-deep text-start">
            <div className="overflow-hidden"><img src={p.img} alt={t(p.client)} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" /></div>
            <div className="flex items-center justify-between gap-4 p-5">
              <span className="font-bold">{t(p.client)}</span>
              <span className="meta !text-cyan">{t(p.sector)}</span>
            </div>
          </button>
        ))}
      </div>
      {open !== null && (
        <div role="dialog" onClick={() => setOpen(null)} className="fixed inset-0 z-[100] grid place-items-center bg-ink/90 p-4 backdrop-blur">
          <img src={portfolio[open]!.img} alt={t(portfolio[open]!.client)} className="max-h-[88vh] max-w-full rounded-xl" />
        </div>
      )}
    </div>
  );
}

/* ================= Profile: vision, mission, values ================= */
export function ProfilePillars() {
  const { t } = useI18n();
  return (
    <div>
      <div className="grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
        {profile.pillars.map((p, i) => (
          <div key={i} className="bg-navy-deep p-8 md:p-10">
            <span className="font-mono text-xs text-cyan">0{i + 1}</span>
            <h3 className="mt-8 text-2xl font-extrabold">{t(p.k)}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t(p.v)}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <span className="meta me-4">{t({ ar: "قيمنا", en: "Our values" })}</span>
        {profile.values.map((v, i) => <span key={i} className="rounded-full border border-cyan/40 px-4 py-2 text-sm">{t(v)}</span>)}
      </div>
    </div>
  );
}

export function ProfileServices() {
  const { t } = useI18n();
  return (
    <div className="grid gap-12 lg:grid-cols-3">
      {profile.serviceGroups.map((g, gi) => (
        <div key={gi}>
          <span className="font-mono text-xs text-cyan">0{gi + 1}</span>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight">{t(g.title)}</h3>
          <ul className="mt-8 divide-y border-y">
            {g.items.map((it, i) => (
              <li key={i} className="py-5"><div className="font-semibold">{t(it.h)}</div><p className="mt-1 text-sm text-muted-foreground">{t(it.p)}</p></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function Offices() {
  const { t } = useI18n();
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {profile.offices.map((o, i) => (
        <div key={i} className="rounded-2xl border p-6">
          <div className="meta !text-cyan">{t(o.country)}</div>
          <div className="mt-2 text-lg font-bold">{t(o.city)}</div>
          <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="mt-2 block text-muted-foreground hover:text-foreground" dir="ltr">{o.phone}</a>
        </div>
      ))}
    </div>
  );
}

/* ================= Testimonials ================= */
export function Testimonials() {
  const { t } = useI18n();
  const [i, setI] = useState(0);
  const q = testimonials[i]!;
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <Eyebrow>{t({ ar: "بصوت العملاء", en: "In their words" })}</Eyebrow>
        <div className="mt-8 flex gap-2">
          {testimonials.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`} className={cn("h-1.5 rounded-full transition-all", k === i ? "w-10 bg-cyan" : "w-5 bg-border")} />
          ))}
        </div>
      </div>
      <figure key={i} className="animate-in fade-in duration-500 lg:col-span-9">
        <blockquote className="text-3xl font-semibold leading-snug tracking-tight md:text-5xl">“{t(q.q)}”</blockquote>
        <figcaption className="mt-10 flex flex-wrap items-center gap-4">
          <span className="grid size-12 place-items-center rounded-full bg-mist font-bold">{t(q.n).slice(0, 1)}</span>
          <span><span className="block font-semibold">{t(q.n)}</span><span className="text-sm text-muted-foreground">{t(q.r)} · {t(q.c)}</span></span>
          <PlaceholderTag />
        </figcaption>
      </figure>
    </div>
  );
}

/* ================= Insights — editorial ================= */
export function InsightsEditorial({ all }: { all?: boolean }) {
  const { t } = useI18n();
  const [lead, ...rest] = insights;
  const list = all ? rest : rest.slice(0, 3);
  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <Reveal className="lg:col-span-7">
        <article className="group">
          <div className="overflow-hidden rounded-2xl"><img src={lead!.img} alt="" loading="lazy" className="aspect-[16/11] w-full object-cover transition-transform duration-1000 group-hover:scale-105" /></div>
          <div className="meta mt-8 !text-cyan">{t(lead!.cat)} · {lead!.min} {t({ ar: "دقائق", en: "min" })}</div>
          <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">{t(lead!.title)}</h3>
        </article>
      </Reveal>
      <ol className="divide-y border-y lg:col-span-5">
        {list.map((p, i) => (
          <li key={i}>
            <article className="group grid cursor-pointer grid-cols-[1fr_6rem] items-center gap-6 py-7">
              <div>
                <div className="meta">{t(p.cat)} · {p.min} {t({ ar: "د", en: "min" })}</div>
                <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight transition-colors group-hover:text-cyan">{t(p.title)}</h3>
              </div>
              <img src={p.img} alt="" loading="lazy" className="aspect-square w-24 rounded-lg object-cover opacity-70 transition group-hover:opacity-100" />
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ================= Guided brief ================= */
const briefSteps = [
  { q: { ar: "ما الذي تحاول تحقيقه؟", en: "What are you trying to achieve?" }, multi: true, opts: [["الوعي","Awareness"],["عملاء محتملون","Leads"],["مبيعات","Sales"],["إطلاق","Launch"],["إعادة هوية","Rebrand"],["نمو مستدام","Sustained growth"]] },
  { q: { ar: "ما القدرة التي تحتاجها؟", en: "What capability do you need?" }, multi: true, opts: [["نفهم — الاستراتيجية","Think — Strategy"],["نبدع — العلامة والمحتوى","Create — Brand & content"],["نفعّل — الإعلام والأداء","Activate — Media & performance"],["ندير — المنصات","Manage — Social"],["نقيس — التحليلات","Measure — Analytics"],["لست متأكداً","Not sure yet"]] },
  { q: { ar: "في أي قطاع تعمل؟", en: "What industry are you in?" }, multi: false, opts: [["العقار","Real Estate"],["الضيافة","Hospitality"],["التجزئة","Retail"],["الرعاية الصحية","Healthcare"],["الصناعة","Industrial"],["التقنية","Technology"],["جهة حكومية","Government"],["التعليم","Education"],["أخرى","Other"]] },
  { q: { ar: "ما الإطار الزمني؟", en: "What is your timeline?" }, multi: false, opts: [["خلال شهر","Within a month"],["١ – ٣ أشهر","1 – 3 months"],["٣ – ٦ أشهر","3 – 6 months"],["شراكة مستمرة","Ongoing partnership"]] },
  { q: { ar: "ما الميزانية التقريبية؟", en: "What is your approximate budget?" }, multi: false, opts: [["أقل من ٥٠ ألف ريال","Under SAR 50K"],["٥٠ – ١٥٠ ألف ريال","SAR 50K – 150K"],["١٥٠ – ٥٠٠ ألف ريال","SAR 150K – 500K"],["أكثر من ٥٠٠ ألف ريال","SAR 500K+"],["نحتاج توصية","We need a recommendation"]] },
  { q: { ar: "مع من نتواصل؟", en: "Who should we contact?" }, multi: false, opts: [] },
] as const;

export function GuidedBrief() {
  const { t } = useI18n();
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<number[][]>(briefSteps.map(() => []));
  const [done, setDone] = useState(false);
  const cur = briefSteps[step]!;
  const last = step === briefSteps.length - 1;
  const toggle = (k: number) => setAns((a) => a.map((v, i) => (i !== step ? v : cur.multi ? (v.includes(k) ? v.filter((x) => x !== k) : [...v, k]) : [k])));
  const can = last || ans[step]!.length > 0;
  const input = "h-14 w-full border-b border-input bg-transparent text-lg outline-none transition placeholder:text-muted-foreground/50 focus:border-cyan";

  if (done) return (
    <div className="py-16">
      <SMarker className="h-8 w-16 text-cyan" />
      <h2 className="display-lg mt-8">{t({ ar: "بدأت الاستشارة.", en: "The consultation has started." })}</h2>
      <p className="mt-6 max-w-lg text-lg text-muted-foreground">{t({ ar: "سيراجع أحد مستشارينا إجاباتك ويعود إليك خلال يوم عمل بقراءة أولية للاتجاه.", en: "A consultant will review your answers and return within one business day with an initial read on direction." })}</p>
    </div>
  );

  return (
    <form onSubmit={(e) => { e.preventDefault(); if (last) setDone(true); else if (can) setStep(step + 1); }}>
      <div className="flex items-center justify-between">
        <span className="meta">{t({ ar: "موجز المشروع", en: "Project brief" })} · {step + 1}/{briefSteps.length}</span>
        {step > 0 && <button type="button" onClick={() => setStep(step - 1)} className="text-sm text-muted-foreground hover:text-foreground">{t({ ar: "رجوع", en: "Back" })}</button>}
      </div>
      <div className="mt-4 flex gap-1.5">{briefSteps.map((_, i) => <span key={i} className={cn("h-0.5 flex-1 rounded-full transition-colors duration-500", i <= step ? "bg-cyan" : "bg-border")} />)}</div>

      <div key={step} className="animate-in fade-in slide-in-from-bottom-3 duration-500">
        <h2 className="mt-12 text-4xl font-bold leading-tight tracking-tight md:text-6xl">{t(cur.q)}</h2>
        {cur.multi && <p className="mt-3 text-sm text-muted-foreground">{t({ ar: "يمكنك اختيار أكثر من إجابة", en: "Choose all that apply" })}</p>}
        {!last ? (
          <div className="mt-10 flex flex-wrap gap-3">
            {cur.opts.map(([ar, en], k) => {
              const on = ans[step]!.includes(k);
              return (
                <button type="button" key={k} onClick={() => toggle(k)} aria-pressed={on}
                  className={cn("rounded-full border px-6 py-3.5 text-base font-medium transition-all", on ? "border-cyan bg-cyan text-ink" : "hover:border-foreground")}>
                  {t({ ar, en })}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            <input required className={input} placeholder={t({ ar: "الاسم", en: "Name" })} aria-label="Name" />
            <input className={input} placeholder={t({ ar: "الشركة والمنصب", en: "Company & role" })} aria-label="Company" />
            <input required type="email" dir="ltr" className={input} placeholder="name@company.sa" aria-label="Email" />
            <input required type="tel" dir="ltr" className={input} placeholder="+966 5X XXX XXXX" aria-label="Phone" />
          </div>
        )}
      </div>

      <div className="mt-14">
        <Magnetic>
          <button type="submit" disabled={!can} className={cn(btn.primary, "disabled:opacity-30")}>
            {last ? t({ ar: "أرسل الموجز", en: "Send the brief" }) : t({ ar: "المحطة التالية", en: "Next stop" })}<Arrow />
          </button>
        </Magnetic>
      </div>
    </form>
  );
}
