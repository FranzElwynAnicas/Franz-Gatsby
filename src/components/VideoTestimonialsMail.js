import React from "react";

const VideoTestimonialsMail = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-[#FCBE17] py-16 md:py-24 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Side: Big Text */}
        <div className="pt-2">
          <h2 
            className="text-black mb-6"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(42px, 5vw, 64px)",
              lineHeight: "1.05",
              letterSpacing: "-0.04em"
            }}
          >
            We'd love to hear<br className="hidden md:block" /> about you!
          </h2>
          <p 
            className="text-black max-w-[460px]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "1.4",
              letterSpacing: "-0.01em"
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id massa aliquam, imperdiet risus non, volutpat ligula. Nam pharetra eu leo a ultrices. Suspendisse potenti. Praesent nunc enim, bibendum nec leo eu, pellentesque ultrices ipsum. Praesent pretium nisl sapien, ac.
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full">
          <form onSubmit={handleSubmit} className="w-full flex flex-col text-left">
            
            {/* Top Row Inputs / Mobile Stacked Inputs */}
            <div className="flex flex-col md:grid md:grid-cols-3 gap-x-4 gap-y-6 mb-6">
              
              {/* Mobile Only Labels & Inputs */}
              <div className="md:hidden flex flex-col gap-6 mb-2">
                <div>
                  <label className="block text-black font-extrabold text-[14px] mb-2 tracking-[-0.02em]">What's your name?<span className="text-red-500">*</span></label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white h-[55px] px-4 text-[15px] text-black outline-none border border-transparent focus:ring-2 focus:ring-[#1EA4B9]" />
                </div>
                <div>
                  <label className="block text-black font-extrabold text-[14px] mb-2 tracking-[-0.02em]">Your email address?<span className="text-red-500">*</span></label>
                  <input type="email" placeholder="johndoe@example.com" className="w-full bg-white h-[55px] px-4 text-[15px] text-black outline-none border border-transparent focus:ring-2 focus:ring-[#1EA4B9]" />
                </div>
                <div>
                  <label className="block text-black font-extrabold text-[14px] mb-2 tracking-[-0.02em]">Your contact number?<span className="text-red-500">*</span></label>
                  <input type="tel" placeholder="Contact Number" className="w-full bg-white h-[55px] px-4 text-[15px] text-black outline-none border border-transparent focus:ring-2 focus:ring-[#1EA4B9]" />
                </div>
              </div>

              {/* Desktop/Tablet Inputs */}
              <div className="hidden md:block">
                <label className="block text-black font-extrabold text-[14px] mb-2 tracking-[-0.02em]">
                  What's your name?<span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="John Doe" className="w-full bg-white h-[55px] px-4 text-[15px] text-black outline-none border border-transparent focus:ring-2 focus:ring-[#1EA4B9]" />
              </div>
              <div className="hidden md:block">
                <label className="block text-black font-extrabold text-[14px] mb-2 tracking-[-0.02em]">
                  Your email address?<span className="text-red-500">*</span>
                </label>
                <input type="email" placeholder="johndoe@example.com" className="w-full bg-white h-[55px] px-4 text-[15px] text-black outline-none border border-transparent focus:ring-2 focus:ring-[#1EA4B9]" />
              </div>
              <div className="hidden md:block">
                <label className="block text-black font-extrabold text-[14px] mb-2 tracking-[-0.02em]">
                  Your contact number?<span className="text-red-500">*</span>
                </label>
                <input type="tel" className="w-full bg-white h-[55px] px-4 text-[15px] text-black outline-none border border-transparent focus:ring-2 focus:ring-[#1EA4B9]" />
              </div>

            </div>

            {/* Textarea */}
            <div className="mb-6">
              <label className="block text-black font-extrabold text-[14px] mb-2 tracking-[-0.02em]">
                How can we help?<span className="text-red-500">*</span>
              </label>
              
              <textarea 
                className="w-full bg-white h-[200px] md:h-[160px] p-4 text-[15px] text-black outline-none border border-transparent focus:ring-2 focus:ring-[#1EA4B9] resize-none"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elit a lectus dignissim porta at sit amet ipsum."
                defaultValue=""
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end w-full">
              <button 
                type="submit"
                className="w-full md:w-auto bg-[#1EA4B9] text-white font-bold text-[16px] md:text-[15px] px-12 py-3.5 md:py-3 rounded-lg hover:bg-[#179CBD] transition-colors"
              >
                Send
              </button>
            </div>
            
          </form>
        </div>

      </div>
    </section>
  );
};

export default VideoTestimonialsMail;