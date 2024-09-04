// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose'
import conf from './app/config';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || conf.jwt_secret);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  console.log(token)
  if (!token) {
    console.log('no')
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Verify the JWT token
    const {payload} = await jwtVerify(token, JWT_SECRET);
    let role = payload.role;
    // Example: You can also check user roles here

    if (role !== 'admin') {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }

    // If everything is fine, allow the request to continue
    return NextResponse.next();
  } catch (error) {
    // Redirect to login if the token is invalid or expired
    console.log(error)
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Apply the middleware to specific routes using the matcher config
export const config = {
  matcher: ['/admin','/admin/create', '/admin/edit/[id]'], // Apply to these routes
};
