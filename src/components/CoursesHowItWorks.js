import React from "react";

const CoursesHowItWorks = () => {
  return (
    <section className="relative w-full bg-[#179CBD] py-16 md:py-24 px-6 md:px-12 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Text Content */}
        <div className="w-full">
          <h2 
            className="text-white mb-6 md:mb-12"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(40px, 8vw, 120px)", // Exact 120px on desktop
              lineHeight: "100%",
              letterSpacing: "-0.05em",
            }}
          >
            How does it work?
          </h2>
          
          <div 
            className="space-y-5 md:space-y-6 max-w-[850px]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(18px, 1.5vw, 20px)", // Exact 20px on desktop
              lineHeight: "120%", 
              letterSpacing: "-0.05em",
              color: "#FFFFFF",
            }}
          >
            <p>
              Bucking the trend of the mass of digital courses out there, ours are all in-person, 1 on 1 and fully bespoke. We're here to help build your perfect course, based on exactly what you'd like to know.
            </p>
            <p>
              We start off with an exploratory call to find out more about you, the skills that you'd like to learn, where you're keen to develop. From there, we'll build an itinerary for your days training and get it booked in.
            </p>
            <p>
              You'll be trained by one of our team who work day in day out prepping for new projects, filming, photographing and editing for clients ranging from small businesses to some of the largest organisations in the UK. So you're in great hands!
            </p>
          </div>
        </div>

        {/* Right Side: Animated Arrow (Hidden on Mobile) */}
        <div className="hidden lg:flex w-full lg:w-auto justify-center lg:justify-end items-center lg:pr-12">
          <div className="animate-bounce cursor-pointer">
            <svg 
              width="214" 
              height="117" 
              viewBox="0 0 214 117" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M10 10L107 107L204 10" 
                strokeWidth="20" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                stroke="white"
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoursesHowItWorks;