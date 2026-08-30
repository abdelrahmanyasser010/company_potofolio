"use client";

import Link from "next/link";
import Image from "next/image";
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
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.div
              key={p.slug}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <Link
                href={`/portfolio/${p.slug}`}
                className="group relative block aspect-[1/1.2] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070b1e] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(46,220,255,0.18)]"
              >
                {/* Full Bleed Image */}
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

                {/* Permanent Category Badge */}
                <div className="absolute top-3 end-3 z-10 rounded-full border border-white/15 bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-200 backdrop-blur-md transition-all duration-300 group-hover:border-cyan-400/40">
                  {p.category === "platform" ? t("منصة ويب", "Web Platform") : p.category === "business" ? t("نظام أعمال", "Business System") : t("تطبيق جوال", "Mobile App")}
                </div>

                {/* Default Title Strip at Bottom */}
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
