"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Track {
  title: string;
  artist: string;
  link: string;
}

export default function LastPlayed() {
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/spotify")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setTrack(data);
        }
      })
      .catch(() => null)
      .finally(() => setLoading(false));
  }, []);

  // 🔄 Loading state
  if (loading) {
    return (
      <p className="text-sm text-muted-foreground mt-2">Loading music... 🎧</p>
    );
  }

  // ❌ No data
  if (!track) {
    return (
      <p className="text-sm text-muted-foreground mt-2">
        Not playing anything right now 🎧
      </p>
    );
  }

  // ✅ Success UI
  return (
    <div className="flex items-center gap-3 mt-2">
      <p className="flex min-w-0 flex-1 items-center gap-1.5 text-sm text-muted-foreground">
        <Image
          src="/spotify.svg"
          alt="Spotify"
          width={16}
          height={16}
          className="shrink-0"
        />

        <span className="shrink-0 font-medium text-secondary">Last played</span>

        <span className="shrink-0"> — </span>

        <a
          href={track.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 flex-1 items-center gap-0.5 overflow-hidden text-secondary underline-offset-2 hover:underline"
        >
          <span className="shrink-0">
            {track.title.replace(/\s*\(.*?\)\s*/g, "").trim()}
          </span>
          <span className="shrink-0"> · </span>
          <span className="min-w-0 truncate">{track.artist}</span>
        </a>
      </p>
    </div>
  );
}
