import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-[7vw] py-24 font-sans lg:px-[14vw]"
    >
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-300">
          Experience
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Building software and helping others learn it.
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg">
          My experience combines end-to-end product development with teaching and mentoring. The common thread is translating requirements into something people can use and understand.
        </p>
      </div>

      <div className="space-y-5">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-6 md:grid-cols-[180px_1fr] md:p-8"
          >
            <div>
              <p className="text-sm font-semibold text-purple-300">{experience.date}</p>
              <p className="mt-2 text-sm text-gray-500">{experience.location}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {experience.role}
              </h3>
              <p className="mt-1 font-medium text-gray-300">{experience.company}</p>
              <p className="mt-4 max-w-4xl leading-7 text-gray-400">
                {experience.desc}
              </p>

              {experience.highlights?.length > 0 && (
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-gray-300 md:grid-cols-2">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-[#151326] px-3 py-1 text-xs font-semibold text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
