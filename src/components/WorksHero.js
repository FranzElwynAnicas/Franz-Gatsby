import React, { useState, useRef, useEffect } from "react";
import nursem from "../images/nursem.png";

/* ─── Category pills data ─── */
const categories = [
  { label: "Beauty", active: true },
  { label: "Product" },
  { label: "Events" },
  { label: "Crowdfunding" },
  { label: "Fashion" },
  { label: "People" },
  { label: "Jewellery" },
  { label: "TV Ads" },
  { label: "HR" },
  { label: "Education" },
  { label: "Explainers" },
  { label: "Social First" },
];

/* ─── Marquee items ─── */
const items = [
  {
    type: "video",
    src: "/videos/hairo-brand-advert.mp4",
    label: "HairO Brand Advert",
    tag: "Video",
  },
  { type: "image", src: nursem, label: "Nursem", tag: "Photo" },
  {
    type: "image",
    src: "/gifs/soap-and-glory.gif",
    label: "Soap & Glory",
    tag: "Photo",
  },
  { type: "image", src: nursem, label: "Nursem", tag: "Photo" },
];

const CARD_HEIGHT = 420; // px — all cards share this height, widths vary

const MarqueeCard = ({ item }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (item.type !== "video" || !videoRef.current) return;
    const v = videoRef.current;
    v.muted = true;
    v.defaultMuted = true;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    return () => v.removeEventListener("loadeddata", tryPlay);
  }, [item.type]);

  return (
    <div className="shrink-0 flex-none">
      {/* Image / video — fixed height, natural width */}
      <div style={{ height: `${CARD_HEIGHT}px` }} className="overflow-hidden">
        {item.type === "video" ? (
          <video
            ref={videoRef}
            className="h-full w-auto block"
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        ) : (
          <img
            src={item.src}
            alt={item.label}
            className="h-full w-auto block"
            draggable="false"
          />
        )}
      </div>

      {/* Label row — more vertical breathing room above */}
      <div className="flex justify-between items-center mt-6 px-1 gap-6">
        <span className="text-pocketGrey text-sm font-medium whitespace-nowrap">
          {item.label}
        </span>
        <span className="text-pocketGrey text-sm font-medium whitespace-nowrap">
          {item.tag}
        </span>
      </div>
    </div>
  );
};

const WorksHero = ({ title = "BEAUTY" }) => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="w-full bg-pocketLightGrey overflow-hidden pt-10 pb-16">
      {/* 1. Heading */}
      <h1
        className="text-center text-pocketTeal font-extrabold tracking-[-0.05em] leading-none mb-6"
        style={{ fontSize: "40px" }}
      >
        View By Category
      </h1>

      {/* 2. Category pills */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 px-6 max-w-[1300px] mx-auto mb-14">
        {categories.map((cat) => (
          <button
            key={cat.label}
            className={`font-medium tracking-[-0.05em] leading-none transition-colors ${
              cat.active
                ? "text-pocketYellow"
                : "text-pocketGrey hover:text-pocketYellow"
            }`}
            style={{ fontSize: "20px" }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3. Infinite marquee — bigger gap between cards, no hover pause */}
      <div className="pl-[12.5%] w-full overflow-hidden mb-16 mt-4">
        <div
          className={`marquee-wrap ${paused ? "paused" : ""}`}
          style={{ overflow: "hidden" }}
        >
          <div className="marquee-track flex items-start gap-16 w-max">
            {[...items, ...items].map((item, idx) => (
              <MarqueeCard key={`a-${idx}`} item={item} />
            ))}
            {[...items, ...items].map((item, idx) => (
              <MarqueeCard key={`b-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* 4. Category title + pause */}
      <div className="pl-[12.5%] pr-8 md:pr-16 flex items-center justify-between">
        <h2
          className="text-pocketTeal font-extrabold tracking-[-0.05em] leading-none uppercase"
          style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
        >
          {title}
        </h2>

        <button
          aria-label={paused ? "Play" : "Pause"}
          onClick={() => setPaused((p) => !p)}
          className="w-10 h-10 rounded-full bg-pocketYellow flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
        >
          {paused ? (
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="white"
              className="ml-0.5"
            >
              <polygon points="0,0 12,7 0,14" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
              <rect x="2" y="1" width="3.5" height="12" rx="0.5" />
              <rect x="8.5" y="1" width="3.5" height="12" rx="0.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Marquee keyframes — hover pause removed */}
      <style>{`
        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track {
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
        .marquee-wrap.paused .marquee-track { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

export default WorksHero;