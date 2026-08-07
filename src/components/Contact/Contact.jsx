import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="px-[7vw] py-24 font-sans lg:px-[14vw] lg:py-32">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 md:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-300">
              Contact
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Looking for a developer who can work across the product stack?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              I am open to Software Engineer, Full-Stack, Backend, Frontend, Mobile Developer, and Programmer opportunities. I am also open to programming-instructor roles where hands-on development experience is useful.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="mailto:ragilriztianda2@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111020] p-4 transition hover:border-purple-400/40 hover:bg-[#151326]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                <FiMail size={20} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.14em] text-gray-500">Email</span>
                <span className="mt-1 block font-semibold text-white">ragilriztianda2@gmail.com</span>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/ragilriztianda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111020] p-4 transition hover:border-purple-400/40 hover:bg-[#151326]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                <FaLinkedin size={20} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.14em] text-gray-500">LinkedIn</span>
                <span className="mt-1 block font-semibold text-white">linkedin.com/in/ragilriztianda</span>
              </span>
            </a>

            <a
              href="https://github.com/ragil1001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111020] p-4 transition hover:border-purple-400/40 hover:bg-[#151326]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                <FaGithub size={20} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.14em] text-gray-500">Source-level work</span>
                <span className="mt-1 block font-semibold text-white">github.com/ragil1001</span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111020] p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                <FiMapPin size={20} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.14em] text-gray-500">Location</span>
                <span className="mt-1 block font-semibold text-white">Singkawang, West Kalimantan, Indonesia</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
