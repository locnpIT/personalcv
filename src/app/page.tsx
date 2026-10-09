import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Interests } from "@/components/sections/Interests";
import { Publication } from "@/components/sections/Publication";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { WaterTransition } from "@/components/ui/WaterTransition";
import { WaterEffects } from "@/components/ui/WaterEffects";

export default function HomePage() {
  return (
    <div id="portfolio-home">
      <Hero />
      <main id="main-content">
        <About />
        <WhatIDo />
        <WaterTransition />
        <Projects />
        <Experience />
        <Interests />
        <section id="research" className="section research-section">
          <div className="container research-grid">
            <Publication />
            <Education />
          </div>
        </section>
        <Contact />
      </main>
      <WaterEffects />
    </div>
  );
}
