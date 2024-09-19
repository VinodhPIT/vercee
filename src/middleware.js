

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// Paths that require authentication
const requireAuth = ["/analytics/dashboard", "/analytics/customer", "/analytics/offer", "/analytics/artist"];

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  console.log(`Middleware triggered for path: ${pathname}`);

  // Check if the requested path requires authentication
  if (requireAuth.some((path) => pathname.startsWith(path))) {
    console.log(`Path requires authentication: ${pathname}`);
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // If no token is found, redirect to the login page
    if (!token) {
      console.log(`No token found. Redirecting to login.`);
      const url = new URL(`/analytics/login`, request.url);
      return NextResponse.redirect(url);
    }
  } else {
    console.log(`Path does not require authentication: ${pathname}`);
  }

  return NextResponse.next();
}

// Limit middleware to only the analytics routes
export const config = {
  matcher: ["/analytics/:path*"],
};

