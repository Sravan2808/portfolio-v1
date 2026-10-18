import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

// Reads UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN from your env vars.
const redis = Redis.fromEnv();

export const dynamic = "force-dynamic";

export async function GET() {
  const count = (await redis.get<number>("visits")) ?? 0;
  return NextResponse.json({ count });
}

export async function POST() {
  const count = await redis.incr("visits");
  return NextResponse.json({ count });
}