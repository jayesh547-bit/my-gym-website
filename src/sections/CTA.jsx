import { ArrowUpRight, Flame, Check } from "lucide-react";

function CTA() {
  return (
    <section aria-label="Call to Action" className="px-5 py-20 md:py-28">
      <div className="glass-card relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-lime-400/30 bg-gradient-to-br from-[#111713] via-[#090b0e] to-[#050607] px-6 py-16 text-center shadow-2xl md:px-16 md:py-24">
        {/* Ambient neon radial */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-lime-400/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-lime-400/15 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-black/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-lime-400">
            <Flame size={14} className="fill-lime-400" />
            <span>Limited Spots For New Members</span>
          </div>

          <h2 className="mt-6 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Stop Waiting For Tomorrow. <br />
            <span className="text-lime-400">Own Your Strength Today.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Experience Jaipur's premier strength facility. Book your free 1-on-1 assessment and training session with our head coaches today.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex min-h-14 items-center gap-3 rounded-xl bg-lime-400 px-9 text-base font-black text-black shadow-[0_0_35px_rgba(190,242,100,0.35)] transition-all hover:bg-lime-300 hover:scale-105 active:scale-95"
            >
              Book Complimentary Pass <ArrowUpRight size={20} className="stroke-[2.5]" />
            </a>
          </div>

          {/* Quick Perks */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-white/60">
            <span className="flex items-center gap-2">
              <Check size={16} className="text-lime-400" /> Free Body Composition Analysis
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-lime-400" /> Form &amp; Mobility Assessment
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-lime-400" /> No Obligation Required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
