"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { INITIAL_PORTFOLIO } from "@/lib/data/initialData";
import { ProjectVisual } from "@/components/common/ProjectVisual";

export default function ProjectCaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const { dir, t } = useLanguage();
  const project = INITIAL_PORTFOLIO.find((item) => item.slug === params.slug);

  if (!project) notFound();

  const BackIcon = dir === "rtl" ? ArrowRight : ArrowLeft;

  return (
    <div>
      <section className={`project-shell accent-${project.accent} border-x-0 border-t-0`}>
        <div className="container-codely py-16 md:py-24">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white">
            <BackIcon className="h-4 w-4" />
            {t("كل المشاريع", "All work")}
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <div className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-codely-cyan" />
                {t(project.eyebrow_ar, project.eyebrow_en)}
              </div>
              <h1 className="mt-5 text-5xl font-black md:text-7xl">{t(project.title_ar, project.title_en)}</h1>
              <p className="mt-6 text-base leading-8 text-slate-400">{t(project.summary_ar, project.summary_en)}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-[10px] font-bold text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
              {project.website ? (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-codely-cyan/30 bg-codely-cyan/10 px-5 py-3 text-xs font-black text-codely-cyan transition hover:border-codely-cyan/60 hover:bg-codely-cyan/15"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t("زيارة الموقع الرسمي", "Visit official website")}
                </a>
              ) : null}
            </div>

            <div className="panel overflow-hidden rounded-[30px]">
              <ProjectVisual project={project} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-codely grid gap-12 lg:grid-cols-[.48fr_1fr]">
          <div className="text-xs font-black uppercase tracking-[.18em] text-codely-cyan">01 / {t("المشكلة", "The challenge")}</div>
          <div>
            <h2 className="text-3xl font-black md:text-5xl">{t("ما الذي كان يحتاج حلًا؟", "What needed to be solved?")}</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">{t(project.challenge_ar, project.challenge_en)}</p>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-[#060919]">
        <div className="container-codely grid gap-12 lg:grid-cols-[.48fr_1fr]">
          <div className="text-xs font-black uppercase tracking-[.18em] text-codely-cyan">02 / {t("الحل", "The approach")}</div>
          <div>
            <h2 className="text-3xl font-black md:text-5xl">{t("كيف تم تشكيل المنتج؟", "How was the product shaped?")}</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">{t(project.solution_ar, project.solution_en)}</p>
            <div className="mt-9 grid gap-3 md:grid-cols-2">
              {t(project.highlights_ar, project.highlights_en).map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[.025] px-4 py-3.5 text-xs font-bold text-slate-300">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cyan-300/8 text-codely-cyan">
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
              <div className="text-xs font-black uppercase tracking-[.18em] text-codely-cyan">03 / {t("داخل المنتج", "Inside the product")}</div>
              <div>
                <h2 className="max-w-3xl text-3xl font-black md:text-5xl">
                  {t(project.galleryTitle_ar ?? "لقطات من المنتج", project.galleryTitle_en ?? "Product views")}
                </h2>
                {(project.galleryIntro_ar || project.galleryIntro_en) && (
                  <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">
                    {t(project.galleryIntro_ar ?? "", project.galleryIntro_en ?? "")}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {project.gallery.map((item, index) => (
                <figure
                  key={item.src}
                  className={`group overflow-hidden rounded-[28px] border border-white/10 bg-[#090d1e] ${index === 0 || index === 6 ? "md:col-span-2" : ""}`}
                >
                  <div className={`relative overflow-hidden bg-[#202427] ${index === 0 || index === 6 ? "aspect-[16/8.5]" : "aspect-[4/3]"}`}>
                    <Image
                      src={item.src}
                      alt={t(item.title_ar, item.title_en)}
                      fill
                      sizes={index === 0 || index === 6 ? "(max-width: 768px) 100vw, 85vw" : "(max-width: 768px) 100vw, 43vw"}
                      className="object-contain transition duration-500 group-hover:scale-[1.015]"
                    />
                  </div>
                  <figcaption className="grid gap-2 border-t border-white/8 p-5 md:grid-cols-[.45fr_1fr] md:gap-6 md:p-6">
                    <div className="text-sm font-black text-white">{t(item.title_ar, item.title_en)}</div>
                    <p className="text-xs leading-6 text-slate-400">{t(item.caption_ar, item.caption_en)}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className={project.gallery?.length ? "pb-20 md:pb-28" : "section-space"}>
        <div className="container-codely">
          <div className="rounded-[32px] border border-white/10 bg-white/[.025] p-8 md:p-12">
            <div className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-codely-cyan" />
              {t("مشروع مشابه؟", "Building something similar?")}
            </div>
            <div className="mt-4 flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <h2 className="max-w-2xl text-3xl font-black md:text-5xl">
                {t("احكِ لنا عن التشغيل والمشكلة، ونبدأ من هناك.", "Tell us about the workflow and the problem. We will start there.")}
              </h2>
              <Link href="/contact" className="shrink-0 rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#070b1f]">
                {t("ابدأ مشروعًا", "Start a project")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
