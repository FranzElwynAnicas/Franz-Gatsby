import React, { useState, useRef } from "react";
import v1Logo from "../../images/v1.png";
import { useContactModal } from "../../contexts/ContactModalContext";

const AboutHero = ({
  heroHeadingText,
  heroColorWord1,
  heroColorWord2,
  heroVideoUrl,
  heroBodyCopy,
  heroCtaLabel,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const { open } = useContactModal();

  // ACF values with hardcoded fallbacks
  const heading = heroHeadingText || "About us at";
  const word1 = heroColorWord1 || "Pocket";
  const word2 = heroColorWord2 || "Creatives";
  const videoSrc = heroVideoUrl || "/videos/lighting.mp4";
  const bodyCopy =
    heroBodyCopy ||
    "Find out more about our production team, what we stand for and why you would choose us for your next video production or photography shoot.";
  const ctaLabel = heroCtaLabel || "I'D LIKE TO CHAT";

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
            {heading}
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
            {word1}
          </h1>
          <h1
            className="m-0"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300, /* Thinner wordmark on mobile */
              fontStyle: "normal",
              fontSize: "60px",
              lineHeight: "100%",
              letterSpacing: "-0.05em",
              color: "#FCBE17E5",
            }}
          >
            {word2}
          </h1>
        </div>

        {/* ─── DESKTOP ONLY: heading + logo icon + split wordmark text ─── */}
        <div className="hidden md:block">
          <h1
            className="font-normal leading-none m-0"
            style={{
              fontSize: "clamp(56px, 6.25vw, 120px)",
              letterSpacing: "-0.05em",
              color: "#526E87",
            }}
          >
            {heading}
          </h1>

          <div className="flex items-center gap-4 md:gap-6 mt-2">
            <img
              src={v1Logo}
              alt="Pocket Creatives logo mark"
              style={{
                width: "clamp(60px, 8vw, 120px)",
                height: "auto",
                display: "block",
                flexShrink: 0,
              }}
            />
            <h1
              className="m-0 leading-none text-[#55C8E4] xl:text-[#526E87]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(56px, 6.25vw, 120px)",
                letterSpacing: "-0.05em",
                fontWeight: 800,
              }}
            >
              {word1}
            </h1>
            <h1
              className="m-0 leading-none text-[#FCBE17E5] xl:text-[#526E87]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(56px, 6.25vw, 120px)",
                letterSpacing: "-0.05em",
                fontWeight: 300, /* Thinner wordmark on desktop */
              }}
            >
              {word2}
            </h1>
          </div>
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
                src={videoSrc}
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
              {bodyCopy}
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
              <span className="text-base md:text-xl font-medium">
                {ctaLabel}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;