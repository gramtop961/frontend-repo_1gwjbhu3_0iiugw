import React from 'react';

const projects = [
  {
    title: 'AI-Powered Test Lab',
    summary:
      'Self-healing E2E automation with visual diffing and contract tests across microservices.',
    tags: ['Playwright', 'Contract Testing', 'K8s', 'Grafana'],
  },
  {
    title: 'Growth OS for SaaS',
    summary:
      'Full-funnel analytics, attribution modeling, and automated lifecycle campaigns at scale.',
    tags: ['GA4', 'BigQuery', 'Segment', 'HubSpot'],
  },
  {
    title: 'Realtime API Platform',
    summary:
      'Globally distributed event streaming platform with strict SLOs and observability baked in.',
    tags: ['FastAPI', 'Kafka', 'Terraform', 'OpenTelemetry'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0b0b10] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Selected Work</h2>
          <p className="mt-3 text-white/70">
            A glimpse of systems I built and scaled. Engineering excellence meets measurable outcomes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
