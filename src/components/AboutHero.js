import React, { useState, useRef } from "react";
import aboutLogo from "../images/aboutlogo.png";

const AboutHero = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    const v = videoRef.current;

    if (playing) {
      v.pause();
      setPlaying(false);
    } else {
      // Unmute when the user clicks to play
      v.muted = false;
      v.volume = 1;
      v.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <section id="about" className="w-full bg-pocketWhite pt-[140px] pb-16">
      <div className="mx-auto max-w-[1920px] px-[18%]">
        {/* Heading + Logo */}
        <h1
          className="font-normal leading-none m-0"
          style={{
            fontSize: "clamp(56px, 6.25vw, 120px)",
            letterSpacing: "-0.05em",
            color: "#526E87",
          }}
        >
          About us at
        </h1>

        <img
          src={aboutLogo}
          alt="Pocket Creatives"
          className="w-full"
          style={{
            maxWidth: "1049px",
            height: "auto",
            display: "block",
            marginTop: "-10px",
          }}
        />

        {/* Two-column grid */}
        <div
          className="grid items-start gap-10 lg:grid-cols-[598px_1fr]"
          style={{ marginTop: "40px" }}
        >
          {/* LEFT — video */}
          <div>
            <button
              type="button"
              onClick={togglePlay}
              aria-label="Toggle video sound"
              className="group relative block w-full overflow-hidden bg-pocketBlack"
            >
              <video
                ref={videoRef}
                className="h-[352px] w-full object-cover cursor-pointer"
                src="/videos/lighting.mp4"
                loop
                playsInline
                preload="metadata"
              />
            </button>
            <p
              className="mt-3 text-base font-medium leading-8"
              style={{ color: "#526E87" }}
            >
              *Click on Video to toggle sound
            </p>
          </div>

          {/* RIGHT — paragraph + CTA */}
          <div className="flex flex-col items-end justify-center h-[352px]">
            <p
              className="text-right text-xl font-medium leading-[2]"
              style={{ color: "#526E87", maxWidth: "517px" }}
            >
              Find out more about our production team, what we stand for and why
              you would choose us for your next video production or photography
              shoot.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex h-[66px] w-[253px] items-center justify-center gap-5"
              style={{
                background: "#55C8E4",
                boxShadow: "3px 3px 6px 0px #526E87",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="1" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              <span className="text-xl font-medium">I'D LIKE TO CHAT</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;