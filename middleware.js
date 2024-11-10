import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(req) {
  const cookieStore = cookies();
  const token = cookieStore.get('jwt');

  if (!token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/signup',
    '/dashboard/:path*',
    '/new-post/:path*',
    '/edit-post/:path*',
    '/emails/verify-email/:path*'
  ],
};
