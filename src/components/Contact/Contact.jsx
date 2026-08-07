import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="border-t border-black/10 bg-[#edf0f4]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="max-w-[850px] text-5xl font-bold leading-[0.98] tracking-[-0.065em] text-[#101216] sm:text-6xl lg:text-7xl">
              Let&apos;s talk about software that needs to work.
            </h2>
            <p className="mt-6 max-w-[620px] text-lg leading-8 text-[#626872]">
              For software engineering opportunities, project conversations, or technical collaboration, email is the fastest way to reach me.
            </p>
          </div>

          <div className="lg:col-span-4 lg:justify-self-end">
            <a
              href="mailto:ragilriztianda2@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#2055ff] px-6 py-3.5 text-sm font-semibold text-white transition-transform active:scale-[0.98]"
            >
              Contact
              <FiArrowUpRight size={17} />
            </a>
            <p className="mt-5 break-all text-sm text-[#666c75]">
              ragilriztianda2@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap gap-x-7 gap-y-3 border-t border-black/10 pt-6 text-sm font-semibold text-[#505761]">
          <a
            href="https://www.linkedin.com/in/ragilriztianda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#2055ff]"
          >
            LinkedIn <FiArrowUpRight size={14} />
          </a>
          <a
            href="https://github.com/ragil1001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#2055ff]"
          >
            GitHub <FiArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
