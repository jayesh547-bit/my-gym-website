import { MapPin, Phone, ArrowUp } from "lucide-react";
import Logo from "./Logo";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/15 bg-[#030405] pt-16 pb-12 text-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-flex items-center gap-3">
              <Logo size={42} />
              <span className="text-xl font-black tracking-wider text-white">
                ALL FOR ONE <span className="text-lime-400">GYM</span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Jaipur's premier high-performance strength and conditioning facility. Dedicated to science-driven training, metabolic conditioning, and sustainable body transformations.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-xl border-2 border-white/20 bg-black/60 text-white/80 shadow-md transition hover:border-lime-400 hover:text-lime-400 hover:bg-black/90 active:scale-95"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="grid size-10 place-items-center rounded-xl border-2 border-white/20 bg-black/60 text-white/80 shadow-md transition hover:border-lime-400 hover:text-lime-400 hover:bg-black/90 active:scale-95"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="grid size-10 place-items-center rounded-xl border-2 border-white/20 bg-black/60 text-white/80 shadow-md transition hover:border-lime-400 hover:text-lime-400 hover:bg-black/90 active:scale-95"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-lime-400">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold text-white/70">
              <li>
                <a href="#programs" className="transition hover:text-lime-400">Programs</a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-lime-400">Philosophy</a>
              </li>
              <li>
                <a href="#features" className="transition hover:text-lime-400">Features</a>
              </li>
              <li>
                <a href="#trainers" className="transition hover:text-lime-400">Trainers</a>
              </li>
              <li>
                <a href="#gallery" className="transition hover:text-lime-400">Facility Tour</a>
              </li>
              <li>
                <a href="#pricing" className="transition hover:text-lime-400">Memberships</a>
              </li>
            </ul>
          </div>

          {/* Programs (3 cols) */}
          <div className="lg:col-span-3">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-lime-400">
              Disciplines
            </p>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold text-white/70">
              <li>Strength &amp; Hypertrophy</li>
              <li>High-Intensity Interval Training</li>
              <li>Boxing &amp; Strike Conditioning</li>
              <li>Mobility &amp; Active Recovery</li>
              <li>Clinical Nutrition Consultations</li>
              <li>Personal 1-on-1 Coaching</li>
            </ul>
          </div>

          {/* Hours & Contact (3 cols) */}
          <div className="lg:col-span-3">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-lime-400">
              Facility Hours
            </p>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p className="flex justify-between">
                <span>Monday – Saturday:</span>
                <span className="font-bold text-white">5:30 AM – 10:30 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-bold text-white">7:00 AM – 1:00 PM</span>
              </p>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/60 space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-lime-400" />
                <span>Jaipur, Rajasthan, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-lime-400" />
                <span>+91 99999 99999</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} All For One Gym. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-xl border-2 border-white/25 bg-black/60 px-4 py-2 text-xs font-bold text-white shadow-md transition hover:border-lime-400 hover:bg-black/90 hover:text-lime-400 active:scale-95"
            >
              Back to Top <ArrowUp size={13} className="stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
