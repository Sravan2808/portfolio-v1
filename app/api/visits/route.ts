import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export async function GET() {
  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ error: "Missing Upstash env vars" }, { status: 500 });
  }
  try {
    const count = (await redis.get<number>("visits")) ?? 0;
    return NextResponse.json({ count });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function POST() {
  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ error: "Missing Upstash env vars" }, { status: 500 });
  }
  try {
    const count = await redis.incr("visits");
    return NextResponse.json({ count });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}