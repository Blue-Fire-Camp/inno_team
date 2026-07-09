const About = () => {

  return (

    <section id="about" className="bg-primary text-white py-24 sm:py-32">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">

          <div>

            <h2 className="text-base font-semibold leading-7 text-accent uppercase tracking-widest">About SuperValue</h2>

            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">

              Strategic IT partnerships built on trust.

            </p>

            <p className="mt-6 text-lg leading-8 text-blue-100/80">

              SuperValue LLC is a California-registered company providing IT consulting and talent sourcing for businesses that need reliable technology outcomes. We combine consulting clarity with delivery experience honed by a global engineering team.



We help clients clarify requirements, place vetted technical talent, and deliver software with craftsmanship, accountability, and long-term maintainability in mind.

            </p>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">

              <div>

                <p className="text-3xl font-bold italic">Global</p>

                <p className="text-sm font-medium text-blue-100/60 uppercase">Remote Delivery</p>

              </div>

              <div>

                <p className="text-3xl font-bold italic">Engineering-Led</p>

                <p className="text-sm font-medium text-blue-100/60 uppercase">Client-First</p>

              </div>

            </div>

          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-square flex items-center justify-center border border-white/10 bg-white/5">

             <div className="p-12 text-center">

                <span className="text-8xl font-black opacity-10">SV</span>

                <p className="text-xl font-medium mt-4">People First. Process Driven. Results Focused.</p>

             </div>

          </div>

        </div>

      </div>

    </section>

  );

};



export default About;
