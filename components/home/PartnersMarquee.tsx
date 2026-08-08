"use client";

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
  return <section className="section-space border-t border-white/10 bg-[#060919]"><div className="container-codely"><SectionHeading eyebrow={t("طريقة العمل", "Process")} title={t("من الفكرة إلى نسخة تعمل — بخطوات مفهومة.", "From an idea to working software — without a black box.")} /><div className="relative mt-12 grid gap-4 lg:grid-cols-4"><div className="absolute left-[8%] right-[8%] top-[25px] hidden h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent lg:block"/>{steps.map(([n,a,b])=><div key={n} className="relative rounded-2xl border border-white/8 bg-white/[.025] p-6"><span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-cyan-300/20 bg-[#071027] text-xs font-black text-codely-cyan">{n}</span><h3 className="mt-7 text-lg font-black">{a}</h3><p className="mt-2 text-xs leading-6 text-slate-500">{b}</p></div>)}</div></div></section>;
}
