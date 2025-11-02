import React from 'react';
import { Code2, Megaphone, Bug, ShieldCheck } from 'lucide-react';

const expertise = [
  {
    icon: Code2,
    title: 'Software Engineering',
    points: [
      'Scalable APIs and cloud-native systems',
      'Clean architectures & DevOps automation',
      'Performance, reliability, and DX first',
    ],
    accent: 'from-fuchsia-500 to-purple-500',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    points: [
      'Full-funnel strategy rooted in analytics',
      'SEO/SEM, CRO, and marketing automation',
      'Creative + data = measurable growth',
    ],
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Bug,
    title: 'QA Test Automation',
    points: [
      'E2E, API, and contract testing at scale',
      'CI pipelines, flaky test reduction',
      'Shift-left quality culture',
    ],
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Reliability',
    points: [
      'Secure SDLC and threat modeling',
      'Observability and incident response',
      'SLOs, SLIs, and error budgets',
    ],
    accent: 'from-amber-400 to-orange-500',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative w-full bg-[#0b0b10] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Multidisciplinary Expertise</h2>
          <p className="mt-3 text-white/70">
            Bridging product, platform, and growth: I design systems that deliver business outcomes without compromising craftsmanship.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${item.accent} opacity-20 blur-2xl`}
              />
              <div className="relative z-10">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {item.points.map((p) => (
                    <li key={p} className="leading-relaxed">• {p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
