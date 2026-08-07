import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import profileImage from "../../assets/ragil.jpg";

const About = () => {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="mx-auto grid min-h-[100dvh] max-w-[1400px] items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-12 lg:pb-20 lg:pt-32"
    >
      <motion.div
        {...reveal}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[780px]"
      >
        <p className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#2055ff]">
          <span className="h-2 w-2 rounded-full bg-[#2055ff]" />
          Full-stack software developer
        </p>

        <h1 className="max-w-[760px] text-[clamp(3.25rem,7.2vw,7.3rem)] font-bold leading-[0.9] tracking-[-0.07em] text-[#101216]">
          Software built around real workflows.
        </h1>

        <p className="mt-8 max-w-[620px] text-lg leading-8 text-[#5d636c] sm:text-xl">
          I build web, backend, and mobile products with Laravel, React, Next.js,
          Flutter, and the systems behind them.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() =>
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 rounded-full bg-[#2055ff] px-6 py-3.5 text-sm font-semibold text-white transition-transform active:scale-[0.98]"
          >
            View work
            <FiArrowDownRight size={17} />
          </button>
          <a
            href="mailto:ragilriztianda2@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#101216] transition-colors hover:border-black/30 active:scale-[0.98]"
          >
            Contact
            <FiArrowUpRight size={17} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:justify-self-end"
      >
        <div className="relative overflow-hidden rounded-[32px] bg-[#dfe4ea]">
          <img
            src={profileImage}
            alt="Ragil Riztianda"
            className="aspect-[4/5] w-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent px-6 pb-6 pt-24 text-white sm:px-8 sm:pb-8">
            <p className="text-2xl font-bold tracking-[-0.04em]">Ragil Riztianda</p>
            <p className="mt-1 text-sm text-white/75">Bachelor of Informatics, 2026</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-black/10 bg-black/10">
          <div className="bg-white p-5">
            <p className="text-xs font-semibold text-[#7b818a]">Recent focus</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#101216]">
              Workforce systems and mobile operations
            </p>
          </div>
          <div className="bg-white p-5">
            <p className="text-xs font-semibold text-[#7b818a]">Build across</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#101216]">
              Web, API, mobile, data, deployment
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
