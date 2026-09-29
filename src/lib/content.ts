import type { L } from "./i18n";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import studio from "@/assets/studio.jpg";
import hero from "@/assets/hero.jpg";
import health from "@/assets/ind-health.jpg";
import retail from "@/assets/ind-retail.jpg";
import industrial from "@/assets/ind-industrial.jpg";

const l = (ar: string, en: string): L => ({ ar, en });

export const nav = [
  { to: "/", label: l("الرئيسية", "Home") },
  { to: "/about", label: l("من نحن", "About") },
  { to: "/services", label: l("قدراتنا", "Capabilities") },
  { to: "/work", label: l("أعمالنا", "Work") },
  { to: "/industries", label: l("القطاعات", "Industries") },
  { to: "/clients", label: l("عملاؤنا", "Clients") },
  { to: "/insights", label: l("رؤى", "Insights") },
  { to: "/packages", label: l("الباقات", "Packages") },
  { to: "/contact", label: l("تواصل", "Contact") },
] as const;

export const ui = {
  start: l("حدّد اتجاهك", "Find your direction"),
  viewWork: l("شاهد الأعمال", "See the work"),
  contact: l("تواصل معنا", "Contact us"),
  readMore: l("اقرأ", "Read"),
  viewCase: l("افتح دراسة الحالة", "Open case study"),
  placeholder: l("بيانات مؤقتة", "Placeholder"),
  sample: l("مؤشر تجريبي", "Sample metric"),
  allServices: l("كل القدرات", "All capabilities"),
};

// Contact details — provided by Smart Directions.
export const contactInfo = {
  email: "info@smartdirections-sa.com",
  phone: "+966 54 733 2044",
  whatsapp: "966547332044",
  location: l("الرياض، المملكة العربية السعودية", "Riyadh, Saudi Arabia"),
  hours: l("الأحد – الخميس، ٩ص – ٦م", "Sun – Thu, 9:00 – 18:00"),
};

/* The six nodes the signature path crosses */
export const pathNodes = [l("الاستراتيجية","Strategy"), l("المحتوى","Content"), l("الإعلام","Media"), l("الأداء","Performance"), l("البيانات","Data"), l("النمو","Growth")];

export const microcopy = {
  direction: l("الاتجاه قبل التنفيذ.", "Direction before execution."),
  opinion: l("الإبداع بلا بيانات مجرد رأي.", "Creative without data is opinion."),
  spend: l("الإعلام بلا استراتيجية مجرد إنفاق.", "Media without strategy is spend."),
  move: l("المحتوى وُجد ليحرّك الناس، لا ليملأ التقويم.", "Content should move people, not fill calendars."),
  designed: l("النمو يُصمَّم، ويُقاس، ويُحسَّن.", "Growth is designed, measured and improved."),
  impact: l("الهدف ليس منشورات أكثر. الهدف أثر أكبر.", "The goal is not more posts. The goal is more impact."),
};

export type Service = { slug: string; n: string; pillar: number; title: L; summary: L; items: L[] };

