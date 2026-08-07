import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Selected Work" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-[7vw] transition duration-300 lg:px-[14vw] ${
        isScrolled
          ? "border-b border-white/10 bg-[#050414]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-5 text-white">
        <button
          type="button"
          onClick={() => handleMenuItemClick("about")}
          className="text-base font-bold tracking-tight sm:text-lg"
        >
          Ragil Riztianda<span className="text-purple-400">.</span>
        </button>

        <ul className="hidden items-center gap-6 text-sm text-gray-300 lg:flex">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition hover:text-white ${
                  activeSection === item.id ? "text-purple-300" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://www.linkedin.com/in/ragilriztianda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition hover:text-white"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/ragil1001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition hover:text-white"
            aria-label="GitHub profile"
          >
            <FaGithub size={22} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-1/2 top-16 w-[86%] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0b0a17]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-4 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleMenuItemClick(item.id)}
                  className="w-full text-left transition hover:text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-4 border-t border-white/10 pt-5">
            <a
              href="https://www.linkedin.com/in/ragilriztianda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/ragil1001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
              aria-label="GitHub profile"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
