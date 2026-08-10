import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section id="skills" className="bg-[#f7f8fa]">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1557ff]">Toolkit</p>
            <h2 className="mt-5 max-w-[390px] text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#111318] sm:text-5xl">
              Tools I use to ship complete application flows.
            </h2>
            <p className="mt-6 max-w-[380px] leading-7 text-[#707781]">
              Grouped by where I use them, not as a wall of technology logos.
            </p>
          </div>

          <div className="border-t border-black/10 lg:col-span-8">
            {SkillsInfo.map((category, index) => (
              <div
                key={category.title}
                className="grid gap-5 border-b border-black/10 py-7 sm:grid-cols-[48px_210px_1fr] sm:gap-6 lg:grid-cols-[56px_230px_1fr] lg:py-8"
              >
                <span className="text-xs font-semibold tabular-nums text-[#a0a6ae]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-bold tracking-[-0.025em] text-[#111318]">{category.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#858b94]">{category.description}</p>
                </div>
                <div className="flex flex-wrap content-start gap-x-5 gap-y-2 text-sm font-semibold leading-6 text-[#535b65]">
                  {category.skills.map((skill) => (
                    <span key={skill} className="border-b border-black/10 pb-0.5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
