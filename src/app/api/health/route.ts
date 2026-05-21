import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const origin = request.headers.get("origin");

  const allowedOrigins = [
    "http://localhost:3000",
    "https://truyendex-khaki.vercel.app",
  ];

  const allowOrigin = allowedOrigins.includes(origin ?? "") ? origin! : "";

  return NextResponse.json(
    { status: "ok" },
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": allowOrigin,
        "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
        "Access-Control-Allow-Headers":
          "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
      },
    },
  );
}
