import React from "react";
import { graphql } from "gatsby";

// Layout (Notice the extra ../)
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BlogInner from "../components/blog/BlogInner";

export default function BlogInnerPage({ data }) {
  // Safety check
  if (!data || !data.wpPost) {
    return <div className="min-h-screen flex items-center justify-center">Post not found</div>;
  }

  return (
    <>
      <Navbar activePage="Blogs" />
      <main className="w-full bg-white min-h-screen">
        <BlogInner post={data.wpPost} />
      </main>
      <Footer />
    </>
  );
}

// Keep the query the same, with the required "!"
export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
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
    }
  }
`;