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
    <section className="border-y border-white/10 bg-white/[.015] backdrop-blur-sm">
      <div className="container-codely">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid gap-0 py-3 md:grid-cols-2 lg:grid-cols-4"
        >
          {items.map(([a, b], i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group px-6 py-8 transition-colors duration-300 hover:bg-white/[0.025] ${
                i > 0 ? "border-t border-white/8 md:border-t-0 md:border-s" : ""
              }`}
            >
              <div className="mb-4 grid h-9 w-9 place-items-center rounded-xl bg-cyan-400/[0.08] text-codely-cyan transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400/[0.15] group-hover:shadow-[0_0_15px_rgba(46,220,255,0.25)]">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-black text-white transition-colors duration-200 group-hover:text-cyan-200">
                {a}
              </h3>
              <p className="mt-2 text-xs leading-6 text-slate-400">
                {b}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
