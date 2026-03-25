import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Code, Layout, Smartphone, Database } from "lucide-react";

export const metadata = {
  title: "Software Development Projects | ByteWave Portfolio",
  description: "Explore ByteWave's portfolio of professional web development projects and custom software solutions. We deliver high-performance applications that drive business growth.",
};

import { projects as projectData } from "../../../libs/data/project";

const iconMap = {
  Layout: <Layout className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Code: <Code className="h-5 w-5" />,
  Smartphone: <Smartphone className="h-5 w-5" />,
};

const projects = projectData.map(p => ({
  ...p,
  icon: iconMap[p.iconName] || <Code className="h-5 w-5" />
}));

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-muted/30 pt-12 pb-20 lg:pt-16 lg:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[10%] top-[10%] h-[30%] w-[30%] rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute right-[10%] bottom-[10%] h-[30%] w-[30%] rounded-full bg-accent/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center">
          <header className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary dark:text-white sm:text-5xl lg:text-6xl">
              Professional <span className="text-accent">Web & Software</span> Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A showcase of our technical competence and real-world experience. Every project represents our commitment to fast, accessible, and high-quality software development services.
            </p>
          </header>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
                Our Work in Action
              </h2>
              <p className="mt-4 text-muted-foreground">
                Explore how we solve complex problems using modern technology stacks and user-centric design patterns.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:text-accent tracking-wide uppercase">
                All Projects
              </span>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project, index) => (
              <article 
                key={index} 
                className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.type} Case Study`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-8">
                    <p className="text-sm font-medium text-white italic">
                      " {project.results} "
                    </p>
                  </div>
                  <div className="absolute left-4 top-4 rounded-full bg-opacity-70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary/70 dark:text-primary/90 backdrop-blur-sm">
                    {project.type}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <div className="flex items-center gap-2 text-accent">
                    {project.icon}
                    <h3 className="text-xl font-bold text-primary dark:text-white lg:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span 
                        key={t} 
                        className="rounded-md border bg-muted/50 px-2 py-1 text-[10px] font-semibold text-muted-foreground uppercase tracking-tight"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex items-center gap-4">
                    <Link
                      href={project.liveLink}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live
                    </Link>
                    <Link
                      href={project.codeLink}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border bg-background px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-muted dark:text-white"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicator / CTA Section */}
      <section className="bg-primary py-16 dark:bg-muted/10">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <Code className="mx-auto h-12 w-12 text-accent" />
            <h2 className="mt-6 text-3xl font-bold text-white">Ready to start your next project?</h2>
            <p className="mt-4 text-lg text-slate-300">
              We bring the same level of technical rigor and attention to detail to every client partner we work with.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
              >
                Let's Talk Technical Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
