import { NextResponse, type NextRequest } from "next/server";
import { refreshAuthSession } from "./app/shared/auth/api/refresh-auth-session";
import {
  AUTH_ACCESS_TOKEN_COOKIE,
  AUTH_LOGIN_PAGE_PATH,
  AUTH_PROTECTED_PATHS,
  AUTH_REDIRECT_PARAM,
  AUTH_REFRESH_TOKEN_COOKIE,
} from "./app/shared/auth/constants/auth.constants";
import {
  clearAuthSessionCookies,
  setAuthSessionCookies,
} from "./app/shared/auth/helpers/auth-session-cookies";

const isProtectedPath = (pathname: string) => {
  return AUTH_PROTECTED_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));
};

const redirectToLogin = (request: NextRequest) => {
  const url = new URL(AUTH_LOGIN_PAGE_PATH, request.url);
  url.searchParams.set(AUTH_REDIRECT_PARAM, request.nextUrl.pathname + request.nextUrl.search);

  return NextResponse.redirect(url);
};

/**
 * Keeps the session alive: once the short-lived access cookie expires, the refresh token is
 * traded for a new pair before anything renders. Server Components cannot write cookies, so
 * this is the one place where refreshing can happen.
 */
export const proxy = async (request: NextRequest) => {
  const isProtected = isProtectedPath(request.nextUrl.pathname);
  const refreshToken = request.cookies.get(AUTH_REFRESH_TOKEN_COOKIE)?.value;

  if (request.cookies.has(AUTH_ACCESS_TOKEN_COOKIE) || !refreshToken) {
    return isProtected && !refreshToken ? redirectToLogin(request) : NextResponse.next();
  }

  const tokens = await refreshAuthSession(refreshToken, request.headers.get("user-agent"));

  if (!tokens) {
    const response = isProtected ? redirectToLogin(request) : NextResponse.next();
    clearAuthSessionCookies(response.cookies);
    return response;
  }

  // Updated on the request so this render already sees them, and on the response for the browser.
  request.cookies.set(AUTH_ACCESS_TOKEN_COOKIE, tokens.accessToken);
  request.cookies.set(AUTH_REFRESH_TOKEN_COOKIE, tokens.refreshToken);

  const response = NextResponse.next({ request: { headers: request.headers } });
  setAuthSessionCookies(response.cookies, tokens);

  return response;
};

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.[\\w]+$).*)"],
};
