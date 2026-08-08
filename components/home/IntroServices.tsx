"use client";

import { AppWindow, Blocks, LayoutDashboard, ServerCog, Smartphone, Wrench } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { INITIAL_SERVICES } from "@/lib/data/initialData";
import { SectionHeading } from "@/components/common/SectionHeading";

const icons = { web: AppWindow, mobile: Smartphone, dashboard: LayoutDashboard, backend: ServerCog, systems: Blocks, rescue: Wrench };

export function IntroServices() {
  const { t } = useLanguage();
  return <section className="section-space"><div className="container-codely"><SectionHeading eyebrow={t("قدرات الفريق", "Team capabilities")} title={t("من واجهة المستخدم إلى منطق التشغيل والـ Backend.", "From the interface to business logic and backend.")} body={t("نغطي تخصصات المنتج الأساسية داخل فريق واحد، ونكوّن التشكيل المناسب حسب مرحلة المشروع وحجمه بدل تحميله Stack أو فريقًا أكبر من احتياجه.", "We cover the core product disciplines in one team and shape the right setup around product stage and scope — without forcing an oversized stack or team.")}/><div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">{INITIAL_SERVICES.map((s)=>{const Icon=icons[s.icon];return <article key={s.id} className="group bg-[#070b1c] p-7 transition hover:bg-[#0a1028]"><div className="mb-8 grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[.04] text-codely-cyan transition group-hover:border-codely-cyan/30"><Icon className="h-5 w-5"/></div><h3 className="text-xl font-black text-white">{t(s.title_ar,s.title_en)}</h3><p className="mt-3 min-h-[76px] text-sm leading-7 text-slate-400">{t(s.description_ar,s.description_en)}</p><div className="mt-5 flex flex-wrap gap-2">{t(s.deliverables_ar,s.deliverables_en).slice(0,3).map(x=><span key={x} className="rounded-full border border-white/8 bg-white/[.025] px-2.5 py-1 text-[10px] font-bold text-slate-500">{x}</span>)}</div></article>})}</div><div className="mt-7 text-center"><Link href="/services" className="text-sm font-bold text-slate-300 hover:text-codely-cyan">{t("استكشف نموذج الشراكة وآلية التطوير ⟵", "Discover our team workflow & partnership model ⟵")}</Link></div></div></section>;
}
