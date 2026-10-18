"use client";

import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa6";

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Count each browser once; later visits only read the number.
    let seen = false;
    try {
      seen = localStorage.getItem("visited") === "1";
    } catch {}

    fetch("/api/visits", { method: seen ? "GET" : "POST" })
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        try {
          localStorage.setItem("visited", "1");
        } catch {}
      })
      .catch(() => {});
  }, []);

  if (count === null) return null;

return (
  <p
    className="flex items-center gap-1.5 text-xs text-neutral-400 sm:gap-2 sm:text-sm"
    title="Total visitors"
  >
    <FaRegEye aria-hidden="true" className="size-3.5 shrink-0 sm:size-4" />
    <span className="tabular-nums">{count.toLocaleString()}</span>
    <span className="sr-only">visitors</span>
  </p>
);}