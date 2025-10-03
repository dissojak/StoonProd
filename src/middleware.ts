import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

function isMainDomain(hostname: string) {
  return (
    hostname.startsWith("stoonproduction.local") ||
    hostname.startsWith("stoonproduction.com") ||
    hostname.startsWith("localhost")
  );
}

function isAdminSubdomain(hostname: string) {
  return hostname.startsWith("admin.");
}

function isAdminPath(pathname: string) {
  return pathname.startsWith("/admin");
}

function isAuthPath(pathname: string) {
  return pathname.startsWith("/auth");
}

// Block /auth and /admin on main domain → show Next.js 404
async function blockMainDomainPaths(mainDomain: boolean, pathname: string, req: NextRequest) {
  const isAdmin = isAdminPath(pathname);
  const isAuth = isAuthPath(pathname);
  if (mainDomain && isAdmin) {
    return NextResponse.rewrite(new URL("/404", req.url));
  }
  if (mainDomain && isAuth) {
    return NextResponse.rewrite(new URL("/404", req.url));
  }
  return null;
}

// Protect /admin on admin subdomain
async function protectAdminRoute(pathname: string, req: NextRequest) {
  if (isAdminPath(pathname)) {
    const token = await getToken({ req });
    if (!token || (token as any).role !== "admin") {
      const origin = req.nextUrl.origin; // admin subdomain origin
      return NextResponse.redirect(new URL("/", origin));
    }
  }
  return null;
}

// Block /auth on admin subdomain → show Next.js 404
async function blockAuthSubdomain(hostname: string, pathname: string, req: NextRequest) {
  if (isAdminSubdomain(hostname) && isAuthPath(pathname)) {
    return NextResponse.rewrite(new URL("/404", req.url));
  }
  return null;
}

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "";
  const mainDomain = isMainDomain(hostname);

  const mainBlock = await blockMainDomainPaths(mainDomain, url.pathname, req);
  if (mainBlock) return mainBlock;

  const authBlock = await blockAuthSubdomain(hostname, url.pathname, req);
  if (authBlock) return authBlock;

  const adminProtect = await protectAdminRoute(url.pathname, req);
  if (adminProtect) return adminProtect;

  // If root of admin subdomain → show login page
  if (isAdminSubdomain(hostname) && url.pathname === "/") {
    return NextResponse.rewrite(new URL("/auth/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/admin/:path*", "/"],
};
