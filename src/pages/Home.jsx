import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import Marquee from "../sections/Marquee";
import Programs from "../sections/Programs";
import About from "../sections/About";
import Features from "../sections/Features";
import Trainers from "../sections/Trainers";
import Gallery from "../sections/Gallery";
import Pricing from "../sections/Pricing";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Contact from "../sections/Contact";

import useLenis from "../hooks/useLenis";
import useReveal from "../hooks/useReveal";

function Home() {
  useLenis();
  useReveal();

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Programs />
      <About />
      <Features />
      <Trainers />
      <Gallery />
      <Pricing />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;