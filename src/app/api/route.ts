import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  console.log("🚀 ~ file: route.ts:5 ~ GET ~ url:", searchParams.get("audio"));
  const fileName = searchParams.get("audio");
  return await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}tracks/${fileName}`
  );
}
