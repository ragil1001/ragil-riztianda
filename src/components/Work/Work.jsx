import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { otherBuilds, portfolioProjects } from "../../data/portfolioProjects";

const ProjectMedia = ({ project, compact = false }) => {
  const isIdentity = project.id === "reusemart" || project.id === "cinemahub";

  return (
    <div
      className={`overflow-hidden ${compact ? "min-h-[260px]" : "min-h-[420px]"} ${
        isIdentity ? "bg-[#e9edf2]" : "bg-[#dde4ff]"
      }`}
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        className={`h-full w-full ${
          isIdentity
            ? "object-contain p-14 sm:p-16"
            : compact
              ? "object-cover object-top"
              : "object-contain p-8 sm:p-12"
        }`}
        loading="lazy"
      />
    </div>
  );
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [featuredProject, ...secondaryProjects] = portfolioProjects;

  useEffect(() => {
    if (!selectedProject) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="work" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="max-w-[760px]">
          <h2 className="text-4xl font-bold leading-[1.02] tracking-[-0.055em] text-[#101216] sm:text-5xl lg:text-6xl">
            Systems I&apos;ve built across web and mobile.
          </h2>
          <p className="mt-5 max-w-[650px] text-lg leading-8 text-[#626872]">
            Four case studies covering product flow, interface, backend behavior,
            mobile constraints, and operational data.
          </p>
        </div>

        <article className="mt-14 overflow-hidden rounded-[32px] border border-black/10 bg-[#f7f8fa]">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ProjectMedia project={featuredProject} />
            </div>
            <div className="flex flex-col justify-between p-7 sm:p-9 lg:col-span-5 lg:p-10">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-[#717780]">
                  <span>{featuredProject.context}</span>
                  <span>{featuredProject.period}</span>
                </div>
                <h3 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.045em] text-[#101216] sm:text-4xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-3 text-sm font-semibold text-[#2055ff]">
                  {featuredProject.role}
                </p>
                <p className="mt-6 text-base leading-7 text-[#5f6570]">
                  {featuredProject.summary}
                </p>
              </div>

              <div className="mt-10">
                <p className="text-sm leading-7 text-[#747a83]">
                  {featuredProject.stack.join(" / ")}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedProject(featuredProject)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#101216] px-5 py-3 text-sm font-semibold text-white transition-transform active:scale-[0.98]"
                >
                  Case study
                  <FiArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {secondaryProjects.map((project, index) => {
            const layoutClass =
              index === 0
                ? "lg:col-span-5"
                : index === 1
                  ? "lg:col-span-7"
                  : "lg:col-span-12";
            const isWide = index === 2;

            return (
              <article
                key={project.id}
                className={`${layoutClass} overflow-hidden rounded-[32px] border border-black/10 bg-[#f7f8fa]`}
              >
                <div className={isWide ? "grid lg:grid-cols-12" : ""}>
                  <div className={isWide ? "lg:col-span-5" : ""}>
                    <ProjectMedia project={project} compact />
                  </div>
                  <div
                    className={`p-7 sm:p-8 ${isWide ? "lg:col-span-7 lg:flex lg:flex-col lg:justify-center lg:p-10" : ""}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-[#777d86]">
                      <span>{project.context}</span>
                      <span>{project.period}</span>
                    </div>
                    <h3 className="mt-5 text-2xl font-bold tracking-[-0.04em] text-[#101216] sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-[680px] leading-7 text-[#626872]">
                      {project.summary}
                    </p>
                    <p className="mt-5 text-sm leading-6 text-[#777d86]">
                      {project.stack.join(" / ")}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-[#101216] transition-colors hover:border-black/30 active:scale-[0.98]"
                      >
                        Case study
                        <FiArrowUpRight size={16} />
                      </button>
                      {project.webapp && (
                        <a
                          href={project.webapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#2055ff] px-5 py-3 text-sm font-semibold text-white active:scale-[0.98]"
                        >
                          Live site
                          <FiArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-24 border-t border-black/10 pt-12">
          <h3 className="text-2xl font-bold tracking-[-0.04em] text-[#101216] sm:text-3xl">
            Other builds
          </h3>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
            {otherBuilds.map((build) => (
              <article
                key={build.title}
                className="grid gap-3 py-6 sm:grid-cols-[180px_1fr] sm:gap-8 lg:grid-cols-[180px_320px_1fr]"
              >
                <p className="text-sm font-semibold text-[#2055ff]">{build.context}</p>
                <h4 className="text-lg font-bold tracking-[-0.025em] text-[#101216]">
                  {build.title}
                </h4>
                <div>
                  <p className="leading-7 text-[#626872]">{build.description}</p>
                  <p className="mt-2 text-sm text-[#858a92]">{build.stack}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[70] overflow-y-auto bg-[#e8ebef]/95 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} case study`}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedProject(null);
          }}
        >
          <div className="mx-auto max-w-[1100px] overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(20,25,35,0.14)]">
            <div className="flex items-start justify-between gap-6 border-b border-black/10 p-6 sm:p-9">
              <div>
                <p className="text-sm text-[#777d86]">
                  {selectedProject.context} / {selectedProject.period}
                </p>
                <h3 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[#101216] sm:text-5xl">
                  {selectedProject.title}
                </h3>
                <p className="mt-3 font-semibold text-[#2055ff]">{selectedProject.role}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/15 bg-white text-[#101216] transition-colors hover:border-black/30"
                aria-label="Close case study"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="grid gap-0 lg:grid-cols-12">
              <div className="border-b border-black/10 p-6 sm:p-9 lg:col-span-5 lg:border-b-0 lg:border-r">
                <h4 className="text-sm font-bold text-[#101216]">Challenge</h4>
                <p className="mt-3 leading-7 text-[#626872]">{selectedProject.challenge}</p>

                <h4 className="mt-9 text-sm font-bold text-[#101216]">Takeaway</h4>
                <p className="mt-3 leading-7 text-[#626872]">{selectedProject.result}</p>

                <p className="mt-9 text-sm leading-7 text-[#858a92]">
                  {selectedProject.stack.join(" / ")}
                </p>
              </div>

              <div className="p-6 sm:p-9 lg:col-span-7">
                <h4 className="text-sm font-bold text-[#101216]">What I worked on</h4>
                <ul className="mt-5 divide-y divide-black/10 border-y border-black/10">
                  {selectedProject.contributions.map((item) => (
                    <li key={item} className="flex gap-4 py-4 leading-7 text-[#555b65]">
                      <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#2055ff]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {selectedProject.gallery?.length > 0 && (
              <div className="grid gap-5 border-t border-black/10 bg-[#f7f8fa] p-6 sm:p-9 md:grid-cols-2">
                {selectedProject.gallery.map((screenshot) => (
                  <figure key={screenshot.src}>
                    <img
                      src={screenshot.src}
                      alt={`${selectedProject.title}: ${screenshot.label}`}
                      className="w-full rounded-[24px] border border-black/10 bg-white object-top"
                      loading="lazy"
                    />
                    <figcaption className="mt-3 text-sm text-[#777d86]">
                      {screenshot.label}
                    </figcaption>
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
