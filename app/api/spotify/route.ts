import { NextResponse } from "next/server";

const API_KEY = process.env.LASTFM_API_KEY!;
const USERNAME = "Sravan2808";

export async function GET() {
  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`
    );

    const data = await res.json();

    if (!data?.recenttracks?.track) {
      return NextResponse.json(null);
    }

    const tracks = Array.isArray(data.recenttracks.track)
      ? data.recenttracks.track
      : [data.recenttracks.track];

    if (!tracks.length) {
      return NextResponse.json(null);
    }

    const track = tracks[0];

    // ✅ Clean title (remove brackets)
    const cleanTitle = track.name.replace(/\s*\(.*?\)\s*/g, "").trim();

    // ✅ Create Spotify search URL
    const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(
      `${cleanTitle} ${track.artist["#text"]}`
    )}`;

    return NextResponse.json({
      title: cleanTitle,
      artist: track.artist["#text"],
      link: spotifyUrl, // 🔥 changed here
    });
  } catch (err) {
    console.error("LastFM error:", err);
    return NextResponse.json(null);
  }
}