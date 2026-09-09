import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { otherBuilds, portfolioProjects } from "../../data/portfolioProjects";

const DesktopFrame = ({ src, alt, className = "" }) => (
  <div className={`overflow-hidden border border-black/10 bg-white shadow-[0_24px_65px_rgba(20,28,46,0.18)] ${className}`}>
    <div className="flex h-5 items-center gap-1.5 border-b border-black/10 bg-[#f5f6f8] px-2.5 sm:h-7 sm:px-3">
      <span className="h-1.5 w-1.5 rounded-full bg-black/15 sm:h-2 sm:w-2" />
      <span className="h-1.5 w-1.5 rounded-full bg-black/15 sm:h-2 sm:w-2" />
      <span className="h-1.5 w-1.5 rounded-full bg-black/15 sm:h-2 sm:w-2" />
    </div>
    <img src={src} alt={alt} className="block w-full object-cover object-top" loading="lazy" />
  </div>
);

const MobileFrame = ({ src, alt, className = "" }) => (
  <div className={`overflow-hidden rounded-[18px] border-[5px] border-[#0b0d12] bg-[#0b0d12] shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[24px] sm:border-[7px] ${className}`}>
    <img src={src} alt={alt} className="h-full w-full object-cover object-top" loading="lazy" />
  </div>
);

const ProjectVisual = ({ project }) => {
  const desktop = project.gallery?.find((item) => item.kind === "desktop");
  const mobile = project.gallery?.find((item) => item.kind === "mobile");

  if (project.visual === "hris") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-[#11151d]">
        <DesktopFrame
          src={desktop?.src || project.image}
          alt={desktop?.label || project.imageAlt}
          className="absolute inset-x-[5%] top-[10%]"
        />
        {mobile && (
          <MobileFrame
            src={mobile.src}
            alt={mobile.label}
            className="absolute bottom-[-12%] right-[6%] aspect-[9/19.5] w-[22%] min-w-[104px]"
          />
        )}
        <div className="absolute bottom-5 left-5 max-w-[52%] text-[9px] font-semibold uppercase tracking-[0.14em] text-white/45 sm:bottom-7 sm:left-7 sm:text-xs">
          HR operations · attendance · administration
        </div>
      </div>
    );
  }

  if (project.visual === "pakel") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-[#e8f3ec]">
        <DesktopFrame
          src={project.image}
          alt={project.imageAlt}
          className="absolute inset-x-[5%] top-[10%]"
        />
        {mobile && (
          <MobileFrame
            src={mobile.src}
            alt={mobile.label}
            className="absolute bottom-[-13%] right-[6%] aspect-[9/19.5] w-[21%] min-w-[100px] border-white bg-white"
          />
        )}
      </div>
    );
  }

  if (project.visual === "web-mobile") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-[#f0f0e7]">
        <DesktopFrame
          src={project.image}
          alt={project.imageAlt}
          className="absolute inset-x-[5%] top-[10%]"
        />
        {mobile && (
          <MobileFrame
            src={mobile.src}
            alt={mobile.label}
            className="absolute bottom-[-12%] right-[6%] aspect-[9/19.5] w-[22%] min-w-[104px]"
          />
        )}
      </div>
    );
  }

  if (project.visual === "mobile-trio") {
    const screens = project.gallery?.slice(0, 3) || [];
    return (
      <div className="relative flex aspect-[16/10] items-end justify-center gap-[3.5%] overflow-hidden bg-[#11162d] px-[7%] pb-[5%] pt-[6%]">
        {screens.map((screen, index) => (
          <MobileFrame
            key={screen.src}
            src={screen.src}
            alt={screen.label}
            className={`aspect-[9/19.5] w-[23%] ${index === 1 ? "mb-[2%] w-[25%]" : ""}`}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid aspect-[16/10] place-items-center overflow-hidden bg-[#eef1f5] p-10 sm:p-16 lg:p-20">
      <img src={project.image} alt={project.imageAlt} className="max-h-full max-w-full object-contain" loading="lazy" />
    </div>
  );
};

const EvidenceTags = ({ items, dark = false }) => {
  if (!items?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] ${
            dark ? "border-white/15 text-white/48" : "border-black/10 bg-[#f7f8fa] text-[#6e7680]"
          }`}
        >
          {item}
        </span>
      ))}
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
            <h2 className="mt-5 max-w-[900px] text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#111318] sm:text-5xl lg:text-6xl">
              Systems that moved from requirements into working workflows.
            </h2>
          </div>
          <p className="max-w-[450px] text-base leading-7 text-[#68707a] lg:col-span-4 lg:justify-self-end">
            Selected for evidence of delivery: the problem, my contribution, the working interface, and the outcome — not only the technology stack.
          </p>
        </div>

        <div>
          {portfolioProjects.map((project) => (
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
                <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
                  <div>
                    <h3 className="text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#111318] sm:text-5xl lg:text-6xl">
                      {project.title}
                    </h3>
                    <div className="mt-5">
                      <EvidenceTags items={project.evidence} />
                    </div>
                  </div>
                  <p className="text-base leading-7 text-[#626a74]">{project.summary}</p>
                </div>

                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="mt-9 overflow-hidden border border-black/10"
                >
                  <ProjectVisual project={project} />
                </motion.div>

                <div className="mt-8 grid gap-8 border-t border-black/10 pt-7 lg:grid-cols-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#8a919a]">Problem</p>
                    <p className="mt-3 leading-7 text-[#59616b]">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#8a919a]">My contribution</p>
                    <ul className="mt-3 space-y-3 text-sm leading-6 text-[#59616b]">
                      {project.contributions.slice(0, 2).map((item) => (
                        <li key={item} className="grid grid-cols-[12px_1fr] gap-3">
                          <span className="mt-[9px] h-[5px] w-[5px] bg-[#1557ff]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#1557ff]">Outcome</p>
                    <p className="mt-3 leading-7 text-[#454d57]">{project.result}</p>
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
              <p className="mt-3 max-w-[240px] text-sm leading-6 text-[#777e87]">
                Additional academic and experimental work showing breadth without competing with the four main case studies.
              </p>
            </div>
            <div className="border-t border-black/10 lg:col-span-9">
              {otherBuilds.map((build, index) => (
                <article
                  key={build.title}
                  className="grid gap-4 border-b border-black/10 py-6 sm:grid-cols-[48px_1fr] lg:grid-cols-[56px_150px_220px_1fr] lg:items-start lg:gap-6"
                >
                  <span className="text-xs font-semibold tabular-nums text-[#a0a6ae]">{String(index + 1).padStart(2, "0")}</span>
                  <div className="sm:col-start-2 lg:col-start-auto">
                    {build.image ? (
                      <img src={build.image} alt={build.imageAlt} className="aspect-[16/10] w-full border border-black/10 object-cover object-top" loading="lazy" />
                    ) : (
                      <div className="grid aspect-[16/10] w-full place-items-center border border-dashed border-black/10 bg-[#fafbfc] text-[10px] font-bold uppercase tracking-[0.1em] text-[#a0a6ae]">
                        Technical build
                      </div>
                    )}
                  </div>
                  <div className="sm:col-start-2 lg:col-start-auto">
                    <h4 className="text-lg font-bold tracking-[-0.025em] text-[#111318]">{build.title}</h4>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#1557ff]">{build.context}</p>
                  </div>
                  <div className="sm:col-start-2 lg:col-start-auto">
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
              className="ml-auto h-full w-full max-w-[800px] overflow-y-auto bg-[#111318] text-white"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} case study`}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#111318]/95 px-5 py-4 backdrop-blur sm:px-8">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">Case study {selectedProject.index}</span>
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
                <h3 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl">{selectedProject.title}</h3>
                <p className="mt-5 max-w-[650px] text-lg leading-8 text-white/65">{selectedProject.summary}</p>
                <div className="mt-6">
                  <EvidenceTags items={selectedProject.evidence} dark />
                </div>

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
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7fa0ff]">Outcome</p>
                  <p className="mt-4 text-base leading-8 text-white/78">{selectedProject.result}</p>
                  <p className="mt-6 text-sm leading-7 text-white/45">{selectedProject.stack.join(" / ")}</p>
                </div>

                {selectedProject.gallery?.length > 0 && (
                  <div className="mt-12 border-t border-white/15 pt-8">
                    <p className="mb-6 text-xs font-bold uppercase tracking-[0.14em] text-white/40">Interface evidence</p>
                    <div className={selectedProject.galleryLayout === "mobile-grid" ? "grid gap-6 sm:grid-cols-2" : "space-y-7"}>
                      {selectedProject.gallery.map((screenshot) => (
                        <figure key={screenshot.src} className={screenshot.kind === "mobile" && selectedProject.galleryLayout !== "mobile-grid" ? "mx-auto max-w-[330px]" : ""}>
                          <img
                            src={screenshot.src}
                            alt={`${selectedProject.title}: ${screenshot.label}`}
                            className={`border border-white/10 bg-white object-top ${screenshot.kind === "mobile" ? "mx-auto w-full max-w-[330px]" : "w-full"}`}
                            loading="lazy"
                          />
                          <figcaption className="mt-3 text-xs font-medium uppercase tracking-[0.09em] text-white/40">{screenshot.label}</figcaption>
                        </figure>
                      ))}
                    </div>
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
