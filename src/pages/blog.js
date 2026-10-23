import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCarousel from "../components/BlogCarousel";
import BlogCategory from "../components/BlogCategory";

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