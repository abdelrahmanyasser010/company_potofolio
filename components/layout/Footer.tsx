"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { COMPANY_INFO } from "@/lib/data/initialData";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/[.08] bg-[#040713]">
      <div className="container-codely py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr_.85fr]">
          <div className="max-w-xl">
            <Image src="/codely-wordmark-transparent.png" alt="Codely" width={1125} height={390} className="mb-5 h-12 w-auto object-contain" />
            <p className="max-w-lg text-sm leading-7 text-slate-400">{t("فريق برمجي متكامل بخبرات مجمعة تتجاوز 15 عامًا، نبني منتجات موبايل وويب وأنظمة POS وERP ولوحات تشغيل وحلول أعمال مخصصة.", "A complete software team with 15+ years of combined experience, building mobile and web products, POS, ERP, operational dashboards and custom business systems.")}</p>
            <div className="mt-5 text-xs font-bold tracking-wide text-slate-500">Egypt · Saudi Arabia · Oman · Jordan</div>
          </div>
          <div><h3 className="mb-4 text-xs font-black uppercase tracking-[.18em] text-slate-500">{t("استكشف", "Explore")}</h3><div className="space-y-3 text-sm text-slate-300"><Link className="block hover:text-white" href="/services">{t("حلولنا", "Capabilities")}</Link><Link className="block hover:text-white" href="/portfolio">{t("أعمالنا", "Work")}</Link><Link className="block hover:text-white" href="/about">{t("عن Codely", "About")}</Link><Link className="block hover:text-white" href="/contact">{t("ابدأ مشروعك", "Start a project")}</Link></div></div>
          <div><h3 className="mb-4 text-xs font-black uppercase tracking-[.18em] text-slate-500">{t("تواصل", "Contact")}</h3><a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 text-sm font-bold text-white hover:text-codely-cyan"><Mail className="h-4 w-4"/>{COMPANY_INFO.email}</a>{COMPANY_INFO.phoneDisplay && <a href={`tel:${COMPANY_INFO.phoneDisplay.replace(/\s/g,"")}`} className="mt-3 flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white" dir="ltr"><Phone className="h-4 w-4 text-codely-cyan"/>{COMPANY_INFO.phoneDisplay}</a>}{COMPANY_INFO.whatsapp && <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white"><MessageCircle className="h-4 w-4 text-emerald-400"/>{t("WhatsApp", "WhatsApp")}</a>}<Link href="/contact" className="group mt-6 inline-flex items-center gap-2 text-sm font-black text-white">{t("احكِ لنا عن مشروعك", "Tell us about your project")}<ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></Link></div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[.08] pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Codely.</span><span className="tracking-[.2em]">{COMPANY_INFO.tagline}</span></div>
      </div>
    </footer>
  );
}
