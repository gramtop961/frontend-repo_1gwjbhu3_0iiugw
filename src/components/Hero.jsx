import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0b0b10] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b10]/40 to-[#0b0b10]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-fuchsia-300/80">Futuristic Portfolio</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          Software Engineering • Digital Marketing • QA Automation
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg">
          I craft resilient software systems, data-driven marketing funnels, and bulletproof test automation. Blending engineering rigor with growth strategy.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-fuchsia-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-fuchsia-400"
          >
            <Rocket className="h-4 w-4 transition group-hover:translate-x-0.5" />
            Explore Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
