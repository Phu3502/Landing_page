import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function addMediaUrls(value: unknown, coreMathUrl: string): unknown {
  if (Array.isArray(value)) return value.map((item) => addMediaUrls(item, coreMathUrl));
  if (!isRecord(value)) return value;
  const result: Record<string, unknown> = {};
  for (const [key, item] of Object.entries(value)) result[key] = addMediaUrls(item, coreMathUrl);
  if (typeof value.imageId === "string") {
    result.imageUrl = coreMathUrl + "/api/landing-content/media/" + encodeURIComponent(value.imageId);
  }
  return result;
}

export async function GET() {
  const configuredUrl = process.env.COREMATH_API_URL
    || (process.env.NODE_ENV !== "production" ? "http://localhost:3001" : "");
  const coreMathUrl = configuredUrl.replace(/\/$/, "");
  if (!coreMathUrl) return NextResponse.json({ heroSlides: [], homeContent: null });

  try {
    const response = await fetch(coreMathUrl + "/api/landing-content", { cache: "no-store" });
    if (!response.ok) return NextResponse.json({ heroSlides: [], homeContent: null });
    const data: unknown = await response.json();
    if (typeof data !== "object" || data === null || !("heroSlides" in data) || !Array.isArray(data.heroSlides)) {
      return NextResponse.json({ heroSlides: [], homeContent: null });
    }
    const heroSlides = data.heroSlides.map((slide: unknown) => {
      if (!isRecord(slide)) return slide;
      const imageId = "imageId" in slide && typeof slide.imageId === "string" ? slide.imageId : null;
      return {
        ...slide,
        imageUrl: imageId ? coreMathUrl + "/api/landing-content/media/" + encodeURIComponent(imageId) : "",
      };
    });
    return NextResponse.json({ heroSlides, homeContent: addMediaUrls("homeContent" in data ? data.homeContent : null, coreMathUrl) }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ heroSlides: [], homeContent: null });
  }
}
