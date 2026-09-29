import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";
export type L = { ar: string; en: string };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (v: L) => string; dir: "rtl" | "ltr" };
const I18n = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  useEffect(() => {
    const saved = localStorage.getItem("sd-lang");
    if (saved === "en" || saved === "ar") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("sd-lang", l);
  };
  return (
    <I18n.Provider value={{ lang, setLang, t: (v) => v[lang], dir: lang === "ar" ? "rtl" : "ltr" }}>
      {children}
    </I18n.Provider>
  );
}

export function useI18n() {
  const c = useContext(I18n);
  if (!c) throw new Error("useI18n outside provider");
  return c;
}
