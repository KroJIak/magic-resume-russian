import { createFileRoute, notFound } from "@tanstack/react-router";
import LandingPage from "@/app/(public)/[locale]/page";
import {
  defaultLocale,
  getAlternateLocales,
  localeTags,
  locales,
  type Locale,
} from "@/i18n/config";
import { messagesByLocale } from "@/i18n/messages";

const SEO_BASE_URL = "https://magicv.art";

function resolveLocale(rawLocale: string): Locale {
  if (locales.includes(rawLocale as Locale)) {
    return rawLocale as Locale;
  }
  return defaultLocale;
}

function getLocaleSeo(locale: Locale) {
  const messages = messagesByLocale[locale];
  const title = `${messages.common.title} - ${messages.common.subtitle}`;
  const description = messages.common.description;
  const localeTag = localeTags[locale];
  const canonical = `${SEO_BASE_URL}/${locale}`;
  const alternateLocales = getAlternateLocales(locale);

  return {
    title,
    description,
    localeTag,
    canonical,
    alternateLocales
  };
}

export const Route = createFileRoute("/$locale")({
  head: ({ params }) => {
    const locale = resolveLocale(params.locale);
    const seo = getLocaleSeo(locale);

    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { name: "robots", content: "index,follow" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Magic Resume" },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:locale", content: seo.localeTag },
        { property: "og:url", content: seo.canonical },
        { property: "og:image", content: `${SEO_BASE_URL}/web-shot.png` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.description },
        { name: "twitter:image", content: `${SEO_BASE_URL}/web-shot.png` }
      ],
      links: [
        { rel: "canonical", href: seo.canonical },
        { rel: "alternate", hrefLang: locale, href: seo.canonical },
        ...seo.alternateLocales.map((alternateLocale) => ({
          rel: "alternate" as const,
          hrefLang: alternateLocale,
          href: `${SEO_BASE_URL}/${alternateLocale}`
        })),
        { rel: "alternate", hrefLang: "x-default", href: `${SEO_BASE_URL}/zh` }
      ]
    };
  },
  component: LocaleLandingPage
});

function LocaleLandingPage() {
  const { locale } = Route.useParams();

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  return <LandingPage />;
}
