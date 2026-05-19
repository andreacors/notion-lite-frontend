import { NextResponse } from "next/server"; 
import type { NextRequest } from "next/server"; 
import { jwtVerify } from "jose"

export async function proxy(request: NextRequest) {

  const token = request.cookies.get('token')?.value;

  if(!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET)

  try {
    const { payload } = await jwtVerify(token, secret)
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/note/:path*']
}