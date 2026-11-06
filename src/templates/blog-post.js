import React from "react";
import { graphql } from "gatsby";

// Layout (Notice the extra ../)
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BlogInner from "../components/blog/BlogInner";

export default function BlogInnerPage({ data }) {
  if (!data || !data.wpPost) {
    return <div className="min-h-screen flex items-center justify-center">Post not found</div>;
  }

  const currentPostId = data.wpPost.id; // Get current ID

  // Extract all related posts from the categories
  const relatedPosts = data.wpPost.categories.nodes.flatMap(cat => cat.posts.nodes);
  
  // Remove duplicates AND the current post
  const uniqueRelatedPosts = Array.from(new Set(relatedPosts.map(p => p.id)))
    .map(id => relatedPosts.find(p => p.id === id))
    .filter(p => p.id !== currentPostId) // This is the fix!
    .slice(0, 8);

  return (
    <>
      <Navbar activePage="Blogs" />
      <main className="w-full bg-white min-h-screen">
        <BlogInner post={data.wpPost} relatedPosts={uniqueRelatedPosts} />
      </main>
      <Footer />
    </>
  );
}

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
      categories {
        nodes {
          name
          slug
          posts {
            nodes {
              id
              title
              uri
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;