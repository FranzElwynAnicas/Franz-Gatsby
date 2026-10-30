import React, { useRef, useState, useEffect } from "react";

const VideoTestimonialsContent = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startXRef = useRef(0);
  const draggingRef = useRef(false);
  const offsetRef = useRef(0);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // Document-level listeners for custom desktop dragging
  useEffect(() => {
    const onMove = (e) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      offsetRef.current = clientX - startXRef.current;
      setDragOffset(offsetRef.current);
    };

    const onUp = () => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      setIsDragging(false);
      setIsAnimating(true);

      const threshold = 50; // minimum drag distance to trigger slide
      const offset = offsetRef.current;

      if (offset < -threshold && currentIndex < 1) {
        setCurrentIndex(1); // Move to next card
      } else if (offset > threshold && currentIndex > 0) {
        setCurrentIndex(0); // Move to prev card
      }

      offsetRef.current = 0;
      setDragOffset(0);

      setTimeout(() => {
        setIsAnimating(false);
      }, 450);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [currentIndex]);

  const handleStart = (e) => {
    if (isAnimating) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    startXRef.current = clientX;
    offsetRef.current = 0;
    draggingRef.current = true;
    setIsDragging(true);
    setDragOffset(0);
  };

  // Dynamically calculate exact translateX based on the actual rendered card width
  const getTranslateX = () => {
    if (!cardsRef.current[0]) return 0;

    // Get the exact width of the first card + the gap (32px for gap-8)
    const cardWidth = cardsRef.current[0].getBoundingClientRect().width;
    const gap = 32;

    // Multiply by currentIndex to slide exactly to the next card
    return -(currentIndex * (cardWidth + gap));
  };

  return (
    <section className="w-full bg-[#EAEAEA] py-16 md:py-24 px-6 md:px-12 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1280px]">

        {/* Main Title — black on mobile/tablet, #526E87 at xl+ */}
        <h2
          className="text-black xl:text-[#526E87] mb-12 text-left"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(40px, 6vw, 80px)",
            lineHeight: "100%",
            letterSpacing: "-0.05em",
          }}
        >
          Lorem ipsum dolor sit amet
        </h2>

        {/* Content Layout — stacked on mobile, two-column from md up */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">

          {/* Left Side: Static Grey Box */}
          <div className="w-full md:w-[45%] shrink-0">
            <div className="w-full h-[300px] md:h-[594px] bg-[#D9D9D9] flex items-center justify-center">
              <span className="text-black/40 text-sm font-medium">[photo]</span>
            </div>
          </div>

          {/* Right Side: Draggable Peeking Carousel */}
          <div className="w-full md:w-[55%] flex flex-col overflow-hidden">

            {/* Carousel Container */}
            <div
              ref={containerRef}
              className="relative w-full cursor-grab active:cursor-grabbing select-none touch-pan-y py-2"
              onMouseDown={handleStart}
              onTouchStart={handleStart}
            >
              {/* The draggable inner track */}
              <div
                className="flex gap-8 w-full"
                style={{
                  transform: `translateX(calc(${getTranslateX()}px + ${dragOffset}px))`,
                  transition: isDragging
                    ? "none"
                    : "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
              >
                {/* Column 1: Lorem ipsum — black until xl, #526E87 at xl+ */}
                <div
                  ref={(el) => (cardsRef.current[0] = el)}
                  className="w-[85%] md:w-[80%] shrink-0 text-left text-black xl:text-[#526E87]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "1.18",
                    letterSpacing: "-0.05em",
                  }}
                >
                  <h3 className="font-bold text-2xl mb-4 text-black xl:text-[#526E87]">
                    Lorem ipsum
                  </h3>
                  <p className="mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt tellus leo, id tempor ligula dignissim ac. Nullam vel metus eros. Integer non ligula vitae augue dignissim molestie. Quisque bibendum massa vestibulum, convallis mi ac, dignissim urna. Praesent eu lorem a nisi convallis pretium ac eu nisi. Sed convallis dolor tellus, ut egestas risus imperdiet a. Etiam imperdiet felis ac pellentesque luctus. Quisque quis dui eu arcu sodales tempus. Duis sit amet vehicula velit. Donec vulputate porta eros id egestas. Donec non lectus a diam varius scelerisque.
                  </p>
                  <p>
                    Sed fermentum libero et consectetur mattis. Duis ut dui suscipit dui aliquam elementum ac eget libero. In eget enim nibh. Mauris eget ullamcorper leo. Mauris eget ante eu odio auctor pharetra eget sit amet tellus. Ut hendrerit ipsum orci, quis tempor mi suscipit id. Pellentesque a sollicitudin mauris. Vivamus rutrum orci sed felis eleifend fringilla. Mauris id fringilla sapien, eget semper nulla.
                  </p>
                </div>

                {/* Column 2: Dolor Sit Amet — black until xl, #526E87 at xl+ */}
                <div
                  ref={(el) => (cardsRef.current[1] = el)}
                  className="w-[85%] md:w-[80%] shrink-0 text-left text-black xl:text-[#526E87]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "1.18",
                    letterSpacing: "-0.05em",
                  }}
                >
                  <h3 className="font-bold text-2xl mb-4 text-black xl:text-[#526E87]">
                    Dolor Sit Amet
                  </h3>
                  <p className="mb-6">
                    Sed fermentum libero et consectetur mattis. Duis ut dui suscipit dui aliquam elementum ac eget libero. In eget enim nibh. Mauris eget ullamcorper leo. Mauris eget ante eu odio auctor pharetra eget sit amet tellus. Ut hendrerit ipsum orci, quis tempor mi suscipit id. Pellentesque a sollicitudin mauris. Vivamus rutrum orci sed felis eleifend fringilla. Mauris id fringilla sapien, eget semper nulla.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt tellus leo, id tempor ligula dignissim ac. Nullam vel metus eros. Integer non ligula vitae augue dignissim molestie. Quisque bibendum massa vestibulum, convallis mi ac, dignissim urna. Praesent eu lorem a nisi convallis pretium ac eu nisi. Sed convallis dolor tellus, ut egestas risus imperdiet a. Etiam imperdiet felis ac pellentesque luctus. Quisque quis dui eu arcu sodales tempus. Duis sit amet vehicula velit. Donec vulputate porta eros id egestas. Donec non lectus a diam varius scelerisque.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsContent;