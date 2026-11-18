import { useState, useEffect } from "react";
import { Dumbbell, Menu, X, ArrowRight } from "lucide-react";

const links = [
  ["Programs", "#programs"],
  ["About", "#about"],
  ["Features", "#features"],
  ["Trainers", "#trainers"],
  ["Pricing", "#pricing"],
  ["Contact", "#contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-3 sm:px-6">
      <nav
        aria-label="Main Navigation"
        className={`w-full max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-white/15 bg-black/80 shadow-2xl backdrop-blur-xl"
            : "border-white/10 bg-black/50 backdrop-blur-md"
        } px-5 py-3.5`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="All For One Gym Home"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-lime-400 text-black shadow-[0_0_20px_rgba(190,242,100,0.35)] transition-transform duration-300 group-hover:scale-105">
              <Dumbbell size={22} className="stroke-[2.5]" />
            </span>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-white">
                ALL FOR ONE <span className="text-lime-400">GYM</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Strength &amp; Conditioning
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-7 text-sm font-semibold text-white/70 md:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="transition-colors hover:text-lime-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-2.5 text-sm font-black text-black shadow-xl shadow-lime-400/30 transition-all hover:bg-lime-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
            >
              Join Now <ArrowRight size={16} className="stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="grid size-11 place-items-center rounded-xl border-2 border-white/30 bg-black/70 text-white shadow-lg transition hover:border-lime-400 hover:text-lime-400 hover:bg-black/90 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 active:scale-95"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="mt-4 grid gap-1 border-t border-white/10 pt-4 md:hidden">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-semibold text-white/80 transition hover:bg-white/10 hover:text-lime-400"
              >
                {label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-4 py-3 text-center font-black text-black transition hover:bg-lime-300"
            >
              Join Now <ArrowRight size={16} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
