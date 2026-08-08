"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="hero-section relative overflow-hidden border-b border-white/[.08]">
      <div className="grid-bg absolute inset-0 opacity-45"/>
      <div className="hero-orb hero-orb-cyan"/>
      <div className="hero-orb hero-orb-violet"/>
      <div className="container-codely relative grid min-h-[720px] items-center gap-14 py-16 lg:grid-cols-[.93fr_1.07fr] lg:py-24">
        <div className="max-w-3xl">
          <div className="eyebrow"><span className="glow-dot h-1.5 w-1.5 rounded-full bg-codely-cyan"/> CODELY SOFTWARE STUDIO</div>
          <h1 className="display-title mt-6 max-w-[760px] text-white">
            {t("نبني برمجيات تدير العمل،", "We build software that runs the work —")} <span className="codely-gradient-text">{t("وتكبر معك.", "and grows with you.")}</span>
          </h1>
          <p className="mt-7 max-w-[680px] text-[15px] leading-8 text-slate-400 md:text-[17px]">{t("فريق تطوير متكامل لمنتجات الويب والموبايل، أنظمة POS وERP، لوحات التشغيل والـ APIs. خبراتنا ممتدة عبر أسواق مصر والسعودية وعُمان والأردن، ونبني حول احتياج العمل الحقيقي لا حول قالب جاهز.", "A complete software team for web and mobile products, POS and ERP systems, operational dashboards and APIs. Our experience spans Egypt, Saudi Arabia, Oman and Jordan — building around real business needs, not templates.")}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="button-primary">{t("احكِ لنا عن مشروعك", "Tell us about your project")}<ArrowUpRight className="h-4 w-4"/></Link>
            <Link href="/portfolio" className="button-secondary">{t("شاهد المشاريع", "Explore our work")}</Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-slate-400">{[
            t("خبرات مجمعة +15 سنة", "15+ years combined experience"),
            t("تخصصات برمجية متكاملة", "Full-stack team coverage"),
            t("تسليم قابل للتوسع", "Built for growth")
          ].map(x=><span key={x} className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-cyan-300/8 text-codely-cyan"><Check className="h-3 w-3"/></span>{x}</span>)}</div>
        </div>

        <div className="relative mx-auto w-full max-w-[650px] lg:mx-0">
          <div className="absolute -inset-7 rounded-[48px] bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-violet-500/12 blur-3xl"/>
          <div className="project-stage relative">
            <Link href="/portfolio/deliver-it" className="project-stage-main group">
              <Image src="/projects/deliver-it/deliver-it-cover.webp" alt="Deliver It logistics operations platform" fill sizes="(max-width: 1024px) 90vw, 620px" className="object-cover transition duration-500 group-hover:scale-[1.015]" priority />
              <span className="project-stage-label"><small>Enterprise Operations</small><strong>Deliver It</strong></span>
            </Link>
            <Link href="/portfolio/tog-pos" className="project-stage-card project-stage-card-a group">
              <Image src="/projects/tog/tog-sunmi-v2s.webp" alt="TOG POS system" fill sizes="260px" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              <span><small>POS / Accounting</small><strong>TOG</strong></span>
            </Link>
            <Link href="/portfolio/gear" className="project-stage-card project-stage-card-b group">
              <Image src="/projects/gear/gear-cover.webp" alt="Gear transportation platform" fill sizes="260px" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              <span><small>Mobility Platform</small><strong>Gear</strong></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
