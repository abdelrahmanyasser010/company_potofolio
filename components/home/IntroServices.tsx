"use client";

import { AppWindow, Blocks, LayoutDashboard, ServerCog, Smartphone, Wrench } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";
import { INITIAL_SERVICES } from "@/lib/data/initialData";
import { SectionHeading } from "@/components/common/SectionHeading";

const icons = {
  web: AppWindow,
  mobile: Smartphone,
  dashboard: LayoutDashboard,
  backend: ServerCog,
  systems: Blocks,
  rescue: Wrench,
};

export function IntroServices() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section className="section-space">
      <div className="container-codely">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow={t("قدرات الفريق", "Team capabilities")}
            title={t("من واجهة المستخدم إلى منطق التشغيل والـ Backend.", "From the interface to business logic and backend.")}
            body={t(
              "نغطي تخصصات المنتج الأساسية داخل فريق واحد، ونكوّن التشكيل المناسب حسب مرحلة المشروع وحجمه بدل تحميله Stack أو فريقًا أكبر من احتياجه.",
              "We cover the core product disciplines in one team and shape the right setup around product stage and scope — without forcing an oversized stack or team."
            )}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3"
        >
          {INITIAL_SERVICES.map((s) => {
            const Icon = icons[s.icon];
            return (
              <motion.article
                key={s.id}
                variants={cardVariants}
                className="group relative bg-[#070b1c] p-7 transition-all duration-300 hover:bg-[#0b122f] hover:z-10"
              >
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[.04] text-codely-cyan transition-all duration-300 group-hover:scale-110 group-hover:border-codely-cyan/40 group-hover:bg-cyan-400/[0.08] group-hover:shadow-[0_0_25px_rgba(46,220,255,0.2)]">
                  <Icon className="h-5 w-5 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-extrabold text-white transition-colors duration-200 group-hover:text-cyan-200">
                  {t(s.title_ar, s.title_en)}
                </h3>
                <p className="mt-3 min-h-[76px] text-sm leading-7 text-slate-400">
                  {t(s.description_ar, s.description_en)}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {t(s.deliverables_ar, s.deliverables_en).slice(0, 3).map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-white/8 bg-white/[.025] px-2.5 py-1 text-[10px] font-bold text-slate-400 transition-colors duration-200 group-hover:border-cyan-300/20 group-hover:text-slate-300"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-slate-300 transition-colors hover:text-codely-cyan"
          >
            <span>{t("استكشف نموذج الشراكة وآلية التطوير", "Discover our team workflow & partnership model")}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:rtl:-translate-x-1">⟵</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
