import React from "react";
import profileImage from "../../assets/ragil.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="px-[7vw] pb-24 pt-16 font-sans md:pt-24 lg:px-[14vw] lg:pb-32 lg:pt-32"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-purple-300">
            Software Engineer · Full-Stack Developer
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-7xl">
            I build web, backend, and mobile systems that solve operational problems.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
            I am an Informatics graduate from Universitas Atma Jaya Yogyakarta with hands-on experience developing end-to-end applications across Laravel, Next.js, React, and Flutter. My work spans workforce and attendance operations, multi-role marketplace flows, community information systems, and mobile booking experiences.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            I enjoy turning real workflows into maintainable software: defining data and API flows, building responsive interfaces, integrating mobile capabilities, and debugging systems across layers. I also bring teaching experience from assisting Data Structures and Object-Oriented Programming classes.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-xl bg-purple-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-purple-500"
            >
              View selected work
            </button>
            <a
              href="https://www.linkedin.com/in/ragilriztianda"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ragilriztianda2@gmail.com"
              className="rounded-xl border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Email me
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-purple-950/30">
            <img
              src={profileImage}
              alt="Ragil Riztianda"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-gray-500">Based in</p>
              <p className="mt-1 font-semibold text-white">Indonesia</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-gray-500">Open to</p>
              <p className="mt-1 font-semibold text-white">Software roles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
