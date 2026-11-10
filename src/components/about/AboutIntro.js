import React, { useState } from "react";
import aboutTeam from "../../images/aboutteam.png";
import ContactModal from "../layout/ContactModal";

const AboutIntro = ({
  introHeading,
  introParagraph,
  introImage,
  introBadgeText,
}) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const imageSrc = introImage || aboutTeam;
  const badge = introBadgeText || "This is us...";

  return (
    <>
      <section className="w-full bg-pocketTeal">
        <div className="mx-auto max-w-[1920px] px-6 md:px-10 lg:px-[12%] py-[80px] md:py-24 lg:py-[172px]">
          {/* Heading */}
          <h2
            className="font-extrabold leading-none text-white mb-8 md:mb-16 lg:mb-24 max-w-[1453px]"
            style={{
              fontSize: "clamp(40px, 4.2vw, 80px)",
              letterSpacing: "-0.05em",
            }}
          >
            {introHeading ? (
              <div
                className="wordpress-content wordpress-content--heading"
                dangerouslySetInnerHTML={{ __html: introHeading }}
              />
            ) : (
              <>
                Video production and photography at{" "}
                <span className="md:inline">Pocket Creatives</span>
              </>
            )}
          </h2>

          {/* Two-column on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* IMAGE */}
            <div className="relative lg:order-2 mb-8 lg:mb-0 lg:pl-6 xl:pl-12">
              {/* Badge — desktop only */}
              <div
                className="hidden lg:flex absolute z-10 items-center justify-center rounded-full bg-pocketYellow text-center font-bold leading-none"
                style={{
                  width: "135px",
                  height: "135px",
                  fontSize: "20px",
                  top: "-60px",
                  left: "20px",
                  boxShadow: "0 2px 1px rgb(0,0,0,0.1)",
                }}
              >
                {badge}
              </div>

              {/* Team image — ACF URL or local fallback */}
              <img
                src={imageSrc}
                alt="Steven, Haider and Lauren"
                className="w-full h-auto block rounded-lg"
              />
            </div>

            {/* Paragraph + email button */}
            <div className="lg:order-1">
              <div className="wordpress-content wordpress-content--on-teal font-medium">
                {introParagraph ? (
                  <div dangerouslySetInnerHTML={{ __html: introParagraph }} />
                ) : (
                  <p>
                    Pocket Creatives is a video production and photography team
                    built on over 16 years of experience in the visual and
                    creative industries. Run by co-owners{" "}
                    <strong>Steven</strong>, <strong>Haider</strong> and{" "}
                    <strong>Lauren</strong>, our team loves producing great
                    video and photography, and we like to think that it shows in
                    the work we deliver.
                    <br />
                    <br />
                    We've worked hard to assemble a talented team who can deliver
                    high quality video production services, as well as video and
                    photography.
                    <br />
                    <br />
                    Drop us a mail, we're a friendly bunch and are more than
                    happy to chat about what we could offer on your next
                    project!
                  </p>
                )}
              </div>

              {/* Email circle button — desktop only */}
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                aria-label="Message us"
                className="hidden lg:inline-flex mt-8 h-[70px] w-[70px] items-center justify-center rounded-full bg-pocketYellow hover:opacity-90 transition-opacity"
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