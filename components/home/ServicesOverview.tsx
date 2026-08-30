"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";
import { INITIAL_PORTFOLIO } from "@/lib/data/initialData";
import { ProjectVisual } from "@/components/common/ProjectVisual";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ServicesOverview() {
  const { t } = useLanguage();
  const projects = INITIAL_PORTFOLIO.slice(1, 4);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="section-space">
      <div className="container-codely">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow={t("أعمال مختارة", "Selected work")}
            title={t("مشاريع مختلفة. نفس التركيز على التشغيل.", "Different products. The same focus on how they work.")}
            body={t(
              "لا نعرض صور واجهات فقط؛ كل مشروع يبدأ من مشكلة تشغيلية أو تجربة استخدام محددة.",
              "We do not showcase pretty screens alone; every product starts from a real workflow or user problem."
            )}
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.div
              key={p.slug}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <Link
                href={`/portfolio/${p.slug}`}
                className={`project-shell accent-${p.accent} group block h-full overflow-hidden rounded-[28px] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]`}
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 group-hover:scale-105">
                    <ProjectVisual project={p} compact />
                  </div>
                </div>
                <div className="border-t border-white/8 p-6">
                  <div className="text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-400">
                    {t(p.eyebrow_ar, p.eyebrow_en)}
                  </div>
                  <h3 className="mt-2 text-2xl font-extrabold text-white transition-colors duration-200 group-hover:text-cyan-200">
                    {t(p.title_ar, p.title_en)}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-xs leading-6 text-slate-400">
                    {t(p.summary_ar, p.summary_en)}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="text-[10px] font-bold text-slate-400">
                      {p.technologies.slice(0, 3).join(" · ")}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:text-codely-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link href="/portfolio" className="button-secondary group shadow-none">
            {t("استكشف كل المشاريع", "Explore all projects")}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
