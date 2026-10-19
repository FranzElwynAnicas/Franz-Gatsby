import React, { useState, useRef } from "react";
import aboutLogo from "../images/aboutlogo.png";
import { useContactModal } from "../contexts/ContactModalContext";

const AboutHero = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const { open } = useContactModal();

  const togglePlay = () => {
    if (!videoRef.current) return;
    const v = videoRef.current;

    if (playing) {
      v.pause();
      setPlaying(false);
    } else {
      v.muted = false;
      v.volume = 1;
      v.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <section id="about" className="w-full bg-pocketWhite pt-[100px] md:pt-[140px] pb-16">
      <div className="mx-auto max-w-[1920px] px-6 md:px-[12%] lg:px-[18%]">

        {/* ─── MOBILE ONLY: text-based hero heading ─── */}
        <div className="block md:hidden">
          <h1
            className="m-0"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "60px",
              lineHeight: "100%",
              letterSpacing: "-0.05em",
              color: "#000000",
            }}
          >
            About us at
          </h1>
          <h1
            className="m-0"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontStyle: "normal",
              fontSize: "60px",
              lineHeight: "100%",
              letterSpacing: "-0.05em",
              color: "#55C8E4",
            }}
          >
            Pocket
          </h1>
          <h1
            className="m-0"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontStyle: "normal",
              fontSize: "60px",
              lineHeight: "100%",
              letterSpacing: "-0.05em",
              color: "#FCBE17E5",
            }}
          >
            Creatives
          </h1>
        </div>

        {/* ─── DESKTOP ONLY: original heading + logo image ─── */}
        <div className="hidden md:block">
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
        </div>

        {/* Two-column grid — stacks on mobile */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[598px_1fr] items-start gap-10"
          style={{ marginTop: "40px" }}
        >
          {/* LEFT — video */}
          <div>
            <button
              type="button"
              onClick={togglePlay}
              aria-label="Toggle video sound"
              className="group relative block w-full overflow-hidden bg-pocketBlack cursor-pointer"
            >
              <video
                ref={videoRef}
                className="h-[220px] md:h-[280px] lg:h-[352px] w-full object-cover cursor-pointer"
                src="/videos/lighting.mp4"
                loop
                playsInline
                preload="metadata"
              />
            </button>
            <p
              className="mt-3 text-sm md:text-base font-medium leading-8"
              style={{ color: "#526E87" }}
            >
              *Click on Video to toggle sound
            </p>
          </div>

          {/* RIGHT — paragraph + CTA */}
          <div className="flex flex-col items-start lg:items-end justify-center lg:h-[352px]">
            <p
              className="text-left lg:text-right text-base md:text-xl font-medium leading-[1.8] md:leading-[2]"
              style={{ color: "#526E87", maxWidth: "517px" }}
            >
              Find out more about our production team, what we stand for and why
              you would choose us for your next video production or photography
              shoot.
            </p>

            <button
              type="button"
              onClick={open}
              className="mt-8 inline-flex h-[56px] md:h-[66px] w-full md:w-[253px] items-center justify-center gap-3 md:gap-5 cursor-pointer"
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
              <span className="text-base md:text-xl font-medium">I'D LIKE TO CHAT</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;