"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { INITIAL_PORTFOLIO } from "@/lib/data/initialData";
import { ProjectVisual } from "@/components/common/ProjectVisual";

export function FeaturedProject() {
  const { t } = useLanguage();
  const project = INITIAL_PORTFOLIO.find((item) => item.coverImage) ?? INITIAL_PORTFOLIO[0];
  return <section className="pb-20 md:pb-28"><div className="container-codely"><div className={`project-shell accent-${project.accent} overflow-hidden rounded-[34px]`}><div className="grid items-stretch lg:grid-cols-[.9fr_1.1fr]"><div className="flex flex-col justify-center p-8 md:p-12 lg:p-14"><div className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-codely-cyan"/>{t("مشروع مختار", "Featured work")}</div><h2 className="mt-5 text-4xl font-black text-white md:text-5xl">{t(project.title_ar,project.title_en)}</h2><p className="mt-2 text-sm font-bold text-cyan-200/80">{t(project.eyebrow_ar,project.eyebrow_en)}</p><p className="mt-6 text-sm leading-7 text-slate-400 md:text-base">{t(project.summary_ar,project.summary_en)}</p><div className="mt-6 flex flex-wrap gap-2">{project.technologies.map(x=><span key={x} className="rounded-full border border-cyan-300/15 bg-cyan-300/[.045] px-3 py-1.5 text-[10px] font-bold text-cyan-100/80">{x}</span>)}</div><Link href={`/portfolio/${project.slug}`} className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-black text-white hover:text-codely-cyan">{t("شاهد دراسة المشروع", "View case study")}<ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></Link></div><div className="min-h-[380px] border-t border-white/8 bg-black/10 lg:border-s lg:border-t-0"><ProjectVisual project={project}/></div></div></div></div></section>;
}
