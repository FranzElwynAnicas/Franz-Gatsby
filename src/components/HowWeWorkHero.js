import React from "react";
import { Link } from "gatsby";

const HowWeWorkHero = () => {
  return (
    <section className="w-full bg-[#F7F7F7] pt-24 pb-12 md:pt-28 md:pb-16 flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center justify-between">
        
        {/* LEFT SIDE: Text & Button */}
        <div className="flex flex-col items-start w-full">
          <h1 
            className="mb-6 text-[32px] md:text-[38px] xl:text-[42px]"
            style={{
              fontFamily: "Inter, sans-serif",
              lineHeight: "124%",
              letterSpacing: "-0.05em"
            }}
          >
            {/* MOBILE & TABLET / 1440px (Has yellow pill box) */}
            <span className="block 2xl:hidden">
              <span style={{ fontWeight: 800, color: "#179CBD" }}>Looking for a team with a </span>
              <span 
                style={{ 
                  fontWeight: 800, 
                  color: "#000000",
                  backgroundColor: "#FCBE17",
                  padding: "0 6px",
                  borderRadius: "6px",
                  display: "inline-block"
                }}
              >
                proven approach
              </span>
              <span style={{ fontWeight: 800, color: "#179CBD" }}> to creating great video and photography? Then this is for you.</span>
            </span>

            {/* 1920px DESKTOP (No pill, original multi-line styling) */}
            <span className="hidden 2xl:block">
              <span style={{ fontWeight: 400, color: "#526E87" }}>Looking for a </span>
              <span style={{ fontWeight: 800, color: "#179CBD" }}>team with a</span>
              <br />
              <span style={{ fontWeight: 800, color: "#179CBD" }}>proven approach</span>
              <span style={{ fontWeight: 400, color: "#526E87" }}> to creating</span>
              <br />
              <span className="whitespace-nowrap" style={{ fontWeight: 400, color: "#526E87" }}>
                great video and photography?
              </span>
              <br />
              <span style={{ fontWeight: 800, color: "#179CBD" }}>Then this is for you.</span>
            </span>
          </h1>

          <p 
            className="mb-6 text-[16px] md:text-[18px] max-w-[460px]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              lineHeight: "130%",
              letterSpacing: "-0.05em",
              color: "#526E87"
            }}
          >
            Why deliver boring and uninspiring content when visuals can be exciting, engaging and can work harder to really impact your audience.
          </p>

          {/* Have questions pill */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-start bg-[#FCBE17] hover:bg-yellow-500 transition-colors shrink-0 self-start"
            style={{
              width: "199px",
              height: "48px",
              gap: "7px",
              borderRadius: "16px",
              paddingLeft: "13px",
              boxShadow: "3px 3px 6px 0px rgba(0, 0, 0, 0.25)"
            }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path d="M19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4ZM19 6L12 10.8L5 6H19ZM19 18H5V8L12 12.8L19 8V18Z" fill="black" />
            </svg>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "-0.02em",
                color: "#000000"
              }}
            >
              Have questions?
            </span>
          </Link>
        </div>

        {/* RIGHT SIDE: Colored Cards (Hidden on mobile, visible on tablet/desktop) */}
        <div className="hidden lg:flex flex-col gap-5 w-full max-w-[794.011px] justify-self-end">
          
          {/* Blue Card */}
          <div 
            className="bg-[#179CBD] flex flex-col justify-center w-full shrink-0 p-6 xl:p-8"
            style={{
              height: "235px",
            }}
          >
            <div className="flex items-center gap-4 xl:gap-5 mb-2">
              <svg 
                className="shrink-0 w-[55px] h-[48px] xl:w-[70px] xl:h-[62px]" 
                viewBox="0 0 87 77" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2723_1373)">
                  <path d="M57.75 9.625C57.75 6.96309 59.9006 4.8125 62.5625 4.8125H81.8125C84.4744 4.8125 86.625 6.96309 86.625 9.625C86.625 12.2869 84.4744 14.4375 81.8125 14.4375H67.375V28.875C67.375 31.5369 65.2244 33.6875 62.5625 33.6875H48.125V48.125C48.125 50.7869 45.9744 52.9375 43.3125 52.9375H28.875V67.375C28.875 70.0369 26.7244 72.1875 24.0625 72.1875H4.8125C2.15059 72.1875 0 70.0369 0 67.375C0 64.7131 2.15059 62.5625 4.8125 62.5625H19.25V48.125C19.25 45.4631 21.4006 43.3125 24.0625 43.3125H38.5V28.875C38.5 26.2131 40.6506 24.0625 43.3125 24.0625H57.75V9.625Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_2723_1373">
                    <rect width="86.625" height="77" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <h2 
                className="text-[42px] xl:text-[64px]"
                style={{ 
                  fontFamily: "Inter, sans-serif", 
                  fontWeight: 700, 
                  lineHeight: "1", 
                  letterSpacing: "-0.05em",
                  color: "#FFFFFF"
                }}
              >
                How we work
              </h2>
            </div>
            <p 
              className="text-[15px] xl:text-[18px]"
              style={{ 
                fontFamily: "Inter, sans-serif", 
                fontWeight: 500, 
                lineHeight: "124%", 
                letterSpacing: "-0.05em",
                color: "#FFFFFF"
              }}
            >
              It’s as important to understand how a company works, as it is to see the quality of their end results. The way that we go about running our projects and constructing our service plays a big part in deciding whether we get to work together.
            </p>
          </div>

          {/* Yellow Card */}
          <div 
            className="bg-[#FCBE17] flex flex-col justify-center w-full shrink-0 p-6 xl:p-8"
            style={{
              height: "235px",
            }}
          >
            <div className="flex items-start gap-3 xl:gap-4 mb-2">
              <svg 
                className="shrink-0 mt-1 w-[42px] h-[48px] xl:w-[55px] xl:h-[63px]" 
                viewBox="0 0 69 79" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.91898 0C7.6398 0 9.83797 2.19817 9.83797 4.91898V7.37848L20.4445 4.73452C26.3012 3.2742 32.4807 3.95056 37.8916 6.656C45.0087 10.2223 53.3864 10.2223 60.5035 6.656L61.9792 5.91815C65.1458 4.31948 68.8658 6.62526 68.8658 10.1608V53.1558C68.8658 55.2002 67.5899 57.0448 65.6684 57.7673L60.3344 59.7657C53.2326 62.425 45.3315 62.0099 38.5525 58.6281C32.7266 55.7075 26.0552 54.985 19.7221 56.5683L9.83797 59.0278V73.7848C9.83797 76.5056 7.6398 78.7038 4.91898 78.7038C2.19817 78.7038 0 76.5056 0 73.7848V61.4873V51.3419V9.83797V4.91898C0 2.19817 2.19817 0 4.91898 0ZM9.83797 28.7607L19.6759 26.624V36.6926L9.83797 38.8292V48.8824L17.3394 47.007C18.1234 46.8072 18.892 46.6381 19.6759 46.4998V36.6772L25.6556 35.3859C26.9314 35.1092 28.2227 35.0016 29.5139 35.0631V25.2252C31.6045 25.2867 33.695 25.6248 35.7241 26.209L39.3519 27.2696V37.5226L32.9418 35.6319C31.8197 35.3091 30.6668 35.1093 29.5139 35.0478V46.0232C32.865 46.3153 36.1699 47.0532 39.3519 48.2368V37.5073L42.8413 38.5372C44.9165 39.152 47.0378 39.521 49.1898 39.6747V29.806C47.9908 29.683 46.7918 29.4524 45.6236 29.1142L39.3519 27.2696V17.7391C37.3535 17.155 35.3859 16.3864 33.4798 15.4333C32.2193 14.8031 30.882 14.3573 29.5139 14.0806V25.2098C27.5156 25.1483 25.5172 25.3328 23.565 25.7632L19.6759 26.624V15.0644L9.83797 17.5239V28.7607ZM49.1898 51.6032C51.7723 51.8338 54.4009 51.4956 56.8758 50.5579L59.0278 49.7586V38.737L57.8134 39.0137C54.985 39.6747 52.0797 39.8899 49.1898 39.7054V51.6032ZM59.0278 28.6377V17.7545C55.8151 18.6921 52.5102 19.1533 49.1898 19.1533V29.8213C51.3265 30.0365 53.494 29.8982 55.5999 29.4217L59.0278 28.6223V28.6377Z" fill="black"/>
              </svg>
              <h2 
                className="text-[26px] xl:text-[34px]"
                style={{ 
                  fontFamily: "Inter, sans-serif", 
                  fontWeight: 700, 
                  lineHeight: "1.1", 
                  letterSpacing: "-0.05em",
                  color: "#000000"
                }}
              >
                A successful project starts <br className="hidden xl:block" />with great service
              </h2>
            </div>
            <p 
              className="text-[15px] xl:text-[18px]"
              style={{ 
                fontFamily: "Inter, sans-serif", 
                fontWeight: 500, 
                lineHeight: "124%", 
                letterSpacing: "-0.05em",
                color: "#000000"
              }}
            >
              Our current process is based on years of experience and learning: reflecting on the times that we got it wrong, doing more of what we get right and constantly reviewing and refining. Every decision that’s formed our creative approach is based on one of these factors.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeWorkHero;