import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section id="education" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold leading-[1.02] tracking-[-0.055em] text-[#101216] sm:text-5xl">
              Education and credentials.
            </h2>
          </div>

          <div className="lg:col-span-8">
            {education.map((edu) => (
              <article key={edu.id} className="border-y border-black/10 py-8 sm:py-10">
                <div className="grid gap-6 md:grid-cols-[1fr_180px] md:gap-10">
                  <div>
                    <h3 className="text-2xl font-bold tracking-[-0.035em] text-[#101216] sm:text-3xl">
                      {edu.degree}
                    </h3>
                    <p className="mt-2 text-lg text-[#505761]">{edu.school}</p>
                    <p className="mt-5 max-w-[720px] leading-7 text-[#686e77]">{edu.desc}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-sm font-semibold text-[#2055ff]">{edu.date}</p>
                    <p className="mt-2 text-sm text-[#777d86]">GPA {edu.grade}</p>
                  </div>
                </div>
              </article>
            ))}

            <div className="grid border-b border-black/10 md:grid-cols-2">
              <div className="py-7 md:pr-8">
                <p className="text-sm font-semibold text-[#2055ff]">Certification</p>
                <p className="mt-3 text-lg font-bold tracking-[-0.02em] text-[#101216]">
                  Certified Secure Computer User (CSCU)
                </p>
                <p className="mt-1 text-sm text-[#777d86]">EC-Council / 2022</p>
              </div>
              <div className="border-t border-black/10 py-7 md:border-l md:border-t-0 md:pl-8">
                <p className="text-sm font-semibold text-[#2055ff]">Award</p>
                <p className="mt-3 text-lg font-bold tracking-[-0.02em] text-[#101216]">
                  Runner-Up, Programming In Contest 2023
                </p>
                <p className="mt-1 text-sm leading-6 text-[#777d86]">
                  Faculty-level team competition / C programming
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
