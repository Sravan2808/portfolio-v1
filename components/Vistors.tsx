"use client";
import { useEffect, useState } from "react";

function formatVisitors(num: number) {
  if (num >= 100000) {
    return (num / 100000).toFixed(num % 100000 === 0 ? 0 : 1) + "L";
  }

  if (num >= 1000) {
    return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
  }

  return num.toString();
}

export default function Visitors() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const res = await fetch(
          "https://api.countapi.xyz/hit/sravansurya/portfolio",
        );
        const data = await res.json();
        setCount(data.value);
      } catch (error) {
        console.error("Visitor fetch failed");
      }
    };

    fetchVisitors();
  }, []);

  return <span>{count}</span>;
}
