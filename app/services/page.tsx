"use client";

import Link from "next/link";
import { ArrowUpRight, Blocks, CheckCircle2, Code2, Layers3, RefreshCcw, ServerCog, Smartphone } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { SectionHeading } from "@/components/common/SectionHeading";

export default function ServicesPage() {
  const { t } = useLanguage();
  const tracks = [
    {
      icon: Layers3,
      title: t("منتج كامل من الفكرة إلى الإطلاق", "End-to-end product development"),
      text: t("لما تحتاج فريقًا يمسك المنتج كاملًا: تحليل، تجربة استخدام، Frontend، Backend، موبايل، ربط، اختبار وتسليم.", "When you need one team to own the product across discovery, UX, frontend, backend, mobile, integrations, testing and handoff."),
      bullets: [t("MVP ومنتجات SaaS", "MVP & SaaS products"), t("منصات ويب وتطبيقات موبايل", "Web platforms & mobile apps"), t("تسليم على مراحل ومراجعات واضحة", "Milestone-based delivery")],
    },
    {
      icon: Blocks,
      title: t("أنظمة الأعمال والتشغيل", "Business & operations systems"),
      text: t("للشركات التي تحتاج نظامًا يدير التشغيل الحقيقي بدل الاعتماد على ملفات وأدوات منفصلة.", "For businesses that need software to run real operations instead of fragmented spreadsheets and tools."),
      bullets: [t("POS ومحاسبة ومخزون", "POS, accounting & inventory"), t("ERP وأنظمة إدارة مخصصة", "ERP & custom management systems"), t("Dashboards وتقارير وصلاحيات", "Dashboards, reports & permissions")],
    },
    {
      icon: Smartphone,
      title: t("تطبيقات العميل والميدان", "Customer & field applications"),
      text: t("تطبيقات موبايل موجهة للمستخدم النهائي أو فرق الميدان مع خرائط، إشعارات، Offline وحالات تشغيل فعلية.", "Mobile apps for customers and field teams with maps, notifications, offline scenarios and real operational flows."),
      bullets: ["Flutter · Android · iOS", t("تطبيقات متعددة الأدوار", "Multi-role apps"), t("خرائط وتتبع وإشعارات", "Maps, tracking & notifications")],
    },
    {
      icon: ServerCog,
      title: t("Backend وAPIs والتكاملات", "Backend, APIs & integrations"),
      text: t("بنية خلفية منظمة وآمنة تربط المنتج بالدفع والشحن والرسائل والخرائط والأنظمة الخارجية.", "Secure, structured backends connecting products to payments, logistics, messaging, maps and external systems."),
      bullets: ["Laravel · Node.js · REST APIs", t("صلاحيات وبيانات متعددة الأدوار", "RBAC & multi-role data"), t("تكاملات وخدمات خارجية", "Third-party integrations")],
    },
    {
      icon: RefreshCcw,
      title: t("تطوير أو إنقاذ مشروع قائم", "Existing product rescue & evolution"),
      text: t("لو المشروع موجود لكنه متعطل أو صعب التطوير، نراجع الوضع أولًا ونحدد ما يستحق الإصلاح وما يجب تغييره.", "If a product already exists but is unstable or hard to evolve, we assess it first and separate what should be fixed from what truly needs rebuilding."),
      bullets: [t("مراجعة بنية وكود", "Code & architecture review"), t("إصلاح تدفقات وأخطاء", "Workflow & reliability fixes"), t("تجهيز للربط أو الإطلاق", "API integration & launch readiness")],
    },
  ];

  const domains = ["POS", "ERP", "E-commerce", "Logistics", "Booking", "Marketplaces", "Admin Systems", "Fintech flows", "Reporting", "Inventory"];

  return <div>
    <section className="services-hero border-b border-white/[.08]"><div className="container-codely py-20 md:py-28"><div className="max-w-4xl"><div className="eyebrow"><Code2 className="h-4 w-4"/>{t("آلية الدعم والشراكة", "How we support your product")}</div><h1 className="mt-6 text-balance text-4xl font-black leading-[1.12] md:text-6xl">{t("لسنا قائمة خدمات صلبة؛ بل نصمّم الفريق والحل البرمجي وفق احتياج مشروعك الحقيقي.", "Not a rigid menu of services. We tailor the team and architecture around your specific product requirements.")}</h1><p className="mt-7 max-w-3xl text-[15px] leading-8 text-slate-300 md:text-[17px]">{t("يمكننا استلام وتطوير المنتج بالكامل، أو التضامن مع فريقك في طبقة محددة من النظام. نضمن نطاق عمل واضحاً، ومسؤولية هندسية محددة، ونتيجة تشغيلية قابلة للتوسع والتطوير المستمر.", "We can take full ownership of the product or collaborate on specific architecture layers. We ensure a clear scope, defined engineering responsibilities, and scalable results.")}</p></div></div></section>

    <section className="section-space"><div className="container-codely"><SectionHeading eyebrow={t("مسارات العمل", "Engagement tracks")} title={t("اختر المشكلة التي تريد حلها — وليس اسم التقنية.", "Start with the problem you need solved — not the technology name.")} body={t("كل مسار يجمع أكثر من تخصص، ويتغير حسب حجم المشروع ومرحلته والبنية الموجودة بالفعل.", "Each track combines multiple disciplines and changes with product stage, scope and the architecture already in place.")}/><div className="mt-12 grid gap-5 lg:grid-cols-2">{tracks.map((item,i)=><article key={item.title} className={`service-track ${i===0?"lg:col-span-2":""}`}><div className="service-track-icon"><item.icon className="h-5 w-5"/></div><div><div className="text-[10px] font-black tracking-[.18em] text-cyan-300/70">0{i+1}</div><h2 className="mt-2 text-2xl font-black md:text-3xl">{item.title}</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{item.text}</p><div className="mt-6 flex flex-wrap gap-2">{item.bullets.map(x=><span key={x} className="capability-pill"><CheckCircle2 className="h-3.5 w-3.5 text-codely-cyan"/>{x}</span>)}</div></div></article>)}</div></div></section>

    <section className="section-space border-y border-white/[.08] bg-[#060919]/70"><div className="container-codely grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><div><div className="eyebrow">{t("خبرة متنوعة", "Cross-domain experience")}</div><h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">{t("بنينـا أنظمة تتعامل مع تشغيل حقيقي وبيانات حقيقية.", "We build systems around real operations and real data.")}</h2><p className="mt-5 text-sm leading-7 text-slate-300">{t("خبرتنا تشمل منتجات بيع ومحاسبة وشحن وحجز وإدارة ومخزون وتقارير، لذلك نقدر نفهم الترابط بين الواجهة والمنطق التشغيلي والـ Backend بشكل أعمق.", "Our experience spans commerce, accounting, logistics, booking, management, inventory and reporting — giving us a stronger view of how interface, business logic and backend fit together.")}</p></div><div className="flex content-start flex-wrap gap-3">{domains.map(x=><span key={x} className="domain-chip">{x}</span>)}</div></div></section>

    <section className="section-space"><div className="container-codely"><div className="contact-cta"><div><div className="eyebrow">{t("تريد استشارة لبدء مشروعك؟", "Need guidance to launch?")}</div><h2 className="mt-4 text-3xl font-black md:text-5xl">{t("تشارك معنا متطلباتك الحالية، وسنحدد معك الخطوة الهندسية الأولى.", "Share your current requirements, and we will define the first engineering milestone together.")}</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{t("سواء كان لديك ملخص فكرة، نماذج واجهات، أو نظام قائم يحتاج للتطوير — نسعد بمراجعة متطلباتك والتخطيط معك.", "Whether you have an idea brief, UI wireframes, or an existing system needing evolution — we are ready to review and plan with you.")}</p></div><Link href="/contact" className="button-primary shrink-0">{t("ناقش مشروعك مع المهندسين", "Discuss with engineers")}<ArrowUpRight className="h-4 w-4"/></Link></div></div></section>
  </div>;
}
