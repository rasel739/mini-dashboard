import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { authConfig } from './auth.config';

export const { auth, handlers, signIn, signOut } = NextAuth({
  debug: process.env.NODE_ENV !== 'production',

  session: { strategy: 'jwt' },

  ...authConfig,

  providers: [
    Google({
      clientId: process.env.AUTH_WEBAPP_GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.AUTH_WEBAPP_GOOGLE_CLIENT_SECRET ?? '',
      async profile(profile) {
        return { ...profile };
      },
    }),
  ],

  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
});
