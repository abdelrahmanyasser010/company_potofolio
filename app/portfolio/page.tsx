"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Monitor, Smartphone, Briefcase, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";
import { INITIAL_PORTFOLIO } from "@/lib/data/initialData";
import { ProjectVisual } from "@/components/common/ProjectVisual";
import { PortfolioItem } from "@/lib/data/initialData";

const filterConfig = {
  all: { icon: Layers, label_ar: "الكل", label_en: "All" },
  platform: { icon: Monitor, label_ar: "منصات", label_en: "Platforms" },
  business: { icon: Briefcase, label_ar: "أنظمة أعمال", label_en: "Business systems" },
  mobile: { icon: Smartphone, label_ar: "تطبيقات الجوال", label_en: "Mobile apps" },
};

function getFilterData(id: string) {
  return filterConfig[id as keyof typeof filterConfig] || { icon: Layers, label_ar: id, label_en: id };
}

const ProjectCard = ({ p, isFeatured, index }: { p: PortfolioItem; isFeatured: boolean; index: number }) => {
  const { t } = useLanguage();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
      className={isFeatured ? "lg:col-span-2" : ""}
    >
      <Link
        href={`/portfolio/${p.slug}`}
        className={`project-shell accent-${p.accent} group block h-full overflow-hidden rounded-[30px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]`}
      >
        <div className={`${isFeatured ? "grid lg:grid-cols-[.9fr_1.1fr] h-full" : "flex flex-col h-full"}`}>
          <div
            className={`${
              isFeatured
                ? "order-2 border-t border-white/8 lg:order-1 lg:border-e lg:border-t-0"
                : "order-2 flex-1"
            } p-7 md:p-9 flex flex-col justify-center`}
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[.18em] text-slate-400">
              {t(p.eyebrow_ar, p.eyebrow_en)}
            </div>
            <h2 className="mt-3 text-2xl font-extrabold text-white transition-colors group-hover:text-cyan-200 md:text-3xl">
              {t(p.title_ar, p.title_en)}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 line-clamp-3">
              {t(p.summary_ar, p.summary_en)}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.technologies.map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold text-slate-300 transition-colors group-hover:bg-white/10"
                >
                  {x}
                </span>
              ))}
            </div>
            <div className="mt-7 flex items-center gap-2 text-xs font-extrabold text-white transition-colors group-hover:text-codely-cyan mt-auto pt-4">
              <span>{t("عرض دراسة الحالة", "Case study")}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <div className={`${isFeatured ? "order-1 lg:order-2" : "order-1"} overflow-hidden h-64 lg:h-auto min-h-[250px] relative bg-[#0a0f25]`}>
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
              <ProjectVisual project={p} compact={!isFeatured} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function PortfolioPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const allCategories = Array.from(new Set(INITIAL_PORTFOLIO.map((p) => p.category)));
  // Ensure a specific order: platform, business, mobile, then any others
  const orderedCategories = (["platform", "business", "mobile"] as const).filter(c => allCategories.includes(c as PortfolioItem["category"]));
  const otherCategories = allCategories.filter(c => !(["platform", "business", "mobile"] as string[]).includes(c));
  const finalCategories = [...orderedCategories, ...otherCategories];

  const filters = ["all", ...finalCategories];

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10 py-20 md:py-28">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <div className="container-codely relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            <div className="eyebrow flex justify-center">
              <span className="glow-dot h-1.5 w-1.5 rounded-full bg-codely-cyan" />
              {t("أعمال Codely", "Codely work")}
            </div>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.3] text-white md:text-5xl lg:text-6xl">
              {t("منتجات حقيقية. وتفاصيل تشغيل واقعية.", "Real products. Real operational detail.")}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300">
              {t(
                "الأعمال هنا تعكس نوعية المنتجات التي نركز عليها: برمجيات تمتلك دورات عمل حقيقية، تعدد في الأدوار، بيانات مترابطة، وحالات خاصة معقدة يجب التعامل معها باحترافية.",
                "The work here reflects the kind of products we focus on: software with real workflows, multiple roles, connected data and edge cases that need to be handled properly."
              )}
            </p>
          </motion.div>

          <div className="mt-12 flex flex-wrap justify-center gap-2.5">
            {filters.map((id) => {
              const active = filter === id;
              const data = getFilterData(id);
              const Icon = data.icon;
              return (
                <button
                  key={id}
                  onClick={() => setFilter(id)}
                  className={`relative flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 ${
                    active ? "text-[#070b1f]" : "text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activePortfolioFilter"
                      className="absolute inset-0 rounded-full bg-white shadow-[0_4px_15px_rgba(255,255,255,0.2)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon className={`relative z-10 h-4 w-4 ${active ? "text-[#070b1f]" : "text-slate-400"}`} />
                  <span className="relative z-10">{t(data.label_ar, data.label_en)}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space min-h-[60vh]">
        <div className="container-codely">
          <AnimatePresence mode="wait">
            {filter === "all" ? (
              <motion.div
                key="all-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-24"
              >
                {finalCategories.map((cat, catIndex) => {
                  const catProjects = INITIAL_PORTFOLIO.filter((p) => p.category === cat);
                  if (catProjects.length === 0) return null;
                  const catInfo = getFilterData(cat);
                  const CatIcon = catInfo.icon;
                  
                  return (
                    <motion.div 
                      key={cat} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIndex * 0.15 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-white shadow-lg">
                          <CatIcon className="h-6 w-6" />
                        </div>
                        <h2 className="text-3xl font-extrabold text-white">{t(catInfo.label_ar, catInfo.label_en)}</h2>
                      </div>
                      <div className="grid gap-7 lg:grid-cols-2">
                        {catProjects.map((p, i) => (
                          <ProjectCard 
                            key={p.slug} 
                            p={p} 
                            isFeatured={i === 0 && catProjects.length >= 3} 
                            index={i} 
                          />
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key={`filter-${filter}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-7 lg:grid-cols-2"
              >
                {INITIAL_PORTFOLIO.filter((p) => p.category === filter).map((p, i) => (
                  <ProjectCard 
                    key={p.slug} 
                    p={p} 
                    isFeatured={i === 0} 
                    index={i} 
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
