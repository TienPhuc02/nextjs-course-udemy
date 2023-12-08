"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
const WaveTrack = () => {
  const searchParams = useSearchParams();

  const audio = searchParams.get("audio");
  console.log("🚀 ~ file: wave.track.tsx:9 ~ WaveTrack ~ audio:", audio);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(
      "🚀 ~ file: wave.track.tsx:6 ~ WaveTrack ~ containerRef:",
      containerRef.current
    );
    if (containerRef.current) {
      WaveSurfer.create({
        container: containerRef.current,
        waveColor: "rgb(200, 0, 200)",
        progressColor: "rgb(100, 0, 100)",
        url: `/api?audio=${audio}`,
      });
    }
    // vì chạy ở development nên react chạy 2 lần
  }, []);
  return <div ref={containerRef}>WaveTrack</div>;
};

export default WaveTrack;
