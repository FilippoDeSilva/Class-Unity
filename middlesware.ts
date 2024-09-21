// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import jwt from 'jsonwebtoken';

// const secret = process.env.JWT_SECRET;

// export function middleware(req: NextRequest) {
//   // Log to check if the middleware is being triggered
//   console.log('Middleware triggered for:', req.nextUrl.pathname);

//   // Get the token from cookies
//   const token = req.cookies.get('token')?.value;

//   // Log the token to debug if it's available
//   console.log('Token from cookies:', token);

//   // If no token is found, redirect to the sign-in page
//   if (!token) {
//     console.log('No token found. Redirecting to sign-in.');
//     return NextResponse.redirect(new URL('/sign-in', req.url));
//   }

//   // Ensure the JWT secret is defined
//   if (!secret) {
//     console.error('JWT_SECRET is not defined. Redirecting to sign-in.');
//     return NextResponse.redirect(new URL('/sign-in', req.url));
//   }

//   try {
//     // Verify the token
//     const decoded = jwt.verify(token, secret) as { role: string };
//     console.log('Token verified. User role:', decoded.role);

//     const { pathname } = req.nextUrl;

//     // Check route access based on roles
//     if (pathname.startsWith('/student') && decoded.role !== 'student') {
//       console.log('Unauthorized: Not a student. Redirecting to unauthorized.');
//       return NextResponse.redirect(new URL('/unauthorized', req.url));
//     }

//     if (pathname.startsWith('/instructor') && decoded.role !== 'instructor') {
//       console.log('Unauthorized: Not an instructor. Redirecting to unauthorized.');
//       return NextResponse.redirect(new URL('/unauthorized', req.url));
//     }

//     if (pathname.startsWith('/supervisor') && decoded.role !== 'supervisor') {
//       console.log('Unauthorized: Not a supervisor. Redirecting to unauthorized.');
//       return NextResponse.redirect(new URL('/unauthorized', req.url));
//     }

//     // If everything is fine, proceed
//     console.log(`Access granted to: ${pathname}`);
//     return NextResponse.next();
//   } catch (error) {
//     console.error('Invalid token:', error);
//     return NextResponse.redirect(new URL('/sign-in', req.url));
//   }
// }

// // Apply the middleware to specific routes
// export const config = {
//   matcher: ['/student/:path*', '/instructor/:path*', '/supervisor/:path*'],
// };
