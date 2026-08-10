import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#1557ff] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">Contact</p>

        <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <h2 className="max-w-[940px] text-5xl font-black leading-[0.94] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
              Looking for a developer who can work across the stack?
            </h2>
            <p className="mt-7 max-w-[640px] text-lg leading-8 text-white/72">
              I&apos;m open to software engineering, full-stack, backend, web, and mobile development opportunities. Email is the most direct way to reach me.
            </p>
          </div>

          <div className="lg:col-span-4 lg:justify-self-end">
            <a
              href="mailto:ragilriztianda2@gmail.com"
              className="inline-flex items-center gap-3 border-b-2 border-white pb-1 text-lg font-bold transition-opacity hover:opacity-70"
            >
              Send an email
              <FiArrowUpRight size={19} />
            </a>
            <p className="mt-5 break-all text-sm text-white/60">ragilriztianda2@gmail.com</p>
          </div>
        </div>

        <div className="mt-20 grid gap-5 border-t border-white/25 pt-6 sm:grid-cols-2 sm:items-center">
          <p className="text-sm font-semibold text-white/65">Indonesia · Available for software roles</p>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-bold sm:justify-end">
            <a
              href="https://www.linkedin.com/in/ragilriztianda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
            >
              LinkedIn <FiArrowUpRight size={14} />
            </a>
            <a
              href="https://github.com/ragil1001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
            >
              GitHub <FiArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
