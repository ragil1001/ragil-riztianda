import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { otherBuilds, portfolioProjects } from "../../data/portfolioProjects";

const ProjectVisual = ({ project }) => {
  if (project.visual === "hris") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-[#11151d] p-5 sm:p-8 lg:p-10">
        <div className="absolute inset-x-[7%] top-[12%] overflow-hidden border border-white/15 bg-white shadow-[0_26px_70px_rgba(0,0,0,0.28)]">
          <img
            src={project.gallery[1].src}
            alt={project.gallery[1].label}
            className="w-full object-cover object-top"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-[-8%] right-[7%] w-[25%] min-w-[118px] overflow-hidden border-[5px] border-[#07090d] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.42)] sm:border-[7px]">
          <img
            src={project.gallery[0].src}
            alt={project.gallery[0].label}
            className="w-full object-cover object-top"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-5 left-5 max-w-[46%] text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50 sm:bottom-8 sm:left-8 sm:text-xs">
          Employee mobile + web administration flow
        </div>
      </div>
    );
  }

  if (project.visual === "pakel") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-[#e8eefb] p-5 sm:p-8 lg:p-10">
        <div className="absolute inset-x-[5%] top-[10%] overflow-hidden border border-black/10 bg-white shadow-[0_24px_65px_rgba(35,46,72,0.14)]">
          <img
            src={project.gallery[0].src}
            alt={project.gallery[0].label}
            className="w-full object-cover object-top"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-[-10%] right-[7%] w-[22%] min-w-[105px] overflow-hidden border-[5px] border-white bg-white shadow-[0_20px_55px_rgba(35,46,72,0.2)] sm:border-[7px]">
          <img
            src={project.gallery[1].src}
            alt={project.gallery[1].label}
            className="w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  const dark = project.visual === "identity-dark";

  return (
    <div
      className={`grid aspect-[16/10] place-items-center overflow-hidden p-10 sm:p-16 lg:p-20 ${
        dark ? "bg-[#11151d]" : "bg-[#e9f1eb]"
      }`}
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        className={`max-h-[62%] max-w-[62%] object-contain ${dark ? "drop-shadow-[0_18px_36px_rgba(0,0,0,0.35)]" : ""}`}
        loading="lazy"
      />
    </div>
  );
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const reduceMotion = useReducedMotion();

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
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-8 border-b border-black/10 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1557ff]">Selected work · 01—04</p>
            <h2 className="mt-5 max-w-[840px] text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#111318] sm:text-5xl lg:text-6xl">
              Products, not repository inventory.
            </h2>
          </div>
          <p className="max-w-[430px] text-base leading-7 text-[#68707a] lg:col-span-4 lg:justify-self-end">
            Four projects selected for the problems they solve, the application flows they contain, and the parts of the stack I worked on.
          </p>
        </div>

        <div>
          {portfolioProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-10 border-b border-black/10 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24"
            >
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-28">
                  <div className="flex items-baseline justify-between gap-4 border-b border-black/10 pb-4 lg:block">
                    <span className="text-3xl font-black tracking-[-0.05em] text-[#1557ff]">{project.index}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a919a] lg:mt-5 lg:block">
                      {project.period}
                    </span>
                  </div>
                  <p className="mt-5 text-sm font-bold leading-6 text-[#111318]">{project.context}</p>
                  <p className="mt-2 text-sm leading-6 text-[#777e87]">{project.role}</p>
                  <p className="mt-6 hidden text-xs leading-6 text-[#9298a0] lg:block">{project.stack.join(" / ")}</p>
                </div>
              </div>

              <div className="lg:col-span-9">
                <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:items-end">
                  <h3 className="text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#111318] sm:text-5xl lg:text-6xl">
                    {project.title}
                  </h3>
                  <p className="text-base leading-7 text-[#626a74]">{project.summary}</p>
                </div>

                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="mt-9 border border-black/10"
                >
                  <ProjectVisual project={project} />
                </motion.div>

                <div className="mt-8 grid gap-8 border-t border-black/10 pt-7 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#8a919a]">Problem</p>
                    <p className="mt-3 max-w-[560px] leading-7 text-[#59616b]">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#8a919a]">Scope</p>
                    <ul className="mt-3 space-y-3 text-sm leading-6 text-[#59616b]">
                      {project.contributions.slice(0, 3).map((item) => (
                        <li key={item} className="grid grid-cols-[12px_1fr] gap-3">
                          <span className="mt-[9px] h-[5px] w-[5px] bg-[#1557ff]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 border-b-2 border-[#1557ff] pb-1 text-sm font-bold text-[#111318] transition-colors hover:text-[#1557ff]"
                  >
                    Read case study
                    <FiArrowUpRight size={15} />
                  </button>
                  {project.webapp && (
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-b border-black/20 pb-1 text-sm font-bold text-[#555c66] transition-colors hover:text-[#111318]"
                    >
                      Live site
                      <FiArrowUpRight size={15} />
                    </a>
                  )}
                  <span className="text-xs leading-6 text-[#9298a0] lg:hidden">{project.stack.join(" / ")}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="pt-20 lg:pt-24">
          <div className="grid gap-7 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1557ff]">Other builds</p>
              <p className="mt-3 max-w-[220px] text-sm leading-6 text-[#777e87]">
                Smaller academic and experimental applications that broaden the engineering range.
              </p>
            </div>
            <div className="border-t border-black/10 lg:col-span-9">
              {otherBuilds.map((build, index) => (
                <article
                  key={build.title}
                  className="grid gap-3 border-b border-black/10 py-6 sm:grid-cols-[48px_220px_1fr] sm:gap-6 lg:grid-cols-[56px_260px_1fr]"
                >
                  <span className="text-xs font-semibold tabular-nums text-[#a0a6ae]">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4 className="text-lg font-bold tracking-[-0.025em] text-[#111318]">{build.title}</h4>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#1557ff]">{build.context}</p>
                  </div>
                  <div>
                    <p className="max-w-[650px] leading-7 text-[#626a74]">{build.description}</p>
                    <p className="mt-2 text-xs leading-6 text-[#9298a0]">{build.stack}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/35 backdrop-blur-[2px]"
            onMouseDown={(event) => {
              if (event.currentTarget === event.target) setSelectedProject(null);
            }}
          >
            <motion.aside
              initial={reduceMotion ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: "100%" }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto h-full w-full max-w-[760px] overflow-y-auto bg-[#111318] text-white"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} case study`}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#111318]/95 px-5 py-4 backdrop-blur sm:px-8">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">
                  Case study {selectedProject.index}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="grid h-10 w-10 place-items-center border border-white/20 text-white transition-colors hover:border-white/50"
                  aria-label="Close case study"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
                <p className="text-sm font-semibold text-[#7fa0ff]">{selectedProject.context}</p>
                <h3 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl">
                  {selectedProject.title}
                </h3>
                <p className="mt-5 max-w-[620px] text-lg leading-8 text-white/65">{selectedProject.summary}</p>

                <div className="mt-12 border-t border-white/15 pt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">Challenge</p>
                  <p className="mt-4 text-base leading-8 text-white/75">{selectedProject.challenge}</p>
                </div>

                <div className="mt-10 border-t border-white/15 pt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">What I worked on</p>
                  <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
                    {selectedProject.contributions.map((item) => (
                      <li key={item} className="grid grid-cols-[16px_1fr] gap-4 py-4 leading-7 text-white/72">
                        <span className="mt-[10px] h-1.5 w-1.5 bg-[#5f87ff]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 border-t border-white/15 pt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">Outcome</p>
                  <p className="mt-4 text-base leading-8 text-white/75">{selectedProject.result}</p>
                  <p className="mt-6 text-sm leading-7 text-white/45">{selectedProject.stack.join(" / ")}</p>
                </div>

                {selectedProject.gallery?.length > 0 && (
                  <div className="mt-12 space-y-6 border-t border-white/15 pt-8">
                    {selectedProject.gallery.map((screenshot) => (
                      <figure key={screenshot.src}>
                        <img
                          src={screenshot.src}
                          alt={`${selectedProject.title}: ${screenshot.label}`}
                          className="w-full border border-white/10 bg-white object-top"
                          loading="lazy"
                        />
                        <figcaption className="mt-3 text-xs font-medium uppercase tracking-[0.09em] text-white/40">
                          {screenshot.label}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}

                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex items-center gap-2 border-b border-[#7fa0ff] pb-1 text-sm font-bold text-white"
                  >
                    Visit live site
                    <FiArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
