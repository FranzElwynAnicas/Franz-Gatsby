import React, { useRef, useState, useEffect } from "react";

// Reusable Quote SVG component
const QuoteIcon = ({ className = "" }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M33.3327 87.5C35.5428 87.5 37.6624 86.622 39.2252 85.0592C40.788 83.4964 41.666 81.3768 41.666 79.1667V54.1667C41.666 51.9565 40.788 49.8369 39.2252 48.2741C37.6624 46.7113 35.5428 45.8333 33.3327 45.8333C32.2276 45.8333 31.1678 45.3943 30.3864 44.6129C29.605 43.8315 29.166 42.7717 29.166 41.6667V37.5C29.166 35.2899 30.044 33.1703 31.6068 31.6074C33.1696 30.0446 35.2892 29.1667 37.4993 29.1667C38.6044 29.1667 39.6642 28.7277 40.4456 27.9463C41.227 27.1649 41.666 26.1051 41.666 25V16.6667C41.666 15.5616 41.227 14.5018 40.4456 13.7204C39.6642 12.939 38.6044 12.5 37.4993 12.5C30.8689 12.5 24.5101 15.1339 19.8217 19.8223C15.1333 24.5107 12.4993 30.8696 12.4993 37.5V79.1667C12.4993 81.3768 13.3773 83.4964 14.9401 85.0592C16.5029 86.622 18.6225 87.5 20.8327 87.5H33.3327Z"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M79.1667 87.5C81.3768 87.5 83.4964 86.622 85.0592 85.0592C86.622 83.4964 87.5 81.3768 87.5 79.1667V54.1667C87.5 51.9565 86.622 49.8369 85.0592 48.2741C83.4964 46.7113 81.3768 45.8333 79.1667 45.8333C78.0616 45.8333 77.0018 45.3943 76.2204 44.6129C75.439 43.8315 75 42.7717 75 41.6667V37.5C75 35.2899 75.878 33.1703 77.4408 31.6074C79.0036 30.0446 81.1232 29.1667 83.3333 29.1667C84.4384 29.1667 85.4982 28.7277 86.2796 27.9463C87.061 27.1649 87.5 26.1051 87.5 25V16.6667C87.5 15.5616 87.061 14.5018 86.2796 13.7204C85.4982 12.939 84.4384 12.5 83.3333 12.5C76.7029 12.5 70.3441 15.1339 65.6557 19.8223C60.9673 24.5107 58.3333 30.8696 58.3333 37.5V79.1667C58.3333 81.3768 59.2113 83.4964 60.7741 85.0592C62.3369 86.622 64.4565 87.5 66.6667 87.5H79.1667Z"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhotographyTestimonialsHero = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Client Name 1",
      text: "Fun, innovative and unflappable. Pocket Creatives are great to work with – whether it's finding the perfect lighting for a trifle to capturing GoPro footage on a whisk, they always approach every situation with a steady yet game-changing attitude.",
    },
    {
      id: 2,
      name: "Client Name 2",
      text: "Fun, innovative and unflappable. Pocket Creatives are great to work with – whether it's finding the perfect lighting for a trifle to capturing GoPro footage on a whisk, they always approach every situation with a steady yet game-changing attitude. I see the whole team as trusted creative partners to make great content together.",
    },
    {
      id: 3,
      name: "Client Name 3",
      text: "Fun, innovative and unflappable. Pocket Creatives are great to work with – whether it's finding the perfect lighting for a trifle to capturing GoPro footage on a whisk, they always approach every situation with a steady yet game-changing attitude.",
    },
  ]);

  const [descItems] = useState([
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus velit sem, vitae mollis dolor ultricies nec. Praesent odio mi, commodo accumsan libero vitae, finibus rhoncus mauris. Praesent non libero mattis, vulputate diam sed, convallis nunc. Fusce augue tortor, aliquam vel molestie volutpat, tincidunt at justo. Pellentesque lectus nunc, varius id posuere sit amet, finibus vitae est. Morbi venenatis ac nunc vulputate dignissim. Aliquam et volutpat sem. Sed ullamcorper suscipit viverra. Mauris auctor augue fringilla turpis aliquet commodo. Curabitur nunc augue, faucibus non bibendum sit amet, sagittis ut neque. Vivamus ac felis vel eros accumsan congue.",
    },
    {
      id: 2,
      text: "Nunc eu maximus purus. Nunc posuere aliquet aliquam. Aenean mauris nunc, mollis ut ornare vitae, venenatis fermentum purus. Nullam leo tortor, vestibulum vitae felis nec, aliquam feugiat nibh. Donec turpis arcu, pretium in blandit vel, mattis a enim. Aenean vestibulum urna eget efficitur luctus. Etiam sodales fringilla nisl non posuere. Duis posuere venenatis turpis, a pharetra purus vehicula a. Quisque eu vestibulum lorem, id interdum eros. In tempor vestibulum consequat. Aliquam sodales eu sapien nec consectetur. Etiam pulvinar scelerisque ullamcorper.",
    },
  ]);

  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const mobileCardsRef = useRef([]);

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startXRef = useRef(0);
  const draggingRef = useRef(false);
  const offsetRef = useRef(0);

  // Track which card is centered in mobile/tablet viewport via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveMobileIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    mobileCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      mobileCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // Document-level listeners so drag never breaks when cursor leaves the container
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

      const threshold = 60;
      const offset = offsetRef.current;
      if (offset < -threshold) {
        setItems((prev) => [prev[1], prev[2], prev[0]]);
      } else if (offset > threshold) {
        setItems((prev) => [prev[2], prev[0], prev[1]]);
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
  }, []);

  const handleStart = (e) => {
    if (isAnimating) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    startXRef.current = clientX;
    offsetRef.current = 0;
    draggingRef.current = true;
    setIsDragging(true);
    setDragOffset(0);
  };

  return (
    <section 
      className="relative w-full bg-[#EAEAEA] min-h-screen pb-36 overflow-hidden flex flex-col items-center select-none"
      style={{ paddingTop: "150px" }}
    >
      {/* Main Container */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Main Heading */}
        <h1
          className="text-black xl:text-[#526E87] text-center font-extrabold mb-8 w-full"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(42px, 6vw, 84px)",
            lineHeight: "100%",
            letterSpacing: "-0.05em",
          }}
        >
          Photography Testimonials
        </h1>

        {/* ============================================================ */}
        {/* DESCRIPTION TEXT MOBILE PEEK CAROUSEL (Snap Scroll)           */}
        {/* ============================================================ */}
        <div
          className="flex lg:hidden w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-16 px-6 gap-4 -mx-6"
          style={{ width: "calc(100% + 48px)" }}
        >
          {descItems.map((item, idx) => (
            <div
              key={item.id}
              className={`snap-start shrink-0 w-[78vw] bg-white rounded-sm p-6 shadow-sm text-black ${
                idx === 0 ? "ml-6" : ""
              } ${idx === descItems.length - 1 ? "mr-6" : ""}`}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                lineHeight: "135%",
                letterSpacing: "-0.02em",
              }}
            >
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Desktop/Tablet Description Layout — NOW SLIDEABLE */}
        <div
          className="hidden lg:flex flex-row overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 w-full max-w-[1200px] mb-16 text-black xl:text-[#526E87] pb-4"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "135%",
            letterSpacing: "-0.03em",
          }}
        >
          {descItems.map((item) => (
            <div key={item.id} className="text-left shrink-0 w-[85%] snap-start">
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* ============================================================ */}
        {/* TESTIMONIAL CAROUSEL                                          */}
        {/* ============================================================ */}

        {/* MOBILE CAROUSEL — Layout matched to VideoTestimonialsHero */}
        <div
          className="flex lg:hidden w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide relative h-[460px] pt-4 pb-20 mb-12 px-6 gap-4 -mx-6"
          style={{ width: "calc(100% + 48px)" }}
        >
          {items.map((item, index) => {
            const isCenterMobile = activeMobileIndex === index;

            return (
              <div
                key={item.id}
                data-index={index}
                ref={(el) => (mobileCardsRef.current[index] = el)}
                className={`snap-start shrink-0 w-[78vw] h-[360px] p-8 flex flex-col justify-center shadow-xl rounded-sm bg-white text-black relative ${
                  index === 0 ? "ml-6" : ""
                } ${index === items.length - 1 ? "mr-6" : ""}`}
              >
                <QuoteIcon className="absolute top-6 left-6 text-black/10 w-[60px] h-[60px]" />
                <QuoteIcon className="absolute bottom-6 right-6 rotate-180 text-black/10 w-[60px] h-[60px]" />

                <div className="relative z-10 text-left flex flex-col items-start w-full">
                  <p
                    className="mb-6"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "135%",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.text}
                  </p>

                  <div className="bg-[#FCBE17] px-4 py-1.5 shadow-sm">
                    <span
                      className="text-black font-extrabold"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "18px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.name}
                    </span>
                  </div>
                </div>

                {/* Dynamically displays logo/photo on whichever card is currently active/centered */}
                {isCenterMobile && (
                  <div className="absolute -bottom-[50px] left-1/2 -translate-x-1/2 w-[100px] h-[100px] bg-[#D9D9D9] rounded-full flex items-center justify-center shadow-md border-4 border-[#EAEAEA] z-30">
                    <span className="text-black text-[10px] font-medium text-center px-1">
                      [company logo/photo]
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* DESKTOP/TABLET CAROUSEL */}
        <div
          className="hidden lg:flex relative w-full max-w-[1200px] h-[600px] pb-32 justify-center items-center cursor-grab active:cursor-grabbing overflow-hidden select-none touch-pan-y"
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        >
          {items.map((item, index) => {
            const isCenter = index === 1;
            const isLeft = index === 0;
            const isRight = index === 2;

            let baseTranslateX = 0;
            if (isLeft) baseTranslateX = -550;
            if (isCenter) baseTranslateX = 0;
            if (isRight) baseTranslateX = 550;

            const translateX = baseTranslateX + dragOffset;

            return (
              <div
                key={item.id}
                style={{
                  transform: `translateX(${translateX}px)`,
                  transition: isDragging
                    ? "none"
                    : "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.3s ease",
                }}
                className={`absolute flex flex-col justify-between p-8 lg:p-12 shadow-2xl rounded-sm pointer-events-none ${
                  isCenter
                    ? "w-[680px] min-h-[400px] bg-[#179CBD] text-white z-20 opacity-100"
                    : "w-[360px] min-h-[380px] bg-white text-black z-10 opacity-100"
                }`}
              >
                <QuoteIcon
                  className={`absolute top-6 left-6 ${
                    isCenter
                      ? "text-white/15 w-[90px] h-[90px]"
                      : "text-black/10 w-[70px] h-[70px]"
                  }`}
                />
                <QuoteIcon
                  className={`absolute bottom-6 right-6 rotate-180 ${
                    isCenter
                      ? "text-white/15 w-[90px] h-[90px]"
                      : "text-black/10 w-[70px] h-[70px]"
                  }`}
                />

                <div className="relative z-10 my-auto text-left flex flex-col items-start">
                  <p
                    className="mb-6 max-w-[580px]"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: isCenter ? "18px" : "16px",
                      lineHeight: "135%",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.text}
                  </p>

                  <div className="bg-[#FCBE17] px-4 py-1.5 shadow-sm">
                    <span
                      className="text-black font-extrabold"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: isCenter ? "26px" : "20px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.name}
                    </span>
                  </div>
                </div>

                {isCenter && (
                  <div className="absolute -bottom-[75px] left-1/2 -translate-x-1/2 w-[160px] h-[160px] bg-[#D9D9D9] rounded-full flex items-center justify-center shadow-lg border-4 border-[#EAEAEA] z-30">
                    <span className="text-black text-xs font-medium">
                      [company logo/photo]
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default PhotographyTestimonialsHero;