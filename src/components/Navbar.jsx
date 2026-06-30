import { useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";

const links = [
  ["Programs", "#programs"],
  ["About", "#about"],
  ["Trainers", "#trainers"],
  ["Pricing", "#pricing"],
  ["Contact", "#contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-32px)] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/10 bg-black/70 px-5 py-4 backdrop-blur-2xl">
      <div className="flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-lime-300 text-black">
            <Dumbbell size={22} />
          </span>

          <span className="text-xl font-black text-white">MY GYM</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-white/70 md:flex">
          {links.map(([label, href]) => (
            <a key={label} className="hover:text-lime-300" href={href}>
              {label}
            </a>
          ))}
        </div>

        <a
          href="#pricing"
          className="hidden rounded-xl bg-lime-300 px-6 py-3 text-sm font-black text-black md:block"
        >
          Join Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="grid size-11 place-items-center rounded-xl border border-white/10 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mt-4 grid gap-2 border-t border-white/10 pt-4 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-white/70 hover:bg-white/10 hover:text-lime-300"
            >
              {label}
            </a>
          ))}

          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="rounded-xl bg-lime-300 px-4 py-3 text-center font-black text-black"
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;