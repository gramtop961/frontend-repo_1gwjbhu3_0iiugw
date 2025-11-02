import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#0b0b10] py-20 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Let’s build what’s next</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Whether you need a scalable platform, a growth engine, or resilient QA automation, I can help you move faster with confidence.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-fuchsia-400"
          >
            <Mail className="h-4 w-4" />
            hello@example.com
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <p className="mt-10 text-xs text-white/40">
          © {new Date().getFullYear()} — Expert in Software Engineering, Digital Marketing, and QA Automation
        </p>
      </div>
    </section>
  );
}
