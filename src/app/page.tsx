"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import AppFeatures from "@/components/AppFeatures";
import Platforms from "@/components/Platforms";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Demo />
        <AppFeatures />
        <Platforms />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}
