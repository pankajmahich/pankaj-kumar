import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { FadeIn } from "@/components/ui/MotionWrappers";
import { portfolioData } from "@/constants/constants";

export default function Home() {
  const { settings } = portfolioData;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {settings.enableStats && (
          <FadeIn direction="up">
            <Stats />
          </FadeIn>
        )}

        <FadeIn direction="up" delay={0.1}>
          <About />
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <Skills />
        </FadeIn>

        {settings.enableExperience && (
          <FadeIn direction="up" delay={0.1}>
            <Experience />
          </FadeIn>
        )}

        {settings.enableServices && (
          <FadeIn direction="up" delay={0.1}>
            <Services />
          </FadeIn>
        )}

        <FadeIn direction="up" delay={0.1}>
          <Projects />
        </FadeIn>

        {settings.enableTestimonials && (
          <FadeIn direction="up" delay={0.1}>
            <Testimonials />
          </FadeIn>
        )}

        <FadeIn direction="up" delay={0.1}>
          <Contact />
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
}
