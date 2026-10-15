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
  { id: 1,  label: "Hover ex. here", isHoverCycle: true },
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
    <div className="w-[185px] shrink-0">
      <button
        type="button"
        onClick={() => onOpen({ src: images[index], label })}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="block w-[185px] h-[191.94px] overflow-hidden bg-pocketLightGrey cursor-pointer"
      >
        <img
          src={images[index]}
          alt={label}
          className="w-full h-full object-cover"
          draggable="false"
        />
      </button>
      <p
        className="mt-3 text-pocketGrey tracking-[-0.05em]"
        style={{ fontSize: "20px", lineHeight: 1, fontWeight: 500 }}
      >
        {label}
      </p>
    </div>
  );
};

const StaticTile = ({ src, label, onOpen }) => (
  <div className="w-[185px] shrink-0">
    <button
      type="button"
      onClick={() => onOpen({ src, label })}
      className="block w-[185px] h-[191.94px] overflow-hidden bg-pocketLightGrey cursor-pointer"
    >
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover"
        draggable="false"
      />
    </button>
    <p
      className="mt-3 text-pocketGrey tracking-[-0.05em]"
      style={{ fontSize: "20px", lineHeight: 1, fontWeight: 500 }}
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
      className="relative w-full bg-pocketWhite"
      style={{ scrollMarginTop: "140px" }}
    >
      <div className="pt-[220px] pb-16 md:pt-[260px] md:pb-24">
        {/* Big "Photography ↓" heading */}
        <h2
          className="font-extrabold tracking-[-0.05em] mb-16 md:mb-20"
          style={{
            fontSize: "clamp(64px, 6.25vw, 120px)",
            color: "#FCBE17",
            lineHeight: 1,
            paddingLeft: "14.4%",
          }}
        >
          Photography ↓
        </h2>

        {/* Sub-header row */}
        <div
          className="flex items-start justify-between mb-10"
          style={{ paddingLeft: "14.4%", paddingRight: "5%" }}
        >
          <h3
            className="font-extrabold tracking-[-0.05em]"
            style={{ fontSize: "40px", color: "#179CBD", lineHeight: 1 }}
          >
            Beauty Photography
          </h3>

          <p
            className="text-pocketGrey text-right ml-6 shrink-0 tracking-[-0.05em]"
            style={{ fontSize: "20px", lineHeight: 1, fontWeight: 500 }}
          >
            *Click on thumbnail for large view
          </p>
        </div>

        {/* Tiles — pairs of 2 with wide gaps between pairs */}
        <div style={{ paddingLeft: "14.4%", paddingRight: "5%" }}>
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

      <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
};

export default WorksBeautyPhotography;