"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";
import { FloatingCodeSymbols } from "./FloatingCodeSymbols";

export function HeroSection() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  return (
    <section className="hero-section relative overflow-hidden border-b border-white/[.08]">
      <div className="grid-bg absolute inset-0 opacity-45" />
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.13, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="hero-orb hero-orb-cyan"
      />
      <motion.div
        animate={{
          scale: [1.05, 0.95, 1.05],
          opacity: [0.09, 0.14, 0.09],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hero-orb hero-orb-violet"
      />

      <FloatingCodeSymbols />

      <div className="container-codely relative grid min-h-[720px] items-center gap-14 py-16 lg:grid-cols-[.93fr_1.07fr] lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="eyebrow">
            <span className="glow-dot h-1.5 w-1.5 rounded-full bg-codely-cyan" /> CODELY SOFTWARE STUDIO
          </motion.div>

          <motion.h1 variants={itemVariants} className="display-title mt-6 max-w-[760px] text-white">
            {t("نبني برمجيات وأنظمة", "We build software systems —")}{" "}
            <span className="codely-gradient-text">
              {t("تعتمد عليها الشركات.", "that businesses rely on.")}
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-7 max-w-[680px] text-[15px] leading-8 text-slate-300 md:text-[17px]">
            {t(
              "فريق هندسي متكامل لبناء منصات الويب، تطبيقات الجوال، وأنظمة إدارة الأعمال (ERP & POS) لمختلف القطاعات والأسواق (تجارة إلكترونية، لوجستيات، طبي، وغيرها). لا نستخدم قوالب جاهزة، بل نكتب كوداً نظيفاً ونبني بنية تحتية قوية تلبي احتياجات التشغيل الفعلية لشركتك.",
              "A complete engineering team for web platforms, mobile apps, and business systems across diverse markets (e-commerce, logistics, medical, etc). We don't use templates; we write clean code and build solid infrastructure tailored to your actual operational needs."
            )}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-9 flex flex-wrap items-center gap-3.5">
            <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.98 }}>
              <Link href="/contact" className="button-primary group">
                <span>{t("ناقش مشروعك معنا", "Discuss your project with us")}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.98 }}>
              <Link href="/portfolio" className="button-secondary group">
                <span>{t("استكشف أعمالنا", "Explore our work")}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100 text-slate-400 group-hover:text-cyan-300" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-slate-300">
            {[
              t("خبرة ممتدة لأكثر من 15 عاماً", "15+ years combined experience"),
              t("فريق متكامل بدون وسطاء", "Full-stack dedicated team"),
              t("كود نظيف وبنية قابلة للتوسع", "Built for high scalability"),
            ].map((x) => (
              <span key={x} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-cyan-300/10 text-codely-cyan">
                  <Check className="h-3 w-3" />
                </span>
                {x}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[650px] lg:mx-0"
        >
          <div className="absolute -inset-7 rounded-[48px] bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-violet-500/15 blur-3xl animate-pulse" />
          <div className="project-stage relative">
            <Link href="/portfolio/deliver-it" className="project-stage-main group transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
              <Image
                src="/projects/deliver-it/deliver-it-cover.webp"
                alt="Deliver It logistics operations platform"
                fill
                sizes="(max-width: 1024px) 90vw, 620px"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                priority
              />
              <span className="project-stage-label">
                <small>Enterprise Operations</small>
                <strong>Deliver It</strong>
              </span>
            </Link>

            <motion.div
              animate={{
                y: [-3, 4, -3],
                rotate: [1.5, 0.5, 1.5],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-1 z-10"
            >
              <Link href="/portfolio/tog-pos" className="project-stage-card relative block group transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Image
                  src="/projects/tog/tog-sunmi-v2s.webp"
                  alt="TOG POS system"
                  fill
                  sizes="260px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span>
                  <small>POS / Accounting</small>
                  <strong>TOG</strong>
                </span>
              </Link>
            </motion.div>

            <motion.div
              animate={{
                y: [3, -4, 3],
                rotate: [-1.5, -2.5, -1.5],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-1 top-[195px] z-20"
            >
              <Link href="/portfolio/gear" className="project-stage-card relative block group transition-all duration-300 hover:scale-105 hover:border-violet-400/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Image
                  src="/projects/gear/gear-cover.webp"
                  alt="Gear transportation platform"
                  fill
                  sizes="260px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span>
                  <small>Mobility Platform</small>
                  <strong>Gear</strong>
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
