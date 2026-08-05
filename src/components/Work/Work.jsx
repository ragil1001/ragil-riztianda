import React, { useState } from "react";
import { portfolioProjects } from "../../data/portfolioProjects";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="relative px-[7vw] py-24 font-sans lg:px-[14vw]"
    >
      <div className="mb-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
          Selected systems
        </p>
        <h2 className="mt-3 text-4xl font-bold text-white">
          PROJECT EVIDENCE
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400">
          These entries contain screenshots captured from prior deployments or
          verified builds. A screenshot is not treated as proof that its public
          URL remains active today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10">
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
                  alt={`${project.title} project screenshot`}
                  className="max-h-[620px] w-full object-cover object-top"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold text-slate-900 shadow-lg">
                  {project.status}
                </span>
              </div>
            </button>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-4xl leading-relaxed text-gray-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#251f38] px-3 py-1 text-xs font-semibold text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-purple-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-purple-700"
                  >
                    Open verified deployment
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  View public source
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  View screenshot evidence
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
          <div className="mx-auto max-w-6xl rounded-2xl bg-[#0d0c1a] p-4 shadow-2xl md:p-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                  Screenshot and build evidence
                </p>
                <h3 className="mt-1 text-xl font-bold text-white md:text-3xl">
                  {selectedProject.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  This gallery does not claim that an external domain remains
                  active.
                </p>
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

            <div className="grid items-start gap-6 md:grid-cols-2">
              {selectedProject.gallery.map((screenshot) => (
                <figure key={screenshot.src} className="min-w-0">
                  <figcaption className="mb-2 text-sm font-semibold text-gray-300">
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
