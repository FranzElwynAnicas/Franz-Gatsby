import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogInner from "../components/BlogInner";

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