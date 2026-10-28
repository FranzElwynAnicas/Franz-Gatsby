import React, { useState } from "react";

const accordionData = [
  {
    id: "understanding",
    title: (
      <>
        It starts by <br className="block lg:hidden" /> understanding
      </>
    ),
    content: (
      <>
        <p className="mb-4">
          You'll have to forgive us, but we ask a lot of questions at the start. There's a good reason for this, stay with me...
        </p>
        <p>
          Our initial consultation is designed to get what's in your head into ours. The more that we understand your brand and the context around your project, the better we can offer our expertise and tailor it to your needs. There are no templates here or off the shelf packages that 396 clients have bought before you, we're responding to your individual requirements.
        </p>
      </>
    ),
  },
  {
    id: "money",
    title: (
      <>
        It's not all about <br className="block lg:hidden" /> the money
      </>
    ),
    content: (
      <>
        <p className="mb-4">
          We all hate talking about money, right, and we're no different. Unless you tell us you have a million pounds to spend then that might change our feelings towards the conversation.
        </p>
        <p className="mb-4">
          The reality is that not many people get in touch with a million pounds to spend, but the important thing to understand is what you do have. The budget available will impact the route that we take to deliver your project. Once we've understood the scope of your project we can give you a really good idea of the likely spend. We'll advise if we can cut any corners without the results suffering, and give plenty of recommendations at this point.
        </p>
        <p className="mb-4">
          We're here because we want to work with you, not put you off with unrealistic costings. If we can understand either what you want to spend, what you need to bring the project in for, or we can walk you through all of the options with which to make an informed decision.
        </p>
        <p>
          Let's get that out of the way early so that we can get on with the fun stuff!
        </p>
      </>
    ),
  },
  {
    id: "planning",
    title: (
      <>
        Planning is the most <br className="block lg:hidden" /> important stage
      </>
    ),
    content: (
      <>
        <p className="mb-4">
          I'm not sure we could sound any more boring if we tried, but spending time planning, and then planning some more, is crucial in the success of any project we take on.
        </p>
        <p className="mb-4">
          Sure, the filming team will argue that the choice of lenses are crucial, and the editors will chip-in with any of a hundred different cutting techniques. But if your project has missed a beat in the planning stage, it gets felt further down the line. Fact.
        </p>
        <p className="mb-4">
          The idea here is that if we can be detailed with our decisions as we are about production, before any lens gets mounted or any lights get switched on, production will run smoother. And it takes the guesswork out of knowing what you're going to get at the end.
        </p>
        <p>
          We have invested in a great team of Producers who will look after your project from start to finish, always on, running the show with your best interests at heart.
        </p>
      </>
    ),
  },
];

const HowWeWorkAccordion = () => {
  const [openId, setOpenId] = useState("understanding");

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-[#179CBD] py-12 md:py-28 overflow-hidden flex-none">
      
      {/* Background SVG "1" */}
      <div className="absolute top-4 md:top-8 left-4 md:left-32 pointer-events-none opacity-50 md:opacity-100">
        <svg width="220" height="442" className="md:w-[320px] md:h-[642px]" viewBox="0 0 320 642" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="stroke0_16184_1039" maskUnits="userSpaceOnUse" x="-0.625" y="-0.181641" width="321" height="642" fill="black">
            <rect fill="white" x="-0.625" y="-0.181641" width="321" height="642"/>
            <path d="M289.659 30.0002V611.818H166.648V146.762H163.239L30 230.284V121.193L174.034 30.0002H289.659Z"/>
          </mask>
          <path d="M289.659 30.0002V611.818H166.648V146.762H163.239L30 230.284V121.193L174.034 30.0002H289.659Z" strokeWidth="60" stroke="#243450" strokeOpacity="0.1" mask="url(#stroke0_16184_1039)"/>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-12 flex flex-col gap-4 md:gap-10">
        {accordionData.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div key={item.id} className="w-full">
              {/* Header Button */}
              <button
                onClick={() => toggleAccordion(item.id)}
                className={`flex items-center justify-between text-left w-full p-4 md:p-0 transition-colors duration-300 ${
                  /* Mobile: All boxes are yellow. Desktop: Only open box is yellow */
                  isOpen ? "bg-[#FCBE17] text-black" : "bg-[#FCBE17] md:bg-transparent text-black md:text-white"
                }`}
              >
                <span
                  className="block"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(24px, 6vw, 80px)",
                    lineHeight: "1.1",
                    letterSpacing: "-0.02em",
                    padding: "0",
                  }}
                >
                  {item.title}
                </span>
                
                {/* Chevron Arrow */}
                <svg 
                  className={`shrink-0 ml-4 md:ml-8 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M6 9L12 15L18 9" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Content */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-4 md:mt-6" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className="text-white max-w-[1000px] px-2 md:px-0"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(16px, 2vw, 20px)",
                      lineHeight: "130%", 
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.content}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowWeWorkAccordion;