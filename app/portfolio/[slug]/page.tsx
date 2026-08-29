"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ExternalLink, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";
import { INITIAL_PORTFOLIO } from "@/lib/data/initialData";
import { ProjectVisual } from "@/components/common/ProjectVisual";

export default function ProjectCaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const { dir, t } = useLanguage();
  const project = INITIAL_PORTFOLIO.find((item) => item.slug === params.slug);

  const [activeImage, setActiveImage] = useState<{
    src: string;
    title_ar: string;
    title_en: string;
    caption_ar: string;
    caption_en: string;
  } | null>(null);

  if (!project) notFound();

  const BackIcon = dir === "rtl" ? ArrowRight : ArrowLeft;

  return (
    <div>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl md:p-10"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute end-6 top-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
              aria-label="Close preview"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/15 bg-[#090d20] shadow-2xl"
            >
              <div className="relative aspect-[16/9] w-full max-h-[72vh] bg-black/40">
                <Image
                  src={activeImage.src}
                  alt={t(activeImage.title_ar, activeImage.title_en)}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="border-t border-white/10 p-6 md:p-8">
                <h3 className="text-xl font-black text-white">
                  {t(activeImage.title_ar, activeImage.title_en)}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {t(activeImage.caption_ar, activeImage.caption_en)}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className={`project-shell accent-${project.accent} border-x-0 border-t-0`}>
        <div className="container-codely py-16 md:py-24">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-xs font-bold text-slate-400 transition-colors hover:text-white"
          >
            <BackIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1 group-hover:rtl:translate-x-1" />
            {t("كل المشاريع", "All work")}
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? 25 : -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-codely-cyan" />
                {t(project.eyebrow_ar, project.eyebrow_en)}
              </div>
              <h1 className="mt-5 text-5xl font-black text-white md:text-7xl">
                {t(project.title_ar, project.title_en)}
              </h1>
              <p className="mt-6 text-base leading-8 text-slate-300">
                {t(project.summary_ar, project.summary_en)}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-[10px] font-bold text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {project.website ? (
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-codely-cyan/40 bg-codely-cyan/15 px-6 py-3.5 text-xs font-black text-codely-cyan shadow-[0_4px_20px_rgba(46,220,255,0.15)] transition-all hover:border-codely-cyan/70 hover:bg-codely-cyan/25"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t("زيارة الموقع الرسمي / المعاينة", "Visit official site / Demo")}
                </motion.a>
              ) : null}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="panel overflow-hidden rounded-[30px] shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
            >
              <ProjectVisual project={project} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-codely grid gap-12 lg:grid-cols-[.48fr_1fr]">
          <div className="text-xs font-black uppercase tracking-[.18em] text-codely-cyan">
            01 / {t("المشكلة", "The challenge")}
          </div>
          <div>
            <h2 className="text-3xl font-black text-white md:text-5xl">
              {t("ما الذي كان يحتاج حلًا؟", "What needed to be solved?")}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              {t(project.challenge_ar, project.challenge_en)}
            </p>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-[#060919]">
        <div className="container-codely grid gap-12 lg:grid-cols-[.48fr_1fr]">
          <div className="text-xs font-black uppercase tracking-[.18em] text-codely-cyan">
            02 / {t("الحل", "The approach")}
          </div>
          <div>
            <h2 className="text-3xl font-black text-white md:text-5xl">
              {t("كيف تم تشكيل المنتج؟", "How was the product shaped?")}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              {t(project.solution_ar, project.solution_en)}
            </p>
            <div className="mt-9 grid gap-3 md:grid-cols-2">
              {t(project.highlights_ar, project.highlights_en).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[.025] px-4 py-3.5 text-xs font-bold text-slate-200 transition-colors hover:border-cyan-400/25 hover:bg-white/[0.04]"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cyan-300/10 text-codely-cyan">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {project.gallery?.length ? (
        <section className="section-space overflow-hidden">
          <div className="container-codely">
            <div className="grid gap-10 lg:grid-cols-[.48fr_1fr]">
              <div className="text-xs font-black uppercase tracking-[.18em] text-codely-cyan">
                03 / {t("داخل المنتج", "Inside the product")}
              </div>
              <div>
                <h2 className="max-w-3xl text-3xl font-black text-white md:text-5xl">
                  {t(project.galleryTitle_ar ?? "لقطات من المنتج", project.galleryTitle_en ?? "Product views")}
                </h2>
                {(project.galleryIntro_ar || project.galleryIntro_en) && (
                  <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
                    {t(project.galleryIntro_ar ?? "", project.galleryIntro_en ?? "")}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {project.gallery.map((item, index) => (
                <motion.figure
                  key={item.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                  onClick={() => setActiveImage(item)}
                  className={`group cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-[#090d1e] shadow-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
                    index === 0 || index === 6 ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden bg-[#181c24] ${
                      index === 0 || index === 6 ? "aspect-[16/8.5]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={t(item.title_ar, item.title_en)}
                      fill
                      sizes={
                        index === 0 || index === 6
                          ? "(max-width: 768px) 100vw, 85vw"
                          : "(max-width: 768px) 100vw, 43vw"
                      }
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md">
                        <Maximize2 className="h-3.5 w-3.5" />
                        {t("انقر للتكبير والتفاصيل", "Click to enlarge")}
                      </span>
                    </div>
                  </div>
                  <figcaption className="grid gap-2 border-t border-white/8 p-5 md:grid-cols-[.45fr_1fr] md:gap-6 md:p-6">
                    <div className="text-sm font-black text-white transition-colors group-hover:text-cyan-200">
                      {t(item.title_ar, item.title_en)}
                    </div>
                    <p className="text-xs leading-6 text-slate-400">
                      {t(item.caption_ar, item.caption_en)}
                    </p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className={project.gallery?.length ? "pb-20 md:pb-28" : "section-space"}>
        <div className="container-codely">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/10 bg-white/[.025] p-8 md:p-12 backdrop-blur-sm"
          >
            <div className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-codely-cyan" />
              {t("مشروع مشابه؟", "Building something similar?")}
            </div>
            <div className="mt-4 flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <h2 className="max-w-2xl text-3xl font-black text-white md:text-5xl">
                {t(
                  "احكِ لنا عن التشغيل والمشكلة، ونبدأ من هناك.",
                  "Tell us about the workflow and the problem. We will start there."
                )}
              </h2>
              <Link
                href="/contact"
                className="shrink-0 rounded-full bg-white px-7 py-3.5 text-sm font-black text-[#070b1f] shadow-lg transition-transform duration-200 hover:scale-105"
              >
                {t("ابدأ مشروعًا", "Start a project")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
