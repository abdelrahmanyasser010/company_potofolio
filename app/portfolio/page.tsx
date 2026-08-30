"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Monitor, Smartphone, Briefcase, Layers, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";
import { INITIAL_PORTFOLIO } from "@/lib/data/initialData";
import { ProjectVisual } from "@/components/common/ProjectVisual";

const filterConfig = {
  all: { icon: Layers, label_ar: "الكل", label_en: "All" },
  platform: { icon: Monitor, label_ar: "منصات", label_en: "Platforms" },
  business: { icon: Briefcase, label_ar: "أنظمة أعمال", label_en: "Business systems" },
  mobile: { icon: Smartphone, label_ar: "تطبيقات الجوال", label_en: "Mobile apps" },
};

function getFilterData(id: string) {
  return filterConfig[id as keyof typeof filterConfig] || { icon: Layers, label_ar: id, label_en: id };
}

const ITEMS_PER_PAGE = 6;

export default function PortfolioPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const gridTopRef = useRef<HTMLDivElement | null>(null);

  const filters = ["all", "platform", "business", "mobile"];

  const filteredProjects = useMemo(() => {
    if (filter === "all") return INITIAL_PORTFOLIO;
    return INITIAL_PORTFOLIO.filter((p) => p.category === filter);
  }, [filter]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Compact Header Section without huge gaps */}
      <section className="relative overflow-hidden pt-12 pb-6 md:pt-16 md:pb-8">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="container-codely relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            <div className="eyebrow flex justify-center">
              <span className="glow-dot h-1.5 w-1.5 rounded-full bg-codely-cyan" />
              {t("أعمال Codely", "Codely work")}
            </div>
            <h1 className="mt-4 text-balance text-2xl font-bold leading-normal text-white sm:text-3xl md:text-4xl">
              {t("منتجات حقيقية. وتفاصيل تشغيل واقعية.", "Real products. Real operational detail.")}
            </h1>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-slate-300 md:text-sm">
              {t(
                "الأعمال هنا تعكس نوعية المنتجات التي نركز عليها: برمجيات تمتلك دورات عمل حقيقية وتطبيقات قابلة للتوسع.",
                "The work here reflects the kind of products we focus on: software with real workflows and scalable architectures."
              )}
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {filters.map((id) => {
              const active = filter === id;
              const data = getFilterData(id);
              const Icon = data.icon;
              return (
                <button
                  key={id}
                  onClick={() => handleFilterChange(id)}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                    active
                      ? "text-[#070b1f]"
                      : "border border-white/[0.06] bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activePortfolioFilter"
                      className="absolute inset-0 rounded-full bg-white shadow-[0_4px_15px_rgba(255,255,255,0.2)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon className={`relative z-10 h-3.5 w-3.5 ${active ? "text-[#070b1f]" : "text-slate-400"}`} />
                  <span className="relative z-10">{t(data.label_ar, data.label_en)}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section ref={gridTopRef} className="pt-2 pb-20">
        <div className="container-codely">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${filter}-page-${currentPage}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {paginatedProjects.map((p, index) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <Link
                    href={`/portfolio/${p.slug}`}
                    className="group relative block aspect-[1/1.2] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070b1e] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(46,220,255,0.18)]"
                  >
                    {/* Project Image Background - Full Bleed */}
                    <div className="absolute inset-0 overflow-hidden">
                      {p.coverImage ? (
                        <Image
                          src={p.coverImage}
                          alt={p.title_en}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      ) : (
                        <ProjectVisual project={p} compact />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060a1d] via-[#060a1d]/40 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />
                    </div>

                    {/* Permanent Top Category Badge */}
                    <div className="absolute top-3 end-3 z-10 rounded-full border border-white/15 bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-200 backdrop-blur-md transition-all duration-300 group-hover:border-cyan-400/40">
                      {p.category === "platform" ? t("منصة ويب", "Web Platform") : p.category === "business" ? t("نظام أعمال", "Business System") : t("تطبيق جوال", "Mobile App")}
                    </div>

                    {/* Always visible minimal title strip at bottom */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-3.5 transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {t(p.title_ar, p.title_en)}
                      </h3>
                    </div>

                    {/* Hover-Reveal Minimal Overlay */}
                    <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-4 bg-gradient-to-t from-[#060a1e] via-[#070d28]/95 to-transparent backdrop-blur-md border-t border-cyan-400/25 opacity-0 translate-y-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                      <div className="text-[10px] font-bold text-cyan-300">
                        {t(p.eyebrow_ar, p.eyebrow_en)}
                      </div>
                      <h3 className="mt-1 text-sm sm:text-base font-bold text-white transition-colors group-hover:text-cyan-200">
                        {t(p.title_ar, p.title_en)}
                      </h3>

                      <div className="mt-2.5 flex items-center justify-between border-t border-white/[0.08] pt-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 transition-colors group-hover:text-cyan-200">
                          <span>{t("عرض دراسة الحالة", "View case study")}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Controls - CodeNest Style */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              {/* Previous Page Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous Page"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-cyan-400/40 hover:text-white disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Page Number Circles */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold transition-all duration-200 ${
                    currentPage === pageNum
                      ? "scale-105 bg-gradient-to-r from-cyan-400 to-blue-500 font-extrabold text-[#070b1f] shadow-[0_0_20px_rgba(46,220,255,0.4)]"
                      : "border border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              {/* Next Page Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next Page"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-cyan-400/40 hover:text-white disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
