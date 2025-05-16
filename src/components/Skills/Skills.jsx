import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  // Flatten all skills from SkillsInfo into a single array
  const allSkills = SkillsInfo.reduce((acc, category) => {
    return [...acc, ...category.skills];
  }, []);

  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* All Skills in One Container */}
      <div className="py-10">
        <div className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
            {allSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center bg-transparent border-2 border-gray-700 rounded-3xl py-3 px-2 text-center"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                />
                <span className="text-xs sm:text-sm text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
