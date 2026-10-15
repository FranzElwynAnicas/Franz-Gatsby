import React from "react";
import aboutTeam from "../images/aboutteam.png";

const AboutIntro = () => {
  return (
    <section className="w-full bg-pocketTeal">
      <div className="mx-auto max-w-[1920px] px-[12%] py-[120px] md:py-[172px]">
        {/* Heading */}
        <h2
          className="font-extrabold leading-none text-white mb-16 md:mb-24 max-w-[1453px]"
          style={{
            fontSize: "clamp(40px, 4.2vw, 80px)",
            letterSpacing: "-0.05em",
          }}
        >
          Video production and photography at
          <br />
          Pocket Creatives
        </h2>

        {/* Two-column: text left, team image + badge right */}
        <div className="grid items-start gap-12 lg:grid-cols-[610px_1fr]">
          {/* LEFT — paragraph + email button */}
          <div>
            <p
              className="text-xl font-medium"
              style={{
                lineHeight: 2,
                letterSpacing: "-0.05em",
                color: "#000000",
              }}
            >
              Pocket Creatives is a video production and photography team built
              on
              <br />
              over 16 years of experience in the visual and creative industries.
              Run
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
              great video and photography, and we like to think that it shows in
              the
              <br />
              work we deliver.
              <br />
              We've worked hard to assemble a talented team who can deliver high
              <br />
              quality video production services, as well as video and
              photography
              <br />
              content creation.
              <br />
              Drop us a mail, we're a friendly bunch and are more than happy to
              chat
              <br />
              about what we could offer on your next project!
            </p>

            {/* Email circle button */}
            <a
              href="mailto:team@pocketcreatives.co.uk"
              aria-label="Message us"
              className="mt-8 inline-flex h-[70px] w-[70px] items-center justify-center rounded-full bg-pocketYellow hover:opacity-90 transition-opacity"
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
            </a>
          </div>

          {/* RIGHT — team image + badge, nudged right */}
          <div className="relative" style={{ paddingLeft: "100px" }}>
            {/* Badge */}
            <div
              className="absolute z-10 flex items-center justify-center rounded-full bg-pocketYellow text-center font-bold leading-none"
              style={{
                width: "135px",
                height: "135px",
                fontSize: "20px",
                top: "-60px",
                left: "40px",   // was -60, moved to compensate for the new padding
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
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;