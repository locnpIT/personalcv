import React from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Interests } from "@/components/sections/Interests";
import { Publication } from "@/components/sections/Publication";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="relative">
      {/* 1. Hero */}
      <Hero />

      {/* 2. About Me */}
      <About />

      {/* 3. What I Do */}
      <WhatIDo />

      {/* 4. Selected Engineering Work */}
      <Projects />

      {/* 5. Experience */}
      <Experience />

      {/* 6. Engineering Interests */}
      <Interests />

      {/* 7. Research & Publication */}
      <Publication />

      {/* 8. Education */}
      <Education />

      {/* 9. Contact */}
      <Contact />
    </main>
  );
}
