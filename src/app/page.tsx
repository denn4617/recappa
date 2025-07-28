import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import About from "@/components/landing/About";
// import CTA from "@/components/landing/CTA";
import Navbar from "@/components/landing/Navbar";
import { LoginRegisterModal } from "@/components/AuthModal/LoginRegisterModal";
import LiveDemo from "@/components/landing/LiveDemo";

export default function LandingPage() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="demo">
        <LiveDemo />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="about">
        <About />
      </section>
      {/*  <section id="cta">
        <CTA />
      </section> */}
    </main>
  );
}
