import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

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
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "border-b border-black/10 bg-[#f4f5f7]/95 backdrop-blur-lg"
          : "bg-transparent"
      }`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => goTo("about")}
          className="text-left text-[15px] font-bold tracking-[-0.03em] text-[#101216]"
        >
          Ragil Riztianda
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7 text-sm font-medium text-[#5c626b]">
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => goTo(item.id)}
                  className="transition-colors hover:text-[#101216]"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => goTo("contact")}
            className="rounded-full bg-[#101216] px-5 py-2.5 text-sm font-semibold text-white transition-transform active:scale-[0.98]"
          >
            Contact
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#101216] lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-black/10 bg-[#f4f5f7] px-5 pb-6 pt-3 lg:hidden">
          <div className="mx-auto max-w-[1400px]">
            <ul className="divide-y divide-black/10">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => goTo(item.id)}
                    className="w-full py-4 text-left text-lg font-semibold tracking-[-0.02em] text-[#101216]"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => goTo("contact")}
              className="mt-5 w-full rounded-full bg-[#2055ff] px-5 py-3.5 text-sm font-semibold text-white active:scale-[0.98]"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
