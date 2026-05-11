import { NextRequest, NextResponse } from "next/server";

const ALLOWED_HOSTNAME_SUFFIX = ".r2.dev";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  if (!url) {
    return new NextResponse("Missing url", { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return new NextResponse("Invalid URL", { status: 400 });
  }

  if (!parsed.hostname.endsWith(ALLOWED_HOSTNAME_SUFFIX)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // In dev, some ISPs (e.g. Telkomsel) MITM HTTPS to *.r2.dev with their own
  // cert, which Node's fetch rejects. Redirect to the upstream URL so the
  // browser fetches directly using the system trust store.
  if (process.env.NODE_ENV === "development") {
    return NextResponse.redirect(url, 307);
  }

  let upstream: Response;
  try {
    upstream = await fetch(url);
  } catch {
    return new NextResponse("Failed to fetch upstream", { status: 502 });
  }
  if (!upstream.ok) {
    return new NextResponse("Upstream error", { status: upstream.status });
  }

  const contentType =
    upstream.headers.get("content-type") ?? "application/octet-stream";

  return new NextResponse(upstream.body, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400, immutable",
    },
  });
}
