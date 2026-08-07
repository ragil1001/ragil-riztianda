import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const scrollTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 px-[7vw] py-8 font-sans text-white lg:px-[14vw]">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold">Ragil Riztianda</p>
          <p className="mt-1 text-sm text-gray-500">Software Engineer · Full-Stack Developer</p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-400" aria-label="Footer navigation">
          {[
            ["About", "about"],
            ["Experience", "experience"],
            ["Selected Work", "work"],
            ["Skills", "skills"],
            ["Education", "education"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button key={id} type="button" onClick={() => scrollTo(id)} className="transition hover:text-white">
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/ragilriztianda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-white"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/ragil1001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-white"
            aria-label="GitHub profile"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      <p className="mt-7 text-xs text-gray-600">© 2026 Ragil Riztianda. Built as a portfolio of selected software work.</p>
    </footer>
  );
};

export default Footer;
