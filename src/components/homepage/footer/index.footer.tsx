"use client";
import { useHasMounted } from "@/utils/customizeHook";
import { AppBar, Container } from "@mui/material";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const FooterHomePage = () => {
  const hasMounted = useHasMounted();
  if (!hasMounted) return <></>;
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  // muốn client component lấy được biến môi trường  thì  thêm NEXT_PUBLIC
  return (
    <div>
      {" "}
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#f2f2f2" }}
      >
        <Container sx={{ display: "flex", gap: 10 }}>
          <AudioPlayer
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
            volume={0.5}
            style={{ boxShadow: "unset", backgroundColor: "#f2f2f2" }}
            // Try other props!
          />
          <div className="flex flex-col items-start justify-center ">
            <div className="text-[#ccc]">Phuc</div>
            <div className="text-[black] ">We don't talk any more</div>
          </div>
        </Container>
      </AppBar>
    </div>
  );
};

export default FooterHomePage;
