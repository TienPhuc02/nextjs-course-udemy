"use client";
import React, { useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
const WaveTrack = () => {
  useEffect(() => {
    const element = document.getElementById("wave-track");
    if (element) {
      WaveSurfer.create({
        container: element,
        waveColor: "rgb(200, 0, 200)",
        progressColor: "rgb(100, 0, 100)",
        url: `/tracks/hoidanit.m4a`,
      });
    }
    // vì chạy ở development nên react chạy 2 lần
  }, []);
  return <div id="wave-track">WaveTrack</div>;
};

export default WaveTrack;
