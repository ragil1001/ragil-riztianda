import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import profileImage from "../../assets/ragil.jpg";

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-[#f7f8fa] pt-[72px]">
      <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-32 lg:pt-20">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7a818b]">
          <span>Software Engineer · Full-Stack Developer</span>
          <span className="flex items-center gap-2 text-[#111318]">
            <span className="h-2 w-2 bg-[#1557ff]" />
            Open to software roles
          </span>
        </div>

        <div className="grid gap-12 pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <h1 className="max-w-[920px] text-[clamp(3.1rem,6.4vw,6.6rem)] font-black leading-[0.94] tracking-[-0.068em] text-[#111318]">
              I build web, backend, and mobile systems end to end.
            </h1>

            <div className="mt-9 grid gap-7 border-t border-black/10 pt-7 sm:grid-cols-2 sm:gap-10 lg:max-w-[900px]">
              <p className="text-[17px] leading-8 text-[#4f5661]">
                Recent work includes an HRIS for outsourced workforce operations at PT Qiprah Multi Service, developed across Flutter, Next.js/React, Laravel, PostgreSQL, Firebase, and Redis.
              </p>
              <p className="text-[17px] leading-8 text-[#6d747e]">
                My project work also covers multi-role marketplaces, community information systems, cinema booking flows, and teaching programming fundamentals in Java and C.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4">
              <button
                type="button"
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 border-b-2 border-[#1557ff] pb-1 text-sm font-bold text-[#111318] transition-colors hover:text-[#1557ff]"
              >
                Selected work
                <FiArrowDownRight size={16} />
              </button>
              <a
                href="https://www.linkedin.com/in/ragilriztianda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-black/20 pb-1 text-sm font-bold text-[#555c66] transition-colors hover:text-[#111318]"
              >
                LinkedIn
                <FiArrowUpRight size={15} />
              </a>
              <a
                href="mailto:ragilriztianda2@gmail.com"
                className="inline-flex items-center gap-2 border-b border-black/20 pb-1 text-sm font-bold text-[#555c66] transition-colors hover:text-[#111318]"
              >
                Email
                <FiArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:pl-8"
          >
            <div className="grid gap-5 sm:grid-cols-[220px_1fr] lg:grid-cols-1">
              <div className="overflow-hidden border border-black/10 bg-[#e7e9ed]">
                <img
                  src={profileImage}
                  alt="Ragil Riztianda"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
              </div>

              <div className="border-t border-black/10 pt-5">
                <dl className="space-y-4 text-sm">
                  <div className="grid grid-cols-[92px_1fr] gap-4">
                    <dt className="text-[#8a9098]">Based in</dt>
                    <dd className="font-semibold text-[#111318]">Indonesia</dd>
                  </div>
                  <div className="grid grid-cols-[92px_1fr] gap-4">
                    <dt className="text-[#8a9098]">Graduate</dt>
                    <dd className="font-semibold text-[#111318]">Informatics · Aug 2026</dd>
                  </div>
                  <div className="grid grid-cols-[92px_1fr] gap-4">
                    <dt className="text-[#8a9098]">Focus</dt>
                    <dd className="font-semibold leading-6 text-[#111318]">Software engineering, full-stack web, mobile</dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default About;
