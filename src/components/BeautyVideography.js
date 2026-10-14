import React, { useState, useRef, useEffect } from "react";

const tiles = [
  { id: 1,  label: "Client 1.1", src: "/videos/pocket-pancake.mp4" },
  { id: 2,  label: "Client 1.2", src: "/videos/review.mp4" },
  { id: 3,  label: "Client 2",   src: "/videos/fooddrink.mp4" },
  { id: 4,  label: "Client 3.1", src: "/videos/walnut.mp4" },
  { id: 5,  label: "Client 3.2", src: "/videos/beauty.mp4" },
  { id: 6,  label: "Client 3.3", src: "/videos/crowdfunding.mp4" },
  { id: 7,  label: "Client 4",   src: "/videos/product.mp4" },
  { id: 8,  label: "Client 5",   src: "/videos/hero.mp4" },
  { id: 9,  label: "Client 6.1", src: "/videos/events.mp4" },
  { id: 10, label: "Client 6.2", src: "/videos/pocket-pancake.mp4" },
  { id: 11, label: "Client 7",   src: "/videos/review.mp4" },
  { id: 12, label: "Client 8",   src: "/videos/fooddrink.mp4" },
];

const ThumbnailCard = ({ item, onOpen }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    const v = videoRef.current;
    v.muted = true;
    v.defaultMuted = true;
    v.pause();
    return () => v.pause();
  }, []);

  const handleEnter = () => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  };
  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="w-[320px]">
      <button
        type="button"
        onClick={() => onOpen(item)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="block w-[320px] h-[157.33px] overflow-hidden bg-pocketBlack cursor-pointer"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={item.src}
          muted
          loop
          playsInline
          preload="metadata"
        />
      </button>
      <p
        className="mt-3 text-pocketGrey tracking-[-0.05em]"
        style={{ fontSize: "16px", lineHeight: 2, fontWeight: 500 }}
      >
        {item.label}
      </p>
    </div>
  );
};

const FullscreenLightbox = ({ item, onClose }) => {
  if (!item) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-6"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-pocketYellow flex items-center justify-center hover:scale-105 transition-transform"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
        >
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </svg>
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
      >
        <video
          className="max-w-full max-h-[90vh]"
          src={item.src}
          autoPlay
          controls
          playsInline
        />
      </div>
    </div>
  );
};

const BeautyVideography = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section
      id="beauty-videography"
      className="relative w-full bg-pocketWhite"
      style={{ scrollMarginTop: "140px" }}
    >
      {/* Left offset 277px at 1920 = 14.4% */}
      <div className="pl-[14.4%] pr-10 pt-[220px] pb-16 md:pt-[260px] md:pb-24">
        {/* Header row — matches grid width */}
        <div
          className="flex items-start justify-between mb-10"
          style={{ width: "1360px", maxWidth: "100%" }}
        >
          <h2
            className="font-extrabold tracking-[-0.05em]"
            style={{
              fontSize: "40px",
              color: "#179CBD",
              lineHeight: 1,
            }}
          >
            Beauty Videography
          </h2>

          <p
            className="text-pocketGrey text-right ml-6 shrink-0"
            style={{ fontSize: "16px", lineHeight: 2, fontWeight: 500 }}
          >
            *Click on Video to play in large view
          </p>
        </div>

        {/* Grid — 4 columns of 320px tiles, 40px gaps */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(4, 320px)",
            gap: "40px",
            width: "fit-content",
          }}
        >
          {tiles.map((item) => (
            <ThumbnailCard key={item.id} item={item} onOpen={setActiveItem} />
          ))}
        </div>
      </div>

      <FullscreenLightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
};

export default BeautyVideography;