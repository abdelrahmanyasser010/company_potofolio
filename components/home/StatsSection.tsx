"use client";

import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";

export function StatsSection() {
  const { t } = useLanguage();
  const items = [
    [t("نطاق واضح قبل التنفيذ", "Clear scope before build"), t("نحدد ما الذي سيتم بناؤه وما الذي لن يتم بناؤه بدلًا من فتح المشروع بلا حدود.", "We define what is being built — and what is not — before development expands without control.")],
    [t("مراجعة على مراحل", "Review by milestones"), t("ترى أجزاء تعمل وتراجعها أثناء التنفيذ بدل انتظار نهاية المشروع لاكتشاف المفاجآت.", "You review working parts during development instead of discovering surprises at the very end.")],
    [t("كود قابل للاستمرار", "Maintainable foundations"), t("تنظيم واضح للمكونات والبيانات والـ APIs حتى يظل المنتج قابلًا للتطوير بعد الإطلاق.", "Clear structure for components, data and APIs so the product remains maintainable after launch.")],
    [t("نواجه المشاكل بدل إخفائها", "Problems surfaced early"), t("لو في قرار تقني أو متطلب سيخلق مشكلة لاحقًا، نوضحه مبكرًا ونقترح البديل الأبسط.", "If a requirement or technical decision will create trouble later, we flag it early and propose the simpler path.")],
  ];
  return <section className="border-y border-white/10 bg-white/[.018]"><div className="container-codely grid gap-0 py-3 md:grid-cols-2 lg:grid-cols-4">{items.map(([a,b],i)=><div key={a} className={`px-5 py-7 ${i>0?'border-t border-white/8 md:border-t-0 md:border-s':''}`}><CheckCircle2 className="mb-4 h-5 w-5 text-codely-cyan"/><h3 className="text-sm font-black text-white">{a}</h3><p className="mt-2 text-xs leading-6 text-slate-500">{b}</p></div>)}</div></section>;
}
