import * as React from "react";
import { useState, useEffect } from "react";

const balls = [
  { id: 0, x: 590,  size: 244, color: "bg-[#FFC107]", year: "2017", textColor: "text-white" },
  { id: 1, x: 1313, size: 83,  color: "bg-[#179CBD]" },
  { id: 2, x: 1823, size: 83,  color: "bg-[#179CBD]" },
  { id: 3, x: 2378, size: 83,  color: "bg-[#179CBD]" },
  { id: 4, x: 2933, size: 83,  color: "bg-[#179CBD]" },
  { id: 5, x: 3443, size: 83,  color: "bg-[#179CBD]" },
  { id: 6, x: 4004, size: 244, color: "bg-[#179CBD]", year: "2025", textColor: "text-white" },
];

// Small (20px bold) text blocks for balls 1–5
const textBlocks = [
  {
    id: "b1",
    top: 867, left: 1119, width: 500,
    color: "text-[#526E87]",
    content:
      "Steven’s professional history started in broadcasting, supporting mainstream television programmes such as BBC’s Watchdog, Crimewatch and Horizon and leading a 10-person team running 24/7 to make this happen.",
  },
  {
    id: "b2",
    top: 528, left: 1615, width: 500,
    color: "text-[#526E87]",
    content:
      "But photography and video production was always the passion, and he burnt all the hours in the day running a small, innovative corporate video production company alongside called Screensaver which could boast clients such as Tower Bridge, the Museum of London and the National Portrait Gallery. This paved the way to progress full time into the production world and merged into Tailwind Media into 2010.",
  },
  {
    id: "b3",
    top: 867, left: 2170, width: 500,
    color: "text-black",
    content:
      "For 6 years, Steven oversaw the production team, making impressive in-roads into the UK corporate video market, working with some of the country’s biggest names. Highlights would include a huge change campaign for Arcadia; helping to update the internal communications video magazine for electronics giant Philips, working with pop star Olly Murs for the Pringles 25th birthday adverts, and overseeing a multitude of projects for Tesco, Currys PC World and Groupon to name just a few.",
  },
  {
    id: "b4",
    top: 576, left: 2725, width: 500,
    color: "text-black",
    content:
      "2015 saw the creation of SMC, after Steven wanted to take a different direction, by offering both video and photography. Haider Romero Perez and Lauren Hodge were invited to join, bringing a wealth of skill, enthusiasm, and drive and within 2 years have become co-owners of the newly incorporated Pocket Creatives.",
  },
  {
    id: "b5",
    top: 867, left: 3215, width: 500,
    color: "text-black",
    content:
      "“SMC provided a wonderful opportunity to meet new business owners and establish ourselves in new markets, offering new video and photography services and building a friendly and creative business where we’re building long-term working relationships with our clients. Pocket Creatives couldn’t have been launched without the faith and trust shown in us by our clients, and we look forward to growing alongside them over the years to come.”",
  },
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
  const [viewportWidth, setViewportWidth] = useState(1920);

  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const activeBall = balls[stops[activeIndex].ballIndex];
  const centerOffset = -260;
  const translateX =
    viewportWidth / 2 - activeBall.x - activeBall.size / 2 + centerOffset;

  const handleNext = () =>
    activeIndex < stops.length - 1 && setActiveIndex(activeIndex + 1);
  const handlePrev = () => activeIndex > 0 && setActiveIndex(activeIndex - 1);

  return (
    <section className="relative w-full h-[1232px] bg-white overflow-hidden font-inter">
      <div
        className="absolute top-0 left-0 h-full w-[5000px] transition-transform duration-[800ms] ease-in-out"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        <div className="absolute top-[794px] left-[312px] w-[3837px] h-[6px] bg-[#526E87]" />
        <div className="absolute top-[782px] left-[300px] w-6 h-6 bg-[#526E87] rotate-45" />
        <div className="absolute top-[782px] left-[4137px] w-6 h-6 bg-[#526E87] rotate-45" />

        {/* Balls */}
        {balls.map((ball) => {
          const sizeClass = ball.size === 244 ? "w-[244px] h-[244px]" : "w-[83px] h-[83px]";
          const ballTop = ball.size === 244 ? 672 : 752;
          return (
            <div
              key={ball.id}
              className={`absolute ${sizeClass} ${ball.color} rounded-full flex items-center justify-center z-10`}
              style={{ left: `${ball.x}px`, top: `${ballTop}px` }}
            >
              {ball.year && (
                <span className={`text-[80px] font-bold leading-[1.2] tracking-[-5%] ${ball.textColor}`}>
                  {ball.year}
                </span>
              )}
            </div>
          );
        })}

        {/* Our Story heading + intro (2017) */}
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

        {/* 20px bold blocks for balls 1–5 */}
        {textBlocks.map((tb) => (
          <p
            key={tb.id}
            className={`absolute text-[20px] font-bold ${tb.color} leading-[1.2] tracking-[-5%]`}
            style={{ left: `${tb.left}px`, top: `${tb.top}px`, width: `${tb.width}px` }}
          >
            {tb.content}
          </p>
        ))}

        {/* 2025 summary — 40px Medium, 6-line break */}
        <p
          className="absolute text-[40px] font-medium text-black leading-[1.2] tracking-[-5%]"
          style={{ left: 4064, top: 345, width: 721 }}
        >
          Now, embarking on our 6th year in
          <br />
          business together, we’ve reached one
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
    </section>
  );
};

export default AboutOurStory;