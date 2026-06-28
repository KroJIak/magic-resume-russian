import { defaultLocale, Locale, locales } from "./config";
import { getLocaleFromPathname } from "./runtime";

const resolveLocale = (value: string | null | undefined): Locale | null =>
  locales.includes(value as Locale) ? (value as Locale) : null;

const getLocaleFromCookieHeader = (
  cookieHeader: string | null | undefined
): Locale | null => {
  if (!cookieHeader) {
    return null;
  }

  const locale = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("NEXT_LOCALE="))
    ?.split("=")[1];

  return resolveLocale(locale);
};

export const getRequestLocale = (
  request: Pick<Request, "headers"> & Partial<Pick<Request, "url">>
): Locale => {
  const cookieLocale = getLocaleFromCookieHeader(request.headers.get("cookie"));
  if (cookieLocale) {
    return cookieLocale;
  }

  const referer = request.headers.get("referer");
  if (referer) {
    try {
      const refererLocale = getLocaleFromPathname(new URL(referer).pathname);
      if (refererLocale) {
        return refererLocale;
      }
    } catch {
      // Ignore invalid referer URLs and fall through to default locale.
    }
  }

  return defaultLocale;
};
