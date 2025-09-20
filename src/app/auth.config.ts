import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }) {
      const { nextUrl } = request;
      const pathname = nextUrl?.pathname ?? '/';
      const isLoggedIn = !!auth?.user;

      if (pathname.startsWith('/profile')) {
        return isLoggedIn;
      }
      if (pathname === '/login' && isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
