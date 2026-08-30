"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";

export function StatsSection() {
  const { t } = useLanguage();
  const items = [
    [
      t("نطاق واضح قبل التنفيذ", "Clear scope before build"),
      t("نحدد ما الذي سيتم بناؤه وما الذي لن يتم بناؤه بدلًا من فتح المشروع بلا حدود.", "We define what is being built — and what is not — before development expands without control."),
    ],
    [
      t("مراجعة على مراحل", "Review by milestones"),
      t("ترى أجزاء تعمل وتراجعها أثناء التنفيذ بدل انتظار نهاية المشروع لاكتشاف المفاجآت.", "You review working parts during development instead of discovering surprises at the very end."),
    ],
    [
      t("كود قابل للاستمرار", "Maintainable foundations"),
      t("تنظيم واضح للمكونات والبيانات والـ APIs حتى يظل المنتج قابلًا للتطوير بعد الإطلاق.", "Clear structure for components, data and APIs so the product remains maintainable after launch."),
    ],
    [
      t("نواجه المشاكل بدل إخفائها", "Problems surfaced early"),
      t("لو في قرار تقني أو متطلب سيخلق مشكلة لاحقًا، نوضحه مبكرًا ونقترح البديل الأبسط.", "If a requirement or technical decision will create trouble later, we flag it early and propose the simpler path."),
    ],
  ];

  return (
    <section className="relative py-12 md:py-16">
      <div className="container-codely">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {items.map(([a, b], i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_12px_36px_rgba(46,220,255,0.08)]"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/[0.1] text-codely-cyan transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400/[0.2] group-hover:shadow-[0_0_20px_rgba(46,220,255,0.35)]">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <h3 className="text-base font-bold text-white transition-colors duration-200 group-hover:text-cyan-200">
                {a}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {b}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
