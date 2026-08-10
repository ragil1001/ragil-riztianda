import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { experiences } from "../../constants";

const Experience = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="bg-[#111318] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7fa0ff]">Experience</p>
              <h2 className="mt-5 max-w-[410px] text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl">
                Building systems, then teaching how software works.
              </h2>
              <p className="mt-6 max-w-[390px] leading-7 text-white/55">
                Internship development gave me end-to-end product context. Teaching and mentoring strengthened how I explain code, debugging, and technical decisions.
              </p>
            </div>
          </div>

          <div className="border-t border-white/15 lg:col-span-8">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.id}
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-6 border-b border-white/15 py-8 md:grid-cols-[56px_170px_1fr] md:gap-6 md:py-10"
              >
                <span className="text-xs font-semibold tabular-nums text-white/30">{String(index + 1).padStart(2, "0")}</span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#7fa0ff]">{experience.type}</p>
                  <p className="mt-3 text-sm font-semibold text-white/75">{experience.date}</p>
                  <p className="mt-1 text-xs leading-5 text-white/35">{experience.location}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold leading-tight tracking-[-0.035em] sm:text-3xl">{experience.role}</h3>
                  <p className="mt-2 text-sm font-semibold text-white/55">{experience.company}</p>
                  <p className="mt-5 max-w-[720px] leading-7 text-white/65">{experience.desc}</p>

                  {experience.highlights?.length > 0 && (
                    <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight} className="grid grid-cols-[12px_1fr] gap-3 py-3.5 text-sm leading-6 text-white/58">
                          <span className="mt-[9px] h-[5px] w-[5px] bg-[#5f87ff]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="mt-6 text-xs leading-6 text-white/35">{experience.skills.join(" / ")}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
