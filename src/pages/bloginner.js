import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Blog components
import BlogInner from "../components/blog/BlogInner";

export default function BlogInnerPage() {
  return (
    <>
      <Navbar activePage="Blogs" />
      <main className="w-full bg-white min-h-screen">
        <BlogInner />
      </main>
      <Footer />
    </>
  );
}