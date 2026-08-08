"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { INITIAL_PORTFOLIO } from "@/lib/data/initialData";
import { ProjectVisual } from "@/components/common/ProjectVisual";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ServicesOverview() {
  const { t } = useLanguage();
  const projects = INITIAL_PORTFOLIO.slice(1,4);
  return <section className="section-space"><div className="container-codely"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionHeading eyebrow={t("أعمال مختارة", "Selected work")} title={t("مشاريع مختلفة. نفس التركيز على التشغيل.", "Different products. The same focus on how they work.")} body={t("لا نعرض صور واجهات فقط؛ كل مشروع يبدأ من مشكلة تشغيلية أو تجربة استخدام محددة.", "We do not showcase pretty screens alone; every product starts from a real workflow or user problem.")}/><Link href="/portfolio" className="group shrink-0 text-sm font-black text-white hover:text-codely-cyan">{t("كل المشاريع", "All projects")} <ArrowUpRight className="ms-1 inline h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></Link></div><div className="mt-12 grid gap-6 lg:grid-cols-3">{projects.map((p)=><Link key={p.slug} href={`/portfolio/${p.slug}`} className={`project-shell accent-${p.accent} group overflow-hidden rounded-[28px] transition hover:-translate-y-1`}><ProjectVisual project={p} compact/><div className="border-t border-white/8 p-6"><div className="text-[10px] font-black uppercase tracking-[.16em] text-slate-500">{t(p.eyebrow_ar,p.eyebrow_en)}</div><h3 className="mt-2 text-2xl font-black text-white">{t(p.title_ar,p.title_en)}</h3><p className="mt-3 line-clamp-3 text-xs leading-6 text-slate-400">{t(p.summary_ar,p.summary_en)}</p><div className="mt-5 flex items-center justify-between"><span className="text-[10px] font-bold text-slate-500">{p.technologies.slice(0,2).join(" · ")}</span><ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-codely-cyan"/></div></div></Link>)}</div></div></section>;
}
