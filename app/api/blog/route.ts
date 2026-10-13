import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type BlogMedia = Record<string, unknown> & { id: string | number };
type BlogPost = Record<string, unknown> & { media?: BlogMedia[] };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function GET() {
  const configuredUrl = process.env.COREMATH_API_URL
    || (process.env.NODE_ENV !== "production" ? "http://localhost:3001" : "");
  const coreMathUrl = configuredUrl.replace(/\/$/, "");

  if (!coreMathUrl) {
    return NextResponse.json({ posts: [] });
  }

  try {
    const response = await fetch(`${coreMathUrl}/api/blog`, { cache: "no-store" });
    if (!response.ok) {
      return NextResponse.json({ posts: [] }, { status: response.status });
    }

    const data: unknown = await response.json();
    const rawPosts = isRecord(data) && Array.isArray(data.posts) ? data.posts : [];
    const posts = rawPosts.filter(isRecord).map((post): BlogPost => ({
      ...post,
      media: Array.isArray(post.media)
        ? post.media.filter((item): item is BlogMedia => isRecord(item) && (typeof item.id === "string" || typeof item.id === "number")).map((item) => ({
            ...item,
            url: `${coreMathUrl}/api/blog/media/${encodeURIComponent(item.id)}`,
          }))
        : [],
    }));

    return NextResponse.json({ posts }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ posts: [] }, { status: 502 });
  }
}
