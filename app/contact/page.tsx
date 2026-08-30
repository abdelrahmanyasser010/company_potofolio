"use client";

import { FormEvent, useMemo, useState } from "react";
import { Check, Copy, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";
import { COMPANY_INFO } from "@/lib/data/initialData";

const projectTypes = [
  ["new-product", "منتج جديد", "New product"],
  ["mobile", "تطبيق موبايل", "Mobile app"],
  ["web", "منصة / موقع", "Web platform"],
  ["dashboard", "لوحة تحكم / نظام إدارة", "Dashboard / admin"],
  ["pos-erp", "POS / ERP", "POS / ERP"],
  ["existing", "تطوير مشروع قائم", "Existing product"],
] as const;

const stages = [
  ["idea", "فكرة", "Idea"],
  ["design", "يوجد تصميم", "Design ready"],
  ["development", "قيد التطوير", "In development"],
  ["live", "موجود ويعمل", "Already live"],
  ["stuck", "محتاج إصلاح", "Needs rescue"],
] as const;

export default function ContactPage() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "new-product",
    stage: "idea",
    message: "",
  });

  const message = useMemo(() => {
    const type = projectTypes.find((x) => x[0] === form.type);
    const stage = stages.find((x) => x[0] === form.stage);
    return `Codely Project Inquiry\n\nName: ${form.name}\nCompany: ${form.company || "-"}\nEmail: ${form.email}\nPhone / WhatsApp: ${form.phone}\nProject type: ${type?.[1] || form.type}\nCurrent stage: ${stage?.[1] || form.stage}\n\nProject details:\n${form.message}`;
  }, [form]);

  const submitEmail = (e?: FormEvent) => {
    e?.preventDefault();
    const subject = encodeURIComponent(`Codely project inquiry — ${form.name || "New project"}`);
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${encodeURIComponent(message)}`;
  };

  const submitWhatsApp = () => {
    const num = COMPANY_INFO.whatsapp || "201023817658";
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const field = "form-field";
  const valid = Boolean(form.name.trim() && form.email.trim() && form.phone.trim() && form.message.trim());

  return (
    <div>
      <section className="contact-hero border-b border-white/[.08]">
        <div className="container-codely py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <div className="eyebrow">
              <span className="glow-dot h-1.5 w-1.5 rounded-full bg-codely-cyan" />
              {t("ابدأ مشروعك", "Start a project")}
            </div>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.12] text-white md:text-6xl">
              {t("شاركنا متطلبات مشروعك، وسنحدد معك الخطة الهندسية والتنفيذ.", "Share your project requirements, and we will plan the execution together.")}
            </h1>
            <p className="mt-6 max-w-3xl text-[15px] leading-8 text-slate-300 md:text-[17px]">
              {t(
                "لا يتطلب الأمر تفاصيل مكتملة فوراً؛ يمكنك مشاركة ملخص الفكرة، أو النظام الحالي، وسنقوم بدراستها وتحديد نطاق العمل المناسب.",
                "You do not need fully finalized details. Share an idea summary or existing architecture, and we will assess and define the right scope."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-codely grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={submitEmail}
            className="contact-form-card"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-white">
                {t("تفاصيل التواصل والمشروع", "Contact & project details")}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {t(
                  "يرجى إدخال البيانات الأساسية، وسيتواصل معك فريقنا الهندسي لتحديد الخطة التفصيلية.",
                  "Fill in the basic details, and our engineering team will reach out to set the execution roadmap."
                )}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="form-label">
                <span>{t("الاسم", "Name")}</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={field}
                  placeholder={t("اسمك", "Your name")}
                />
              </label>
              <label className="form-label">
                <span>{t("الشركة / النشاط", "Company / business")}</span>
                <input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={field}
                  placeholder={t("اختياري", "Optional")}
                />
              </label>
              <label className="form-label">
                <span>{t("البريد الإلكتروني", "Email")}</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                  placeholder="name@company.com"
                  dir="ltr"
                />
              </label>
              <label className="form-label">
                <span>{t("رقم الهاتف / WhatsApp", "Phone / WhatsApp")}</span>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={field}
                  placeholder={t("مثال: +20 102 381 7658", "Example: +20 102 381 7658")}
                  dir="ltr"
                />
              </label>
            </div>

            <fieldset className="mt-7">
              <legend className="form-label mb-3">{t("نوع المشروع", "Project type")}</legend>
              <div className="choice-grid">
                {projectTypes.map(([value, ar, en]) => (
                  <button
                    type="button"
                    key={value}
                    onClick={() => setForm({ ...form, type: value })}
                    className={`choice-button transition-all duration-200 ${
                      form.type === value ? "choice-button-active scale-[1.02]" : "hover:border-white/20"
                    }`}
                  >
                    {t(ar, en)}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-7">
              <legend className="form-label mb-3">{t("المرحلة الحالية", "Current stage")}</legend>
              <div className="choice-grid choice-grid-small">
                {stages.map(([value, ar, en]) => (
                  <button
                    type="button"
                    key={value}
                    onClick={() => setForm({ ...form, stage: value })}
                    className={`choice-button transition-all duration-200 ${
                      form.stage === value ? "choice-button-active scale-[1.02]" : "hover:border-white/20"
                    }`}
                  >
                    {t(ar, en)}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="form-label mt-7 block">
              <span>{t("احكِ لنا عن المشروع", "Tell us about the project")}</span>
              <textarea
                required
                rows={7}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${field} resize-none`}
                placeholder={t(
                  "ما الذي تريد بناءه؟ من سيستخدمه؟ وما أهم مشكلة تريد حلها؟",
                  "What are you building? Who will use it? What is the main problem you want solved?"
                )}
              />
            </label>

            <div className="mt-8 flex flex-wrap gap-3">
              {COMPANY_INFO.whatsapp && (
                <motion.button
                  whileHover={valid ? { scale: 1.03 } : {}}
                  whileTap={valid ? { scale: 0.98 } : {}}
                  disabled={!valid}
                  type="button"
                  onClick={submitWhatsApp}
                  className="button-whatsapp disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("إرسال عبر WhatsApp", "Send via WhatsApp")}
                </motion.button>
              )}
              <motion.button
                whileHover={valid ? { scale: 1.03 } : {}}
                whileTap={valid ? { scale: 0.98 } : {}}
                disabled={!valid}
                type="submit"
                className="button-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
                {t("إرسال بالبريد", "Send by email")}
              </motion.button>
            </div>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="contact-side-card">
              <div className="contact-icon">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-2xl font-extrabold text-white">{t("تواصل مباشر", "Direct contact")}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {t(
                  "لو عندك ملفات، Screenshots أو روابط، ابعتها مباشرة. نقدر نبدأ منها بدون عرض طويل.",
                  "If you already have files, screenshots or links, send them directly. We can start from there."
                )}
              </p>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="mt-6 block break-all text-base font-extrabold text-white transition-colors hover:text-codely-cyan"
                dir="ltr"
              >
                {COMPANY_INFO.email}
              </a>
              <button
                onClick={copyEmail}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-slate-300 transition hover:border-white/30 hover:text-white"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? t("تم النسخ", "Copied") : t("نسخ البريد", "Copy email")}
              </button>

              {COMPANY_INFO.phoneDisplay && (
                <a
                  href={`tel:${COMPANY_INFO.phoneDisplay.replace(/\s/g, "")}`}
                  className="mt-5 flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[.025] p-4 text-sm font-bold text-slate-200 transition hover:border-cyan-400/30"
                  dir="ltr"
                >
                  <Phone className="h-4 w-4 text-codely-cyan" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
              )}

              {COMPANY_INFO.whatsapp && (
                <button
                  onClick={submitWhatsApp}
                  className="button-whatsapp mt-3 w-full justify-center shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("افتح WhatsApp", "Open WhatsApp")}
                </button>
              )}
            </div>

            <div className="contact-side-card">
              <div className="text-xs font-extrabold uppercase tracking-[.16em] text-slate-400">
                {t("يفيدنا أن تذكر", "Helpful context")}
              </div>
              <div className="mt-5 space-y-3">
                {[
                  t("الهدف من المنتج", "Product goal"),
                  t("المستخدمين أو الأدوار", "Users and roles"),
                  t("ما الموجود حاليًا", "What already exists"),
                  t("أهم مشكلة أو أولوية", "Main problem or priority"),
                  t("موعد إطلاق مهم إن وجد", "Important launch date, if any"),
                ].map((x) => (
                  <div key={x} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-codely-cyan" />
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}
