"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Globe2, Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";

export function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
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
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-white/[.09] bg-[#050817]/92 shadow-[0_10px_50px_rgba(0,0,0,.24)] backdrop-blur-2xl" : "border-white/[.05] bg-[#050817]/78 backdrop-blur-xl"}`}>
      <div className="container-codely flex h-[78px] items-center justify-between gap-5">
        <Link href="/" className="focus-ring flex items-center" aria-label="Codely home">
          <Image src="/codely-wordmark-transparent.png" alt="Codely" width={1125} height={390} priority className="h-[42px] w-auto object-contain sm:h-[46px]" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([href, label]) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return <Link key={href} href={href} className={`focus-ring rounded-full px-4 py-2 text-[13px] font-semibold transition ${active ? "bg-white/[.075] text-white" : "text-slate-400 hover:bg-white/[.035] hover:text-white"}`}>{label}</Link>;
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button onClick={toggleLanguage} className="focus-ring inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[.02] px-4 text-xs font-bold text-slate-300 transition hover:border-white/20 hover:bg-white/[.04] hover:text-white">
            <Globe2 className="h-4 w-4 text-codely-cyan" /> {lang === "ar" ? "EN" : "عربي"}
          </button>
          <Link href="/contact" className="focus-ring inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-[13px] font-black text-[#070b1f] transition hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(255,255,255,.12)]">
            {t("ابدأ مشروعك", "Start a project")} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button onClick={toggleLanguage} className="focus-ring h-10 rounded-full border border-white/10 px-3 text-xs font-bold text-slate-200">{lang === "ar" ? "EN" : "AR"}</button>
          <button onClick={() => setOpen(!open)} className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#070b1f]/98 px-5 py-5 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map(([href, label]) => <Link key={href} href={href} className="rounded-2xl border border-white/8 bg-white/[.025] px-4 py-3.5 text-sm font-bold text-slate-100">{label}</Link>)}
            <Link href="/contact" className="mt-1 rounded-2xl bg-white px-4 py-3.5 text-center text-sm font-black text-[#070b1f]">{t("ابدأ مشروعك", "Start a project")}</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
