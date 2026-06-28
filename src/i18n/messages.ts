import type { Locale } from "./config";
import zhMessages from "@/i18n/locales/zh.json";
import enMessages from "@/i18n/locales/en.json";
import ruMessages from "@/i18n/locales/ru.json";

export type Messages = Record<string, any>;

export const messagesByLocale: Record<Locale, Messages> = {
  zh: zhMessages,
  en: enMessages,
  ru: ruMessages,
};

export const getMessage = (
  locale: Locale,
  path: string,
  fallback = ""
): string => {
  const value = path
    .split(".")
    .reduce<unknown>(
      (current, key) =>
        current && typeof current === "object"
          ? (current as Record<string, unknown>)[key]
          : undefined,
      messagesByLocale[locale]
    );

  return typeof value === "string" ? value : fallback;
};
