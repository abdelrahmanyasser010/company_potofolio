"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { COMPANY_INFO } from "@/lib/data/initialData";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/[.08] bg-[#040713]">
      <div className="container-codely py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr_.85fr]">
          <div className="max-w-xl">
            <Image
              src="/codely-wordmark-transparent.png"
              alt="Codely"
              width={1125}
              height={390}
              className="mb-5 h-12 w-auto object-contain"
            />
            <p className="max-w-lg text-sm leading-7 text-slate-400">
              {t(
                "فريق برمجي متكامل بخبرات مجمعة تتجاوز 15 عامًا، نبني منتجات موبايل وويب وأنظمة POS وERP ولوحات تشغيل وحلول أعمال مخصصة.",
                "A complete software team with 15+ years of combined experience, building mobile and web products, POS, ERP, operational dashboards and custom business systems."
              )}
            </p>
            <div className="mt-5 text-xs font-bold tracking-wide text-slate-500">
              Egypt · Saudi Arabia · Oman · Jordan
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-[.18em] text-slate-500">
              {t("استكشف", "Explore")}
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <Link className="block transition-colors hover:text-codely-cyan" href="/services">
                {t("حلولنا", "Capabilities")}
              </Link>
              <Link className="block transition-colors hover:text-codely-cyan" href="/portfolio">
                {t("أعمالنا", "Work")}
              </Link>
              <Link className="block transition-colors hover:text-codely-cyan" href="/about">
                {t("عن Codely", "About")}
              </Link>
              <Link className="block transition-colors hover:text-codely-cyan" href="/contact">
                {t("ابدأ مشروعك", "Start a project")}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-[.18em] text-slate-500">
              {t("تواصل", "Contact")}
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="group flex items-center gap-2.5 font-bold text-white transition-colors hover:text-codely-cyan"
              >
                <Mail className="h-4 w-4 shrink-0 text-codely-cyan transition-transform duration-200 group-hover:scale-110" />
                <span dir="ltr" className="break-all">{COMPANY_INFO.email}</span>
              </a>

              {COMPANY_INFO.phoneDisplay && (
                <a
                  href={`tel:${COMPANY_INFO.phoneDisplay.replace(/\s/g, "")}`}
                  className="group flex items-center gap-2.5 font-bold text-slate-300 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-codely-cyan transition-transform duration-200 group-hover:scale-110" />
                  <span dir="ltr">{COMPANY_INFO.phoneDisplay}</span>
                </a>
              )}

              {COMPANY_INFO.whatsapp && (
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2.5 font-bold text-slate-300 transition-colors hover:text-emerald-400"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-emerald-400 transition-transform duration-200 group-hover:scale-110" />
                  <span>{t("واتساب", "WhatsApp")}</span>
                </a>
              )}

              <Link
                href="/contact"
                className="group mt-5 inline-flex items-center gap-2 font-black text-white transition-colors hover:text-codely-cyan"
              >
                <span>{t("احكِ لنا عن مشروعك", "Tell us about your project")}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[.08] pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span dir="ltr">© {new Date().getFullYear()} Codely.</span>
          <span dir="ltr" className="tracking-[.2em] font-bold text-slate-400">
            {COMPANY_INFO.tagline}
          </span>
        </div>
      </div>
    </footer>
  );
}
