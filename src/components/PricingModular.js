import React, { useState, useRef } from "react";

const PriceTagBadge = () => (
  <div className="relative w-[120px] h-[92px] md:w-[153px] md:h-[118px] flex items-center justify-center">
    <svg
      width="100%"
      height="100%"
      viewBox="-4 -4 161 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 drop-shadow-md overflow-visible"
    >
      <path
        d="M114.465 92.9143C117.749 92.1068 120.577 90.0282 122.328 87.1356L145.996 48.0167C147.746 45.1235 148.276 41.6535 147.467 38.3699C146.659 35.0864 144.58 32.2583 141.687 30.5078L102.568 6.83998C99.6747 5.0903 96.2048 4.56153 92.9217 5.37L16.7231 24.1215C12.7598 25.1102 9.34852 27.6267 7.23401 31.1216C5.1195 34.6165 4.47349 38.806 5.43702 42.7756L19.6127 100.38C20.6013 104.343 23.1178 107.754 26.6127 109.869C30.1077 111.983 34.2972 112.629 38.2667 111.666L114.465 92.9143Z"
        fill="#FCBE17"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="black"
      />
    </svg>

    <svg
      width="34"
      height="42"
      viewBox="0 0 34 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-10 w-[22px] h-[28px] md:w-[30px] md:h-[38px] translate-x-[-2px] translate-y-[-1px]"
    >
      <path
        d="M33.4355 36.1267L7.56443 41.4866L6.27847 35.2796L32.1495 29.9197L33.4355 36.1267ZM23.6147 23.3831L4.54177 27.3347L3.31344 21.4059L22.3864 17.4543L23.6147 23.3831ZM13.2264 13.6766L16.8482 28.3572C17.2351 29.9331 17.1913 31.3263 16.7168 32.5368C16.2514 33.7333 15.2553 34.8765 13.7283 35.9665L8.5561 34.8078C9.04449 34.5978 9.37296 34.2577 9.54151 33.7876C9.71925 33.3035 9.78745 32.7575 9.74612 32.1496C9.71637 31.5392 9.63207 30.9281 9.4932 30.3162L5.81975 15.2111C5.25875 12.97 5.29718 10.9675 5.93504 9.20337C6.58208 7.42528 7.67929 5.95285 9.22666 4.78607C10.7716 3.6077 12.6221 2.79519 14.778 2.34852C16.5978 1.9715 18.2675 1.89151 19.7873 2.10854C21.3047 2.31398 22.6462 2.77948 23.812 3.50504C24.9869 4.2166 25.9417 5.14907 26.6763 6.30244C27.4108 7.4558 27.904 8.78611 28.1559 10.2934L21.0747 11.561C20.8938 10.5709 20.5566 9.81876 20.0633 9.30446C19.5699 8.79017 18.9826 8.46456 18.3015 8.32765C17.6203 8.19073 16.903 8.20032 16.1496 8.35641C15.4194 8.5077 14.7935 8.81265 14.272 9.27126C13.7597 9.71588 13.3993 10.3103 13.1909 11.0547C12.9916 11.785 13.0035 12.659 13.2264 13.6766Z"
        fill="black"
      />
    </svg>
  </div>
);

const FlowerTagSvg = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 145 145"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
  >
    <path
      d="M23.0194 37.8206C23.0106 33.2185 24.164 28.6887 26.3725 24.6512C28.5811 20.6136 31.7734 17.1991 35.6533 14.7242C39.5333 12.2492 43.9754 10.794 48.5677 10.4935C53.16 10.1929 57.7538 11.0568 61.9232 13.0049C65.1677 9.76065 69.1767 7.38534 73.5807 6.09793C77.9846 4.81053 82.6418 4.65245 87.1229 5.63828C91.604 6.62411 95.7648 8.72212 99.2219 11.7389C102.679 14.7557 105.321 18.5942 106.904 22.9006C111.514 22.8794 116.054 24.0243 120.103 26.229C124.151 28.4336 127.576 31.6264 130.059 35.5102C132.542 39.394 134.003 43.8427 134.305 48.4426C134.607 53.0424 133.741 57.6439 131.787 61.8191C135.031 65.0636 137.406 69.0726 138.694 73.4766C139.981 77.8805 140.139 82.5377 139.153 87.0188C138.168 91.4999 136.07 95.6607 133.053 99.1177C130.036 102.575 126.197 105.217 121.891 106.8C121.909 111.402 120.766 115.934 118.565 119.977C116.365 124.019 113.18 127.44 109.305 129.923C105.431 132.406 100.992 133.871 96.4001 134.181C91.8084 134.491 87.2128 133.637 83.0393 131.697C79.7947 134.957 75.7802 137.345 71.3674 138.64C66.9547 139.936 62.2863 140.097 57.7947 139.109C53.3031 138.121 49.1335 136.015 45.6718 132.987C42.2102 129.959 39.5686 126.107 37.9915 121.787C33.3894 121.805 28.8572 120.661 24.815 118.461C20.7729 116.261 17.3517 113.076 14.8686 109.201C12.3856 105.327 10.9211 100.888 10.6109 96.2959C10.3007 91.7043 11.155 87.1087 13.0944 82.9351C9.8197 79.6906 7.41883 75.6706 6.11507 71.2489C4.81132 66.8273 4.64703 62.1478 5.63749 57.6457C6.62795 53.1435 8.74098 48.965 11.78 45.4988C14.8191 42.0326 18.6854 39.3913 23.0194 37.8206Z"
      fill="#FCBE17"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="black"
    />
    <path
      d="M80.9199 92.6697L55.1165 86.993L56.4784 80.8023L82.2818 86.479L80.9199 92.6697ZM77.162 77.0261L58.1389 72.8411L59.4399 66.9278L78.4629 71.1128L77.162 77.0261ZM71.6455 63.9225L68.9538 78.8018C68.6632 80.3983 68.0541 81.6521 67.1265 82.5631C66.2129 83.465 64.8366 84.1016 62.9976 84.4727L58.7501 81.3021C59.2816 81.3099 59.7204 81.1337 60.0662 80.7735C60.4262 80.4043 60.7116 79.9337 60.9222 79.362C61.1444 78.7927 61.3171 78.2005 61.4403 77.5852L64.2582 62.2974C64.6617 60.0227 65.5148 58.2106 66.8177 56.861C68.1347 55.5024 69.7377 54.6066 71.6267 54.1738C73.5183 53.7294 75.5392 53.7437 77.6895 54.2168C79.5045 54.6161 81.0613 55.2252 82.3598 56.0442C83.6608 56.8516 84.6951 57.8245 85.4628 58.963C86.2445 60.0925 86.735 61.3336 86.9343 62.6864C87.1336 64.0393 87.0403 65.455 86.6545 66.9336L79.6733 65.1978C79.9126 64.2202 79.9122 63.3959 79.6719 62.725C79.4317 62.054 79.0287 61.5169 78.4629 61.1136C77.8971 60.7104 77.2385 60.4261 76.4871 60.2608C75.7587 60.1006 75.0629 60.1232 74.3996 60.3288C73.7503 60.5253 73.1785 60.9207 72.6842 61.5149C72.204 62.1001 71.8577 62.9027 71.6455 63.9225Z"
      fill="black"
    />
  </svg>
);

