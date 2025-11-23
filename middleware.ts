import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // Protect all routes except next internals and static assets
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
