import { NextResponse } from "next/server";

const API_KEY = process.env.LASTFM_API_KEY!;
const USERNAME = "Sravan2808";

export async function GET() {
  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`
    );

    const data = await res.json();

    // ✅ safety check
    if (!data?.recenttracks?.track) {
      return NextResponse.json(null);
    }

    // ✅ handle both array & object cases
    const tracks = Array.isArray(data.recenttracks.track)
      ? data.recenttracks.track
      : [data.recenttracks.track];

    if (!tracks.length) {
      return NextResponse.json(null);
    }

    const track = tracks[0];

    return NextResponse.json({
      title: track.name,
      artist: track.artist["#text"],
      link: track.url,
    });
  } catch (err) {
    console.error("LastFM error:", err);
    return NextResponse.json(null);
  }
}