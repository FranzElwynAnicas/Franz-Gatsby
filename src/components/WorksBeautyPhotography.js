import React, { useState, useEffect, useRef } from "react";

import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
import img8 from "../images/8.png";
import img9 from "../images/9.png";
import img10 from "../images/10.png";

const hoverCycleImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

/* Map each Client (2–12) to its image file. */
const staticImages = [
  img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img1, img2,
];

const tiles = [
  { id: 1,  label: "Client 1", isHoverCycle: true },
  { id: 2,  label: "Client 2",  src: staticImages[0] },
  { id: 3,  label: "Client 3",  src: staticImages[1] },
  { id: 4,  label: "Client 4",  src: staticImages[2] },
  { id: 5,  label: "Client 5",  src: staticImages[3] },
  { id: 6,  label: "Client 6",  src: staticImages[4] },
  { id: 7,  label: "Client 7",  src: staticImages[5] },
  { id: 8,  label: "Client 8",  src: staticImages[6] },
  { id: 9,  label: "Client 9",  src: staticImages[7] },
  { id: 10, label: "Client 10", src: staticImages[8] },
  { id: 11, label: "Client 11", src: staticImages[9] },
  { id: 12, label: "Client 12", src: staticImages[10] },
];

const HoverCycleTile = ({ images, label, onOpen }) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const handleEnter = () => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 200);
  };

  const handleLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIndex(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    // Changed to w-full on mobile, fixed 185px on desktop
    <div className="w-full md:w-[185px] shrink-0">
      <button
        type="button"
        onClick={() => onOpen({ src: images[index], label })}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="block w-full md:w-[185px] aspect-[185/192] overflow-hidden bg-pocketLightGrey cursor-pointer"
      >
        <img
          src={images[index]}
          alt={label}
          className="w-full h-full object-cover"
          draggable="false"
        />
      </button>
      <p
        className="mt-2 md:mt-3 text-pocketGrey tracking-[-0.05em] text-base md:text-[20px]"
        style={{ lineHeight: 1.2, fontWeight: 500 }}
      >
        {label}
      </p>
    </div>
  );
};

const StaticTile = ({ src, label, onOpen }) => (
  <div className="w-full md:w-[185px] shrink-0">
    <button
      type="button"
      onClick={() => onOpen({ src, label })}
      className="block w-full md:w-[185px] aspect-[185/192] overflow-hidden bg-pocketLightGrey cursor-pointer"
    >
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover"
        draggable="false"
      />
    </button>
    <p
      className="mt-2 md:mt-3 text-pocketGrey tracking-[-0.05em] text-base md:text-[20px]"
      style={{ lineHeight: 1.2, fontWeight: 500 }}
    >
      {label}
    </p>
  </div>
);

const TileRenderer = ({ tile, onOpen }) => {
  if (tile.isHoverCycle) {
    return (
      <HoverCycleTile
        images={hoverCycleImages}
        label={tile.label}
        onOpen={onOpen}
      />
    );
  }
  return <StaticTile src={tile.src} label={tile.label} onOpen={onOpen} />;
};

const Lightbox = ({ item, onClose }) => {
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
        <img
          src={item.src}
          alt={item.label}
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

const WorksBeautyPhotography = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section
      id="beauty-photography"
      className="relative w-full bg-pocketWhite overflow-hidden"
      style={{ scrollMarginTop: "140px" }}
    >
      {/* Changed massive left padding to px-6 on mobile */}
      <div className="px-6 md:pl-[14.4%] md:pr-[5%] pt-16 md:pt-[260px] pb-16 md:pb-24">
        
        {/* Big "Photography ↓" heading */}
        <h2
          className="font-extrabold tracking-[-0.05em] mb-10 md:mb-20 text-5xl md:text-[clamp(64px,6.25vw,120px)]"
          style={{
            color: "#FCBE17",
            lineHeight: 1,
          }}
        >
          Photography ↓
        </h2>

        {/* Sub-header row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 md:mb-10 gap-3 md:gap-0">
          <h3
            className="font-extrabold tracking-[-0.05em] text-3xl md:text-[40px]"
            style={{ color: "#179CBD", lineHeight: 1.1 }}
          >
            Beauty Photography
          </h3>

          <p
            className="text-pocketGrey text-left md:text-right md:ml-6 shrink-0 tracking-[-0.05em] text-sm md:text-[20px]"
            style={{ lineHeight: 1.2, fontWeight: 500 }}
          >
            *Tap thumbnail for full view
          </p>
        </div>

        {/* Tiles — 
            Mobile: CSS Grid (2 cols) 
            Desktop: Flex layout (matching original pairs) 
        */}
        <div className="w-full">
          {/* Mobile Grid Layout (Visible only on small screens) */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:hidden">
            {tiles.map((tile) => (
              <TileRenderer key={tile.id} tile={tile} onOpen={setActiveItem} />
            ))}
          </div>

          {/* Desktop Flex Layout (Hidden on mobile, exact replica of original) */}
          <div className="hidden md:block">
            {/* Row 1 */}
            <div className="flex" style={{ marginBottom: "40px" }}>
              <TileRenderer tile={tiles[0]} onOpen={setActiveItem} />
              <div style={{ width: "20px" }} />
              <TileRenderer tile={tiles[1]} onOpen={setActiveItem} />
              <div style={{ width: "98px" }} />
              <TileRenderer tile={tiles[2]} onOpen={setActiveItem} />
              <div style={{ width: "20px" }} />
              <TileRenderer tile={tiles[3]} onOpen={setActiveItem} />
              <div style={{ width: "98px" }} />
              <TileRenderer tile={tiles[4]} onOpen={setActiveItem} />
              <div style={{ width: "20px" }} />
              <TileRenderer tile={tiles[5]} onOpen={setActiveItem} />
            </div>

            {/* Row 2 */}
            <div className="flex">
              <TileRenderer tile={tiles[6]}  onOpen={setActiveItem} />
              <div style={{ width: "20px" }} />
              <TileRenderer tile={tiles[7]}  onOpen={setActiveItem} />
              <div style={{ width: "98px" }} />
              <TileRenderer tile={tiles[8]}  onOpen={setActiveItem} />
              <div style={{ width: "20px" }} />
              <TileRenderer tile={tiles[9]}  onOpen={setActiveItem} />
              <div style={{ width: "98px" }} />
              <TileRenderer tile={tiles[10]} onOpen={setActiveItem} />
              <div style={{ width: "20px" }} />
              <TileRenderer tile={tiles[11]} onOpen={setActiveItem} />
            </div>
          </div>
        </div>

      </div>

      <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
};

export default WorksBeautyPhotography;