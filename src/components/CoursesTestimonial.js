import React from "react";
import c1 from "../images/c1.png";

const CoursesTestimonial = () => {
  return (
    <section className="relative w-full max-w-[1920px] min-h-[700px] 2xl:h-[917px] bg-[#F7F7F7] overflow-hidden flex items-center justify-center font-sans mx-auto py-16 px-6 2xl:py-0">

      {/* Background Quote 1 (Top Left) */}
      <div
        className="absolute pointer-events-none top-[60px] left-[20px] sm:top-[120px] sm:left-[50px] xl:top-[188px] xl:left-[76px]"
        style={{ opacity: 1 }}
      >
        <svg
          className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] xl:w-[308px] xl:h-[308px]"
          viewBox="0 0 308 308"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1">
            <path d="M102.667 269.5C109.475 269.5 116.003 266.796 120.816 261.982C125.63 257.169 128.334 250.641 128.334 243.833V166.833C128.334 160.026 125.63 153.498 120.816 148.684C116.003 143.871 109.475 141.167 102.667 141.167C99.2637 141.167 95.9995 139.815 93.5928 137.408C91.186 135.001 89.834 131.737 89.834 128.333V115.5C89.834 108.693 92.5381 102.164 97.3516 97.3509C102.165 92.5375 108.693 89.8333 115.501 89.8333C118.904 89.8333 122.168 88.4813 124.575 86.0746C126.982 83.6678 128.334 80.4036 128.334 77V51.3333C128.334 47.9297 126.982 44.6655 124.575 42.2588C122.168 39.8521 118.904 38.5 115.501 38.5C95.079 38.5 75.4937 46.6125 61.0534 61.0528C46.6131 75.4931 38.5006 95.0783 38.5006 115.5V243.833C38.5006 250.641 41.2048 257.169 46.0182 261.982C50.8317 266.796 57.3601 269.5 64.1673 269.5H102.667Z" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" stroke="black"/>
            <path d="M243.833 269.5C250.641 269.5 257.169 266.796 261.982 261.982C266.796 257.169 269.5 250.641 269.5 243.833V166.833C269.5 160.026 266.796 153.498 261.982 148.684C257.169 143.871 250.641 141.167 243.833 141.167C240.43 141.167 237.166 139.815 234.759 137.408C232.352 135.001 231 131.737 231 128.333V115.5C231 108.693 233.704 102.164 238.518 97.3509C243.331 92.5375 249.859 89.8333 256.667 89.8333C260.07 89.8333 263.334 88.4813 265.741 86.0746C268.148 83.6678 269.5 80.4036 269.5 77V51.3333C269.5 47.9297 268.148 44.6655 265.741 42.2588C263.334 39.8521 260.07 38.5 256.667 38.5C236.245 38.5 216.66 46.6125 202.219 61.0528C187.779 75.4931 179.667 95.0783 179.667 115.5V243.833C179.667 250.641 182.371 257.169 187.184 261.982C191.998 266.796 198.526 269.5 205.333 269.5H243.833Z" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" stroke="black"/>
          </g>
        </svg>
      </div>

      {/* Background Quote 2 (Bottom Right) */}
      <div
        className="absolute pointer-events-none bottom-[40px] right-[20px] sm:bottom-[60px] sm:right-[50px] xl:bottom-[100px] xl:right-[150px]"
        style={{ opacity: 1 }}
      >
        <svg
          className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] xl:w-[308px] xl:h-[308px]"
          viewBox="0 0 308 308"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1">
            <path d="M205.333 38.5C198.525 38.5 191.997 41.2042 187.184 46.0176C182.37 50.831 179.666 57.3594 179.666 64.1667V141.167C179.666 147.974 182.37 154.502 187.184 159.316C191.997 164.129 198.525 166.833 205.333 166.833C208.736 166.833 212.001 168.185 214.407 170.592C216.814 172.999 218.166 176.263 218.166 179.667V192.5C218.166 199.307 215.462 205.836 210.648 210.649C205.835 215.462 199.307 218.167 192.499 218.167C189.096 218.167 185.832 219.519 183.425 221.925C181.018 224.332 179.666 227.596 179.666 231V256.667C179.666 260.07 181.018 263.334 183.425 265.741C185.832 268.148 189.096 269.5 192.499 269.5C212.921 269.5 232.506 261.388 246.947 246.947C261.387 232.507 269.499 212.922 269.499 192.5V64.1667C269.499 57.3594 266.795 50.831 261.982 46.0176C257.168 41.2042 250.64 38.5 243.833 38.5H205.333Z" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" stroke="black"/>
            <path d="M64.1667 38.5C57.3594 38.5 50.831 41.2042 46.0176 46.0176C41.2042 50.831 38.5 57.3594 38.5 64.1667V141.167C38.5 147.974 41.2042 154.502 46.0176 159.316C50.831 164.129 57.3594 166.833 64.1667 166.833C67.5703 166.833 70.8345 168.185 73.2412 170.592C75.6479 172.999 77 176.263 77 179.667V192.5C77 199.307 74.2958 205.836 69.4824 210.649C64.669 215.462 58.1406 218.167 51.3333 218.167C47.9297 218.167 44.6655 219.519 42.2588 221.925C39.8521 224.332 38.5 227.596 38.5 231V256.667C38.5 260.07 39.8521 263.334 42.2588 265.741C44.6655 268.148 47.9297 269.5 51.3333 269.5C71.755 269.5 91.3403 261.388 105.781 246.947C120.221 232.507 128.333 212.922 128.333 192.5V64.1667C128.333 57.3594 125.629 50.831 120.816 46.0176C116.002 41.2042 109.474 38.5 102.667 38.5H64.1667Z" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" stroke="black"/>
          </g>
        </svg>
      </div>

      {/* "What They Say" Floating Circle — visible from tablet (lg) up */}
      <div
        className="hidden xl:flex absolute z-20 items-center justify-center bg-[#179CBD] rounded-full shadow-lg top-[100px] right-[10%]"
        style={{
          width: "150px",
          height: "150px",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "3px",
          paddingRight: "3px",
          transform: "rotate(-9.59deg)",
        }}
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: "30px",
            lineHeight: "100%",
            letterSpacing: "-0.05em",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          What<br />They Say
        </span>
      </div>

      {/* Main Content Layout Container — stacked below lg, row from lg up */}
      <div className="relative z-10 w-full max-w-[1300px] flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 px-4 sm:px-6">

        {/* Left: Client Logo Box */}
        <div className="bg-white flex items-center justify-center shrink-0 shadow-sm mt-4 lg:-mt-16 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[308px] lg:h-[308px]">
          <img
            src={c1}
            alt="River Group Logo"
            className="w-full h-full object-contain p-6 sm:p-8"
          />
        </div>

        {/* Right: Quote Text & Signature Column */}
        <div className="flex flex-col max-w-[720px] pt-1 w-full text-left">
          {/* Paragraph: black until xl, #526E87 at xl+ */}
          <p
            className="text-[#000000] xl:text-[#526E87] text-[18px] sm:text-[20px] mb-8 lg:mb-[56px]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              lineHeight: "135%",
              letterSpacing: "-0.05em",
            }}
          >
            Fun, innovative and unflappable.{" "}
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                color: "#179CBD",
                lineHeight: "135%",
                letterSpacing: "-0.05em",
              }}
            >
              Pocket Creatives
            </span>{" "}
            are great to work with – whether it’s finding the perfect lighting for a trifle to capturing GoPro footage on a whisk, they always approach every situation with a steady yet game-changing attitude. I see the whole team as trusted creative partners to make great content together.
          </p>

          {/* Signature Box: Aligned Right */}
          <div className="relative self-end inline-block">
            <div className="absolute bg-[#FCBE17] -z-10 h-[18px] sm:h-[24px] w-[280px] sm:w-[432px] bottom-[2px] sm:bottom-[4px] -left-[6px] sm:-left-[8px]" />
            <h4
              className="text-[26px] sm:text-[36px] lg:text-[40px]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                lineHeight: "100%",
                letterSpacing: "-0.05em",
                color: "#000000",
                textAlign: "right",
              }}
            >
              Kitty Aldis, River Group
            </h4>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoursesTestimonial;