import React, { useState, useEffect } from "react";

const balls = [
  { id: 0, x: 120, size: 130, color: "bg-[#179CBD]", year: "2017", textColor: "text-white" },
  { id: 1, x: 440, size: 54, color: "bg-[#179CBD]" },
  { id: 2, x: 780, size: 54, color: "bg-[#179CBD]" },
  { id: 3, x: 1120, size: 54, color: "bg-[#179CBD]" },
  { id: 4, x: 1460, size: 54, color: "bg-[#179CBD]" },
  { id: 5, x: 1800, size: 54, color: "bg-[#179CBD]" },
  { id: 6, x: 2140, size: 130, color: "bg-[#179CBD]", year: "2025", textColor: "text-white" },
];

const nodes = [
  {
    id: "b2",
    ballX: 440,
    ballSize: 54,
    position: "below",
    content:
      "Steven's professional history started in broadcasting, supporting mainstream television programmes such as BBC's Watchdog, Crimewatch and Horizon and leading a 10-person team running 24/7 to make this happen.",
  },
  {
    id: "b3",
    ballX: 780,
    ballSize: 54,
    position: "above",
    content:
      "But photography and video production was always the passion, and he burnt all the hours in the day running a small, innovative corporate video production company alongside called Screensaver which could boast clients such as Tower Bridge, the Museum of London and the National Portrait Gallery. This paved the way to progress full time into the production world and merged into Tailwind Media into 2010.",
  },
  {
    id: "b4",
    ballX: 1120,
    ballSize: 54,
    position: "below",
    content:
      "For 6 years, Steven oversaw the production team, making impressive in-roads into the UK corporate video market, working with some of the country's biggest names. Highlights would include a huge change campaign for Arcadia; helping to update the internal communications video magazine for electronics giant Philips, working with pop star Olly Murs for the Pringles 25th birthday adverts, and overseeing a multitude of projects for Tesco, Currys PC World and Groupon to name just a few.",
  },
  {
    id: "b5",
    ballX: 1460,
    ballSize: 54,
    position: "above",
    content:
      "2015 saw the creation of SMC, after Steven wanted to take a different direction, by offering both video and photography. Haider Romero Perez and Lauren Hodge were invited to join, bringing a wealth of skill, enthusiasm, and drive and within 2 years have become co-owners of the newly incorporated Pocket Creatives.",
  },
  {
    id: "b6",
    ballX: 1800,
    ballSize: 54,
    position: "below",
    content:
      "\"SMC provided a wonderful opportunity to meet new business owners and establish ourselves in new markets, offering new video and photography services and building a friendly and creative business where we're building long-term working relationships with our clients. Pocket Creatives couldn't have been launched without the faith and trust shown in us by our clients, and we look forward to growing alongside them over the years to come.\"",
  },
  {
    id: "b7",
    ballX: 2140,
    ballSize: 130,
    position: "above",
    content:
      "Now, embarking on our 6th year in business together, we've reached one milestone after the next. We boast an enviable client list, with impressive client retention numbers and have built a genuinely wonderful team around us.",
  },
];

const desktopBalls = [
  { id: 0, x: 590, size: 244, color: "bg-[#179CBD]", year: "2017", textColor: "text-white" },
  { id: 1, x: 1313, size: 83, color: "bg-[#179CBD]" },
  { id: 2, x: 1823, size: 83, color: "bg-[#179CBD]" },
  { id: 3, x: 2378, size: 83, color: "bg-[#179CBD]" },
  { id: 4, x: 2933, size: 83, color: "bg-[#179CBD]" },
  { id: 5, x: 3443, size: 83, color: "bg-[#179CBD]" },
  { id: 6, x: 4004, size: 244, color: "bg-[#179CBD]", year: "2025", textColor: "text-white" },
];

const stops = [
  { ballIndex: 0 },
  { ballIndex: 1 },
  { ballIndex: 2 },
  { ballIndex: 3 },
  { ballIndex: 4 },
  { ballIndex: 5 },
  { ballIndex: 6 },
];

const AboutOurStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1920
  );

  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const activeBall = desktopBalls[stops[activeIndex].ballIndex];
  const centerOffset = -260;
  const translateX =
    viewportWidth / 2 - activeBall.x - activeBall.size / 2 + centerOffset;

  const handleNext = () =>
    activeIndex < stops.length - 1 && setActiveIndex(activeIndex + 1);
  const handlePrev = () => activeIndex > 0 && setActiveIndex(activeIndex - 1);

  /* ─── Mobile layout constants ─── */
  const CONTAINER_HEIGHT = 600;
  const LINE_TOP = 335;
  const LEFT_PADDING = 24;
  const TEXT_CARD_WIDTH = 250;

  return (
    <section className="w-full font-sans select-none">
      {/* ============================================================ */}
      {/* MOBILE — Matches exact visual design + updated title typography */}
      {/* ============================================================ */}
      <div className="lg:hidden bg-[#FCBE17] overflow-hidden">
        <div
          className="overflow-x-auto overflow-y-hidden scrollbar-none"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div
            className="relative"
            style={{ width: "2600px", height: `${CONTAINER_HEIGHT}px` }}
          >
            {/* ─── "Our Story" heading + text ─── */}
            <div
              className="absolute left-[24px] top-[28px]"
              style={{ width: "300px" }}
            >
              <h2
                className="text-white mb-3"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "60px",
                  lineHeight: "120%",
                  letterSpacing: "-0.05em",
                }}
              >
                Our Story
              </h2>
              <p className="text-black font-semibold leading-[1.3] text-[15px] tracking-tight">
                <span className="font-extrabold">Pocket Creatives</span> launched in the winter of 2017, formed as a limited company following the team working under the name of Steven Mayatt Creative since 2015. Pocket is the next step in our evolution.
              </p>
            </div>

            {/* Timeline line */}
            <div
              className="absolute h-[2px] bg-black"
              style={{ top: `${LINE_TOP}px`, left: `${LEFT_PADDING}px`, width: "2300px" }}
            />
            {/* Left diamond pin */}
            <div
              className="absolute w-3.5 h-3.5 bg-black rotate-45"
              style={{ top: `${LINE_TOP - 6}px`, left: `${LEFT_PADDING}px` }}
            />

            {/* Balls along timeline */}
            {balls.map((ball) => {
              const isBig = ball.size === 130;
              const sizePx = isBig ? 130 : 54;
              const halfSize = sizePx / 2;
              const ballTop = LINE_TOP - halfSize;

              return (
                <div
                  key={ball.id}
                  className={`absolute ${ball.color} rounded-full flex items-center justify-center z-10 shadow-sm`}
                  style={{
                    left: `${ball.x}px`,
                    top: `${ballTop}px`,
                    width: `${sizePx}px`,
                    height: `${sizePx}px`,
                  }}
                >
                  {ball.year && (
                    <span
                      className={`font-bold leading-none ${ball.textColor}`}
                      style={{ fontSize: isBig ? "28px" : "14px" }}
                    >
                      {ball.year}
                    </span>
                  )}
                </div>
              );
            })}

            {/* Text cards above/below timeline */}
            {nodes.map((node) => {
              const isAbove = node.position === "above";
              const isBig = node.ballSize === 130;
              const halfSize = isBig ? 65 : 27;
              const clearance = 20;

              const textTop = LINE_TOP + halfSize + clearance;
              const textBottom = CONTAINER_HEIGHT - (LINE_TOP - halfSize - clearance);

              return (
                <div
                  key={node.id}
                  className="absolute text-[13px] font-normal text-black leading-[1.35] tracking-tight text-left"
                  style={{
                    left: `${node.ballX}px`,
                    width: `${TEXT_CARD_WIDTH}px`,
                    ...(isAbove
                      ? { bottom: `${textBottom}px` }
                      : { top: `${textTop}px` }),
                  }}
                >
                  {node.content}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP — completely unchanged                               */}
      {/* ============================================================ */}
      <div className="hidden lg:block relative w-full h-[1232px] bg-white overflow-hidden font-inter">
        <div
          className="absolute top-0 left-0 h-full w-[5000px] transition-transform duration-[800ms] ease-in-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          <div className="absolute top-[794px] left-[312px] w-[3837px] h-[6px] bg-[#526E87]" />
          <div className="absolute top-[782px] left-[300px] w-6 h-6 bg-[#526E87] rotate-45" />
          <div className="absolute top-[782px] left-[4137px] w-6 h-6 bg-[#526E87] rotate-45" />

          {desktopBalls.map((ball) => {
            const sizeClass =
              ball.size === 244 ? "w-[244px] h-[244px]" : "w-[83px] h-[83px]";
            const ballTop = ball.size === 244 ? 672 : 752;
            return (
              <div
                key={ball.id}
                className={`absolute ${sizeClass} ${ball.color} rounded-full flex items-center justify-center z-10`}
                style={{ left: `${ball.x}px`, top: `${ballTop}px` }}
              >
                {ball.year && (
                  <span
                    className={`text-[80px] font-bold leading-[1.2] tracking-[-5%] ${ball.textColor}`}
                  >
                    {ball.year}
                  </span>
                )}
              </div>
            );
          })}

          <h2
            className="absolute text-[80px] font-bold text-[#179CBD] leading-[1.2] tracking-[-5%]"
            style={{ left: 367, top: 165, width: 517 }}
          >
            Our Story
          </h2>
          <p
            className="absolute text-[40px] font-medium text-[#526E87] leading-[1.2] tracking-[-5%] whitespace-nowrap"
            style={{ left: 367, top: 320, width: 620 }}
          >
            Pocket Creatives launched in the winter
            <br />
            of 2017, formed as a limited company
            <br />
            following the team working under the
            <br />
            name of Steven Mayatt Creative since
            <br />
            2015. Pocket is the next step in our
            <br />
            evolution.
          </p>

          <p className="absolute text-[20px] font-bold text-[#526E87] leading-[1.2] tracking-[-5%]" style={{ left: 1119, top: 867, width: 500 }}>
            Steven's professional history started in broadcasting, supporting mainstream television programmes such as BBC's Watchdog, Crimewatch and Horizon and leading a 10-person team running 24/7 to make this happen.
          </p>
          <p className="absolute text-[20px] font-bold text-[#526E87] leading-[1.2] tracking-[-5%]" style={{ left: 1615, top: 528, width: 500 }}>
            But photography and video production was always the passion, and he burnt all the hours in the day running a small, innovative corporate video production company alongside called Screensaver which could boast clients such as Tower Bridge, the Museum of London and the National Portrait Gallery. This paved the way to progress full time into the production world and merged into Tailwind Media into 2010.
          </p>
          <p className="absolute text-[20px] font-bold text-black leading-[1.2] tracking-[-5%]" style={{ left: 2170, top: 867, width: 500 }}>
            For 6 years, Steven oversaw the production team, making impressive in-roads into the UK corporate video market, working with some of the country's biggest names. Highlights would include a huge change campaign for Arcadia; helping to update the internal communications video magazine for electronics giant Philips, working with pop star Olly Murs for the Pringles 25th birthday adverts, and overseeing a multitude of projects for Tesco, Currys PC World and Groupon to name just a few.
          </p>
          <p className="absolute text-[20px] font-bold text-black leading-[1.2] tracking-[-5%]" style={{ left: 2725, top: 576, width: 500 }}>
            2015 saw the creation of SMC, after Steven wanted to take a different direction, by offering both video and photography. Haider Romero Perez and Lauren Hodge were invited to join, bringing a wealth of skill, enthusiasm, and drive and within 2 years have become co-owners of the newly incorporated Pocket Creatives.
          </p>
          <p className="absolute text-[20px] font-bold text-black leading-[1.2] tracking-[-5%]" style={{ left: 3215, top: 867, width: 500 }}>
            "SMC provided a wonderful opportunity to meet new business owners and establish ourselves in new markets, offering new video and photography services and building a friendly and creative business where we're building long-term working relationships with our clients. Pocket Creatives couldn't have been launched without the faith and trust shown in us by our clients, and we look forward to growing alongside them over the years to come."
          </p>

          <p
            className="absolute text-[40px] font-medium text-black leading-[1.2] tracking-[-5%]"
            style={{ left: 4064, top: 345, width: 721 }}
          >
            Now, embarking on our 6th year in
            <br />
            business together, we've reached one
            <br />
            milestone after the next. We boast an
            <br />
            enviable client list, with impressive client
            <br />
            retention numbers and have built a
            <br />
            genuinely wonderful team around us.
          </p>
        </div>

        {/* Arrows */}
        <div className="absolute bottom-[70px] left-[381px] flex items-center gap-4 z-30">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous"
            className={`w-8 h-8 flex items-center justify-center transition-opacity ${
              activeIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex === stops.length - 1}
            aria-label="Next"
            className={`w-8 h-8 flex items-center justify-center transition-opacity ${
              activeIndex === stops.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M12 5L19 12L12 19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutOurStory;