import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const navigation = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Toolkit" },
  { id: "education", label: "Education" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const goTo = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "border-b border-black/10 bg-[#f7f8fa]/95 backdrop-blur-xl" : "bg-transparent"
      }`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => goTo("about")}
          className="group flex items-center gap-3 text-left"
          aria-label="Back to introduction"
        >
          <span className="grid h-9 w-9 place-items-center border border-black/15 bg-white text-xs font-black tracking-[-0.04em] text-[#111318] transition-colors group-hover:border-[#1557ff] group-hover:text-[#1557ff]">
            RR
          </span>
          <span>
            <span className="block text-sm font-bold tracking-[-0.025em] text-[#111318]">Ragil Riztianda</span>
            <span className="mt-0.5 hidden text-[11px] font-medium uppercase tracking-[0.12em] text-[#8a9099] sm:block">
              Software Engineer
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7 text-[13px] font-semibold text-[#656b74]">
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => goTo(item.id)}
                  className="transition-colors hover:text-[#111318]"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="mailto:ragilriztianda2@gmail.com"
            className="inline-flex items-center gap-2 border-l border-black/15 pl-7 text-[13px] font-bold text-[#111318] transition-colors hover:text-[#1557ff]"
          >
            Email
            <FiArrowUpRight size={14} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center border border-black/15 bg-white text-[#111318] lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-x-0 top-[72px] h-[calc(100dvh-72px)] border-t border-black/10 bg-[#f7f8fa] lg:hidden">
          <div className="mx-auto flex h-full max-w-[1440px] flex-col justify-between px-5 py-8 sm:px-8">
            <ul className="border-t border-black/10">
              {navigation.map((item, index) => (
                <li key={item.id} className="border-b border-black/10">
                  <button
                    type="button"
                    onClick={() => goTo(item.id)}
                    className="flex w-full items-center justify-between py-5 text-left text-2xl font-bold tracking-[-0.04em] text-[#111318]"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-semibold tabular-nums text-[#9ca2ab]">0{index + 1}</span>
                  </button>
                </li>
              ))}
            </ul>
            <a
              href="mailto:ragilriztianda2@gmail.com"
              className="flex items-center justify-between border-t border-black/10 pt-5 text-sm font-bold text-[#1557ff]"
            >
              ragilriztianda2@gmail.com
              <FiArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
