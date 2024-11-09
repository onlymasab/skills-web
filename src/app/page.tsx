'use client'
import Image from "next/image";
import Hero from "./components/hero";

import { useState, useEffect } from "react";
export default function Home() {

  const initialTime = 10 * 60 * 60; // 10 hours in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Launching Soon</h1>
        <p className="text-6xl font-mono">{formatTime(timeLeft)}</p>
      </div>
    </div>
  );
}



