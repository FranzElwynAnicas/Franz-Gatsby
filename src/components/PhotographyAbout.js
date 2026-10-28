import React from "react";
import { Link } from "gatsby";

import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import p5 from "../images/p5.png";
import p6 from "../images/p6.png";
import p7 from "../images/p7.png";
import p8 from "../images/p8.png";

const PhotographyAbout = () => {
  return (
    <section className="w-full bg-[#F7F7F7] py-16 md:py-24 px-6 md:px-12 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1280px]">
        
        {/* =========================================
            TOP SECTION
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 mb-8 items-start">
          
          {/* Left: Text */}
          <div className="flex flex-col items-start pt-2 w-full">
            {/* Yellow Pill */}
            <div 
              className="bg-[#FCBE17] text-black flex items-center justify-center md:justify-start mb-8 w-full"
              style={{ 
                height: "122.34px",
                paddingLeft: "0",
              }}
            >
              <h2 
                className="font-extrabold text-[40px] md:text-[64px] tracking-[-0.02em] md:pl-[30px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Photography
              </h2>
            </div>
            
            <div 
              className="space-y-6 text-[16px] md:text-[18px] leading-[1.6] tracking-[-0.02em] w-full"
              style={{ fontFamily: "Inter, sans-serif", color: "#526E87", fontWeight: 500 }}
            >
              <p>
                Our professional photography services are <span className="text-[#179CBD] font-bold">flexible and affordably priced</span>, so that you can scale up or down depending on your requirements. We create eye-catching results for use in advertising campaigns, product listings and e-commerce, and for social media.
              </p>
              <p>
                Here, you'll see our extensive portfolio. It covers a range of subjects so whatever you're here for, we're sure you'll find something to pique your interest.
              </p>
            </div>
          </div>

          {/* Right: Top 2x2 Image Grid (Tablet/Desktop Only) */}
          <div className="hidden md:grid grid-cols-2 gap-4 w-full">
            <img src={p1} alt="Photography grid 1" className="w-full h-[301.54px] object-cover" />
            <img src={p2} alt="Photography grid 2" className="w-full h-[301.54px] object-cover" />
            <img src={p3} alt="Photography grid 3" className="w-full h-[301.54px] object-cover" />
            <img src={p4} alt="Photography grid 4" className="w-full h-[301.54px] object-cover" />
          </div>

        </div>

        {/* =========================================
            MOBILE ONLY: 2 Rows, 4 Columns Image Grid
        ========================================= */}
        <div className="grid md:hidden grid-cols-4 gap-1.5 w-full mb-8">
          <img src={p1} alt="Photography grid 1" className="w-full aspect-square object-cover" />
          <img src={p2} alt="Photography grid 2" className="w-full aspect-square object-cover" />
          <img src={p3} alt="Photography grid 3" className="w-full aspect-square object-cover" />
          <img src={p4} alt="Photography grid 4" className="w-full aspect-square object-cover" />
          <img src={p5} alt="Photography grid 5" className="w-full aspect-square object-cover" />
          <img src={p6} alt="Photography grid 6" className="w-full aspect-square object-cover" />
          <img src={p7} alt="Photography grid 7" className="w-full aspect-square object-cover" />
          <img src={p8} alt="Photography grid 8" className="w-full aspect-square object-cover" />
        </div>

        {/* =========================================
            BOTTOM SECTION (Tablet/Desktop Layout)
        ========================================= */}
        <div className="hidden md:grid grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          
          {/* Left: Bottom Image Grid */}
          <div className="grid grid-cols-2 gap-4 -mt-24 w-full">
            <img src={p5} alt="Photography grid 5" className="w-full h-[301.54px] object-cover" />
            <img src={p6} alt="Photography grid 6" className="w-full h-[301.54px] object-cover" />
            <img src={p7} alt="Photography grid 7" className="w-full h-[301.54px] object-cover" />
            <img src={p8} alt="Photography grid 8" className="w-full h-[301.54px] object-cover" />
          </div>

          {/* Right: Text & Services Banner */}
          <div className="flex flex-col h-full pt-4 w-full">
            <div 
              className="space-y-6 text-[16px] md:text-[18px] leading-[1.6] tracking-[-0.02em] mb-10 w-full"
              style={{ fontFamily: "Inter, sans-serif", color: "#526E87", fontWeight: 500 }}
            >
              <p>
                Our photography agency is commissioned by a wonderfully diverse range of clients including food producers, beauty brands, new product releases, events needing expert coverage, fashion brands and jewellery & watch brands.
              </p>
              <p>
                We work with clients of all sizes, making the most of your budget to reach your goals. We're here to build a strong working relationship, where you want to come back to us time and again because you trust what we can deliver.
              </p>
              <p>
                We have now opened our brand new <span className="text-[#179CBD] font-bold">photography studio in London Waterloo</span>, which gives us a great space to base our photography services from – and makes booking new projects easier than ever.
              </p>
            </div>
            
            {/* Teal Pill */}
            <div className="w-full mt-auto flex justify-end">
              <Link 
                to="/services" 
                className="bg-[#179CBD] hover:bg-[#13819A] transition-colors flex items-center justify-center md:justify-end md:pr-8"
                style={{ width: "100%", height: "88px" }}
              >
                <h3 
                  className="text-white font-extrabold text-[40px] md:text-[64px] tracking-[-0.02em]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Services
                </h3>
              </Link>
            </div>
          </div>

        </div>

        {/* =========================================
            MOBILE ONLY: Bottom Text + Services
        ========================================= */}
        <div className="md:hidden flex flex-col w-full pt-4">
          <div 
            className="space-y-6 text-[16px] leading-[1.6] tracking-[-0.02em] mb-8"
            style={{ fontFamily: "Inter, sans-serif", color: "#526E87", fontWeight: 500 }}
          >
            <p>
              Our photography agency is commissioned by a wonderfully diverse range of clients including food producers, beauty brands, new product releases, events needing expert coverage, fashion brands and jewellery & watch brands.
            </p>
            <p>
              We work with clients of all sizes, making the most of your budget to reach your goals. We're here to build a strong working relationship, where you want to come back to us time and again because you trust what we can deliver.
            </p>
            <p>
              We have now opened our brand new <span className="text-[#179CBD] font-bold">photography studio in London Waterloo</span>, which gives us a great space to base our photography services from – and makes booking new projects easier than ever.
            </p>
          </div>
          
          <Link 
            to="/services" 
            className="bg-[#179CBD] hover:bg-[#13819A] transition-colors flex items-center justify-center w-full"
            style={{ height: "88px" }}
          >
            <h3 
              className="text-white font-extrabold text-[40px] tracking-[-0.02em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Services
            </h3>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PhotographyAbout;