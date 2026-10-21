import * as React from "react";

const ContactHero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="relative w-full bg-[#179CBD] min-h-screen flex items-center pt-32 pb-16 lg:py-0 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Adjusted grid layout to give equal room or proper proportion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Text & Mobile Button */}
          <div className="flex flex-col justify-center">
            <h1 
              className="text-white mb-8 md:mb-10 font-extrabold tracking-[-0.05em] leading-[0.95]"
              style={{ 
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(48px, 5.2vw, 84px)" 
              }}
            >
              <span className="whitespace-nowrap">Grab a latte</span>
              <br />
              <span className="whitespace-nowrap">and let's</span>
              <br />
              <span className="whitespace-nowrap">have a chat</span>
            </h1>

            <div 
              className="text-white space-y-4 mb-10 max-w-[500px]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "18px", 
                lineHeight: "140%", 
                letterSpacing: "-0.03em"
              }}
            >
              <p>Want to talk about your new project with our video and photography agency team?</p>
              <p>We aim to reply within 1 hour during normal working hours, so we can get you that quote and any more information as quickly as possible.</p>
              <p>We'd love to hear from you!</p>
            </div>

            {/* Mobile Only Button */}
            <div className="lg:hidden w-full flex justify-center">
              <button 
                onClick={() => window.location.href = "mailto:hello@example.com"}
                className="inline-flex items-center gap-3 bg-[#FCBE17] text-black px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "200%",
                  letterSpacing: "-0.05em"
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Message us!
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Form (Desktop Only) */}
          <div className="hidden lg:block w-full">
            <form onSubmit={handleSubmit} className="w-full flex flex-col">
              
              {/* Top Row: 3 Inputs */}
              <div className="grid grid-cols-3 gap-4 mb-5 w-full">
                
                {/* Name Box */}
                <div>
                  <label className="block text-white font-extrabold text-[14px] mb-2 tracking-[-0.02em]">
                    What's your name?<span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white text-[16px] text-black outline-none focus:ring-2 focus:ring-[#FCBE17] rounded-none"
                    style={{
                      height: "60px",
                      padding: "0 20px"
                    }}
                  />
                </div>

                {/* Email Box */}
                <div>
                  <label className="block text-white font-extrabold text-[14px] mb-2 tracking-[-0.02em]">
                    Your email address?<span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="johndoe@example.com" 
                    className="w-full bg-white text-[16px] text-black outline-none focus:ring-2 focus:ring-[#FCBE17] rounded-none"
                    style={{
                      height: "60px",
                      padding: "0 20px"
                    }}
                  />
                </div>

                {/* Contact Number Box */}
                <div>
                  <label className="block text-white font-extrabold text-[14px] mb-2 tracking-[-0.02em]">
                    Your contact number?<span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    className="w-full bg-white text-[16px] text-black outline-none focus:ring-2 focus:ring-[#FCBE17] rounded-none"
                    style={{
                      height: "60px",
                      padding: "0 20px"
                    }}
                  />
                </div>

              </div>

              {/* Textarea Container */}
              <div className="w-full mb-6">
                <label className="block text-white font-extrabold text-[14px] mb-2 tracking-[-0.02em]">
                  How can we help?<span className="text-red-500">*</span>
                </label>
                <textarea 
                  className="w-full bg-white text-[16px] text-black outline-none focus:ring-2 focus:ring-[#FCBE17] resize-none rounded-none"
                  style={{
                    height: "320px",
                    padding: "30px"
                  }}
                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elit a lectus dignissim porta at sit amet ipsum. Mauris euismod placerat elementum. Ut scelerisque leo mauris, a lobortis enim aliquam quis. Fusce aliquam ornare pharetra. Curabitur eros ligula, egestas at lacinia vitae, rutrum quis mauris."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end w-full">
                <button 
                  type="submit"
                  className="bg-[#FCBE17] text-black font-extrabold hover:bg-yellow-500 transition-colors flex items-center justify-center rounded-2xl"
                  style={{
                    width: "188px",
                    height: "54px"
                  }}
                >
                  Send
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;