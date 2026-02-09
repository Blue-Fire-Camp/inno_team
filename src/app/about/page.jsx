"use client";

import { motion } from "framer-motion";
import { Code2, Users2, Rocket, Heart, Lightbulb, Target } from "lucide-react";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Human engineering in an <span className="text-bytewave-accent">automated world.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We don't just generate code; we solve problems. ByteWave is a student-led collective focused on turning rough ideas into solid, usable products through collaboration and craftsmanship.
          </p>
        </motion.div>
      </section>

      {/* Origin Story */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How it started</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  ByteWave began when one student approached another with a simple idea: why not form a small team and build things the right way? 
                </p>
                <p>
                  The goal wasn't just to make money, but to collaborate, take on real client jobs, and share earnings fairly while building products that actually matter.
                </p>
                <p>
                  What started as a conversation between two peers quickly grew. We added more students, expanded our reach, and evolved into the organic, focused team we are today.
                </p>
              </div>
            </motion.div>
            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-background border rounded-3xl p-8 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-bytewave-accent/5 rounded-full -mr-16 -mt-16 group-hover:bg-bytewave-accent/10 transition-colors" />
              <div className="relative z-10">
                <Users2 className="w-12 h-12 text-bytewave-accent mb-6" />
                <h3 className="text-2xl font-semibold mb-2">Student Led</h3>
                <p className="text-muted-foreground">
                  Every person at ByteWave is a student. We are learners by nature and engineers by choice, bringing a fresh perspective and immense energy to every challenge.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem & Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Engineering judgment over automation</h2>
            <p className="text-lg text-muted-foreground">
              In an age where AI can spit out a website in seconds, we believe the world still needs thinking engineers. AI tools lack the judgment required to understand true intent and nuanced business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Shaping Ideas",
                description: "Clients often come to us with a rough vision. We help refine that vision, thinking through the logic and usability before a single line of code is written."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Understanding Intent",
                description: "We don't just build what is asked; we build what is needed. We ask the right questions to ensure the end product solves the real-world problem."
              },
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Solid Execution",
                description: "The result of our collaboration is something solid, usable, and engineered for the long term. We focus on quality that hype can't replace."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 border rounded-2xl hover:border-bytewave-accent/50 transition-colors"
              >
                <div className="text-bytewave-accent mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience & Positioning */}
      <section className="bg-bytewave-primary text-white py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Open to everyone</h2>
              <p className="text-xl text-gray-300 mb-8">
                Whether you're an individual with a side project, a startup looking for its first MVP, or a business needing custom software solutions, we're here to help. At this stage, we have no narrow niche—just a passion for building great things.
              </p>
            </div>
            <div className="flex-1 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Honest Positioning</h3>
              <p className="text-gray-300 mb-6">
                We believe in transparency. ByteWave is not an official institution or a registered corporation yet. We aren't backed by massive VCs or endorsed by major brands.
              </p>
              <div className="flex items-center gap-2 text-bytewave-accent font-semibold">
                <Rocket className="w-5 h-5" />
                <span>Growing through skill, not hype.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Direction */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Looking ahead</h2>
          <p className="text-lg text-muted-foreground mb-10">
            ByteWave is in its early stages, and we're currently launching. Our focus remains grounded: building, growing, and constantly improving our engineering craft. We're excited to see where this journey takes us and the products we'll build along the way.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a 
              href="/contact" 
              className="px-8 py-4 bg-bytewave-accent text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-bytewave-accent/20 transition-all"
            >
              Work with us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