export const services: Service[] = [
  { slug: "digital-strategy", n: "01", pillar: 0, title: l("الاستراتيجية الرقمية", "Digital Strategy"),
    summary: l("نقرأ السوق والمنافسة والجمهور، ثم نحوّلها إلى تموضع واضح وقرارات قابلة للقياس.", "We read the market, competition and audience, then convert them into clear positioning and measurable decisions."),
    items: [l("أبحاث السوق","Market research"),l("تحليل المنافسين","Competitor analysis"),l("تموضع العلامة","Brand positioning"),l("استراتيجية الاتصال","Communication strategy"),l("الخطط الرقمية","Digital plans"),l("تخطيط الحملات","Campaign planning")] },
  { slug: "analytics-reporting", n: "02", pillar: 4, title: l("التحليلات والتقارير", "Analytics & Reporting"),
    summary: l("لوحات وتقارير تنفيذية تجعل كل قرار تسويقي قابلاً للدفاع عنه أمام الإدارة.", "Dashboards and executive reports that make every marketing decision defensible in the boardroom."),
    items: [l("لوحات التسويق","Marketing dashboards"),l("تحليل الحملات","Campaign analysis"),l("تتبع المؤشرات","KPI tracking"),l("التقارير الشهرية","Monthly reports"),l("التوصيات","Recommendations")] },
  { slug: "branding-identity", n: "03", pillar: 1, title: l("الهوية والعلامة", "Branding & Identity"),
    summary: l("نبني علامات ذات موقف واضح، ونحكمها بنظام يحافظ على اتساقها في كل قناة.", "We build brands with a clear stance, governed by a system that keeps them consistent across every channel."),
    items: [l("استراتيجية العلامة","Brand strategy"),l("الهوية البصرية","Visual identity"),l("دليل العلامة","Brand guidelines"),l("هوية الحملات","Campaign identity")] },
  { slug: "content-copywriting", n: "04", pillar: 1, title: l("المحتوى والكتابة", "Content & Copywriting"),
    summary: l("كتابة عربية أصيلة وإنجليزية دقيقة، تُبنى على فكرة لا على تقويم.", "Native Arabic and precise English, built on an idea rather than a calendar."),
    items: [l("الأفكار الإبداعية","Creative concepts"),l("الكتابة العربية","Arabic copywriting"),l("الكتابة الإنجليزية","English copywriting"),l("السيناريوهات","Scripts"),l("رسائل الحملات","Campaign messages"),l("المحتوى التحريري","Editorial content")] },
  { slug: "creative-design", n: "05", pillar: 1, title: l("التصميم الإبداعي", "Creative Design"),
    summary: l("أنظمة بصرية للحملات والمنصات، لا تصاميم منفردة.", "Visual systems for campaigns and platforms — not one-off designs."),
    items: [l("تصاميم المنصات","Social design"),l("الصور الرئيسية","Key visuals"),l("الموشن جرافيك","Motion graphics"),l("الإنفوجرافيك","Infographics"),l("الأصول الرقمية","Digital assets")] },
  { slug: "photography-video", n: "06", pillar: 1, title: l("التصوير والإنتاج", "Photography & Video"),
    summary: l("إنتاج سينمائي يُخطَّط له وفق القناة التي سيُعرض عليها.", "Cinematic production, planned for the channel it will live on."),
    items: [l("التصوير التجاري","Commercial photography"),l("تصوير المنتجات","Product photography"),l("الفيديو المؤسسي","Corporate film"),l("الريلز","Reels"),l("المحتوى القصير","Short-form"),l("الإنتاج","Production")] },
  { slug: "performance-marketing", n: "07", pillar: 2, title: l("التسويق بالأداء", "Performance Marketing"),
    summary: l("نبني أنظمة حملات يعمل فيها الإبداع والإعلام والجمهور والقياس كوحدة واحدة.", "We build campaign systems where creative, media, audience and measurement work as one."),
    items: [l("الإعلانات الاجتماعية","Paid social"),l("إعلانات البحث","Search"),l("شراء الوسائط","Media buying"),l("توليد العملاء","Lead generation"),l("تحسين التحويل","CRO"),l("إعادة الاستهداف","Retargeting")] },
  { slug: "influencer-marketing", n: "08", pillar: 2, title: l("التسويق عبر المؤثرين", "Influencer Marketing"),
    summary: l("نختار المؤثر وفق الجمهور والأثر، لا وفق عدد المتابعين.", "Creators selected for audience fit and impact, not follower count."),
    items: [l("استراتيجية المؤثرين","Creator strategy"),l("الاختيار","Selection"),l("إدارة الحملات","Campaign management"),l("تتبع الأداء","Performance tracking")] },
  { slug: "website-digital-experience", n: "09", pillar: 2, title: l("المواقع والتجارب الرقمية", "Websites & Digital Experience"),
    summary: l("مواقع وصفحات هبوط تُصمَّم كأدوات تحويل، لا كواجهات.", "Websites and landing pages designed as conversion instruments, not brochures."),
    items: [l("المواقع المؤسسية","Corporate websites"),l("صفحات الهبوط","Landing pages"),l("مواقع الحملات","Microsites"),l("تجربة المستخدم","UX/UI")] },
  { slug: "social-media-management", n: "10", pillar: 3, title: l("إدارة المنصات", "Social Media Management"),
    summary: l("نحوّل المنصات إلى نظام علامة مُدار: مخطط، محكوم، مُقاس، ومُحسَّن باستمرار.", "We turn social channels into a managed brand system — planned, governed, measured and continuously optimized."),
    items: [l("إدارة الحسابات","Account management"),l("تقويم المحتوى","Content calendars"),l("إدارة المجتمع","Community management"),l("النشر","Publishing"),l("الرصد","Social listening"),l("التقارير","Reporting")] },
];

