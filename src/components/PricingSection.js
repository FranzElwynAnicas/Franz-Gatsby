import React from "react";

const PricingSection = () => {
  return (
    <section className="w-full min-h-screen bg-pocketWhite flex items-center">
      <div className="w-full py-20">
        <div className="pl-[12.5%] pr-8 md:pr-16">
          {/* Top row: heading + View Pricing button */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 mb-20 lg:pr-[12.5%]">
            <h2 className="flex-1 text-5xl md:text-6xl lg:text-[80px] font-extrabold leading-[1.1] tracking-[-0.03em]">
              <span className="text-pocketYellow">We value</span>{" "}
              <span className="text-pocketTeal">transparency,</span>
              <br />
              <span className="text-pocketGrey">
                so let's talk about pricing.
              </span>
            </h2>

            <button className="bg-pocketYellow text-pocketBlack text-xl md:text-2xl font-bold px-8 py-4 rounded-xl shadow-[0_6px_12px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity shrink-0">
              View Pricing
            </button>
          </div>

          {/* Sub heading */}
          <p className="text-pocketGrey text-2xl md:text-3xl lg:text-[40px] font-medium leading-[1.4] tracking-[-0.02em] max-w-[700px] mb-40">
            Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat
            porta quam ornare.
          </p>

          {/* Bottom row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
            <p className="text-pocketGrey text-base md:text-lg font-medium leading-[1.9] max-w-[700px]">
              Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat
              porta quam ornare. In nec lacinia consectetur placerat vestibulum
              sem odio. In feugiat elit fames eget lobortis turpis scelerisque
              tincidunt. Enim.
            </p>

            {/* Request a quote */}
            <button className="bg-pocketYellow rounded-xl px-10 py-6 flex items-center justify-center gap-4 hover:opacity-90 transition-opacity shadow-[0_8px_20px_rgba(0,0,0,0.25)] w-fit mx-auto lg:mx-0">
              <span className="text-white font-black text-5xl md:text-6xl lg:text-[80px] leading-none tracking-[-0.03em]">
                Request
              </span>
              <span className="text-pocketBlack font-medium text-2xl md:text-3xl lg:text-[32px] leading-[1.1] text-left">
                a
                <br />
                quote
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;  