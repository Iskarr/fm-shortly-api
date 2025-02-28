"use client";

import { NextPage } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import LinkShortener from "./components/LinkShoterner";
import CallToAction from "./components/CallToAction";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <main className="w-full overflow-hidden relative">
        <Hero />
        <LinkShortener />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
