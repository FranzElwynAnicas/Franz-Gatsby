import React, { useRef, useState } from "react";

const CoursesHero = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setPlaying(true);
  };

  const handlePause = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setPlaying(false);
  };

  const togglePlay = () => {
    if (playing) handlePause();
    else handlePlay();
  };

  return (
    <section className="w-full bg-[#F7F7F7] pt-32 pb-16 lg:pb-24 xl:pt-48 px-6 md:px-12 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] flex flex-col">
        {/* HEADING */}
        <h1
          className="mb-8 lg:mb-12 xl:mb-16 text-[40px] xl:text-[80px] max-w-[1050px] xl:max-w-[1400px]"
          style={{
            fontFamily: "Inter, sans-serif",
            lineHeight: "105%",
            letterSpacing: "-0.05em",
          }}
        >
          {/* Mobile + Tablet (lg) → mobile colors */}
          <span className="block xl:hidden">
            <span style={{ fontWeight: 500, color: "#000000" }}>
              Check out our new in-person{" "}
            </span>
            <span style={{ fontWeight: 700, color: "#000000" }}>creative</span>
            <br />
            <span style={{ fontWeight: 700, color: "#000000" }}>
              training courses{" "}
            </span>
            <span style={{ fontWeight: 500, color: "#000000" }}>in </span>
            <span style={{ fontWeight: 700, color: "#179CBD" }}>
              video production{" "}
            </span>
            <span style={{ fontWeight: 500, color: "#000000" }}>and </span>
            <span style={{ fontWeight: 700, color: "#FCBE17" }}>
              photography
            </span>
          </span>

          {/* Desktop (xl, 2xl) → desktop colors */}
          <span className="hidden xl:block">
            <span style={{ fontWeight: 500, color: "#000000" }}>
              Check out our new in-person{" "}
            </span>
            <span style={{ fontWeight: 700, color: "#FCBE17" }}>creative</span>
            <br />
            <span style={{ fontWeight: 700, color: "#FCBE17" }}>
              training courses{" "}
            </span>
            <span style={{ fontWeight: 500, color: "#000000" }}>in </span>
            <span style={{ fontWeight: 700, color: "#179CBD" }}>
              video production{" "}
            </span>
            <span style={{ fontWeight: 500, color: "#000000" }}>and </span>
            <span style={{ fontWeight: 700, color: "#179CBD" }}>
              photography
            </span>
          </span>
        </h1>

        {/* Content Area — stacked below lg, two-column from lg up */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_598px] gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* Text Paragraphs — black until xl, #526E87 from xl up */}
          <div
            className="space-y-6 max-w-[700px] order-2 lg:order-1 text-black xl:text-[#526E87]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(18px, 1.4vw, 20px)",
              lineHeight: "120%",
              letterSpacing: "-0.05em",
            }}
          >
            <p>
              The creative industries are more popular than ever. More people
              are empowered to shoot and edit their own material, and the number
              of content creators, photographers and videographers increase
              yearly.
            </p>
            <p>
              At Pocket, we have a wealth of skills and experience to share, and
              are offering a new range of 1:1 bespoke in-person training courses
              from our London studio. We'll build your perfect one day course,
              covering everything you need for video production, photography or
              video editing. With the massive number of online and remote
              courses out there, these offer a definite step-up.
            </p>
            <p>
              How can we help with the first, or the next steps of your creative
              journey?
            </p>
          </div>

          {/* Video Player */}
          <div className="w-full flex flex-col items-start lg:items-end order-1 lg:order-2">
            <div className="relative w-full lg:w-[598px] aspect-[4/3] lg:aspect-auto lg:h-[352px] overflow-hidden bg-black/10 shrink-0">
              <video
                ref={videoRef}
                className="w-full h-full object-cover cursor-pointer"
                src="/videos/hero.mp4"
                loop
                playsInline
                onClick={togglePlay}
              />
              {!playing && (
                <button
                  onClick={handlePlay}
                  aria-label="Play video"
                  className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#179CBD] rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-md">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="ml-1 md:w-8 md:h-8"
                    >
                      <polygon points="8,5 8,19 19,12" />
                    </svg>
                  </div>
                </button>
              )}
            </div>

            <p
              className="mt-3 text-black xl:text-[#526E87]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "-0.02em",
              }}
            >
              *Click on Video to toggle sound
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;