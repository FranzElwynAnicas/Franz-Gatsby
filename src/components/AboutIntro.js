import React, { useState } from "react";
import aboutTeam from "../images/aboutteam.png";
import ContactModal from "./ContactModal";

const AboutIntro = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-pocketTeal">
        <div className="mx-auto max-w-[1920px] px-6 md:px-[12%] py-[80px] md:py-[172px]">
          {/* Heading */}
          <h2
            className="font-extrabold leading-none text-white mb-8 md:mb-24 max-w-[1453px]"
            style={{
              fontSize: "clamp(40px, 4.2vw, 80px)",
              letterSpacing: "-0.05em",
            }}
          >
            Video production and photography at
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            Pocket Creatives
          </h2>

          {/* Two-column on desktop, stacked on mobile */}
          <div className="flex flex-col lg:grid lg:items-start lg:gap-12 lg:grid-cols-[610px_1fr]">

            {/* MOBILE: image first (after heading) */}
            <div className="relative lg:order-2 mb-8 lg:mb-0 lg:pl-[100px]">
              {/* Badge — desktop only */}
              <div
                className="hidden lg:flex absolute z-10 items-center justify-center rounded-full bg-pocketYellow text-center font-bold leading-none"
                style={{
                  width: "135px",
                  height: "135px",
                  fontSize: "20px",
                  top: "-60px",
                  left: "40px",
                  boxShadow: "0 2px 1px rgba(0,0,0,0.1)",
                }}
              >
                This is
                <br />
                us...
              </div>

              {/* Team image */}
              <img
                src={aboutTeam}
                alt="Steven, Haider and Lauren"
                style={{
                  width: "689px",
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>

            {/* Paragraph + email button */}
            <div className="lg:order-1">
              <p
                className="font-medium"
                style={{
                  fontSize: "18px",
                  lineHeight: 1.6,
                  letterSpacing: "-0.05em",
                  color: "#000000",
                }}
              >
                {/* Mobile version — no forced <br /> */}
                <span className="block md:hidden">
                  Pocket Creatives is a video production and photography team
                  built on over 16 years of experience in the visual and
                  creative industries. Run by co-owners{" "}
                  <span className="font-bold text-white">Steven</span>,{" "}
                  <span className="font-bold text-white">Haider</span> and{" "}
                  <span className="font-bold text-white">Lauren</span>, our team
                  loves producing great video and photography, and we like to
                  think that it shows in the work we deliver.
                  <br />
                  <br />
                  We've worked hard to assemble a talented team who can deliver
                  high quality video production services, as well as video and
                  photography content creation.
                  <br />
                  <br />
                  Drop us a mail, we're a friendly bunch and are more than happy
                  to chat about what we could offer on your next project!
                </span>

                {/* Desktop version — original with forced <br /> */}
                <span className="hidden md:inline">
                  Pocket Creatives is a video production and photography team
                  built on
                  <br />
                  over 16 years of experience in the visual and creative
                  industries. Run
                  <br />
                  by co-owners{" "}
                  <span className="font-bold" style={{ color: "#FFFFFF" }}>
                    Steven
                  </span>
                  ,{" "}
                  <span className="font-bold" style={{ color: "#FFFFFF" }}>
                    Haider
                  </span>{" "}
                  and{" "}
                  <span className="font-bold" style={{ color: "#FFFFFF" }}>
                    Lauren
                  </span>
                  , our team loves producing
                  <br />
                  great video and photography, and we like to think that it
                  shows in the
                  <br />
                  work we deliver.
                  <br />
                  We've worked hard to assemble a talented team who can deliver
                  high
                  <br />
                  quality video production services, as well as video and
                  photography
                  <br />
                  content creation.
                  <br />
                  Drop us a mail, we're a friendly bunch and are more than happy
                  to chat
                  <br />
                  about what we could offer on your next project!
                </span>
              </p>

              {/* Email circle button — desktop only */}
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                aria-label="Message us"
                className="hidden md:inline-flex mt-8 h-[70px] w-[70px] items-center justify-center rounded-full bg-pocketYellow hover:opacity-90 transition-opacity"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="1" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default AboutIntro;