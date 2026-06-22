import { Briefcase, Users, Code2, Cloud } from "lucide-react";

const services = [
  {
    title: "IT Consulting & Strategy",
    description: "Assess systems, define priorities, and build practical roadmaps—from architecture reviews to digital transformation planning.",
    icon: Briefcase,
  },
  {
    title: "Talent Sourcing & Staffing",
    description: "Contract staffing, dedicated engineering teams, and direct hire support with technical vetting led by our engineering leads.",
    icon: Users,
  },
  {
    title: "Software Delivery",
    description: "End-to-end web, mobile, and platform development when you need a partner who can both advise and build.",
    icon: Code2,
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud architecture, CI/CD pipelines, and infrastructure designed for reliability, security, and growth.",
    icon: Cloud,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-muted/30 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-accent uppercase tracking-widest">Our Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
            Modern Solutions for Complex IT Challenges
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From advisory engagements to embedded engineering teams, we help you move faster with the right people and the right plan.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col rounded-2xl border bg-card p-8 transition-all hover:shadow-lg">
                <dt className="flex items-center gap-x-3 text-lg font-bold leading-7 text-primary dark:text-white">
                  <service.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Services;
