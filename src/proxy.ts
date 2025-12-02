import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export async function proxy(req: NextRequest) {

    const { pathname } = req.nextUrl;
    const publicRoutes = ["/login", "/register", "/api/auth", "/favicon.ico", "/_next"];

    if (publicRoutes.some((path) => pathname.startsWith(path))) {
        return NextResponse.next();
    }

    const token = await getToken({ req, secret: process.env.AUTH_SECRET });
    console.log(token)
    console.log(req.url)
    if (!token) {
        const loginUrl = new URL("/login", req.url)
        loginUrl.searchParams.set("callbackUrl", req.url);
        return NextResponse.redirect(loginUrl)
    }
    return NextResponse.next();
  
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|api).*)',
}