const PricingModular = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    const v = videoRef.current;

    if (playing) {
      v.pause();
      setPlaying(false);
    } else {
      v.muted = false; 
      v.volume = 1;
      v.play().catch(() => {});
      setPlaying(true);
    }
  };

  const benefits = [
    "Pay only for what you need",
    "No matter how large or small your project",
    "Oh, and no budget overruns!",
  ];

  return (
    <section className="w-full bg-[#f4f4f4] py-16 md:py-24 font-inter overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Top Header & Benefits List */}
        <div className="w-full max-w-[1380px] mb-12 md:mb-16">
          <h2
            className="font-bold text-[#5c7285] tracking-[-0.05em] leading-[100%] mb-6 md:mb-8"
            style={{ fontSize: "clamp(36px, 5.5vw, 80px)" }}
          >
            We use a modular pricing model:
          </h2>

          <ul className="list-none p-0 flex flex-col gap-3 md:gap-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start text-[#5c7285] font-medium tracking-[-0.05em] leading-[100%]"
                style={{ fontSize: "clamp(20px, 2.8vw, 40px)" }}
              >
                <span className="mr-3 text-[#1EA4B9] font-bold leading-[1]">
                  ✓
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Video Container - Strict 1353x761 on Desktop */}
        <div className="hidden md:block w-full max-w-[1353px] mb-12 md:mb-16">
          <div 
            className="w-full h-[300px] md:h-[761px] bg-black relative rounded-[2px] overflow-hidden shadow-lg group cursor-pointer"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/videos/pricing.mp4"
              loop
              playsInline
              poster="/images/videoproduction.png"
            />
            {!playing && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-white/80 rounded-full flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                  <div className="w-0 h-0 border-y-[12px] md:border-y-[18px] border-y-transparent border-l-[20px] md:border-l-[28px] border-l-red-600 ml-2" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Two Blue Modular Boxes Container - Strict 620x547 on Desktop */}
        <div className="w-full max-w-[1353px] flex flex-col md:flex-row md:grid md:grid-cols-2 gap-8 lg:gap-[113px] relative pt-6">
          
          {/* Card 1 */}
          <div className="relative bg-[#1EA4B9] text-white p-6 md:p-10 lg:p-14 w-full md:w-[620px] min-h-[450px] md:h-[547px] flex flex-col justify-center items-center text-center mt-6 md:mt-0">
            <div className="absolute -top-10 -left-4 md:-top-10 md:-left-8 z-10">
              <PriceTagBadge />
            </div>

            <h3 className="font-bold text-white text-xl md:text-[36px] lg:text-[40px] leading-[123%] tracking-[-0.05em] max-w-[546px] mb-6 md:mb-8 mt-4 md:mt-0">
              Everything you need and no hidden costs.
            </h3>

            <p className="font-medium text-white text-base md:text-[18px] lg:text-[20px] leading-[123%] tracking-[-0.05em] max-w-[496px]">
              There are lots of factors that affect the overall price of video
              production and photography shoots, such as props, backgrounds,
              models and locations. This is why there’s no one-size-fits all
              price, and most creative agencies won’t put any prices on their
              websites – as they can be misleading without a lot of description.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#1EA4B9] text-white p-6 md:p-10 lg:p-14 w-full md:w-[620px] min-h-[450px] md:h-[547px] flex flex-col justify-center items-center text-center mt-6 md:mt-0">
            <h3 className="font-bold text-white text-xl md:text-[36px] lg:text-[40px] leading-[123%] tracking-[-0.05em] max-w-[546px] mb-6 md:mb-8">
              We’ll get you from brief to quote in a flash!
            </h3>

            <p className="font-medium text-white text-base md:text-[18px] lg:text-[20px] leading-[123%] tracking-[-0.05em] max-w-[496px]">
              We will work with you to understand your brief and the full
              photography and video production requirements of your project,
              before delivering a budget breakdown to you at the beginning of the
              process. This gives you a fully honest and transparent view of the
              resources that make up your project. There’s always room for
              conversation and tweaks, and we’re also happy to start with your
              ideal spend and work backwards.
            </p>

            <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-6 z-10">
              <FlowerTagSvg />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingModular;