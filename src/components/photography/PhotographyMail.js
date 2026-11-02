import React from "react";

const PhotographyMail = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-[#FCBE17] py-16 md:py-24 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Big Text */}
        <div>
          <h2 
            className="text-black"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(40px, 6vw, 64px)",
              lineHeight: "1.05",
              letterSpacing: "-0.05em"
            }}
          >
            Ready to see<br className="hidden md:block" /> what we could<br className="hidden md:block" /> do with your<br className="hidden md:block" /> next project?
          </h2>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full">
          <form onSubmit={handleSubmit} className="w-full flex flex-col text-left">
            
            {/* Top Row Inputs / Mobile Stacked Inputs */}
            <div className="flex flex-col md:grid md:grid-cols-3 gap-4 mb-4">
              
              {/* Mobile Only Labels & Inputs */}
              <div className="md:hidden flex flex-col gap-4 mb-4">
                <div>
                  <label className="block text-black font-medium text-[16px] mb-2">Full Name*</label>
                  <input type="text" placeholder="Full Name" className="w-full bg-white h-[55px] px-4 text-[15px] text-black border border-gray-400 outline-none focus:ring-2 focus:ring-[#1EA4B9]" />
                </div>
                <div>
                  <label className="block text-black font-medium text-[16px] mb-2">Contact Number*</label>
                  <input type="tel" placeholder="Contact Number" className="w-full bg-white h-[55px] px-4 text-[15px] text-black border border-gray-400 outline-none focus:ring-2 focus:ring-[#1EA4B9]" />
                </div>
                <div>
                  <label className="block text-black font-medium text-[16px] mb-2">Email Address*</label>
                  <input type="email" placeholder="Email Address" className="w-full bg-white h-[55px] px-4 text-[15px] text-black border border-gray-400 outline-none focus:ring-2 focus:ring-[#1EA4B9]" />
                </div>
              </div>

              {/* Desktop/Tablet Inputs */}
              <div className="hidden md:block">
                <label className="block text-black font-extrabold text-[14px] mb-2 tracking-[-0.02em]">
                  What's your name?<span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="John Doe" className="w-full bg-white h-[55px] px-4 text-[15px] text-black outline-none focus:ring-2 focus:ring-[#1EA4B9]" />
              </div>
              <div className="hidden md:block">
                <label className="block text-black font-extrabold text-[14px] mb-2 tracking-[-0.02em]">
                  Your email address?<span className="text-red-500">*</span>
                </label>
                <input type="email" placeholder="johndoe@example.com" className="w-full bg-white h-[55px] px-4 text-[15px] text-black outline-none focus:ring-2 focus:ring-[#1EA4B9]" />
              </div>
              <div className="hidden md:block">
                <label className="block text-black font-extrabold text-[14px] mb-2 tracking-[-0.02em]">
                  Your contact number?<span className="text-red-500">*</span>
                </label>
                <input type="tel" className="w-full bg-white h-[55px] px-4 text-[15px] text-black outline-none focus:ring-2 focus:ring-[#1EA4B9]" />
              </div>

            </div>

            {/* Textarea */}
            <div className="mb-6">
              {/* Mobile Label */}
              <label className="block md:hidden text-black font-medium text-[16px] mb-2">
                Message
              </label>
              {/* Desktop Label */}
              <label className="hidden md:block text-black font-extrabold text-[14px] mb-2 tracking-[-0.02em]">
                How can we help?<span className="text-red-500">*</span>
              </label>
              
              <textarea 
                className="w-full bg-white h-[200px] md:h-[160px] p-4 text-[15px] text-black outline-none border border-gray-400 md:border-none focus:ring-2 focus:ring-[#1EA4B9] resize-none"
                placeholder="Message"
                defaultValue=""
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:justify-end w-full">
              <button 
                type="submit"
                className="w-full md:w-auto bg-[#1EA4B9] text-white font-bold text-[16px] md:text-[15px] px-10 py-3.5 md:py-2.5 rounded-lg hover:bg-[#179CBD] transition-colors"
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

export default PhotographyMail;