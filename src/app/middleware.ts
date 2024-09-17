// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/Sign-In", request.url));
  }

  try {
    // Verify the JWT
    jwt.verify(token.value, process.env.JWT_SECRET!);
    return NextResponse.next(); // Continue to the requested route
  } catch (error) {
    return NextResponse.redirect(new URL("/Sign-In", request.url));
  }
}

export const config = {
  matcher: ["/Student"], // Protect the /Student route
};
