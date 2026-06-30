import { ArrowUpRight } from "lucide-react";

function CTA() {
  return (
    <section className="px-5 py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-[radial-gradient(circle_at_70%_20%,rgba(190,255,40,.28),transparent_32%),linear-gradient(140deg,#11151a,#050608)] px-6 py-20 text-center md:px-12">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-lime-300">
          Start Today
        </p>

        <h2 className="mx-auto max-w-5xl text-5xl font-black leading-tight md:text-8xl">
          Your strongest version is waiting.
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/65">
          Book a trial session and experience premium coaching, cinematic gym
          energy, and a plan built around your real fitness goal.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex min-h-14 items-center gap-2 rounded-xl bg-lime-300 px-8 font-black text-black transition hover:scale-105"
          >
            Book Free Trial <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;