export const pillars = [
  { n: "01", verb: l("نفهم","THINK"), title: l("الاستراتيجية والذكاء","Strategy & Intelligence"), line: l("كل ما نفعله يبدأ بسؤال: إلى أين يجب أن تتحرك العلامة؟","Everything starts with one question: where should the brand move?") },
  { n: "02", verb: l("نبدع","CREATE"), title: l("العلامة والمحتوى والإنتاج","Brand, Content & Production"), line: l("فكرة واحدة قوية، تُترجم إلى نظام بصري ولغوي متسق.","One strong idea, translated into a consistent visual and verbal system.") },
  { n: "03", verb: l("نفعّل","ACTIVATE"), title: l("الإعلام والحملات والأداء","Media, Campaigns & Performance"), line: l("نضع الرسالة أمام الجمهور الصحيح، في اللحظة الصحيحة، بالكلفة الصحيحة.","The right message, in front of the right audience, at the right moment and cost.") },
  { n: "04", verb: l("ندير","MANAGE"), title: l("المنصات والمجتمع","Social Media & Community"), line: l("حضور يومي محكوم بمعايير العلامة، لا بردود الفعل.","A daily presence governed by brand standards, not by reaction.") },
  { n: "05", verb: l("نقيس","MEASURE"), title: l("التحليل والتقارير والتحسين","Analytics, Reporting & Optimization"), line: l("نقيس ما يهم الإدارة، ونعيده إلى الاستراتيجية.","We measure what leadership cares about, and feed it back into strategy.") },
];

export const method = [
  { en: "Discover", ar: "نفهم", d: l("مقابلات، بيانات، وتدقيق كامل لحضور العلامة ومنافسيها.", "Interviews, data and a full audit of the brand and its competitors."), out: l("تدقيق الحضور الرقمي","Digital presence audit") },
  { en: "Decode", ar: "نحلل", d: l("نستخرج الرؤية الحقيقية: ما الذي يحرّك الجمهور فعلاً؟", "We extract the real insight: what actually moves the audience?"), out: l("خريطة الرؤى","Insight map") },
  { en: "Direct", ar: "نحدد الاتجاه", d: l("نحدد التموضع والرسالة والأولويات في اتجاه واحد واضح.", "We set positioning, message and priorities into one clear direction."), out: l("وثيقة الاتجاه","Direction document") },
  { en: "Create", ar: "نصنع", d: l("نبني النظام الإبداعي: الفكرة، الهوية، المحتوى، والإنتاج.", "We build the creative system: idea, identity, content and production."), out: l("النظام الإبداعي","Creative system") },
  { en: "Activate", ar: "نفعّل", d: l("نطلق عبر القنوات والإعلام بخطة توزيع مدروسة.", "We launch across channels and media with a deliberate distribution plan."), out: l("خطة الإطلاق والإعلام","Launch & media plan") },
  { en: "Optimize", ar: "نحسن", d: l("نقرأ الإشارات أسبوعياً ونعيد توجيه الميزانية والمحتوى.", "We read the signals weekly and redirect budget and content."), out: l("تقرير تنفيذي شهري","Monthly executive report") },
];

export const industries = [
  { name: l("العقار","Real Estate"), img: case2, challenges: [l("دورات بيع طويلة","Long sales cycles"), l("تمييز المشاريع","Project differentiation"), l("جودة العملاء المحتملين","Lead quality")], caps: [0, 2, 4] },
  { name: l("الضيافة","Hospitality"), img: case1, challenges: [l("الموسمية","Seasonality"), l("منافسة الوجهات","Destination competition"), l("الحجز المباشر","Direct bookings")], caps: [1, 2, 3] },
  { name: l("التجزئة","Retail"), img: retail, challenges: [l("سرعة المواسم","Seasonal velocity"), l("الولاء","Loyalty"), l("التحويل الرقمي","Digital conversion")], caps: [1, 2, 4] },
  { name: l("الرعاية الصحية","Healthcare"), img: health, challenges: [l("الثقة","Trust"), l("الامتثال","Compliance"), l("توعية المرضى","Patient education")], caps: [0, 1, 3] },
  { name: l("الصناعة","Industrial"), img: industrial, challenges: [l("تبسيط المعقّد","Simplifying complexity"), l("جمهور B2B","B2B audiences"), l("السمعة المؤسسية","Corporate reputation")], caps: [0, 1, 4] },
  { name: l("التقنية","Technology"), img: hero, challenges: [l("شرح المنتج","Product clarity"), l("التبنّي","Adoption"), l("النمو المتسارع","Rapid growth")], caps: [0, 2, 4] },
  { name: l("الجهات الحكومية","Government"), img: studio, challenges: [l("الوضوح للجمهور","Public clarity"), l("حوكمة الرسائل","Message governance"), l("المشاركة المجتمعية","Civic engagement")], caps: [0, 3, 4] },
  { name: l("التعليم","Education"), img: case3, challenges: [l("جذب الطلاب","Student acquisition"), l("السمعة الأكاديمية","Academic reputation"), l("التواصل مع الأسر","Family engagement")], caps: [1, 2, 3] },
];

export type Case = {
  slug: string; img: string; client: L; industry: L; title: L; kind: L;
  context: L; challenge: L; insight: L; direction: L; system: L; execution: L; media: L; deliverables: L[];
  results: { v: string; k: L }[];
};

