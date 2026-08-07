import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section id="skills" className="border-y border-black/10 bg-[#101216] text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-[760px]">
          <h2 className="text-4xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            A practical toolkit across the stack.
          </h2>
          <p className="mt-5 max-w-[620px] text-lg leading-8 text-white/60">
            Technologies I have used in complete application flows, internship work, teaching, and academic projects.
          </p>
        </div>

        <div className="mt-14 grid border-t border-white/15 md:grid-cols-2 xl:grid-cols-4">
          {SkillsInfo.map((category, index) => (
            <div
              key={category.title}
              className={`border-b border-white/15 py-8 md:px-7 xl:min-h-[320px] xl:border-b-0 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 0 ? "xl:border-l" : ""}`}
            >
              <p className="text-sm font-semibold text-[#6f91ff]">{category.title}</p>
              <ul className="mt-6 space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-[15px] leading-6 text-white/75"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
