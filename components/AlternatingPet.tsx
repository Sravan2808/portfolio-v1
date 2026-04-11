"use client";

import { useEffect, useState, useRef } from "react";
import Cat from "./OnekoCat";
import Dog from "./OnekoDog";

export default function AlternatingPet() {
  const [pet, setPet] = useState<"cat" | "dog">("dog");
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    // Read the last pet from sessionStorage
    const lastPet = sessionStorage.getItem("lastPet");

    // Determine the next pet to show
    const nextPet = lastPet === "dog" ? "cat" : "dog";

    // Save it for the next refresh
    sessionStorage.setItem("lastPet", nextPet);

    // Set state to render the specific pet
    setPet(nextPet);
  }, []);

  if (pet === "cat") return <Cat />;
  if (pet === "dog") return <Dog />;

  return null; // Return null on first render to avoid hydration errors
}
