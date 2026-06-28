type ImageProxyLocale = "en" | "ru" | "zh";

const IMAGE_PROXY_MESSAGES: Record<
  ImageProxyLocale,
  {
    missingUrl: string;
    invalidUrl: string;
    unsupportedProtocol: string;
    fetchFailed: string;
    readFailed: string;
    emptyImage: string;
    unhandled: string;
  }
> = {
  en: {
    missingUrl: "Missing image URL parameter",
    invalidUrl: "Invalid image URL format",
    unsupportedProtocol: "Only HTTP and HTTPS protocols are supported",
    fetchFailed: "Failed to fetch image",
    readFailed: "Failed to read image data",
    emptyImage: "Image content is empty",
    unhandled: "Failed to process image request",
  },
  ru: {
    missingUrl: "Отсутствует параметр URL изображения",
    invalidUrl: "Некорректный формат URL изображения",
    unsupportedProtocol: "Поддерживаются только протоколы HTTP и HTTPS",
    fetchFailed: "Не удалось получить изображение",
    readFailed: "Не удалось прочитать данные изображения",
    emptyImage: "Содержимое изображения пустое",
    unhandled: "Не удалось обработать запрос изображения",
  },
  zh: {
    missingUrl: "缺少图片URL参数",
    invalidUrl: "图片URL格式不正确",
    unsupportedProtocol: "只支持HTTP和HTTPS协议",
    fetchFailed: "获取图片失败",
    readFailed: "读取图片内容失败",
    emptyImage: "图片内容为空",
    unhandled: "处理图片请求时出错",
  },
};

const resolveImageProxyLocale = (
  acceptLanguage: string | null | undefined
): ImageProxyLocale => {
  const normalized = acceptLanguage?.toLowerCase() ?? "";

  if (normalized.includes("ru")) {
    return "ru";
  }

  if (normalized.includes("zh")) {
    return "zh";
  }

  return "en";
};

export const getImageProxyMessages = (
  acceptLanguage: string | null | undefined
) => IMAGE_PROXY_MESSAGES[resolveImageProxyLocale(acceptLanguage)];

export const getImageProxyAcceptLanguage = (
  acceptLanguage: string | null | undefined
) => acceptLanguage?.trim() || "en-US,en;q=0.9";
