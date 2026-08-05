import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "repositories", label: "All Repositories" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-[7vw] transition duration-300 md:px-[7vw] lg:px-[14vw] ${
        isScrolled
          ? "bg-[#050414]/90 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-5 text-white">
        <button
          type="button"
          onClick={() => handleMenuItemClick("about")}
          className="cursor-pointer text-lg font-semibold"
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Ragil</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Riztianda</span>
          <span className="text-[#8245ec]">&gt;</span>
        </button>

        <ul className="hidden items-center gap-5 text-sm text-gray-300 lg:flex">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden space-x-4 md:flex">
          <a
            href="https://github.com/ragil1001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition hover:text-[#8245ec]"
            aria-label="GitHub profile"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ragilriztianda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition hover:text-[#8245ec]"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <div className="lg:hidden">
          {isOpen ? (
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
            >
              <FiX className="cursor-pointer text-3xl text-[#8245ec]" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation"
            >
              <FiMenu className="cursor-pointer text-3xl text-[#8245ec]" />
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-1/2 top-16 z-50 w-4/5 -translate-x-1/2 rounded-lg border border-white/10 bg-[#050414]/95 shadow-lg backdrop-blur-lg lg:hidden">
          <ul className="flex flex-col items-center space-y-4 py-5 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`transition hover:text-white ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/ragil1001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="GitHub profile"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ragilriztianda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
