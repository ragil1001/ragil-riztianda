import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section id="experience" className="bg-[#f4f5f7]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="max-w-sm text-4xl font-bold leading-[1.02] tracking-[-0.055em] text-[#101216] sm:text-5xl">
              Experience shaped by building and teaching.
            </h2>
            <p className="mt-5 max-w-sm leading-7 text-[#686e77]">
              Product development gave me system context. Teaching made me explain technical decisions clearly.
            </p>
          </div>

          <div className="border-t border-black/10 lg:col-span-8">
            {experiences.map((experience) => (
              <article
                key={experience.id}
                className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[170px_1fr] md:gap-8 md:py-10"
              >
                <div>
                  <p className="text-sm font-semibold text-[#2055ff]">{experience.date}</p>
                  <p className="mt-2 text-sm leading-6 text-[#858a92]">{experience.location}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.035em] text-[#101216]">
                    {experience.role}
                  </h3>
                  <p className="mt-1 font-medium text-[#565c65]">{experience.company}</p>
                  <p className="mt-5 max-w-[760px] leading-7 text-[#656b74]">
                    {experience.desc}
                  </p>

                  {experience.highlights?.length > 0 && (
                    <ul className="mt-6 space-y-3 border-l border-black/15 pl-5 text-sm leading-6 text-[#555b65]">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}

                  <p className="mt-6 text-sm leading-6 text-[#8a8f97]">
                    {experience.skills.join(" / ")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
