"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { COMPANY_INFO } from "@/lib/data/initialData";

export function CTASection() {
  const { t } = useLanguage();
  return <section className="section-space"><div className="container-codely"><div className="relative overflow-hidden rounded-[36px] border border-cyan-300/15 bg-gradient-to-br from-blue-500/10 via-[#0a102d] to-violet-500/10 px-7 py-14 text-center md:px-12 md:py-20"><div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]"/><div className="relative mx-auto max-w-3xl"><div className="eyebrow justify-center"><span className="h-1.5 w-1.5 rounded-full bg-codely-cyan"/>{COMPANY_INFO.tagline}</div><h2 className="mt-5 text-balance text-4xl font-black leading-tight md:text-6xl">{t("عندك فكرة جديدة أو نظام قائم يحتاج تطويرًا؟", "Starting something new or evolving an existing product?")}</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">{t("ابعث لنا ما لديك حاليًا: الفكرة، الـ screenshots، الكود أو المشكلة. نراجع الصورة أولًا ونحدد معك المسار الأنسب بدل عرض جاهز لا يناسب المشروع.", "Send what you have today: the idea, screenshots, code or the current problem. We review the real situation first and define the right path instead of forcing a predefined package.")}</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/contact" className="button-primary">{t("ابدأ المحادثة", "Start the conversation")}<ArrowUpRight className="h-4 w-4"/></Link>{COMPANY_INFO.whatsapp ? <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="button-whatsapp"><MessageCircle className="h-4 w-4"/>{t("WhatsApp", "WhatsApp")}</a> : <a href={`mailto:${COMPANY_INFO.email}`} className="button-secondary"><Mail className="h-4 w-4 text-codely-cyan"/>{COMPANY_INFO.email}</a>}</div></div></div></div></section>;
}
