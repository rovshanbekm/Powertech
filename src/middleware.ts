import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { defineRouting } from "next-intl/routing";

const routing = defineRouting({
  locales: ["ru", "uz"],
  defaultLocale: "ru",
});

const intlMiddleware = createMiddleware(routing);

const locales = ["ru", "uz"] as const;
const defaultLocale = "ru";

function detectLocale(req: NextRequest): (typeof locales)[number] {
  const h = req.headers.get("accept-language");
  if (!h) return defaultLocale;

  const list = h
    .split(",")
    .map((s) => {
      const [code, q = "q=1"] = s.trim().split(";");
      return { code: code.toLowerCase().split("-")[0], q: parseFloat(q.replace("q=", "")) };
    })
    .sort((a, b) => b.q - a.q);

  for (const { code } of list) {
    if (code === "ru") return "ru";
    if (code === "uz") return "uz";
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  // debug: should print in terminal
  // console.log("MIDDLEWARE HIT:", req.nextUrl.pathname);

  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    const locale = detectLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
