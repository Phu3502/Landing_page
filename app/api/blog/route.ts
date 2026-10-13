import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

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

    const data = await response.json();
    const posts = (Array.isArray(data.posts) ? data.posts : []).map((post) => ({
      ...post,
      media: Array.isArray(post.media)
        ? post.media.map((item) => ({
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
