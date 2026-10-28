import React from "react";

const HowWeWorkFooter = () => {
  return (
    <section className="relative w-full bg-[#FCBE17] py-20 md:py-32 overflow-hidden flex justify-center">
      
      {/* The Exact SVG "3" in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] md:w-[672px] md:h-[882px] pointer-events-none opacity-20 md:opacity-20 z-0">
        <svg width="100%" height="100%" viewBox="0 0 672 882" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="stroke0_2491_1740" maskUnits="userSpaceOnUse" x="-0.524414" y="-0.0625" width="673" height="882" fill="black">
            <rect fill="white" x="-0.524414" y="-0.0625" width="673" height="882"/>
            <path d="M334.022 851.875C275.689 851.875 223.736 841.849 178.163 821.797C132.851 801.484 97.0433 773.62 70.7412 738.203C44.6995 702.526 31.2881 661.38 30.5068 614.766H200.819C201.861 634.297 208.241 651.484 219.96 666.328C231.939 680.911 247.825 692.24 267.616 700.312C287.408 708.385 309.674 712.422 334.413 712.422C360.194 712.422 382.981 707.865 402.772 698.75C422.564 689.635 438.059 677.005 449.257 660.859C460.455 644.714 466.054 626.094 466.054 605C466.054 583.646 460.064 564.766 448.085 548.359C436.366 531.693 419.439 518.672 397.304 509.297C375.429 499.922 349.387 495.234 319.179 495.234H244.569V371.016H319.179C344.7 371.016 367.226 366.589 386.757 357.734C406.549 348.88 421.913 336.641 432.851 321.016C443.788 305.13 449.257 286.641 449.257 265.547C449.257 245.495 444.439 227.917 434.804 212.812C425.429 197.448 412.147 185.469 394.96 176.875C378.033 168.281 358.241 163.984 335.585 163.984C312.668 163.984 291.705 168.151 272.694 176.484C253.684 184.557 238.45 196.146 226.991 211.25C215.533 226.354 209.413 244.062 208.632 264.375H46.5225C47.3037 218.281 60.4548 177.656 85.9756 142.5C111.496 107.344 145.871 79.8698 189.101 60.0781C232.59 40.026 281.679 30 336.366 30C391.575 30 439.882 40.026 481.288 60.0781C522.694 80.1302 554.856 107.214 577.772 141.328C600.95 175.182 612.408 213.203 612.147 255.391C612.408 300.182 598.476 337.552 570.351 367.5C542.486 397.448 506.158 416.458 461.366 424.531V430.781C520.22 438.333 565.012 458.776 595.741 492.109C626.731 525.182 642.095 566.589 641.835 616.328C642.095 661.901 628.944 702.396 602.382 737.812C576.08 773.229 539.752 801.094 493.397 821.406C447.043 841.719 393.918 851.875 334.022 851.875Z"/>
          </mask>
          <path d="M334.022 851.875C275.689 851.875 223.736 841.849 178.163 821.797C132.851 801.484 97.0433 773.62 70.7412 738.203C44.6995 702.526 31.2881 661.38 30.5068 614.766H200.819C201.861 634.297 208.241 651.484 219.96 666.328C231.939 680.911 247.825 692.24 267.616 700.313C287.408 708.385 309.674 712.422 334.413 712.422C360.194 712.422 382.981 707.865 402.772 698.75C422.564 689.635 438.059 677.005 449.257 660.859C460.455 644.714 466.054 626.094 466.054 605C466.054 583.646 460.064 564.766 448.085 548.359C436.366 531.693 419.439 518.672 397.304 509.297C375.429 499.922 349.387 495.234 319.179 495.234H244.569V371.016H319.179C344.7 371.016 367.226 366.589 386.757 357.734C406.549 348.88 421.913 336.641 432.851 321.016C443.788 305.13 449.257 286.641 449.257 265.547C449.257 245.495 444.439 227.917 434.804 212.812C425.429 197.448 412.147 185.469 394.96 176.875C378.033 168.281 358.241 163.984 335.585 163.984C312.668 163.984 291.705 168.151 272.694 176.484C253.684 184.557 238.45 196.146 226.991 211.25C215.533 226.354 209.413 244.062 208.632 264.375H46.5225C47.3037 218.281 60.4548 177.656 85.9756 142.5C111.496 107.344 145.871 79.8698 189.101 60.0781C232.59 40.026 281.679 30 336.366 30C391.575 30 439.882 40.026 481.288 60.0781C522.694 80.1302 554.856 107.214 577.772 141.328C600.95 175.182 612.408 213.203 612.147 255.391C612.408 300.182 598.476 337.552 570.351 367.5C542.486 397.448 506.158 416.458 461.366 424.531V430.781C520.22 438.333 565.012 458.776 595.741 492.109C626.731 525.182 642.095 566.589 641.835 616.328C642.095 661.901 628.944 702.396 602.382 737.812C576.08 773.229 539.752 801.094 493.397 821.406C447.043 841.719 393.918 851.875 334.022 851.875Z" strokeWidth="60" stroke="#243450" strokeOpacity="0.1" mask="url(#stroke0_2491_1740)"/>
        </svg>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
        
        {/* LEFT SIDE: Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-10">
          <h2 
            // Using min-[1920px] to force white on 1920+ screens
            className="text-black min-[1920px]:text-white mb-8 md:mb-10"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(48px, 8vw, 100px)",
              lineHeight: "1",
              letterSpacing: "-0.05em"
            }}
          >
            See you<br />next time
          </h2>
          
          <div 
            className="space-y-4 max-w-[450px]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "130%",
              letterSpacing: "-0.05em",
            }}
          >
            {/* Paragraphs stay black across all screens */}
            <p className="text-black">
              The truth of the matter, is that we love all this. We’re here because we choose to be (and because we failed the GCHQ entry quiz). We’ve built a team who genuinely care about delivering you the best service that we’re able to.
            </p>
            <p className="text-black">
              The next step in the process is seeing how we can get it even better for you next time.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="w-full flex flex-col justify-center mt-8 lg:mt-0">
          <h3 
            className="mb-6 text-left text-black"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 3vw, 32px)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to see what we could do with<br />your next project?
          </h3>

          <form className="w-full flex flex-col text-left">
            {/* Inputs Row */}
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 mb-4">
              
              {/* Mobile Inputs */}
              <div className="lg:hidden">
                <label className="block text-black font-medium text-[16px] mb-2">Full Name*</label>
                <input type="text" placeholder="Full Name" className="w-full bg-white h-[55px] px-4 text-[16px] text-black border border-gray-300 outline-none focus:ring-2 focus:ring-[#1EA4B9]" />
              </div>

              <div className="lg:hidden">
                <label className="block text-black font-medium text-[16px] mb-2">Contact Number*</label>
                <input type="tel" placeholder="Contact Number" className="w-full bg-white h-[55px] px-4 text-[16px] text-black border border-gray-300 outline-none focus:ring-2 focus:ring-[#1EA4B9]" />
              </div>

              <div className="lg:hidden">
                <label className="block text-black font-medium text-[16px] mb-2">Email Address*</label>
                <input type="email" placeholder="Email Address" className="w-full bg-white h-[55px] px-4 text-[16px] text-black border border-gray-300 outline-none focus:ring-2 focus:ring-[#1EA4B9]" />
              </div>

              {/* Desktop Inputs */}
              <div className="hidden lg:block">
                <label className="block text-black font-extrabold text-[14px] mb-2 tracking-[-0.02em]">What's your name?<span className="text-red-500">*</span></label>
                <input type="text" placeholder="John Doe" className="w-full bg-white h-[60px] px-5 text-[16px] text-black outline-none focus:ring-2 focus:ring-[#1EA4B9]" />
              </div>
              <div className="hidden lg:block">
                <label className="block text-black font-extrabold text-[14px] mb-2 tracking-[-0.02em]">Your email address?<span className="text-red-500">*</span></label>
                <input type="email" placeholder="johndoe@example.com" className="w-full bg-white h-[60px] px-5 text-[16px] text-black outline-none focus:ring-2 focus:ring-[#1EA4B9]" />
              </div>
              <div className="hidden lg:block">
                <label className="block text-black font-extrabold text-[14px] mb-2 tracking-[-0.02em]">Your contact number?<span className="text-red-500">*</span></label>
                <input type="tel" className="w-full bg-white h-[60px] px-5 text-[16px] text-black outline-none focus:ring-2 focus:ring-[#1EA4B9]" />
              </div>

            </div>

            {/* Textarea */}
            <div className="mb-6">
              <label className="block text-black font-medium lg:font-extrabold text-[16px] lg:text-[14px] mb-2 tracking-[-0.02em]">
                Message <span className="hidden lg:inline text-red-500">*</span>
              </label>
              <textarea 
                className="w-full bg-white h-[200px] lg:h-[320px] px-4 py-4 lg:px-8 lg:py-8 text-[16px] text-black outline-none border border-gray-300 lg:border-none focus:ring-2 focus:ring-[#1EA4B9] resize-none"
                placeholder="Message"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elit a lectus dignissim porta at sit amet ipsum. Mauris euismod placerat elementum. Ut scelerisque leo mauris, a lobortis enim aliquam quis. Fusce aliquam ornare pharetra. Curabitur eros ligula, egestas at lacinia vitae, rutrum quis mauris."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center lg:justify-end">
              <button 
                type="submit"
                className="w-full lg:w-auto bg-[#1EA4B9] text-white font-extrabold text-[16px] px-12 py-4 lg:py-3 rounded-lg lg:rounded-xl hover:bg-[#179CBD] transition-colors"
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

export default HowWeWorkFooter;