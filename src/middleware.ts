import NextAuth from 'next-auth';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { authConfig } from './app/auth.config';

const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  const publicRoutes = ['/', '/login', '/api/auth'];
  if (publicRoutes.some((r) => (r === '/' ? pathname === '/' : pathname.startsWith(r)))) {
    return NextResponse.next();
  }

  const token = await auth();

  if (pathname.startsWith('/profile')) {
    if (!token?.user) {
      const loginUrl = new URL('/login', req.url);
      loginUrl.searchParams.set('callbackUrl', pathname + search);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/profile/:path*', '/login'],
};
