"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Blocks, Braces, Globe2, Layers3, MessageSquareMore, ServerCog, ShieldCheck, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";
import { SectionHeading } from "@/components/common/SectionHeading";

export default function AboutPage() {
  const { t } = useLanguage();

  const markets = [
    ["EG", t("مصر", "Egypt")],
    ["SA", t("السعودية", "Saudi Arabia")],
    ["OM", t("عُمان", "Oman")],
    ["JO", t("الأردن", "Jordan")],
  ];

  const expertise = [
    ["POS", t("أنظمة نقاط البيع والمحاسبة", "POS & accounting systems")],
    ["ERP", t("أنظمة ERP وإدارة الأعمال", "ERP & business management")],
    ["Commerce", t("متاجر ومنصات بيع", "Commerce platforms")],
    ["Operations", t("لوحات تشغيل وإدارة", "Operations & admin systems")],
    ["Mobile", t("تطبيقات موبايل متعددة الأدوار", "Multi-role mobile apps")],
    ["APIs", t("Backend وIntegrations", "Backend & integrations")],
  ];

  const team = [
    [Smartphone, t("Mobile", "Mobile")],
    [Braces, "Frontend"],
    [ServerCog, "Backend"],
    [Layers3, "Full-stack"],
    [Blocks, "UI/UX · QA · DevOps"],
  ] as const;

  const principles = [
    [
      Braces,
      t("نفهم التشغيل قبل الكود", "Understand operations before code"),
      t(
        "نفهم المستخدمين، الصلاحيات، تدفق البيانات والقرارات اليومية قبل اختيار البنية أو التقنية.",
        "We understand users, permissions, data flow and day-to-day decisions before choosing architecture or technology."
      ),
    ],
    [
      Layers3,
      t("نبني أساسًا قابلًا للاستمرار", "Build for continuity"),
      t(
        "نظم ملفات واضحة، APIs منظمة ومكونات قابلة لإعادة الاستخدام حتى لا يصبح التطوير اللاحق عبئًا.",
        "Clear project structure, organized APIs and reusable components so future development remains manageable."
      ),
    ],
    [
      MessageSquareMore,
      t("التواصل جزء من التنفيذ", "Communication is part of delivery"),
      t(
        "نقسم العمل إلى مراحل قابلة للمراجعة، ونوضح القرارات والمخاطر بدل إخفائها حتى نهاية المشروع.",
        "We deliver in reviewable milestones and surface decisions and risks early instead of hiding them until the end."
      ),
    ],
    [
      ShieldCheck,
      t("نستهدف منتجًا يمكن الاعتماد عليه", "Reliability matters"),
      t(
        "نتعامل مع الأخطاء، الصلاحيات، الحالات الطرفية والأداء كجزء أساسي من المنتج وليس إضافات بعد التسليم.",
        "Errors, permissions, edge cases and performance are treated as product fundamentals, not post-launch extras."
      ),
    ],
  ] as const;

  return (
    <div>
      <section className="about-hero border-b border-white/[.08]">
        <div className="container-codely grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.08fr_.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="eyebrow">
              <span className="glow-dot h-1.5 w-1.5 rounded-full bg-codely-cyan" />
              ABOUT CODELY
            </div>
            <h1 className="mt-6 max-w-4xl text-balance text-3xl font-extrabold leading-[1.38] text-white sm:text-4xl md:text-5xl lg:text-6xl md:leading-[1.3] lg:leading-[1.26]">
              {t(
                "مجموعة متكاملة من المطورين، بخبرات مجمعة تتجاوز 15 عامًا.",
                "A complete software team with more than 15 years of combined experience."
              )}
            </h1>
            <p className="mt-7 max-w-3xl text-[15px] leading-8 text-slate-300 md:text-[17px]">
              {t(
                "Codely تجمع تخصصات Frontend وBackend وMobile وFull‑stack ومعها خبرات UI/UX وQA وDevOps حسب احتياج المشروع. عملنا على منتجات وأنظمة في السوق المصري والسعودي والعُماني والأردني، من POS والمتاجر وERP إلى منصات الإدارة والتشغيل واللوجستيات والحجز والخدمات.",
                "Codely brings together Frontend, Backend, Mobile and Full-stack developers, with UI/UX, QA and DevOps capabilities depending on the project. Our work spans Egypt, Saudi Arabia, Oman and Jordan — from POS, commerce and ERP to operations, logistics, booking and service platforms."
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {team.map(([Icon, label]) => (
                <span key={label} className="capability-pill">
                  <Icon className="h-4 w-4 text-codely-cyan" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="about-logo-card shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          >
            <Image
              src="/codely-logo.jpg"
              alt="Codely — We Build. You Grow."
              width={700}
              height={700}
              className="h-full w-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-codely">
          <div className="grid gap-5 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="metric-card transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
            >
              <strong>15+</strong>
              <span>{t("سنة خبرات مجمعة داخل الفريق", "years of combined team experience")}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="metric-card transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
            >
              <strong>4+</strong>
              <span>{t("أسواق عربية عملنا عليها", "regional markets served")}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="metric-card transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
            >
              <strong>{t("متعدد", "Multi")}</strong>
              <span>{t("تقنيات ومنتجات وقطاعات تشغيل", "technology stacks and product domains")}</span>
            </motion.div>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="eyebrow">
                <Globe2 className="h-4 w-4" />
                {t("خبرة إقليمية", "Regional experience")}
              </div>
              <h2 className="mt-5 text-2xl font-extrabold leading-[1.38] text-white sm:text-3xl md:text-4xl md:leading-[1.35]">
                {t("نفهم اختلاف السوق، وليس فقط اختلاف اللغة.", "We account for market differences — not only language.")}
              </h2>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {markets.map(([code, name], idx) => (
                <motion.div
                  key={code}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="market-card transition-all duration-200 hover:border-cyan-400/30 hover:bg-white/[0.04]"
                >
                  <span>{code}</span>
                  <strong>{name}</strong>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <SectionHeading
              eyebrow={t("ما بنيناه", "What we have worked on")}
              title={t("خبرة عملية في أنظمة تشغيل وأعمال متنوعة.", "Practical experience across real business systems.")}
              body={t(
                "مشاريعنا ليست في قطاع واحد. بنينا وطورنا منتجات تتعامل مع البيع، المخزون، الفوترة، الشحن، الحجوزات، الصلاحيات، التقارير، التحصيلات والتكاملات الخارجية.",
                "Our work is not limited to one vertical. We have built products handling sales, inventory, invoicing, logistics, bookings, permissions, reporting, collections and external integrations."
              )}
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {expertise.map(([tag, label], idx) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="expertise-card transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)]"
                >
                  <span>{tag}</span>
                  <h3 className="text-white">{label}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/[.08] bg-[#060919]/70">
        <div className="container-codely">
          <SectionHeading
            eyebrow={t("طريقة التفكير", "How we work")}
            title={t("الاحتراف يبدأ من القرارات التي لا يراها المستخدم.", "Professional software is defined by the decisions users never see.")}
            body={t(
              "الواجهة مهمة، لكن الاستقرار والصلاحيات والبيانات والتعامل مع الحالات الحقيقية هي ما يجعل النظام قابلًا للتشغيل والنمو.",
              "UI matters, but stability, permissions, data integrity and real-world edge cases are what make software usable and scalable."
            )}
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-[30px] border border-white/10 bg-white/10 md:grid-cols-2">
            {principles.map(([Icon, a, b]) => (
              <div
                key={a}
                className="group bg-[#070b1c] p-8 transition-colors duration-300 hover:bg-[#0b122e] md:p-9"
              >
                <div className="mb-6 grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-codely-cyan transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-white transition-colors group-hover:text-cyan-200">
                  {a}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {b}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/portfolio" className="button-secondary inline-flex">
              {t("استكشف معرض الأعمال والدراسات الحية", "Explore our case studies")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
