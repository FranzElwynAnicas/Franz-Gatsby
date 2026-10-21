import React from "react";
import { Link } from "gatsby"; // Import Link from Gatsby
import vacancyImg from "../images/vacancy.png";
import partnersImg from "../images/partners.png";

const ContactPartners = () => {
  return (
    <section className="w-full bg-[#FCBE17] py-16 md:py-32 lg:py-48 px-6 md:px-12 relative overflow-hidden flex flex-col justify-center items-center">
      
      {/* Main Centered Container */}
      <div className="w-full max-w-[1378px] mx-auto flex flex-col gap-12 lg:gap-32">
        
        {/* =========================================
            SECTION 1: Vacancies
        ========================================= */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 text-center lg:text-left">
          
          {/* Vacancy Image */}
          <div className="w-full lg:w-[731px] shrink-0">
            <img
              src={vacancyImg}
              alt="Creative agency team working on a video and photography production"
              className="w-full lg:w-[731px] h-auto lg:h-[415px] object-cover"
            />
          </div>

          {/* Text & Email Button */}
          <div className="flex flex-col items-center lg:items-start pt-2 max-w-[460px]">
            <h2 
              className="font-extrabold text-black mb-4 lg:mb-6 tracking-[-0.04em]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(32px, 5vw, 50px)",
                lineHeight: "1.0"
              }}
            >
              Vacancies
            </h2>

            <p 
              className="font-medium text-black mb-6 lg:mb-8 tracking-[-0.02em]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "17px",
                lineHeight: "1.35"
              }}
            >
              At our video and photography agency we always want to hear from great people and create regular opportunities. Feel free to send us your information to the address below:
            </p>

            <a
              href="mailto:jobs@pocketcreatives.co.uk"
              className="inline-block bg-[#1EA4B9] text-white font-medium text-[16px] md:text-[20px] tracking-[-0.02em] px-6 py-2.5 hover:bg-[#179CBD] transition-colors"
            >
              jobs@pocketcreatives.co.uk
            </a>
          </div>

        </div>

        {/* =========================================
            SECTION 2: Partners
        ========================================= */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 text-center lg:text-left">
          
          {/* Logos Image & Floating Badge */}
          <div className="relative w-full lg:w-[804.59px] shrink-0 order-1 lg:order-2">
            <img
              src={partnersImg}
              alt="Partner Logos"
              className="w-full lg:w-[804.59px] h-auto lg:h-[415px] object-contain"
            />
            
            {/* Floating "See Our Works" Bubble wrapped in Gatsby Link */}
            <Link 
              to="/works"
              className="hidden md:flex group absolute -top-12 -right-10 lg:-top-16 lg:-right-14 w-[110px] h-[110px] lg:w-[125px] lg:h-[125px] bg-[#1EA4B9] hover:bg-white rounded-full items-center justify-center rotate-[9.59deg] shadow-lg z-10 transition-colors duration-300 cursor-pointer"
            >
              <span 
                className="font-extrabold text-white group-hover:text-[#1EA4B9] text-[18px] lg:text-[22px] text-center tracking-[-0.05em] leading-[1.1] transition-colors duration-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                See Our<br />Works
              </span>
            </Link>
          </div>

          {/* Text & Email Button */}
          <div className="flex flex-col items-center lg:items-start pt-2 max-w-[440px] order-2 lg:order-1 lg:ml-12">
            <h2 
              className="font-extrabold text-black mb-4 lg:mb-6 tracking-[-0.04em]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(32px, 5vw, 50px)",
                lineHeight: "1.0"
              }}
            >
              Partners
            </h2>

            <p 
              className="font-medium text-black mb-6 lg:mb-8 tracking-[-0.02em]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "17px",
                lineHeight: "1.35"
              }}
            >
              Our video and photography agency also has links to some excellent partners who work in other creative industries. If you think you'd make a good Pocket Partner, mail us below:
            </p>

            <a
              href="mailto:partners@pocketcreatives.co.uk"
              className="inline-block bg-[#1EA4B9] text-white font-medium text-[18px] md:text-[20px] tracking-[-0.02em] px-6 py-2.5 hover:bg-[#179CBD] transition-colors"
            >
              partners@pocketcreatives.co.uk
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactPartners;