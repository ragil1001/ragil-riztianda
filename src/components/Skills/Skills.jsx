import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-[7vw] py-24 font-sans lg:px-[14vw]"
    >
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-300">
          Technical capabilities
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Tools I use to ship across the stack.
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg">
          I focus on technologies I have used in coursework, internship work, and complete application builds rather than listing every tool I have ever tried.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
          >
            <h3 className="text-lg font-bold text-white">{category.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-[#151326] px-3 py-1.5 text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