// Sample case studies — client names and all results are placeholders.
export const cases: Case[] = [
  { slug: "city-launch-campaign", img: case1, kind: l("حملة إطلاق","Launch campaign"), client: l("عميل — يُستبدل","Client — to replace"), industry: l("الضيافة","Hospitality"),
    title: l("وجهة جديدة تدخل إيقاع المدينة","A new destination enters the city's rhythm"),
    context: l("وجهة ترفيهية جديدة في الرياض قبل موسم الافتتاح.","A new leisure destination in Riyadh ahead of opening season."),
    challenge: l("بناء وعي سريع في سوق مزدحم بالوجهات الجديدة، بميزانية محددة.","Build fast awareness in a market crowded with new destinations, on a fixed budget."),
    insight: l("الجمهور لا يبحث عن مكان جديد، بل عن سبب جديد للخروج.","The audience isn't looking for a new place — it's looking for a new reason to go out."),
    direction: l("\"مساء لم تخطط له\": قصة واحدة تربط المكان بإيقاع ليل المدينة.","\"An evening you didn't plan\": one story tying the place to the city's night rhythm."),
    system: l("هوية حملة مرنة تعمل على لوحة طريق كما تعمل على قصة ١٥ ثانية.","A flexible campaign identity that works on a highway billboard and a 15-second story alike."),
    execution: l("إنتاج مرئي، ٦٠ منشوراً، ١٢ فيلماً قصيراً، وتفعيل مؤثرين.","Production, 60 posts, 12 short films and creator activation."),
    media: l("لوحات خارجية · إنستغرام · تيك توك · سناب شات","OOH · Instagram · TikTok · Snapchat"),
    deliverables: [l("هوية الحملة","Campaign identity"),l("لوحات طرق","Billboards"),l("محتوى اجتماعي","Social content"),l("أفلام قصيرة","Short films")],
    results: [{ v: "+148%", k: l("الوصول","Reach") }, { v: "3.6x", k: l("العائد على الإنفاق","ROAS") }, { v: "+92%", k: l("التفاعل","Engagement") }] },
  { slug: "real-estate-brand-system", img: case2, kind: l("نظام علامة","Brand system"), client: l("عميل — يُستبدل","Client — to replace"), industry: l("العقار","Real Estate"),
    title: l("علامة أم واحدة لمحفظة مشاريع فاخرة","One master brand for a luxury portfolio"),
    context: l("مطور عقاري بعدة مشاريع تحمل هويات متفرقة.","A developer with several projects carrying disconnected identities."),
    challenge: l("التشتت أضعف الثقة ورفع كلفة كل عميل محتمل.","Fragmentation weakened trust and raised the cost of every lead."),
    insight: l("المشتري الفاخر يشتري المطوِّر قبل أن يشتري الوحدة.","Luxury buyers buy the developer before they buy the unit."),
    direction: l("علامة أم هادئة وواثقة تمنح كل مشروع مساحته دون أن يفقد نسبه.","A calm, confident master brand that gives each project room without losing lineage."),
    system: l("هندسة علامة، هوية بصرية، ونظام تصوير معماري موحد.","Brand architecture, visual identity and a unified architectural photography system."),
    execution: l("موقع جديد، كتيبات مبيعات، وحملة عملاء محتملين على لينكدإن.","New website, sales collateral and a LinkedIn lead campaign."),
    media: l("الموقع · المطبوعات · لينكدإن · البحث","Website · Print · LinkedIn · Search"),
    deliverables: [l("دليل العلامة","Brand guidelines"),l("الموقع","Website"),l("كتيبات المبيعات","Sales collateral")],
    results: [{ v: "+64%", k: l("عملاء مؤهلون","Qualified leads") }, { v: "−31%", k: l("كلفة العميل","Cost per lead") }, { v: "2.4x", k: l("زمن التصفح","Time on site") }] },
  { slug: "coffee-brand-content", img: case3, kind: l("إنتاج ومحتوى","Production & content"), client: l("عميل — يُستبدل","Client — to replace"), industry: l("الأغذية والمشروبات","Food & Beverage"),
    title: l("الحِرفة خلف كل كوب","The craft behind every cup"),
    context: l("علامة قهوة محلية مختصة تتوسع لفروع جديدة.","A local specialty coffee brand expanding to new branches."),
    challenge: l("منتج استثنائي بحضور رقمي عادي.","An exceptional product with an ordinary digital presence."),
    insight: l("عشّاق القهوة يثقون بمن يُظهر العملية، لا النتيجة فقط.","Coffee lovers trust brands that show the process, not just the result."),
    direction: l("تحويل الباريستا إلى بطل القصة.","Make the barista the hero of the story."),
    system: l("لغة تصوير سينمائية وقوالب ريلز قابلة للتكرار.","A cinematic photography language and repeatable reel formats."),
    execution: l("٣ جلسات إنتاج، ٢٤ ريلز، وحملة أداء لافتتاح الفروع.","3 production days, 24 reels and a performance campaign for branch openings."),
    media: l("إنستغرام · تيك توك · إعلانات مدفوعة","Instagram · TikTok · Paid social"),
    deliverables: [l("جلسات تصوير","Shoots"),l("ريلز","Reels"),l("حملة أداء","Performance campaign")],
    results: [{ v: "+210%", k: l("المشاهدات","Views") }, { v: "+38%", k: l("زيارات الفروع","Store visits") }, { v: "4.1x", k: l("العائد على الإنفاق","ROAS") }] },
];

