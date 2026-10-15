import * as React from "react";

const AboutWhyWorkWithUs = () => {
  const services = [
    {
      title: "We care about how it feels",
      description:
        "Good content matters—but so does the experience. From first chat to final edit, we keep things easy, honest, and collaborative. We listen, we guide, and we make sure the process feels smooth from start to finish.",
    },
    {
      title: "We work around you",
      description:
        "Every client's different, so we don't approach projects the same way. We're flexible with pricing, clear about costs, and always happy to find smart ways to make your budget go further.",
    },
    {
      title: "We make visuals that speak",
      description:
        "We don't just shoot pretty pictures. We tell stories. We use styling, locations, and talent to help your brand stand out and feel real. We want to help you surpass expectations and achieve more than simply keeping up with your competition.",
    },
    {
      title: "Values You Can Feel",
      description:
        "We treat every client like a partner and stay flexible across industries. We work fast when needed, stay kind always, and commit to working transparently. We believe in being kind, honest, and easy to work with because that's how great work gets made.",
    },
  ];

  return (
    <section className="w-full bg-[#FCBE17] py-20 lg:py-28 overflow-hidden">
      
      {/* Header */}
      <div className="pocket-container mb-12 lg:mb-16">
        <h2 className="text-white font-bold text-5xl md:text-7xl lg:text-[110px] xl:text-[120px] leading-[1.05] lg:leading-[120%] tracking-[-0.05em] mb-6 lg:mb-8 whitespace-nowrap">
          Why work with us?
        </h2>
        <p className="text-black font-medium text-lg md:text-2xl lg:text-[30px] leading-[1.4] lg:leading-[143%] tracking-[-0.05em] max-w-[1440px]">
          We make content that feels real and works hard. You get a team that
          listens, adapts, and delivers with care, creativity, and no fuss. We're
          here to help you stand out without making things complicated.
        </p>
      </div>

      {/* Blue box — 1704px wide, flush right, 452px min height */}
      <div className="w-full flex justify-end">
        <div className="bg-[#179CBD] w-full max-w-[1704px] min-h-[452px] py-12 lg:py-16 px-8 md:px-12 lg:px-16 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 w-full">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-white font-bold text-xl lg:text-[26px] xl:text-[30px] leading-[1.1] lg:leading-[100%] tracking-[-0.05em] mb-5 lg:mb-6">
                  {service.title}
                </h3>
                <p className="text-white font-medium text-base lg:text-[18px] xl:text-[20px] leading-[1.2] lg:leading-[120%] tracking-[-0.05em]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyWorkWithUs;