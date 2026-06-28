import { createFileRoute } from "@tanstack/react-router";
import {
  getImageProxyAcceptLanguage,
  getImageProxyMessages
} from "@/lib/server/imageProxyMessages";

export const Route = createFileRoute("/api/proxy/image")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          const { searchParams } = new URL(request.url);
          const imageUrl = searchParams.get("url");
          const acceptLanguage = request.headers.get("accept-language");
          const messages = getImageProxyMessages(acceptLanguage);

          if (!imageUrl) {
            console.error(messages.missingUrl);
            return Response.json({ error: messages.missingUrl }, { status: 400 });
          }

          let parsedUrl: URL;
          try {
            parsedUrl = new URL(imageUrl);
          } catch (_error) {
            console.error(`${messages.invalidUrl}: ${imageUrl}`);
            return Response.json({ error: messages.invalidUrl }, { status: 400 });
          }

          if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
            console.error(`${messages.unsupportedProtocol}: ${parsedUrl.protocol}`);
            return Response.json({ error: messages.unsupportedProtocol }, { status: 400 });
          }

          let response: Response;
          try {
            response = await fetch(imageUrl, {
              headers: {
                "User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
                "Accept-Language": getImageProxyAcceptLanguage(acceptLanguage),
                Referer: parsedUrl.origin
              }
            });
          } catch (error: any) {
            const detail = error.message || "Unknown error";
            console.error(`${messages.fetchFailed}: ${detail}`);
            return Response.json({ error: `${messages.fetchFailed}: ${detail}` }, { status: 500 });
          }

          if (!response.ok) {
            const detail = `${response.status} ${response.statusText}`;
            console.error(`${messages.fetchFailed}: ${detail}`);
            return Response.json({ error: `${messages.fetchFailed}: ${detail}` }, { status: response.status });
          }

          let imageBuffer: ArrayBuffer;
          try {
            imageBuffer = await response.arrayBuffer();
          } catch (error: any) {
            const detail = error.message || "Unknown error";
            console.error(`${messages.readFailed}: ${detail}`);
            return Response.json({ error: `${messages.readFailed}: ${detail}` }, { status: 500 });
          }

          if (imageBuffer.byteLength === 0) {
            console.error(messages.emptyImage);
            return Response.json({ error: messages.emptyImage }, { status: 400 });
          }

          const contentType = response.headers.get("content-type") || "image/jpeg";

          return new Response(imageBuffer, {
            headers: {
              "Content-Type": contentType,
              "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
              Pragma: "no-cache",
              Expires: "0",
              "Surrogate-Control": "no-store",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET, OPTIONS",
              "Access-Control-Allow-Headers": "Content-Type"
            }
          });
        } catch (error: any) {
          const messages = getImageProxyMessages(
            request.headers.get("accept-language")
          );
          const detail = error.message || "Unknown error";
          console.error(`${messages.unhandled}:`, error);
          return Response.json({ error: `${messages.unhandled}: ${detail}` }, { status: 500 });
        }
      }
    }
  }
});
