"use client";

import {
  ArrowUpRight,
  Github,
  Globe,
  Smartphone,
  Rocket,
  Sparkles,
} from "lucide-react";

const projectCategories = [
  "All",
  "Web",
  "Mobile",
  "Ecommerce",
  "SaaS",
  "Open Source",
];

const projects = [
  {
    title: "Atlas Commerce Platform",
    category: "Ecommerce",
    summary:
      "Headless commerce experience with personalized recommendations and lightning-fast checkout.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    metrics: [
      { label: "Conversion Lift", value: "+21%" },
      { label: "CLS", value: "0.02" },
    ],
    cta: { label: "View Case Study", href: "#" },
    status: "Live",
  },
  {
    title: "Pulse Mobile Banking",
    category: "Mobile",
    summary:
      "Secure cross-platform banking app with biometric auth and offline-first transactions.",
    tech: ["React Native", "Expo", "Node.js", "GraphQL", "AWS"],
    metrics: [
      { label: "Crash Free", value: "99.98%" },
      { label: "TTI", value: "1.8s" },
    ],
    cta: { label: "View Case Study", href: "#" },
    status: "Live",
  },
  {
    title: "Nimbus Analytics SaaS",
    category: "SaaS",
    summary:
      "Multi-tenant analytics with real-time dashboards, role-based access, and white-labeling.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Kafka", "Tailwind"],
    metrics: [
      { label: "Latency", value: "<120ms" },
      { label: "Tenants", value: "50+" },
    ],
    cta: { label: "View Case Study", href: "#" },
    status: "Live",
  },
  {
    title: "Helix DevOps Portal",
    category: "Web",
    summary:
      "Developer portal with golden paths, pipeline templates, and self-service environments.",
    tech: ["Next.js", "NestJS", "Docker", "Kubernetes", "GitHub Actions"],
    metrics: [
      { label: "Deploy Time", value: "-65%" },
      { label: "MTTR", value: "-38%" },
    ],
    cta: { label: "View Case Study", href: "#" },
    status: "In Flight",
  },
  {
    title: "Canvas UI Kit",
    category: "Open Source",
    summary:
      "A11y-first React component library with tokens, themes, and motion primitives.",
    tech: ["React", "TypeScript", "Storybook", "Framer Motion", "Chromatic"],
    metrics: [
      { label: "Installs", value: "12k/mo" },
      { label: "Coverage", value: "98%" },
    ],
    cta: { label: "View on GitHub", href: "#" },
    status: "OSS",
  },
  {
    title: "Verde ESG Dashboard",
    category: "Web",
    summary:
      "Sustainability intelligence dashboard with emissions tracking, targets, and reporting.",
    tech: ["Next.js", "D3.js", "Supabase", "tRPC", "Tailwind"],
    metrics: [
      { label: "Data Freshness", value: "15m" },
      { label: "Engagement", value: "+32%" },
    ],
    cta: { label: "View Case Study", href: "#" },
    status: "Live",
  },
];

const badgeByCategory = {
  Web: "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-900/40 dark:text-blue-100 dark:border-blue-800/60",
  Mobile:
    "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-100 dark:border-emerald-800/60",
  Ecommerce:
    "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-900/40 dark:text-amber-100 dark:border-amber-800/60",
  SaaS: "bg-purple-50 text-purple-800 border-purple-200 dark:bg-purple-900/40 dark:text-purple-100 dark:border-purple-800/60",
  "Open Source":
    "bg-slate-50 text-slate-800 border-slate-200 dark:bg-slate-900/40 dark:text-slate-100 dark:border-slate-800/60",
  Default: "bg-secondary text-secondary-foreground",
};

function CategoryPill({ category }) {
  const style = badgeByCategory[category] || badgeByCategory.Default;
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${style}`}
    >
      {category}
    </span>
  );
}

function MetricBadge({ label, value }) {
  return (
    <div className="px-3 py-2 text-left rounded-lg bg-secondary dark:bg-secondary/60">
      <p className="text-xs tracking-wide uppercase text-muted-foreground">
        {label}
      </p>
      <p className="text-sm font-semibold text-primary dark:text-white">
        {value}
      </p>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-to-br from-background via-muted/40 to-background sm:py-28">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground">
                <Sparkles className="w-4 h-4" />
                ByteWave Portfolio
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-primary dark:text-white sm:text-5xl lg:text-6xl">
                Projects that marry craft and performance.
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                From ecommerce scale-ups to mission-critical mobile experiences,
                we deliver resilient products with measurable outcomes.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-colors rounded-md shadow-sm bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                >
                  Start a Project
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-colors border rounded-md border-border text-primary dark:text-white hover:border-accent"
                >
                  View Work
                </a>
              </div>
              <div className="flex flex-wrap gap-2 pt-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Web Platforms
                </span>
                <span className="inline-flex items-center gap-2">
                  <Smartphone className="w-4 h-4" /> Mobile Apps
                </span>
              </div>
            </div>
            <div className="grid gap-4 p-6 border shadow-lg rounded-2xl border-border bg-card/70 backdrop-blur-sm dark:bg-card/60">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Shipped in 2025
                  </p>
                  <p className="text-3xl font-bold text-primary dark:text-white">
                    28 projects
                  </p>
                </div>
                <Rocket className="w-10 h-10 text-accent" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <MetricBadge label="Avg TTI" value="1.9s" />
                <MetricBadge label="Uptime" value="99.99%" />
                <MetricBadge label="Perf Budget" value="< 190kb" />
                <MetricBadge label="Coverage" value="95%" />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs text-muted-foreground">
                <div className="p-3 border border-dashed rounded-lg border-border">
                  <p className="font-semibold text-primary dark:text-white">
                    Web & Mobile
                  </p>
                  <p className="mt-1">Next.js · React Native · GraphQL</p>
                </div>
                <div className="p-3 border border-dashed rounded-lg border-border">
                  <p className="font-semibold text-primary dark:text-white">
                    Infra & QA
                  </p>
                  <p className="mt-1">CI/CD · Observability · Security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 sm:py-24">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-base font-semibold leading-7 tracking-widest uppercase text-accent">
                Featured Projects
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
                Selected work that delivered results
              </p>
              <p className="max-w-2xl mt-4 text-muted-foreground">
                Case studies across web, mobile, and platform engineering. Each
                project balances craft, speed, and measurable business impact.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 text-xs font-semibold border rounded-full border-border bg-secondary/60 text-secondary-foreground dark:bg-secondary/40"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="relative flex flex-col h-full p-6 overflow-hidden transition-all border shadow-sm group rounded-2xl border-border bg-card hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-3">
                  <CategoryPill category={project.category} />
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-muted text-muted-foreground dark:bg-muted/60">
                    {project.status}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-primary dark:text-white group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground dark:bg-secondary/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  {project.metrics.map((metric) => (
                    <MetricBadge
                      key={metric.label}
                      label={metric.label}
                      value={metric.value}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-6 text-sm font-semibold text-primary dark:text-white">
                  <a
                    href={project.cta.href}
                    className="inline-flex items-center gap-2 hover:text-accent"
                  >
                    {project.cta.label}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  {project.status === "OSS" && (
                    <a
                      href={project.cta.href}
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent"
                    >
                      <Github className="w-4 h-4" /> Source
                    </a>
                  )}
                </div>

                <div className="absolute inset-0 transition-colors border border-transparent pointer-events-none rounded-2xl group-hover:border-accent/60" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
