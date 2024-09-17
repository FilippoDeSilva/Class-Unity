import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Validate the user's credentials here (e.g., check in database)
  const user = { id: 1, username }; // Example user object

  if (username === "validUser" && password === "validPassword") {
    // Create JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    // Set the token in an HTTP-only cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, // 1 hour
      path: "/",
    });

    return response;
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
