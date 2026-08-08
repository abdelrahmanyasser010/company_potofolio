"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { INITIAL_PORTFOLIO } from "@/lib/data/initialData";
import { ProjectVisual } from "@/components/common/ProjectVisual";

export default function PortfolioPage() {
  const { t } = useLanguage();
  const [filter,setFilter] = useState("all");
  const filters = [
    ["all",t("الكل","All")],
    ["platform",t("منصات","Platforms")],
    ["business",t("أنظمة أعمال","Business systems")],
    ["mobile",t("تطبيقات موبايل","Mobile apps")],
    ["web",t("ويب","Web")],
  ];
  const baseProjects = filter === "all" ? INITIAL_PORTFOLIO : INITIAL_PORTFOLIO.filter(p=>p.category===filter);
  const projects = [...baseProjects].sort((a,b)=>Number(Boolean(b.coverImage))-Number(Boolean(a.coverImage)));

  return <div>
    <section className="relative overflow-hidden border-b border-white/10 py-20 md:py-28"><div className="grid-bg absolute inset-0 opacity-60"/><div className="container-codely relative"><div className="max-w-4xl"><div className="eyebrow"><span className="glow-dot h-1.5 w-1.5 rounded-full bg-codely-cyan"/>{t("أعمال Codely", "Codely work")}</div><h1 className="mt-6 text-balance text-5xl font-black leading-[1.08] md:text-7xl">{t("منتجات حقيقية، وتفاصيل تشغيل حقيقية.", "Real products. Real operational detail.")}</h1><p className="mt-7 max-w-2xl text-base leading-8 text-slate-400">{t("المشاريع هنا تعكس نوع الشغل الذي نركز عليه: أنظمة تحتاج منطقًا واضحًا، أكثر من مستخدم، بيانات مترابطة وتجربة لا تنهار عند الحالات الصعبة.", "The work here reflects the kind of products we focus on: software with real workflows, multiple roles, connected data and edge cases that need to be handled properly.")}</p></div><div className="mt-9 flex flex-wrap gap-2">{filters.map(([id,label])=><button key={id} onClick={()=>setFilter(id)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${filter===id?'bg-white text-[#070b1f]':'border border-white/10 text-slate-400 hover:text-white'}`}>{label}</button>)}</div></div></section>

    <section className="section-space"><div className="container-codely grid gap-7 lg:grid-cols-2">{projects.map((p,i)=><Link href={`/portfolio/${p.slug}`} key={p.slug} className={`project-shell accent-${p.accent} group overflow-hidden rounded-[30px] transition hover:-translate-y-1 ${i===0?'lg:col-span-2':''}`}><div className={`${i===0?'grid lg:grid-cols-[.9fr_1.1fr]':''}`}><div className={`${i===0?'order-2 border-t border-white/8 lg:order-1 lg:border-e lg:border-t-0':''} p-7 md:p-9 flex flex-col justify-center`}><div className="text-[10px] font-black uppercase tracking-[.18em] text-slate-500">{t(p.eyebrow_ar,p.eyebrow_en)}</div><h2 className="mt-3 text-3xl font-black md:text-4xl">{t(p.title_ar,p.title_en)}</h2><p className="mt-4 text-sm leading-7 text-slate-400">{t(p.summary_ar,p.summary_en)}</p><div className="mt-6 flex flex-wrap gap-2">{p.technologies.map(x=><span key={x} className="rounded-full border border-white/8 bg-white/[.025] px-2.5 py-1 text-[9px] font-bold text-slate-500">{x}</span>)}</div><div className="mt-7 flex items-center gap-2 text-xs font-black text-white group-hover:text-codely-cyan">{t("دراسة المشروع", "Case study")}<ArrowUpRight className="h-4 w-4"/></div></div><div className={`${i===0?'order-1 lg:order-2':''}`}><ProjectVisual project={p} compact={i!==0}/></div></div></Link>)}</div></section>
  </div>;
}
