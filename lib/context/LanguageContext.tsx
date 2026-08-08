"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "ar" | "en";
interface LanguageContextType {
  lang: Language;
  dir: "rtl" | "ltr";
  toggleLanguage: () => void;
  t: <T>(arText: T, enText: T) => T;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ar",
  dir: "rtl",
  toggleLanguage: () => undefined,
  t: (ar) => ar,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("ar");

  useEffect(() => {
    const saved = localStorage.getItem("codely_lang") as Language | null;
    if (saved === "ar" || saved === "en") setLang(saved);
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem("codely_lang", lang);
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLanguage: () => setLang((v) => (v === "ar" ? "en" : "ar")), t: (ar, en) => (lang === "ar" ? ar : en) }}>
      <div dir={dir} className={lang === "en" ? "font-en" : undefined}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
