import React from "react";
import { graphql } from "gatsby";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Blog components
import BlogCarousel from "../components/blog/BlogCarousel";
import BlogCategory from "../components/blog/BlogCategory";

export default function BlogPage({ data }) {
  const posts = data.allWpPost.nodes;

  return (
    <>
      <Navbar activePage="Blogs" />
      <main className="w-full bg-[#f2f2f2] min-h-screen overflow-hidden">
        {/* Pass the WordPress posts to your components */}
        <BlogCarousel posts={posts} />
        <BlogCategory posts={posts} />
      </main>
      <Footer />
    </>
  );
}

export const query = graphql`
  query BlogPageQuery {
    allWpPost(sort: { date: DESC }) {
      nodes {
        id
        title
        uri
        date(formatString: "MMMM DD, YYYY")
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;