export const insights = [
  { cat: l("اتجاهات سعودية","Saudi digital trends"), title: l("الجمهور السعودي لا يتصفح. إنه يختار.","The Saudi audience doesn't scroll. It selects."), img: studio, min: 6 },
  { cat: l("استراتيجية العلامة","Brand strategy"), title: l("قبل إعادة الهوية: خمسة أسئلة تتجنبها معظم الشركات","Before a rebrand: five questions most companies avoid"), img: case2, min: 8 },
  { cat: l("التسويق بالأداء","Performance"), title: l("كلفة النقرة ليست مؤشراً. إنها عَرَض.","Cost per click isn't a metric. It's a symptom."), img: case1, min: 5 },
  { cat: l("استراتيجية المحتوى","Content strategy"), title: l("لماذا يجب أن يُكتب المحتوى بالعربية أولاً، لا أن يُترجم إليها","Why content should be written in Arabic first, not translated into it"), img: case3, min: 7 },
  { cat: l("المنصات","Social"), title: l("التقويم الممتلئ ليس استراتيجية","A full calendar is not a strategy"), img: retail, min: 4 },
  { cat: l("الذكاء التسويقي","Marketing intelligence"), title: l("التقرير التنفيذي الذي يقرأه مجلس الإدارة فعلاً","The executive report the board actually reads"), img: industrial, min: 6 },
];

export const testimonials = [
  { q: l("اقتباس العميل يُضاف هنا بعد الموافقة على نشره.","Client quote to be added here once approved for publication."), n: l("اسم العميل","Client name"), r: l("المنصب","Role"), c: l("الشركة","Company") },
  { q: l("شهادة ثانية تُستبدل بنص حقيقي من أحد العملاء.","A second testimonial to be replaced with a real client statement."), n: l("اسم العميل","Client name"), r: l("المنصب","Role"), c: l("الشركة","Company") },
];

export { studio, hero };

/* ================= From the Smart Directions company profile ================= */
import p9 from "@/assets/portfolio/p9.jpg.asset.json";
import p11 from "@/assets/portfolio/p11.jpg.asset.json";
import p12 from "@/assets/portfolio/p12.jpg.asset.json";
import p13 from "@/assets/portfolio/p13.jpg.asset.json";
import p14 from "@/assets/portfolio/p14.jpg.asset.json";
import p15 from "@/assets/portfolio/p15.jpg.asset.json";
import p16 from "@/assets/portfolio/p16.jpg.asset.json";
import p17 from "@/assets/portfolio/p17.jpg.asset.json";
import p18 from "@/assets/portfolio/p18.jpg.asset.json";
import p19 from "@/assets/portfolio/p19.jpg.asset.json";
import p20 from "@/assets/portfolio/p20.jpg.asset.json";
import p21 from "@/assets/portfolio/p21.jpg.asset.json";
import p22 from "@/assets/portfolio/p22.jpg.asset.json";
import p23 from "@/assets/portfolio/p23.jpg.asset.json";
import p24 from "@/assets/portfolio/p24.jpg.asset.json";
import p25 from "@/assets/portfolio/p25.jpg.asset.json";
import p26 from "@/assets/portfolio/p26.jpg.asset.json";
import p27 from "@/assets/portfolio/p27.jpg.asset.json";

export const profile = {
  tagline: l("ببساطة، نريدك أن تكون ذكياً", "We simply want you to BE SMART"),
  promise: [l("نصل","Reach"), l("ننمو","Grow"), l("ننجح","Succeed")],
  about: l(
    "رواد في مجال التسويق الرقمي لجميع القطاعات في السوق السعودي، بفريق من الخبراء المدرَّبين على التخطيط والمتابعة والتنسيق. خدماتنا شاملة ومتكاملة للارتقاء بالمهنة نحو الأفضل.",
    "A pioneer in digital marketing across all sectors of the Saudi market, with an expert, trained team for planning, follow-up and coordination. Our services are comprehensive and integrated to raise the standard of the profession."
  ),
  pillars: [
    { k: l("الرؤية","Vision"), v: l("أن نكون الشركة الأكثر ثقة وريادة في تقديم حلول مبتكرة ومستدامة تمكّن عملاءنا محلياً وعالمياً.","To be the most trusted and leading company in providing innovative and sustainable solutions that empower our clients locally and globally.") },
    { k: l("رسالتنا","Our message"), v: l("نؤمن أن نجاحنا مرتبط بنجاح عملائنا؛ لذلك نلتزم بأن نكون شريكاً استراتيجياً يقدّم كل ما يلزم لدعم تميّزهم.","We believe our success is tied to the success of our clients; so we are committed to being a strategic partner, providing everything needed to support their excellence.") },
    { k: l("هدفنا","Our goal"), v: l("التطوير والتحديث المستمر ومواكبة السوق الرقمي الجديد بهدف خدمة العميل بأقل التكاليف.","Continuous development and modernization, keeping pace with the new digital market to serve the client at the lowest cost.") },
  ],
  values: [l("النزاهة والشفافية","Integrity & Transparency"), l("الابتكار المستمر","Continuous Innovation"), l("شراكات طويلة الأمد","Long-term Partnerships"), l("الكفاءة والجودة","Efficiency & Quality")],
  offices: [
    { country: l("المملكة العربية السعودية","Saudi Arabia"), city: l("الرياض","Riyadh"), phone: "+966 53 117 4380" },
    { country: l("الأردن","Jordan"), city: l("عمّان — جبل الحسين","Amman — Jabal Al Hussein"), phone: "+962 7 9075 0939" },
  ],
  serviceGroups: [
    { title: l("الخدمات التسويقية","Marketing services"), items: [
      { h: l("دراسات الجدوى","Feasibility studies"), p: l("إعداد دراسات الجدوى والخطط التسويقية للتعريف بالعلامة ورفع المبيعات وزيادة الأرباح.","Feasibility studies and marketing plans to publicise the brand, raise sales and increase profits.") },
      { h: l("الحملات الإعلانية المدفوعة","Paid ad campaigns"), p: l("حملات مدفوعة تحقق الأهداف التسويقية بأفضل تكلفة وضمن الميزانية المحددة.","Paid campaigns that hit marketing goals at the best cost, within the set budget.") },
      { h: l("الهوية البصرية","Visual identity"), p: l("هوية بصرية شاملة ومتكاملة وحسابات على جميع منصات التواصل.","A comprehensive, integrated visual identity and accounts across all social platforms.") },
      { h: l("إعداد المحتوى","Content preparation"), p: l("محتوى خاص يعرّف بالعلامة التجارية.","Dedicated content that introduces the brand.") },
      { h: l("الجمهور والمتابعون","Audiences & followers"), p: l("تنمية المتابعين وبناء قاعدة جماهيرية قوية داخل قطاع العلامة.","Grow followers and build a strong fan base within the brand's sector.") },
    ] },
    { title: l("الخدمات البرمجية","Programming services"), items: [
      { h: l("تطوير المواقع","Website development"), p: l("مواقع سريعة ومصممة للتحويل.","Fast websites designed to convert.") },
      { h: l("المتاجر الإلكترونية","E-store design"), p: l("تصميم متاجر إلكترونية جاهزة للبيع.","Online stores ready to sell.") },
      { h: l("تطبيقات الجوال","Mobile apps"), p: l("تصميم تطبيقات الهواتف الذكية.","Smartphone application design.") },
      { h: l("التسويق عبر الرسائل","SMS marketing"), p: l("حملات رسائل نصية موجّهة.","Targeted SMS campaigns.") },
      { h: l("التسويق عبر البريد","Email marketing"), p: l("حملات بريد إلكتروني تبني العلاقة.","Email campaigns that build relationships.") },
    ] },
    { title: l("التصميم وبناء العلامة","Design & Branding"), items: [
      { h: l("الشعارات","Logos"), p: l("شعارات تعبّر عن شخصية العلامة.","Logos that express the brand's character.") },
      { h: l("الثيمات والريلز","Themes & reels"), p: l("ثيمات حسابات وفيديوهات قصيرة.","Account themes and short videos.") },
      { h: l("التصاميم التفاعلية","Interactive designs"), p: l("تصاميم منصات تدعو للتفاعل.","Social designs that invite interaction.") },
      { h: l("ملفات الشركات","Company profiles"), p: l("ملفات تعريفية بالعربية والإنجليزية.","Bilingual company profiles.") },
      { h: l("المواد الإعلانية والمطبوعات","Advertising & print"), p: l("مواد إعلانية ومطبوعات بجودة عالية.","High-quality advertising and print material.") },
    ] },
  ],
};

