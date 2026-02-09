import Link from "next/link";
import Image from "next/image";
import { projects as projectData } from "../../../libs/data/project";
import { ExternalLink, Github, Code, Layout, Smartphone, Database, ArrowRight } from "lucide-react";

const iconMap = {
  Layout: <Layout className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Code: <Code className="h-5 w-5" />,
  Smartphone: <Smartphone className="h-5 w-5" />,
};

const Projects = () => {
  const latestProjects = projectData.slice(0, 3).map(p => ({
    ...p,
    icon: iconMap[p.iconName] || <Code className="h-5 w-5" />
  }));

  return (
    <section id="projects" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-accent uppercase tracking-widest">Our Work</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
            Success Stories
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A showcase of our latest technical engineering projects. We build solid, usable products that solve real problems.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
          {latestProjects.map((project, index) => (
            <article 
              key={index} 
              className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-6">
                  <p className="text-xs font-medium text-white italic">
                    " {project.results} "
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-accent mb-3">
                  {project.icon}
                  <h3 className="text-xl font-bold text-primary dark:text-white">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tech.slice(0, 2).map((t) => (
                      <span 
                        key={t} 
                        className="rounded-md border bg-muted/50 px-2 py-1 text-[10px] font-semibold text-muted-foreground uppercase tracking-tight"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link href="/projects" className="text-accent hover:underline flex items-center gap-1 text-sm font-bold">
                    Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90"
          >
            View More Projects <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
