import React, { useRef, useState } from "react";
import { UilPlayCircle } from "@iconscout/react-unicons";
import useDragScroll from "../hooks/useDragScroll";

const categories = [
  { title: "Beauty", video: "/videos/beauty.mp4" },
  { title: "Food&Drink", video: "/videos/fooddrink.mp4" },
  { title: "Product", video: "/videos/product.mp4" },
  { title: "Events", video: "/videos/events.mp4" },
  { title: "Crowdfunding", video: "/videos/crowdfunding.mp4" },
];

const VideoCard = ({ title, video }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="w-[75vw] max-w-[500px] md:w-[712px] md:max-w-none aspect-[712/400] bg-pocketBlack rounded-xl relative overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover cursor-pointer"
        src={video}
        loop
        playsInline
        preload="metadata"
        onClick={togglePlay}
      />

      {!playing && (
        <button
          onClick={togglePlay}
          aria-label={`Play ${title} video`}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-pocketTeal rounded-full flex items-center justify-center hover:scale-105 transition-transform">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white" className="ml-1">
              <polygon points="8,5 8,19 19,12" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};

const HomeVideoCategories = () => {
  const scrollRef = useDragScroll();

  const scrollBy = (direction) => {
    if (!scrollRef.current) return;
    const amount = 700;
    scrollRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full min-h-screen bg-pocketLightGrey flex items-center overflow-hidden">
      <div className="w-full py-20">
        {/* Top row: Play icon + Video Production heading (and Let's Talk on desktop) */}
        <div className="px-6 md:pl-[12.5%] md:pr-16 flex items-center justify-between mb-8 md:mb-12">
          <div className="flex items-center gap-3 md:gap-4">
            <UilPlayCircle
              size="40"
              color="#179CBD"
              className="md:w-14 md:h-14"
            />
            <span className="text-pocketGrey font-inter text-2xl md:text-3xl lg:text-[40px] font-medium">
              Video Production
            </span>
          </div>

          {/* Desktop-only Let's Talk button */}
          <button className="hidden md:flex bg-pocketTeal text-white font-bold text-lg rounded-full w-24 h-24 md:w-32 md:h-32 items-center justify-center hover:opacity-90 transition-opacity shrink-0">
            Let's Talk
          </button>
        </div>

        {/* Carousel */}
        <div className="w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-14 lg:gap-16 overflow-x-auto pb-6 scrollbar-hide pl-6 md:pl-[12.5%]"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat) => (
              <div key={cat.title} className="shrink-0">
                <h3 className="text-3xl md:text-5xl lg:text-[80px] font-black text-pocketBlack leading-none tracking-[-0.03em] md:tracking-[-0.05em] mb-4 md:mb-10">
                  {cat.title}
                </h3>
                <VideoCard title={cat.title} video={cat.video} />
              </div>
            ))}

            {/* "View All" — desktop only */}
            <div className="hidden md:flex shrink-0 items-center pr-[12.5%]">
              <button className="text-[80px] md:text-[120px] font-black text-pocketBlack leading-[1.2] tracking-[-0.05em] hover:text-pocketTeal transition-colors">
                View All.
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row: arrows + hint (and Let's Talk on mobile) */}
        <div className="px-6 md:pl-[12.5%] md:pr-16 mt-4 md:mt-8 flex flex-col md:flex-row md:items-start gap-8 md:gap-0">
          {/* Arrows + hint */}
          <div className="flex flex-col">
            <p className="text-sm md:text-base text-pocketGrey mb-3">
              *Drag to play the next Video, Tap to toggle sound
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => scrollBy("prev")}
                aria-label="Previous"
                className="w-10 h-10 md:w-10 md:h-10 bg-pocketTeal md:bg-pocketYellow rounded-full flex items-center justify-center hover:opacity-90"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2.5"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button
                onClick={() => scrollBy("next")}
                aria-label="Next"
                className="w-10 h-10 md:w-10 md:h-10 bg-pocketTeal md:bg-pocketYellow rounded-full flex items-center justify-center hover:opacity-90"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2.5"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile-only Let's Talk button (centered) */}
          <div className="flex justify-center md:hidden mt-4">
            <button className="bg-pocketYellow text-pocketBlack font-bold text-xl rounded-full w-24 h-24 flex items-center justify-center shadow-[0px_4px_16px_0px_#0000001A] active:scale-95 transition-transform">
              Let's
              <br />
              Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideoCategories;