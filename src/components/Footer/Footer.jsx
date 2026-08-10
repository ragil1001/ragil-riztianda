import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111318] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-4 px-5 py-7 text-xs sm:grid-cols-3 sm:items-center sm:px-8 lg:px-12">
        <p className="font-semibold text-white/60">© 2026 Ragil Riztianda</p>
        <p className="font-semibold text-white/40 sm:text-center">Software Engineer · Full-Stack Developer</p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-fit font-bold text-white/65 transition-colors hover:text-white sm:justify-self-end"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
