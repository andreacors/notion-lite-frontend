import { NextResponse } from "next/server"; 
import type { NextRequest } from "next/server"; 
import { jwtVerify } from "jose"

export async function middleware(request: NextRequest) {

  const token = request.cookies.get('token')?.value;

  if(!token) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET)

  try {
    const { payload } = await jwtVerify(token, secret)
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

const config = {
  matcher: ['/note/:path*']
}