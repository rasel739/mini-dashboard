import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

const protectedRoutes = ['/profile'];

function isProtected(pathname: string) {
  return protectedRoutes.some((route) => pathname.startsWith(route));
}

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  if (!isProtected(pathname)) {
    return NextResponse.next();
  }

  try {
    const token = await getToken({ req, secret });

    if (!token) {
      const loginUrl = new URL('/login', req.url);
      const fullCallbackUrl = pathname + search;
      loginUrl.searchParams.set('callbackUrl', fullCallbackUrl);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('callbackUrl', pathname + search);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ['/profile'],
};