export type WorkKind = "identity" | "social" | "profile" | "print";
export const workKinds: { k: WorkKind; label: L }[] = [
  { k: "social", label: l("تصاميم المنصات","Social design") },
  { k: "identity", label: l("شعارات وهويات","Logos & identity") },
  { k: "profile", label: l("ملفات تعريفية","Company profiles") },
  { k: "print", label: l("مطبوعات","Print") },
];
export const portfolio: { img: string; client: L; kind: WorkKind; sector: L }[] = [
  { img: p20.url, client: l("دواجن أصيلة","Asilh Poultry"), kind: "social", sector: l("الأغذية","Food") },
  { img: p11.url, client: l("روعة الأداء للنجارة","Rawa Al Adaa Carpentry"), kind: "identity", sector: l("الصناعة","Industrial") },
  { img: p12.url, client: l("صالون فينشي","VINCI Beauty Salon"), kind: "social", sector: l("التجميل","Beauty") },
  { img: p13.url, client: l("تمكين المتقدمة","Tamkeen Advanced"), kind: "identity", sector: l("الأعمال","Business") },
  { img: p14.url, client: l("NG Design","NG Design"), kind: "profile", sector: l("التصميم الداخلي","Interior design") },
  { img: p15.url, client: l("NG Design","NG Design"), kind: "profile", sector: l("التصميم الداخلي","Interior design") },
  { img: p21.url, client: l("VNAS للخدمات اللوجستية","VNAS Logistics"), kind: "social", sector: l("اللوجستيات","Logistics") },
  { img: p22.url, client: l("مياه هني","Honey Water"), kind: "social", sector: l("المشروبات","Beverages") },
  { img: p23.url, client: l("سابتك ERP","SAPTEC ERP"), kind: "social", sector: l("التقنية","Technology") },
  { img: p9.url, client: l("مصنع المدار الآلي للألمنيوم","Al Madar Aluminium Factory"), kind: "social", sector: l("الصناعة","Industrial") },
  { img: p16.url, client: l("النسر العربي","Arabian Eagle"), kind: "social", sector: l("المطابخ","Kitchens") },
  { img: p18.url, client: l("أديب الجبيل","Adeeb Al-Jubail"), kind: "social", sector: l("البناء","Construction") },
  { img: p19.url, client: l("لوكسز","Lockses"), kind: "social", sector: l("الأغذية","Food") },
  { img: p24.url, client: l("قوت","Qoot Coffee"), kind: "social", sector: l("المقاهي","Coffee") },
  { img: p25.url, client: l("إيجل شيرتس","Eagle Shirts"), kind: "social", sector: l("الأزياء","Fashion") },
  { img: p26.url, client: l("راوي","Rawy App"), kind: "social", sector: l("التطبيقات","Apps") },
  { img: p17.url, client: l("حلول الطباعة","Printing Solutions"), kind: "print", sector: l("الطباعة","Printing") },
  { img: p27.url, client: l("مطبوعات وسفر","Prints & Travel"), kind: "print", sector: l("التجزئة","Retail") },
];

