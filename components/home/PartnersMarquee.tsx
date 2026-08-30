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
    <section className="section-space border-t border-white/10 bg-[#060919]">
      <div className="container-codely">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow={t("طريقة العمل", "Process")}
            title={t("من الفكرة إلى نسخة تعمل — بخطوات مفهومة.", "From an idea to working software — without a black box.")}
          />
        </motion.div>

        <div className="relative mt-14 grid gap-4 lg:grid-cols-4">
          <div className="absolute left-[8%] right-[8%] top-[25px] hidden h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent lg:block" />

          {steps.map(([n, a, b], i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl border border-white/8 bg-white/[.025] p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.045] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
            >
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-cyan-300/25 bg-[#071027] text-xs font-extrabold text-codely-cyan transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-300 group-hover:shadow-[0_0_20px_rgba(46,220,255,0.3)]">
                {n}
              </span>
              <h3 className="mt-7 text-lg font-extrabold text-white transition-colors duration-200 group-hover:text-cyan-200">
                {a}
              </h3>
              <p className="mt-2 text-xs leading-6 text-slate-400">
                {b}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
