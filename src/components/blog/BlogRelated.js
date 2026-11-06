import React, { useState } from "react";
import { Link } from "gatsby";

const BlogRelated = ({ relatedPosts }) => {
  // Add state for the likes
  const [likes, setLikes] = useState(999);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  if (!relatedPosts || relatedPosts.length === 0) return null;

  return (
    <section className="w-full bg-white py-12 font-inter">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Like & Share Bar */}
        <div className="flex items-center gap-6 mb-8 py-2">
          <button 
            onClick={handleLike}
            className={`font-bold px-6 py-2 flex items-center gap-2 hover:opacity-90 transition-opacity ${
              hasLiked ? "bg-[#FCBE17]" : "bg-gray-200"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={hasLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
            Like
          </button>
          
          <div className="h-6 w-[1px] bg-gray-300"></div>
          
          <div className="flex items-center gap-2 text-[#179CBD] font-bold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
            <span>{likes}</span>
          </div>
          
          <div className="h-[1px] bg-gray-300 flex-grow ml-2"></div>
        </div>

        {/* Related News Title */}
        <h2 className="text-black lg:text-[#526E87] text-2xl font-medium lg:font-bold mb-8 mt-8">
          Related News
        </h2>

        {/* DYNAMIC Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-12">
          {relatedPosts.map((post, index) => (
            <Link 
              key={post.id} 
              to={post.uri}
              className={`group cursor-pointer flex flex-row md:flex-col gap-4 pb-6 md:pb-0 border-b border-[#526E87]/30 md:border-none ${
                index >= 4 ? "hidden lg:flex" : "flex"
              }`}
            >
              {/* Dynamic Image Container */}
              <div className="overflow-hidden shrink-0 w-[120px] h-[90px] md:w-[364px] md:h-[180px] bg-gray-200">
                {post.featuredImage?.node?.sourceUrl && (
                  <img 
                    src={post.featuredImage.node.sourceUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              
              {/* Dynamic Title */}
              <h3 
                className="text-black lg:text-[#526E87] group-hover:text-[#179CBD] transition-colors max-w-[364px] self-center md:self-start mt-0 md:mt-2 font-normal lg:font-bold text-[14px] lg:text-[20px]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "100%",
                  letterSpacing: "-0.05em",
                }}
              >
                {post.title}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogRelated;