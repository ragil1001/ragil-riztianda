import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section id="education" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1557ff]">Education & credentials</p>
            <h2 className="mt-5 max-w-[390px] text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#111318] sm:text-5xl">
              Academic foundation and technical recognition.
            </h2>
          </div>

          <div className="lg:col-span-8">
            {education.map((edu) => (
              <article key={edu.id} className="border-y border-black/10 py-8 sm:py-10">
                <div className="grid gap-7 md:grid-cols-[1fr_180px] md:gap-10">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#858c95]">Bachelor&apos;s degree</p>
                    <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-0.045em] text-[#111318] sm:text-4xl">
                      {edu.degree}
                    </h3>
                    <p className="mt-2 text-lg font-semibold text-[#4f5660]">{edu.school}</p>
                    <p className="mt-5 max-w-[690px] leading-7 text-[#6c737d]">{edu.desc}</p>
                  </div>
                  <dl className="space-y-5 md:text-right">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[#9aa0a8]">Period</dt>
                      <dd className="mt-1 text-sm font-bold text-[#111318]">{edu.date}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[#9aa0a8]">GPA</dt>
                      <dd className="mt-1 text-sm font-bold text-[#111318]">{edu.grade}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}

            <div className="grid border-b border-black/10 md:grid-cols-2">
              <div className="py-8 md:pr-9">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1557ff]">Certification</p>
                <h3 className="mt-4 text-xl font-bold tracking-[-0.025em] text-[#111318]">
                  Certified Secure Computer User (CSCU)
                </h3>
                <p className="mt-2 text-sm text-[#777e87]">EC-Council · 2022</p>
              </div>
              <div className="border-t border-black/10 py-8 md:border-l md:border-t-0 md:pl-9">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1557ff]">Award</p>
                <h3 className="mt-4 text-xl font-bold tracking-[-0.025em] text-[#111318]">
                  Runner-Up, Programming In Contest 2023
                </h3>
                <p className="mt-2 max-w-[420px] text-sm leading-6 text-[#777e87]">
                  Faculty-level team programming competition organized by Kelompok Studi Pemrograman · C
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
