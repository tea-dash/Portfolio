import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);
  if (pathname === '/resume.pdf') {
    return new NextResponse('Not Found', { status: 404 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/resume.pdf'],
};


