import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname == "/posts") {
    return NextResponse.rewrite(new URL("/", request.url));
  }
  return NextResponse.next();
}
