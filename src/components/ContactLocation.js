import React from "react";
import mapImg from "../images/map.png";

const contactItems = [
  {
    label: "020 3633 8494",
    iconType: "phone",
  },
  {
    label: (
      <>
        Wow Workspaces Battersea
        <br />
        Unit 3, 7-9 Ingate Place
        <br />
        Battersea, London SW8 3NS
      </>
    ),
    iconType: "address",
  },
  {
    label: "team@pocketcreatives.co.uk",
    iconType: "email",
  },
];

const ContactLocation = () => {
  return (
    // Removed px-6 on mobile so the map can go edge-to-edge
    <section className="w-full max-w-[1440px] mx-auto py-12 md:py-20 flex flex-col gap-10 md:gap-16">
      
      {/* Contact Icons Row (has its own padding for mobile) */}
      <div className="w-full px-6 md:px-0 flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8 md:items-start md:justify-between">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-center gap-5 md:gap-6">
            
            {/* Yellow Circle Icon */}
            <div className="w-[80px] h-[80px] md:w-[104px] md:h-[104px] bg-[#fcbe17] rounded-full flex items-center justify-center shrink-0">
              
              {item.iconType === "email" && (
                <svg 
                  className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]"
                  viewBox="0 0 24 24" 
                  fill="black" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4ZM19 6L12 10.8L5 6H19ZM19 18H5V8L12 12.8L19 8V18Z" />
                </svg>
              )}

              {item.iconType === "phone" && (
                <svg 
                  className="w-[44px] h-[44px] md:w-[60px] md:h-[60px]"
                  viewBox="0 0 256 256" 
                  fill="black" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M164.39,145.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z" />
                </svg>
              )}

              {item.iconType === "address" && (
                <svg 
                  className="w-[48px] h-[48px] md:w-[64px] md:h-[64px]"
                  viewBox="0 0 24 24" 
                  fill="black" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                </svg>
              )}

            </div>

            {/* Contact Text - Black on mobile, Blue/Grey on desktop */}
            {item.iconType === "address" ? (
              <address className="not-italic font-extrabold text-black md:text-[#526e87] text-[15px] md:text-[18px] tracking-[-0.02em] leading-[1.3] md:leading-[1.4]">
                {item.label}
              </address>
            ) : (
              <p className="font-extrabold text-black md:text-[#526e87] text-[15px] md:text-[18px] tracking-[-0.02em] leading-[1.3] md:leading-[1.4]">
                {item.label}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Map Image Container - Edge to edge on mobile, padded on desktop */}
      <div className="w-full px-0 md:px-6 flex justify-center md:justify-start">
        <img
          className="w-full md:w-auto md:max-w-full h-[809px] md:h-auto md:max-h-[800px] object-cover rounded-none md:rounded-lg"
          alt="Map showing the Pocket Creatives location in Battersea, London"
          src={mapImg}
        />
      </div>
    </section>
  );
};

export default ContactLocation;