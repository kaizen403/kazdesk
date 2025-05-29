"use client";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Analytics } from "@/components/sections/analytics";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95 overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Analytics />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta />
        <Footer />
      </div>
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-5"></div>
    </main>
  );
}

