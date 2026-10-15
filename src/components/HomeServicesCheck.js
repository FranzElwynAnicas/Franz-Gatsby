import React from "react";

const columns = [
  {
    title: "Proactive",
    body: (
      <>
        We pride ourselves on our quality of service
        <br className="hidden md:block" />
        above everything else. We've taken the time to
        <br className="hidden md:block" />
        build a cracking little team at Pocket, and we
        <br className="hidden md:block" />
        make sure that you feel the benefits of working
        <br className="hidden md:block" />
        with a dedicated video production company who
        <br className="hidden md:block" />
        are there for you, and dedicated to the success
        <br className="hidden md:block" />
        of your project.
      </>
    ),
  },
  {
    title: "Nerds for Visuals",
    body: (
      <>
        Lorem ipsum dolor sit amet consectetur.
        <br className="hidden md:block" />
        Fermentum ut laoreet nunc at amet. Pretium sed
        <br className="hidden md:block" />
        tristique eu erat dui elementum eu duis. Sem
        <br className="hidden md:block" />
        posuere congue pellentesque duis in. Nunc id
        <br className="hidden md:block" />
        ridiculus mattis ullamcorper in id accumsan eu
        <br className="hidden md:block" />
        habitant. Mollis duis eu tellus aliquam viverra.
        <br className="hidden md:block" />
        Amet feugiat et habitasse mauris massa iaculis.
        <br className="hidden md:block" />
        Id at.
      </>
    ),
  },
  {
    title: "Valuable",
    body: (
      <>
        Lorem ipsum dolor sit amet consectetur. Varius
        <br className="hidden md:block" />
        tempor id nulla aliquet gravida. Quis at auctor
        <br className="hidden md:block" />
        quis lectus velit id parturient bibendum. Amet a
        <br className="hidden md:block" />
        erat faucibus enim orci. Praesent magna facilisi
        <br className="hidden md:block" />
        erat eget dictumst nulla nunc. Scelerisque cras
        <br className="hidden md:block" />
        viverra ipsum at accumsan a. Sed sollicitudin
        <br className="hidden md:block" />
        lacinia amet arcu volutpat. Id.
      </>
    ),
  },
];

const HomeServicesCheck = () => {
  return (
    <section className="w-full min-h-screen bg-pocketYellow flex items-center">
      <div className="w-full py-20">
        <div className="pl-[12.5%] pr-8 md:pr-16">
          {/* Top row: heading + Say Hello button */}
          <div className="flex items-start justify-between gap-10 mb-20">
            <h2 className="text-5xl md:text-7xl lg:text-[80px] font-black leading-[0.95] tracking-[-0.03em]">
              <span className="text-white">Services - </span>
              <span className="text-pocketTeal">Check ✓</span>
              <br />
              <span className="text-white">Quality - </span>
              <span className="text-pocketTeal">Check ✓</span>
              <br />
              <span className="text-white">People - </span>
              <span className="text-pocketTeal">Check ✓</span>
            </h2>

            <button className="bg-white text-pocketTeal font-extrabold text-lg md:text-2xl rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center hover:scale-105 transition-transform shrink-0 leading-tight">
              Say<br />Hello
            </button>
          </div>

          {/* Three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-2xl md:text-3xl text-pocketBlack font-medium mb-8">
                  {col.title}
                </h3>
                <p className="text-pocketBlack text-base md:text-[20px] font-medium leading-[1.4]">
                  {col.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesCheck;