"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";
import { COMPANY_INFO } from "@/lib/data/initialData";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="section-space">
      <div className="container-codely">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[36px] border border-cyan-300/20 bg-gradient-to-br from-blue-500/10 via-[#0a102d] to-violet-500/10 px-7 py-14 text-center shadow-[0_30px_100px_rgba(0,0,0,0.5)] md:px-12 md:py-20"
        >
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[90px] animate-pulse" />
          <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-violet-400/10 blur-[90px]" />

          <div className="relative mx-auto max-w-3xl">
            <div className="eyebrow justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-codely-cyan" />
              {COMPANY_INFO.tagline}
            </div>

            <h2 className="mt-5 text-balance text-4xl font-black leading-tight text-white md:text-6xl">
              {t("عندك فكرة جديدة أو نظام قائم يحتاج تطويرًا؟", "Starting something new or evolving an existing product?")}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              {t(
                "ابعث لنا ما لديك حاليًا: الفكرة، الـ screenshots، الكود أو المشكلة. نراجع الصورة أولًا ونحدد معك المسار الأنسب بدل عرض جاهز لا يناسب المشروع.",
                "Send what you have today: the idea, screenshots, code or the current problem. We review the real situation first and define the right path instead of forcing a predefined package."
              )}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="button-primary group shadow-[0_12px_35px_rgba(46,220,255,0.2)]"
                >
                  <span>{t("ابدأ المحادثة", "Start the conversation")}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>

              {COMPANY_INFO.whatsapp ? (
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="button-whatsapp shadow-[0_12px_35px_rgba(37,211,102,0.15)]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t("WhatsApp", "WhatsApp")}
                  </a>
                </motion.div>
              ) : (
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="button-secondary"
                  >
                    <Mail className="h-4 w-4 text-codely-cyan" />
                    {COMPANY_INFO.email}
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
