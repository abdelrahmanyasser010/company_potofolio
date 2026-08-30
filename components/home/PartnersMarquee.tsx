"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";
import { SectionHeading } from "@/components/common/SectionHeading";

export function PartnersMarquee() {
  const { t } = useLanguage();
  const steps = [
    ["01", t("نفهم", "Understand"), t("الهدف، المستخدم، التشغيل والقيود.", "Goals, users, workflows and constraints.")],
    ["02", t("نحدد", "Shape"), t("النطاق، الأولويات والتدفق قبل البناء.", "Scope, priorities and product flow before build.")],
    ["03", t("نبني", "Build"), t("واجهات، Backend وربط على مراحل قابلة للمراجعة.", "UI, backend and integrations in reviewable milestones.")],
    ["04", t("نطلق ونحسن", "Launch & improve"), t("اختبار، تسليم، ثم تحسينات مبنية على الاستخدام.", "Testing, handoff and improvements based on real use.")],
  ];

  return (
    <section className="section-space relative overflow-hidden bg-gradient-to-b from-transparent via-[#060919]/50 to-transparent">
      <div className="container-codely">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <SectionHeading
            align="center"
            eyebrow={t("طريقة العمل", "Process")}
            title={t("من الفكرة إلى نسخة تعمل — بخطوات مفهومة.", "From an idea to working software — without a black box.")}
          />
        </motion.div>

        <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-[8%] right-[8%] top-[25px] hidden h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent lg:block" />

          {steps.map(([n, a, b], i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.035] to-white/[0.01] p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/35 hover:shadow-[0_16px_45px_rgba(46,220,255,0.09)]"
            >
              <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-cyan-300/30 bg-[#071027] text-xs font-bold text-codely-cyan transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-300 group-hover:shadow-[0_0_20px_rgba(46,220,255,0.35)]">
                {n}
              </span>
              <h3 className="mt-6 text-base font-bold text-white transition-colors duration-200 group-hover:text-cyan-200">
                {a}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {b}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
