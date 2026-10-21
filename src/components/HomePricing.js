import React from "react";

const HomePricing = () => {
  return (
    <section className="w-full bg-[#F4F4F4] flex items-center">
      <div className="w-full py-16 md:py-24">
        <div className="px-6 md:pl-[12.5%] md:pr-8 lg:pr-16">
          
          {/* Top row: heading + View Pricing button */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-10 mb-12 lg:mb-20 lg:pr-[12.5%]">
            
            {/* Heading */}
            <h2 className="flex-1 text-[40px] md:text-6xl lg:text-[80px] font-extrabold leading-[1.1] tracking-[-0.03em] text-black">
              We value<br className="md:hidden" />
              <span className="text-[#179CBD]"> transparency,</span><br className="md:hidden" />
              <span className="hidden md:inline"> </span>so let's talk about<br className="md:hidden" />
              <span className="hidden md:inline"> </span>pricing.
            </h2>

            {/* View Pricing Button */}
            <button 
              className="bg-pocketYellow text-pocketBlack text-sm md:text-2xl font-bold px-6 py-2 md:px-8 md:py-4 rounded-full md:rounded-xl hover:opacity-90 transition-opacity shrink-0 mx-auto lg:mx-0 mt-2 lg:mt-0"
              style={{ boxShadow: "3px 3px 6px 0px #526E87" }}
            >
              View Pricing
            </button>
          </div>

          {/* Sub heading - CHANGED mb-20 to mb-8 on mobile */}
          <p className="text-black md:text-pocketGrey text-xl md:text-3xl lg:text-[40px] font-medium leading-[1.4] tracking-[-0.02em] max-w-[700px] mb-8 lg:mb-40">
            Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat
            porta quam ornare.
          </p>

          {/* Bottom row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
            
            <p className="text-black md:text-pocketGrey text-base md:text-lg font-medium leading-[1.9] max-w-[700px]">
              Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat
              porta quam ornare. In nec lacinia consectetur placerat vestibulum
              sem odio. In feugiat elit fames eget lobortis turpis scelerisque
              tincidunt. Enim.
            </p>

            {/* Request a quote (Mobile uses the Value Price box) */}
            <div className="flex flex-col w-full lg:w-fit mx-auto lg:mx-0">
              
              {/* Mobile "Pocket Promise" header - Shifted Right */}
              <h3 
                className="text-black mb-4 text-center lg:hidden pl-6"
                style={{ 
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "48px",
                  lineHeight: "100%",
                  letterSpacing: "-0.05em"
                }}
              >
                Pocket Promise
              </h3>
              
              {/* The Button */}
              <button 
                className="bg-pocketYellow rounded-xl w-full lg:w-auto px-6 py-6 flex items-center justify-center lg:gap-4 hover:opacity-90 transition-opacity"
                style={{ boxShadow: "3px 3px 6px 0px #526E87" }}
              >
                {/* Mobile Text Layout */}
                <span className="lg:hidden flex items-center justify-center gap-4 pl-4">
                  <span className="text-white font-black text-4xl leading-none tracking-[-0.03em]">
                    Value
                  </span>
                  <span className="text-black font-medium text-2xl leading-none mt-2">
                    Price
                  </span>
                  <svg className="w-6 h-6 text-[#179CBD] ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                </span>

                {/* Desktop Text Layout */}
                <span className="hidden lg:flex items-center gap-4">
                  <span className="text-white font-black text-5xl md:text-6xl lg:text-[80px] leading-none tracking-[-0.03em]">
                    Request
                  </span>
                  <span className="text-pocketBlack font-medium text-2xl md:text-3xl lg:text-[32px] leading-[1.1] text-left">
                    a<br />
                    quote
                  </span>
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePricing;