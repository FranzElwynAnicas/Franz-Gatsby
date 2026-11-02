import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Blog components
import BlogCarousel from "../components/blog/BlogCarousel";
import BlogCategory from "../components/blog/BlogCategory";

export default function BlogPage() {
  return (
    <>
      <Navbar activePage="Blogs" />
      <main className="w-full bg-[#f2f2f2] min-h-screen overflow-hidden">
        <BlogCarousel />
        <BlogCategory />
      </main>
      <Footer />
    </>
  );
}