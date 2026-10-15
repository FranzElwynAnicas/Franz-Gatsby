import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const AboutServices = () => {
  const data = useStaticQuery(graphql`
    query AboutServicesQuery {
      videoImg: file(relativePath: { eq: "burgerads.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 718, height: 529, placeholder: BLURRED)
        }
      }
      photoImg: file(relativePath: { eq: "photography.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 755, height: 529, placeholder: BLURRED)
        }
      }
    }
  `);

  const videoImage = getImage(data.videoImg);
  const photoImage = getImage(data.photoImg);

  return (
    <section className="w-full bg-pocketWhite py-10 md:py-20 overflow-hidden">
      
      {/* ================= TOP ROW: Video Production ================= */}
      <div className="w-full flex flex-col lg:flex-row items-start justify-between mb-8 lg:mb-12">
        
        {/* Left Column: Text Block */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-6 md:px-12 lg:pr-4 xl:pr-8 lg:mt-0 lg:ml-[120px]">
          <div className="w-full max-w-[850px] flex flex-col items-start lg:items-end gap-6">
            
            <div className="w-[740px]">
              <h2 className="font-inter text-left text-[32px] md:text-[40px] font-normal leading-[100%] tracking-[-0.05em] text-[#526E87]">
                We’re a <span className="font-extrabold text-[#179CBD]">video production</span><br />
                company
              </h2>
            </div>

            <div className="w-[740px] min-h-[216px] font-inter font-medium text-[20px] leading-[1.2] tracking-[-0.05em] text-[#526E87]">
              <div className="mb-6 flex flex-col">
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">As a video production company, we deliver high quality and engaging content for</span>
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">commercial, corporate, and promotional use. We create TV adverts, brand films,</span>
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">promotional videos, crowdfunding campaign videos, and video content for social</span>
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">media. Our professional video team knows how to craft the right elements together to</span>
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:left]">convey your messages and tell your story.</span>
              </div>

              <div className="flex flex-col">
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">What are you looking for in a video production company? If it’s a creative team who</span>
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">are trustworthy, knowledgeable, enjoyable to work with and well-priced, then we </span>
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:left]">might just be the right fit for you.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image (photography.png) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          {photoImage && (
            <GatsbyImage
              image={photoImage}
              alt="Photographer capturing food on a table"
              className="w-[755px] h-[529px] flex-shrink-0 object-cover"
            />
          )}
        </div>
      </div>

      {/* ================= BOTTOM ROW: Photography (Moved Further Up) ================= */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:-mt-24">
        
        {/* Left Column: Image (burgerads.png) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1 mt-8 lg:mt-0">
          {videoImage && (
            <GatsbyImage
              image={videoImage}
              alt="Video production studio setup"
              className="w-[718px] h-[529px] flex-shrink-0 object-cover"
            />
          )}
        </div>

        {/* Right Column: Text Block */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center order-1 lg:order-2 px-6 md:px-12 lg:pl-12 lg:-ml-32 relative z-10">
          <div className="w-full max-w-[850px] flex flex-col gap-6">
            
            <h2 className="font-inter text-left text-[32px] md:text-[40px] font-normal leading-[100%] tracking-[-0.05em] text-[#526E87]">
              and a <span className="font-bold text-[#179CBD]">photography company</span> too…
            </h2>

            <div className="w-[816px] min-h-[216px] font-inter font-medium text-[20px] leading-[1.2] tracking-[-0.05em] text-[#526E87]">
              <div className="mb-6 flex flex-col">
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">As a photography company, we’re able to squeeze every pixel to deliver images that perform.</span>
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">A photographer must know how to communicate, and view a project from different</span>
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">perspectives, knowing how to create images that jump out and catch attention. We strive to do</span>
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">just that. We offer product photography, people photography and lifestyle photography across</span>
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:left]">a wide rangeof sectors.</span>
              </div>

              <div className="flex flex-col">
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">As a content creation company, we know how to give you the best of both worlds: through the</span>
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">use of video production to tell a story across multiple shots, or where a single photograph has</span>
                <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:left]">to say it all.</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default AboutServices;