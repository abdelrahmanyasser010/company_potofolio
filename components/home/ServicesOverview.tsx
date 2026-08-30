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
  const projects = INITIAL_PORTFOLIO.slice(1, 7);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section className="section-space relative">
      <div className="container-codely">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow={t("أعمال مختارة", "Selected work")}
            title={t("مشاريع مختلفة. نفس التركيز على التشغيل.", "Different products. The same focus on how they work.")}
            body={t(
              "لا نعرض صور واجهات فقط؛ كل مشروع يبدأ من مشكلة تشغيلية أو تجربة استخدام حقيقية.",
              "We do not showcase pretty screens alone; every product starts from a real workflow or user problem."
            )}
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.div
              key={p.slug}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <Link
                href={`/portfolio/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0e1638]/70 via-[#0a0f2b]/80 to-[#070b20]/95 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/35 hover:shadow-[0_20px_50px_rgba(46,220,255,0.12)]"
              >
                <div className="overflow-hidden">
                  <ProjectVisual project={p} compact />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <div className="text-[11px] font-bold text-cyan-300/80">
                      {t(p.eyebrow_ar, p.eyebrow_en)}
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-white transition-colors duration-200 group-hover:text-cyan-200">
                      {t(p.title_ar, p.title_en)}
                    </h3>
                    <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-slate-300">
                      {t(p.summary_ar, p.summary_en)}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-white/[0.06] pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {p.technologies.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-300 transition-all duration-200 group-hover:translate-x-1">
                        <span>{t("التفاصيل", "Details")}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
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
