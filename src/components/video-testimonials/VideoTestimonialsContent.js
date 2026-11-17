import React, { useRef, useState, useEffect } from "react";

const VideoTestimonialsContent = ({
  contentTitle,
  contentCards = {},
  contentImage,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startXRef = useRef(0);
  const draggingRef = useRef(false);
  const offsetRef = useRef(0);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const cards = [
    {
      heading: contentCards?.card1Heading || "Lorem ipsum",
      paragraph1: contentCards?.card1Paragraph1 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt tellus leo, id tempor ligula dignissim ac. Nullam vel metus eros. Integer non ligula vitae augue dignissim molestie. Quisque bibendum massa vestibulum, convallis mi ac, dignissim urna. Praesent eu lorem a nisi convallis pretium ac eu nisi. Sed convallis dolor tellus, ut egestas risus imperdiet a. Etiam imperdiet felis ac pellentesque luctus. Quisque quis dui eu arcu sodales tempus. Duis sit amet vehicula velit. Donec vulputate porta eros id egestas. Donec non lectus a diam varius scelerisque.",
      paragraph2: contentCards?.card1Paragraph2 || "Sed fermentum libero et consectetur mattis. Duis ut dui suscipit dui aliquam elementum ac eget libero. In eget enim nibh. Mauris eget ullamcorper leo. Mauris eget ante eu odio auctor pharetra eget sit amet tellus. Ut hendrerit ipsum orci, quis tempor mi suscipit id. Pellentesque a sollicitudin mauris. Vivamus rutrum orci sed felis eleifend fringilla. Mauris id fringilla sapien, eget semper nulla.",
    },
    {
      heading: contentCards?.card2Heading || "Dolor Sit Amet",
      paragraph1: contentCards?.card2Paragraph1 || "Sed fermentum libero et consectetur mattis. Duis ut dui suscipit dui aliquam elementum ac eget libero. In eget enim nibh. Mauris eget ullamcorper leo. Mauris eget ante eu odio auctor pharetra eget sit amet tellus. Ut hendrerit ipsum orci, quis tempor mi suscipit id. Pellentesque a sollicitudin mauris. Vivamus rutrum orci sed felis eleifend fringilla. Mauris id fringilla sapien, eget semper nulla.",
      paragraph2: contentCards?.card2Paragraph2 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt tellus leo, id tempor ligula dignissim ac. Nullam vel metus eros. Integer non ligula vitae augue dignissim molestie. Quisque bibendum massa vestibulum, convallis mi ac, dignissim urna. Praesent eu lorem a nisi convallis pretium ac eu nisi. Sed convallis dolor tellus, ut egestas risus imperdiet a. Etiam imperdiet felis ac pellentesque luctus. Quisque quis dui eu arcu sodales tempus. Duis sit amet vehicula velit. Donec vulputate porta eros id egestas. Donec non lectus a diam varius scelerisque.",
    },
  ];

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

      const threshold = 50;
      const offset = offsetRef.current;

      if (offset < -threshold && currentIndex < 1) {
        setCurrentIndex(1);
      } else if (offset > threshold && currentIndex > 0) {
        setCurrentIndex(0);
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

  const getTranslateX = () => {
    if (!cardsRef.current[0]) return 0;
    const cardWidth = cardsRef.current[0].getBoundingClientRect().width;
    const gap = 32;
    return -(currentIndex * (cardWidth + gap));
  };

  return (
    <section className="w-full bg-[#EAEAEA] py-16 md:py-24 px-6 md:px-12 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1280px]">

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
          {contentTitle || "Lorem ipsum dolor sit amet"}
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">

          <div className="w-full md:w-[45%] shrink-0">
            <div className="w-full h-[300px] md:h-[594px] bg-[#D9D9D9] flex items-center justify-center overflow-hidden">
              {contentImage ? (
                <img
                  src={contentImage}
                  alt={contentTitle || "Content"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-black/40 text-sm font-medium">[photo]</span>
              )}
            </div>
          </div>

          <div className="w-full md:w-[55%] flex flex-col overflow-hidden">
            <div
              ref={containerRef}
              className="relative w-full cursor-grab active:cursor-grabbing select-none touch-pan-y py-2"
              onMouseDown={handleStart}
              onTouchStart={handleStart}
            >
              <div
                className="flex gap-8 w-full"
                style={{
                  transform: `translateX(calc(${getTranslateX()}px + ${dragOffset}px))`,
                  transition: isDragging
                    ? "none"
                    : "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
              >
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    ref={(el) => (cardsRef.current[idx] = el)}
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
                      {card.heading}
                    </h3>
                    <p className="mb-6">{card.paragraph1}</p>
                    <p>{card.paragraph2}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsContent;