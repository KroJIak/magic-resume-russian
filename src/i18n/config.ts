export const locales = ["zh", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export const localeNames: Record<Locale, string> = {
  zh: "中文",
  en: "English",
  ru: "Русский",
};

export const localeTags: Record<Locale, string> = {
  zh: "zh_CN",
  en: "en_US",
  ru: "ru_RU",
};

export const localeContentLanguages: Record<Locale, string> = {
  zh: "Chinese",
  en: "English",
  ru: "Russian",
};

export const getAlternateLocales = (locale: Locale): Locale[] =>
  locales.filter((entry) => entry !== locale) as Locale[];
