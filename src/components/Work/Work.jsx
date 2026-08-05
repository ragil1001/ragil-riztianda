import React, { useState } from "react";
import { portfolioProjects } from "../../data/portfolioProjects";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 px-[7vw] lg:px-[14vw] font-sans relative"
    >
      <div className="text-center mb-14">
        <p className="text-sm font-semibold tracking-[0.2em] text-purple-400 uppercase">
          Verified deployments
        </p>
        <h2 className="text-4xl font-bold text-white mt-3">SELECTED PROJECTS</h2>
        <p className="text-gray-400 mt-4 text-base max-w-2xl mx-auto leading-relaxed">
          Every visual below is captured from a real running project. Projects are added one by one only after their deployment and screenshots are verified.
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1">
        {portfolioProjects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-2xl border border-white/15 bg-[#0d0c1a] shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="block w-full text-left"
              aria-label={`Open ${project.title} screenshots`}
            >
              <div className="relative bg-white">
                <img
                  src={project.image}
                  alt={`${project.title} production website screenshot`}
                  className="w-full max-h-[620px] object-cover object-top"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                  {project.status}
                </span>
              </div>
            </button>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed max-w-4xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#251f38] px-3 py-1 text-xs font-semibold text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-purple-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-purple-700"
                >
                  Open Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  View Source Code
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  View Real Screenshots
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/90 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} screenshots`}
        >
          <div className="mx-auto max-w-6xl rounded-2xl bg-[#0d0c1a] p-4 md:p-7 shadow-2xl">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                  Captured from the live deployment
                </p>
                <h3 className="text-xl md:text-3xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="h-11 w-11 shrink-0 rounded-full border border-white/20 text-2xl text-white hover:bg-white/10"
                aria-label="Close screenshots"
              >
                ×
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 items-start">
              {selectedProject.gallery.map((screenshot) => (
                <figure key={screenshot.src} className="min-w-0">
                  <figcaption className="text-sm font-semibold text-gray-300 mb-2">
                    {screenshot.label}
                  </figcaption>
                  <img
                    src={screenshot.src}
                    alt={`${selectedProject.title}: ${screenshot.label}`}
                    className="w-full rounded-xl border border-white/10 bg-white object-top"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
