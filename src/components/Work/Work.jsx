import React, { useState } from "react";
import { otherBuilds, portfolioProjects } from "../../data/portfolioProjects";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="px-[7vw] py-24 font-sans lg:px-[14vw]">
      <div className="mb-14 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-300">
          Selected work
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Projects that show how I approach real workflows.
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg">
          I use these case studies to explain the problem, my role, the system I built, and the engineering decisions behind it. GitHub is available separately for source-level review; it is not the portfolio itself.
        </p>
      </div>

      <div className="space-y-8">
        {portfolioProjects.map((project, index) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[320px] overflow-hidden bg-[#111020]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className={`h-full w-full ${
                      project.id === "reusemart" || project.id === "cinemahub"
                        ? "object-contain p-14"
                        : "object-cover object-top"
                    }`}
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full min-h-[320px] items-end bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.24),_transparent_46%),linear-gradient(145deg,#151326,#090813)] p-8">
                    <p className="max-w-sm text-4xl font-bold leading-tight text-white/90">
                      {project.title}
                    </p>
                  </div>
                )}
                <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="p-6 md:p-9">
                <p className="text-sm font-semibold text-purple-300">{project.eyebrow}</p>
                <div className="mt-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">{project.title}</h3>
                  <span className="shrink-0 text-sm text-gray-500">{project.period}</span>
                </div>
                <p className="mt-2 text-sm font-medium text-gray-300">{project.role}</p>
                <p className="mt-5 max-w-3xl leading-7 text-gray-400">{project.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-[#151326] px-3 py-1 text-xs font-semibold text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-500"
                  >
                    Read case study
                  </button>
                  {project.webapp && (
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-white/15 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                    >
                      Visit project
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Other builds
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white">Smaller projects and technical explorations.</h3>
          <p className="mt-3 leading-7 text-gray-400">
            These are included for breadth, not to compete with the case studies above.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {otherBuilds.map((build) => (
            <article
              key={build.title}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-300">
                {build.context}
              </p>
              <h4 className="mt-2 text-xl font-bold text-white">{build.title}</h4>
              <p className="mt-3 leading-7 text-gray-400">{build.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {build.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#151326] px-3 py-1 text-xs text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] overflow-y-auto bg-black/85 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} case study`}
        >
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#0b0a17] p-5 shadow-2xl md:p-9">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-purple-300">{selectedProject.eyebrow}</p>
                <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl">{selectedProject.title}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {selectedProject.role} · {selectedProject.period}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-2xl text-white transition hover:bg-white/10"
                aria-label="Close case study"
              >
                ×
              </button>
            </div>

            <div className="mt-9 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Context</p>
                <p className="mt-3 leading-7 text-gray-300">{selectedProject.summary}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Challenge</p>
                <p className="mt-3 leading-7 text-gray-300">{selectedProject.challenge}</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">What I worked on</p>
              <ul className="mt-4 grid gap-3 text-gray-300 md:grid-cols-2">
                {selectedProject.contributions.map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl border border-purple-400/15 bg-purple-500/[0.06] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">What I took from it</p>
              <p className="mt-3 leading-7 text-gray-300">{selectedProject.result}</p>
            </div>

            {selectedProject.gallery?.length > 0 && (
              <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
                {selectedProject.gallery.map((screenshot) => (
                  <figure key={screenshot.src}>
                    <img
                      src={screenshot.src}
                      alt={`${selectedProject.title}: ${screenshot.label}`}
                      className="w-full rounded-2xl border border-white/10 bg-white object-top"
                      loading="lazy"
                    />
                    <figcaption className="mt-2 text-sm text-gray-500">{screenshot.label}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
