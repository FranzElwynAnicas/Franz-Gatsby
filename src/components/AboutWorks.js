import React, { useState, useRef } from "react";

import shampoo from "../images/shampoo.png";
import man from "../images/man.png";

const slides = [
  {
    id: "soap",
    type: "image",
    src: shampoo,
    alt: "Soap & Glory product photography",
    tag: "Soap And Glory",
    subtitle: "People & Portrait Photography",
    description: (
      <>
        Expertly delivered product photography and
        <br />
        product videos. From simple pack shots to
        <br />
        creative product photography and engaging
        <br />
        product video, high quality imagery is
        <br />
        designed to entice the viewer and convert
        <br />
        to a customer.
      </>
    ),
  },
  {
    id: "hairo",
    type: "video",
    src: "/videos/hairo-brand-advert.mp4",
    alt: "HairO Brand Advert",
    tag: "HairO Brand Advert",
    subtitle: "Beauty Video Production",
    description: (
      <>
        Expertly crafted cosmetics, personal
        <br />
        care and beauty video and beauty
        <br />
        photography. Creating both usage
        <br />
        and creative product content, high
        <br />
        quality photography shows your
        <br />
        beauty brand in its best light.
      </>
    ),
  },
  {
    id: "motionpromo",
    type: "image",
    src: shampoo,
    alt: "Motion Promo",
    tag: "Motion Promo",
    subtitle: "Motion Graphics & Promo",
    description: (
      <>
        Dynamic motion graphics and promotional
        <br />
        content designed to grab attention.
        <br />
        From animated brand intros to full
        <br />
        promo campaigns, we craft visuals that
        <br />
        tell your story and drive engagement.
      </>
    ),
  },
  {
    id: "smiles",
    type: "video",
    src: "/videos/motionpromo.mp4",
    alt: "Smiles Alliance",
    tag: "Smiles Alliance",
    subtitle: "People & Portrait Videography",
    description: (
      <>
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit. Cras
        <br />
        gravida metus eget orci iaculis, eu
        <br />
        ornare augue auctor. Donec at
        <br />
        sagittis magna.
      </>
    ),
  },
];

const CARD_W = 349;
const CARD_H = 706;
const CENTER_W = 430;
const CENTER_H = 819;

const GAP = 48;

const SWIPE_THRESHOLD = 60;
const CLICK_THRESHOLD = 6; // px of movement still considered a "click"

const AboutWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [muted, setMuted] = useState(true); // global mute state
  const total = slides.length;

  const dragStartX = useRef(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const goLeft = () => setCurrentIndex((i) => i - 1);
  const goRight = () => setCurrentIndex((i) => i + 1);

  const getTransformX = (position) => {
    if (position === -1) {
      return -((CENTER_W / 2) + GAP + (CARD_W / 2));
    }
    if (position === 1) {
      return (CENTER_W / 2) + GAP + (CARD_W / 2);
    }
    return 0;
  };

  const handlePointerDown = (e) => {
    dragStartX.current = e.clientX ?? e.touches?.[0]?.clientX;
    setIsDragging(true);
    setDragOffset(0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || dragStartX.current === null) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX;
    setDragOffset(x - dragStartX.current);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;

    if (dragOffset < -SWIPE_THRESHOLD) {
      goRight();
    } else if (dragOffset > SWIPE_THRESHOLD) {
      goLeft();
    }

    setIsDragging(false);
    setDragOffset(0);
    dragStartX.current = null;
  };

  /* Toggle sound only if the pointer barely moved (real click, not drag) */
  const handleCenterClick = () => {
    if (Math.abs(dragOffset) > CLICK_THRESHOLD) return;
    setMuted((m) => !m);
  };

  const visibleSlots = [-1, 0, 1].map((offset) => {
    const rawIdx = currentIndex + offset;
    const slideIdx = ((rawIdx % total) + total) % total;
    return {
      slide: slides[slideIdx],
      position: offset,
      uniqueKey: `${slideIdx}-${rawIdx}`,
    };
  });

  return (
    <section className="w-full bg-pocketWhite py-24 overflow-hidden">
      <div className="mx-auto max-w-[1920px] px-[12%]">
        <h2
          className="text-center font-bold leading-none text-pocketTeal mb-14"
          style={{
            fontSize: "clamp(56px, 6.25vw, 120px)",
            letterSpacing: "-0.05em",
          }}
        >
          Our Works
        </h2>

        <div
          className="relative flex items-center justify-center"
          style={{
            height: `${CENTER_H + 40}px`,
            cursor: isDragging ? "grabbing" : "grab",
            touchAction: "pan-y",
            userSelect: "none",
          }}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          {visibleSlots.map(({ slide, position, uniqueKey }) => {
            const isCenter = position === 0;

            const width = isCenter ? CENTER_W : CARD_W;
            const height = isCenter ? CENTER_H : CARD_H;
            const isVideo = slide.type === "video";

            const baseX = getTransformX(position);

            return (
              <div
                key={uniqueKey}
                className="absolute top-1/2 -translate-y-1/2 left-1/2"
                style={{
                  transform: `translate(calc(-50% + ${baseX + dragOffset}px), -50%)`,
                  zIndex: isCenter ? 10 : 5,
                  width: `${width}px`,
                  height: `${height}px`,
                  transition: isDragging
                    ? "none"
                    : "all 1100ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <article
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  {isVideo ? (
                    <video
                      src={slide.src}
                      autoPlay
                      muted={muted}
                      loop
                      playsInline
                      preload="metadata"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 0,
                        pointerEvents: "none",
                      }}
                    />
                  ) : (
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      draggable="false"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 0,
                        pointerEvents: "none",
                      }}
                    />
                  )}

                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(252, 190, 23, 0) 0%, rgba(252, 190, 23, 0) 55%, rgba(252, 190, 23, 0.5) 75%, #FCBE17 95%, #FCBE17 100%)",
                      zIndex: 1,
                      pointerEvents: "none",
                    }}
                  />

                  {/* Text Container */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: isCenter ? "32px" : "24px",
                      padding: isCenter ? "0 60px" : "0 48px",
                      zIndex: 2,
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        background: "#179CBD",
                        color: "#FFFFFF",
                        fontSize: "14px",
                        fontWeight: 700,
                        lineHeight: 2,
                        letterSpacing: "-0.05em",
                        paddingLeft: "9px",
                        paddingRight: "9px",
                      }}
                    >
                      {slide.tag}
                    </span>

                    <p
                      style={{
                        marginTop: "4px",
                        fontSize: "14px",
                        fontWeight: 600,
                        lineHeight: 2,
                        letterSpacing: "-0.05em",
                        color: "#000000",
                      }}
                    >
                      {slide.subtitle}
                    </p>

                    <p
                      style={{
                        marginTop: "4px",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: 1.4,
                        letterSpacing: "-0.05em",
                        color: "#000000",
                      }}
                    >
                      {slide.description}
                    </p>
                  </div>

                  {/* White wash overlay for non-center cards */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "white",
                      opacity: isCenter ? 0 : 0.55,
                      transition: "opacity 1100ms cubic-bezier(0.22, 1, 0.36, 1)",
                      zIndex: 3,
                      pointerEvents: "none",
                    }}
                  />

                  {/* Click-to-toggle-sound layer (center video only) */}
                  {isCenter && isVideo && (
                    <button
                      type="button"
                      aria-label={muted ? "Unmute video" : "Mute video"}
                      onClick={handleCenterClick}
                      onMouseDown={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "transparent",
                        border: "none",
                        padding: 0,
                        zIndex: 4,
                        cursor: "pointer",
                      }}
                    />
                  )}
                </article>
              </div>
            );
          })}

          <button
            type="button"
            aria-label="Previous"
            onClick={goLeft}
            className="absolute top-0 bottom-0 left-0"
            style={{
              width: `30%`,
              background: "transparent",
              border: "none",
              padding: 0,
              zIndex: 20,
              cursor: "pointer",
            }}
          />
          <button
            type="button"
            aria-label="Next"
            onClick={goRight}
            className="absolute top-0 bottom-0 right-0"
            style={{
              width: `30%`,
              background: "transparent",
              border: "none",
              padding: 0,
              zIndex: 20,
              cursor: "pointer",
            }}
          />
        </div>

        <p
          className="mt-6 text-center text-base font-medium leading-8"
          style={{ color: "#526E87" }}
        >
          *Click on Video to toggle sound
        </p>
      </div>
    </section>
  );
};

export default AboutWorks;