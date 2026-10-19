import * as React from "react";
import { useState } from "react";

const AboutWhyWorkWithUs = () => {
  const services = [
    {
      title: "We're consultative",
      description:
        "The consultation process is arguably the most important stage of any project. Within a few questions we can understand more about what you're looking for and how we can best provide our video and photography services. Our aim is to understand what you need, provide our recommendations, and then present you with some options.",
    },
    {
      title: "We care about how it feels",
      description:
        "Good content matters—but so does the experience. From first chat to final edit, we keep things easy, honest, and collaborative. We listen, we guide, and we make sure the process feels smooth from start to finish.",
    },
    {
      title: "We work around you",
      description:
        "Every client's different, so we don't approach projects the same way. We're flexible with pricing, clear about costs, and always happy to find smart ways to make your budget go further.",
    },
    {
      title: "We make visuals that speak",
      description:
        "We don't just shoot pretty pictures. We tell stories. We use styling, locations, and talent to help your brand stand out and feel real. We want to help you surpass expectations and achieve more than simply keeping up with your competition.",
    },
    {
      title: "Values You Can Feel",
      description:
        "We treat every client like a partner and stay flexible across industries. We work fast when needed, stay kind always, and commit to working transparently. We believe in being kind, honest, and easy to work with because that's how great work gets made.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const total = services.length;

  const goNext = () => setActiveIndex((i) => (i + 1) % total);
  const goPrev = () => setActiveIndex((i) => (i - 1 + total) % total);

  return (
    <section className="w-full bg-[#FCBE17] py-20 lg:py-28 overflow-hidden">

      {/* ============================================================ */}
      {/* MOBILE — Why us? + teal card offset right                     */}
      {/* ============================================================ */}
      <div className="lg:hidden">
        {/* Header */}
        <div className="px-6 mb-10">
          <h2 className="text-white font-bold text-[56px] leading-[100%] tracking-[-0.05em] mb-6">
            Why us?
          </h2>
          <p className="text-white font-medium text-[16px] leading-[1.4] tracking-[-0.05em]">
            We know that you have a wonderful variety of creative video and
            photography companies out there to choose from, so here are the
            reasons we'd like you to consider us:
          </p>
        </div>

        {/* Teal card — flush right, yellow space only on the left */}
        <div className="pl-6">
          <div className="bg-[#179CBD] px-8 py-10 min-h-[500px] flex flex-col justify-between">
            <div>
              <h3 className="text-white font-bold text-[28px] leading-[1.1] tracking-[-0.05em] mb-6">
                {services[activeIndex].title}
              </h3>
              <p className="text-black font-medium text-[16px] leading-[1.3] tracking-[-0.05em]">
                {services[activeIndex].description}
              </p>
            </div>

            {/* Two yellow arrow buttons — left + right */}
            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous service"
                className="inline-flex items-center justify-center rounded-full bg-[#FCBE17] hover:opacity-90 transition-opacity"
                style={{ width: "32px", height: "32px" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next service"
                className="inline-flex items-center justify-center rounded-full bg-[#FCBE17] hover:opacity-90 transition-opacity"
                style={{ width: "32px", height: "32px" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP — completely unchanged                                */}
      {/* ============================================================ */}
      <div className="hidden lg:block">
        {/* Header */}
        <div className="pocket-container mb-16">
          <h2 className="text-white font-bold text-[120px] leading-[120%] tracking-[-0.05em] mb-8 whitespace-nowrap">
            Why work with us?
          </h2>
          <p className="text-black font-medium text-[30px] leading-[143%] tracking-[-0.05em] max-w-[1440px]">
            We make content that feels real and works hard. You get a team that
            listens, adapts, and delivers with care, creativity, and no fuss. We're
            here to help you stand out without making things complicated.
          </p>
        </div>

        {/* Blue box */}
        <div className="w-full flex justify-end">
          <div className="bg-[#179CBD] w-full max-w-[1704px] min-h-[452px] py-16 px-16 flex items-center">
            <div className="grid grid-cols-4 gap-8 w-full">
              {services.slice(0, 4).map((service, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-white font-bold text-[30px] leading-[100%] tracking-[-0.05em] mb-6">
                    {service.title}
                  </h3>
                  <p className="text-white font-medium text-[20px] leading-[120%] tracking-[-0.05em]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutWhyWorkWithUs;  