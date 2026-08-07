import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="px-[7vw] py-24 font-sans lg:px-[14vw]"
    >
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-300">
          Education
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Academic foundation.
        </h2>
      </div>

      {education.map((edu) => (
        <article
          key={edu.id}
          className="max-w-4xl rounded-2xl border border-white/10 bg-white/[0.035] p-6 md:p-8"
        >
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div>
              <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
              <p className="mt-1 text-lg text-gray-300">{edu.school}</p>
              <p className="mt-5 max-w-3xl leading-7 text-gray-400">{edu.desc}</p>
            </div>
            <div className="shrink-0 md:text-right">
              <p className="font-semibold text-purple-300">{edu.date}</p>
              <p className="mt-2 text-sm text-gray-400">GPA {edu.grade}</p>
            </div>
          </div>
        </article>
      ))}

      <div className="mt-5 grid max-w-4xl gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
            Certification
          </p>
          <p className="mt-2 font-semibold text-white">
            Certified Secure Computer User (CSCU)
          </p>
          <p className="mt-1 text-sm text-gray-400">EC-Council · 2022</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
            Award
          </p>
          <p className="mt-2 font-semibold text-white">
            Runner-Up, Programming In Contest 2023
          </p>
          <p className="mt-1 text-sm text-gray-400">
            Faculty-level team competition · Kelompok Studi Pemrograman · C
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
