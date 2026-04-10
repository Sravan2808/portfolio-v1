"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

        <Link
          href={track.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex min-w-0 w-fit items-center gap-0.5 overflow-hidden text-secondary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-secondary after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 pb-0.5"
        >
          <span className="shrink-0">
            {track.title
              .replace(/\s*\(.*?\)\s*/g, "")
              .replace(/\s*\[.*?\]\s*/g, "")
              .trim()}
          </span>
          <span className="shrink-0"> · </span>
          <span className="min-w-0 truncate">{track.artist}</span>
        </Link>
      </p>
    </div>
  );
}
