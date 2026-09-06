import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { arabic } from "./translations";

export type Lang = "ar" | "en";

const STORAGE_KEY = "egycalorie-lang";

type I18nValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  setLang: (lang: Lang) => void;
  t: (text: string) => string;
};

const I18nContext = createContext<I18nValue>({
  lang: "ar",
  dir: "rtl",
  setLang: () => {},
  t: (text) => arabic[text] ?? text,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ar") setLangState(stored);
  }, []);

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      setLang,
      t: (text: string) => (lang === "ar" ? (arabic[text] ?? text) : text),
    }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

/** Language switch button. Shows the language you can switch to. */
export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
      className={
        className ??
        "rounded-full border border-border px-3 py-1.5 text-xs font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      }
    >
      {lang === "ar" ? "EN" : "ع"}
    </button>
  );
}
