import {
  Globe,
  Smartphone,
  Code2,
  Palette,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Layers,
  Database,
  Cloud,
  TestTube,
} from "lucide-react";

const services = [
  {
    id: "web-dev",
    title: "Web Application Development",
    icon: Globe,
    description:
      "Building scalable, high-performance web applications using cutting-edge technologies and modern architecture patterns.",
    technologies: [
      "React.js & Next.js",
      "Node.js & Express",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL & MongoDB",
      "RESTful & GraphQL APIs",
    ],
    features: [
      "Server-Side Rendering (SSR)",
      "Progressive Web Apps (PWA)",
      "Real-time Applications",
      "Microservices Architecture",
      "Cloud-Native Solutions",
      "SEO Optimization",
    ],
  },
  {
    id: "mobile-dev",
    title: "Mobile Application Development",
    icon: Smartphone,
    description:
      "Creating cross-platform mobile experiences that deliver native performance and exceptional user experiences.",
    technologies: [
      "React Native",
      "Flutter",
      "Expo",
      "Firebase",
      "Native APIs Integration",
      "Push Notifications",
    ],
    features: [
      "Cross-Platform Development",
      "Native Performance",
      "Offline Functionality",
      "App Store Deployment",
      "Biometric Authentication",
      "Deep Linking",
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design & Prototyping",
    icon: Palette,
    description:
      "Crafting intuitive, accessible, and visually stunning interfaces that delight users and drive engagement.",
    technologies: [
      "Figma",
      "Adobe XD",
      "Framer Motion",
      "Design Systems",
      "Accessibility Standards",
      "User Research Tools",
    ],
    features: [
      "Wireframing & Prototyping",
      "User Journey Mapping",
      "Responsive Design",
      "Design System Creation",
      "Usability Testing",
      "Brand Identity",
    ],
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure & DevOps",
    icon: Cloud,
    description:
      "Architecting robust, scalable cloud solutions with automated deployment pipelines and monitoring systems.",
    technologies: [
      "AWS & Azure",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Terraform",
      "GitHub Actions",
      "Monitoring Tools",
    ],
    features: [
      "Auto-Scaling Infrastructure",
      "Zero-Downtime Deployments",
      "Container Orchestration",
      "Infrastructure as Code",
      "Load Balancing",
      "Disaster Recovery",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
    icon: Layers,
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Our design team creates intuitive wireframes and interactive prototypes, ensuring alignment with your vision before development begins.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "Using sprint-based methodology, we build your product iteratively with regular demos and feedback loops for maximum flexibility.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Quality Assurance",
    description:
      "Rigorous testing at every stage ensures your product is bug-free, performant, and ready for production deployment.",
    icon: TestTube,
  },
  {
    step: "05",
    title: "Deployment & Support",
    description:
      "We handle seamless deployment to production and provide ongoing maintenance, updates, and technical support.",
    icon: Zap,
  },
];

const engagementModels = [
  {
    title: "Fixed-Price Projects",
    description:
      "Perfect for well-defined projects with clear scope and deliverables.",
    features: [
      "Defined timeline and budget",
      "Clear milestones and deliverables",
      "Ideal for MVPs and prototypes",
      "No hourly tracking overhead",
    ],
    bestFor: "Startups & Small Businesses",
  },
  {
    title: "Time & Materials",
    description:
      "Flexible engagement for evolving requirements and long-term partnerships.",
    features: [
      "Pay for actual time spent",
      "Flexible scope adjustments",
      "Transparent hourly/daily rates",
      "Regular sprint deliveries",
    ],
    bestFor: "Growing Companies",
  },
  {
    title: "Dedicated Team",
    description:
      "Scale your team with our dedicated engineers working exclusively on your project.",
    features: [
      "Full-time dedicated resources",
      "Direct team communication",
      "Long-term collaboration",
      "Your processes and tools",
    ],
    bestFor: "Enterprise & Scale-ups",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-20 bg-gradient-to-br from-background via-background to-muted/30 sm:pt-16 sm:pb-28">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary dark:text-white sm:text-5xl lg:text-6xl">
              Elite Engineering Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              We craft world-class digital products using cutting-edge
              technologies and battle-tested methodologies. From concept to
              deployment, we&apos;re your engineering partner.
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <a
                href="/contact"
                className="px-6 py-3 text-sm font-semibold transition-colors rounded-md shadow-sm bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                Start Your Project
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 text-sm font-semibold leading-6 transition-all text-primary dark:text-white hover:gap-3"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-20 sm:py-24 bg-background">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-base font-semibold leading-7 tracking-widest uppercase text-accent">
              Core Services
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
              Comprehensive Technology Solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-8 transition-all border group rounded-2xl border-border bg-card hover:shadow-xl hover:border-accent/50 dark:hover:border-accent"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent dark:bg-accent/20">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary dark:text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3 text-sm font-semibold tracking-wider uppercase text-primary dark:text-white">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground dark:bg-secondary/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 text-sm font-semibold tracking-wider uppercase text-primary dark:text-white">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-base font-semibold leading-7 tracking-widest uppercase text-accent">
              Our Process
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
              Agile, Transparent, Results-Driven
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We follow a proven sprint-based methodology with a QA-first
              approach, ensuring quality at every stage of development.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((process, index) => (
                <div
                  key={process.step}
                  className="flex items-start gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 transition-colors rounded-full bg-accent/10 text-accent dark:bg-accent/20 group-hover:bg-accent group-hover:text-white">
                      <process.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold tracking-wider uppercase text-accent">
                        Step {process.step}
                      </span>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-primary dark:text-white">
                      {process.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-base font-semibold leading-7 tracking-widest uppercase text-accent">
              Engagement Models
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
              Flexible Partnership Options
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Choose the engagement model that best fits your project
              requirements and budget.
            </p>
          </div>

          <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="p-8 transition-all border rounded-2xl border-border bg-card hover:shadow-xl hover:border-accent/50 dark:hover:border-accent"
              >
                <h3 className="mb-2 text-xl font-bold text-primary dark:text-white">
                  {model.title}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  {model.description}
                </p>

                <ul className="mb-6 space-y-3">
                  {model.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-border">
                  <p className="text-xs font-semibold tracking-wider uppercase text-accent">
                    Best For
                  </p>
                  <p className="mt-1 text-sm font-medium text-primary dark:text-white">
                    {model.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-accent/10 via-background to-background dark:from-accent/5">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
              Ready to Build Something Amazing?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let&apos;s discuss your project and find the perfect solution for
              your needs. Our team is ready to turn your vision into reality.
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <a
                href="/contact"
                className="px-8 py-3 text-sm font-semibold text-white transition-colors rounded-md shadow-sm bg-accent hover:bg-accent/90"
              >
                Get Started
              </a>
              <a
                href="/projects"
                className="flex items-center gap-2 text-sm font-semibold leading-6 transition-all text-primary dark:text-white hover:gap-3"
              >
                View Our Work <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
