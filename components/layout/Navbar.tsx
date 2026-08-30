"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Globe2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";

export function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const links = [
    ["/", t("الرئيسية", "Home")],
    ["/services", t("حلولنا", "Capabilities")],
    ["/portfolio", t("أعمالنا", "Work")],
    ["/about", t("عن Codely", "About")],
  ] as const;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/[.09] bg-[#050817]/92 shadow-[0_10px_50px_rgba(0,0,0,.35)] backdrop-blur-2xl"
          : "border-white/[.05] bg-[#050817]/80 backdrop-blur-xl"
      }`}
    >
      <div className="container-codely flex h-[78px] items-center justify-between gap-5">
        <Link href="/" className="focus-ring flex items-center group" aria-label="Codely home">
          <Image
            src="/codely-wordmark-transparent.png"
            alt="Codely"
            width={1125}
            height={390}
            priority
            className="h-[42px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-[46px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([href, label]) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`focus-ring relative rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                  active
                    ? "bg-white/[.09] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                    : "text-slate-400 hover:bg-white/[.04] hover:text-white"
                }`}
              >
                {label}
                {active && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={toggleLanguage}
            className="focus-ring inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[.025] px-4 text-xs font-bold text-slate-300 transition-all duration-200 hover:border-white/25 hover:bg-white/[.06] hover:text-white"
          >
            <Globe2 className="h-4 w-4 text-codely-cyan" /> {lang === "ar" ? "EN" : "عربي"}
          </button>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="focus-ring inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-[13px] font-bold text-[#070b1f] shadow-[0_4px_20px_rgba(255,255,255,.15)] transition hover:shadow-[0_8px_30px_rgba(255,255,255,.25)]"
            >
              {t("ابدأ مشروعك", "Start a project")} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="focus-ring h-10 rounded-full border border-white/10 px-3 text-xs font-bold text-slate-200"
          >
            {lang === "ar" ? "EN" : "AR"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white transition-colors hover:border-white/25"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-[#070b1f]/98 px-5 py-5 backdrop-blur-2xl lg:hidden shadow-2xl"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-2">
              {links.map(([href, label]) => {
                const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`rounded-2xl border px-4 py-3.5 text-sm font-bold transition-colors ${
                      active
                        ? "border-cyan-400/30 bg-cyan-400/[0.08] text-white"
                        : "border-white/8 bg-white/[.025] text-slate-200 hover:bg-white/[.05]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-2 rounded-2xl bg-white px-4 py-3.5 text-center text-sm font-bold text-[#070b1f] shadow-lg"
              >
                {t("ابدأ مشروعك", "Start a project")}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
