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
    // Changed to w-full on mobile, fixed 320px on desktop
    <div className="w-full md:w-[320px]">
      <button
        type="button"
        onClick={() => onOpen(item)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        // Changed to w-full on mobile, aspect ratio maintains the shape
        className="block w-full md:w-[320px] aspect-video md:h-[157.33px] overflow-hidden bg-pocketBlack cursor-pointer relative"
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
        
        {/* Added custom Play Button overlay to match Figma */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-pocketYellow md:bg-pocketTeal rounded-full flex items-center justify-center bg-opacity-90">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1 md:w-6 md:h-6">
              <polygon points="8,5 8,19 19,12" />
            </svg>
          </div>
        </div>
      </button>
      <p
        className="mt-2 md:mt-3 text-pocketGrey tracking-[-0.05em] text-base md:text-[16px]"
        style={{ lineHeight: 1.5, fontWeight: 500 }}
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

const WorksBeautyVideography = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section
      id="beauty-videography"
      className="relative w-full bg-pocketWhite overflow-hidden"
      style={{ scrollMarginTop: "140px" }}
    >
      {/* Changed hardcoded pl-[14.4%] to px-6 on mobile */}
      <div className="px-6 md:pl-[14.4%] md:pr-10 pt-16 md:pt-[260px] pb-16 md:pb-24">
        
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 md:mb-10 w-full md:w-[1360px] md:max-w-full">
          <h2
            className="font-extrabold tracking-[-0.05em] text-3xl md:text-[40px]"
            style={{
              color: "#179CBD",
              lineHeight: 1.1,
            }}
          >
            Beauty Videography
          </h2>

          {/* Changed text to match screenshot */}
          <p className="text-pocketGrey text-left md:text-right mt-3 md:mt-0 md:ml-6 shrink-0 text-sm md:text-[16px] font-medium">
            *Tap Video to play
          </p>
        </div>

        {/* Grid — Grid column on desktop, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-[40px] w-full md:w-fit">
          {tiles.map((item) => (
            <ThumbnailCard key={item.id} item={item} onOpen={setActiveItem} />
          ))}
        </div>
      </div>

      <FullscreenLightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
};

export default WorksBeautyVideography;