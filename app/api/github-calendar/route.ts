import { NextResponse } from "next/server";

export const revalidate = 3600; // cache for 1 hour (ISR)

export async function GET() {
  try {
    const res = await fetch(
      "https://github-contributions-api.jogruber.de/v4/sravan2808?y=last",
      {
        next: { revalidate: 3600 }, // Next.js fetch cache for 1 hour
      }
    );

    if (!res.ok) throw new Error("Failed to fetch contributions");

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub contributions" },
      { status: 500 }
    );
  }
}