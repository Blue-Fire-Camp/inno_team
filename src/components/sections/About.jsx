const About = () => {
  return (
    <section id="about" className="bg-primary text-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-base font-semibold leading-7 text-accent uppercase tracking-widest">About ByteWave</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Engineering judgment for the modern age.
            </p>
            <p className="mt-6 text-lg leading-8 text-blue-100/80">
              ByteWave is a student-led startup built on collaboration, skill, and a focus on human engineering mindset. We believe that while AI tools can generate code quickly, they lack the true judgment needed to solve complex problems.
            </p>
            <p className="mt-4 text-lg leading-8 text-blue-100/80">
              Our team helps shape rough ideas into solid products, focusing on understanding intent and building usable solutions for individuals, startups, and businesses. We are growing organically through craftsmanship, not hype.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <p className="text-3xl font-bold italic">Student</p>
                <p className="text-sm font-medium text-blue-100/60 uppercase">Led Collective</p>
              </div>
              <div>
                <p className="text-3xl font-bold italic">Organic</p>
                <p className="text-sm font-medium text-blue-100/60 uppercase">Skill-Based Growth</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square flex items-center justify-center border border-white/10 bg-white/5">
             <div className="p-12 text-center">
                <span className="text-8xl font-black opacity-10">BW</span>
                <p className="text-xl font-medium mt-4">Human Thinking. Solid Engineering. Real Products.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