/* ================= Social media management packages ================= */
export type PkgFeature = { label: L; included: boolean };
export type Pkg = {
  name: L; tagline: L; monthly: number; yearly: number; featured?: boolean;
  posts: number; platforms: string[]; features: PkgFeature[];
};
export const packagesContent = {
  lead: l(
    "باقات شهرية لإدارة المنصات الاجتماعية: كتابة إعلانية، تصاميم، إدارة حملات، تفاعل مع الجمهور، وتقارير أداء. اختر الباقة التي تناسب طموح علامتك.",
    "Monthly social media management plans: ad copywriting, design, campaign management, community engagement and performance reporting. Pick the package that matches your brand's ambition."
  ),
  monthly: l("شهري", "Monthly"),
  yearly: l("سنوي", "Yearly"),
  yearlyOff: l("وفّر ٢٠٪", "Save 20%"),
  perMonth: l("ر.س / شهر", "SAR / month"),
  perYear: l("ر.س / سنة", "SAR / year"),
  postsLabel: l("تصميم شهرياً", "designs / month"),
  platformsLabel: l("المنصات", "Platforms"),
  order: l("اطلب الآن", "Order now"),
  orderWa: l("اطلب عبر واتساب", "Order via WhatsApp"),
  popular: l("الأكثر طلباً", "Most popular"),
};
export const packages: Pkg[] = [
  {
    name: l("باقة الانطلاقة", "Starter Package"),
    tagline: l("حضور ثابت على المنصات الأساسية.", "A steady presence on the core platforms."),
    monthly: 2000, yearly: 19200, posts: 6,
    platforms: ["Snapchat", "Instagram", "TikTok"],
    features: [
      { label: l("كتابة إعلانية", "Ad copywriting"), included: true },
      { label: l("إعداد الحملات الإعلانية", "Ad campaign setup"), included: true },
      { label: l("تصميم فيديو", "Video design"), included: false },
      { label: l("نشر قصص أسبوعي", "Weekly story posting"), included: false },
      { label: l("تقرير أسبوعي", "Weekly report"), included: false },
      { label: l("إدارة التعليقات", "Comment management"), included: false },
    ],
  },
  {
    name: l("باقة الأعمال", "Business Package"),
    tagline: l("تغطية أوسع ومحتوى أكثر للعلامات النامية.", "Wider coverage and more content for growing brands."),
    monthly: 4000, yearly: 38400, posts: 9, featured: true,
    platforms: ["Facebook", "Snapchat", "Instagram", "TikTok", "WhatsApp"],
    features: [
      { label: l("كتابة إعلانية", "Ad copywriting"), included: true },
      { label: l("إعداد الحملات الإعلانية", "Ad campaign setup"), included: true },
      { label: l("تصميم فيديو واحد", "1 video design"), included: true },
      { label: l("نشر قصص أسبوعي", "Weekly story posting"), included: true },
      { label: l("تقرير أسبوعي", "Weekly report"), included: false },
      { label: l("إدارة التعليقات", "Comment management"), included: false },
    ],
  },
  {
    name: l("باقة التفاعل", "Engagement Package"),
    tagline: l("إدارة كاملة: محتوى، قصص، تقارير ومجتمع.", "Full management: content, stories, reports and community."),
    monthly: 7000, yearly: 67200, posts: 18,
    platforms: ["Facebook", "Snapchat", "Instagram", "TikTok", "Google", "WhatsApp"],
    features: [
      { label: l("كتابة إعلانية", "Ad copywriting"), included: true },
      { label: l("إعداد الحملات الإعلانية", "Ad campaign setup"), included: true },
      { label: l("٣ تصاميم فيديو", "3 video designs"), included: true },
      { label: l("٣ قصص أسبوعياً", "3 stories weekly"), included: true },
      { label: l("تقرير أسبوعي", "Weekly report"), included: true },
      { label: l("إدارة التعليقات", "Comment management"), included: true },
    ],
  },
];

/* Client names as listed in the company profile */
export const clientNames: string[] = [
  "Asilh Poultry","Tamkeen Advanced","Rawa Al Adaa","VINCI Beauty Salon","SAPTEC ERP","VNAS Logistics","Honey Water","Eagle Shirts","Rawy",
  "Al Madar Aluminium","Adeeb Al-Jubail","Lockses","Qoot","NG Design","Printing Solutions","Mandi Beirut","TASCO","Vivid Store",
  "Pearla Hospitality","Dahab Event Planner","Tahfa Alhajar","Dera Al-Iskan Contracting","Rehab Company","Business Valley","Advanced United Systems",
  "GEFCO","MEG Electric Factory","Siwar Tech Consulting","Coffee On The Go","Coco Spray Tan","Shop More","Thai Massage Home Service",
  "Dry Clean Arzaq","Istabraq Plastic","Bait Alkawd Contracting","Hidayet Group","Custom Furniture HM","Al Beowmy Design","MAC Midan Arts",
  "Global Companion Travel","HIT 3D Printing","Al-Taweel Marble & Granite","Fire Pit Restaurant","Studio Alalezzeh","Al Ameer Dates",
  "Teen Stars Road","Al Bawany Recruitment","Le Foea Sweets","Kingdom Delivery","Maidat Contracting","Al Balawi Store","NG Digital Group",
  "Big Kid","Permanent Solution Consultancy","Aswar Almadena","Majdalawy Tours","Smart Seasons","Fadi For Curtains","Beauty Care Clinic",
  "Nar Snack","AlThakereen Hajj & Umrah","Terra Santa Online Shop","Elite Arkan Real Estate","Duweik","Zad","Space","Bless Travel",
  "Kingdom Logistic","Naqsh","Ruba Ladies Salon","3 Arabay Store","Aruba Training Center","Fun Day Travel","Revanesse","Pinkaky Nursery",
  "Hijama Clinic","Beng Zone","Loleta Beauty Center","Silver Curve","Al Hadaf Decoration","Sanam Health Care","Offer Shop","Methaq",
  "Kitchen & More","Fai Al Tanseeq","Daily Dream Conditioning","Waseela School","KitchenKo","Alssafa Mall","Final Touch Kitchen","Cemor",
  "Mr. Photo","Al Hawd","Bavaria Travel","Trust Gifts","Ghada Market","Orient Housing","Zaragoza",
];
