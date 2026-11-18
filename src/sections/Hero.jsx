import { ArrowUpRight, Flame, Shield, Star, Play, Zap } from "lucide-react";
import heroVideo from "../assets/videos/Gym.mp4";
import heroPoster from "../assets/images/strengthlab.jpg";
import TiltCard from "../components/TiltCard";

function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-32 pb-24 text-center perspective-1000"
    >
      {/* Background Video with Poster Fallback (High-Visibility & Dynamic) */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
        src={heroVideo}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Balanced Cinematic Overlays - Video Clearly Visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-black/30 to-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(190,242,100,0.15),transparent_60%)]" />

      {/* 3D Floating HUD Pill: Left */}
      <div className="pointer-events-none absolute left-8 top-1/2 hidden -translate-y-1/2 lg:block z-20">
        <div className="animate-float-3d rounded-2xl border-2 border-white/20 bg-black/85 p-4 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center gap-3 text-left">
            <div className="grid size-11 place-items-center rounded-xl bg-lime-400/20 text-lime-400">
              <Flame size={22} className="fill-lime-400" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-lime-400">Metabolic Peak</p>
              <p className="text-sm font-black text-white">850+ kcal / session</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Floating HUD Pill: Right */}
      <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block z-20">
        <div className="animate-float-3d-slow rounded-2xl border-2 border-white/20 bg-black/85 p-4 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center gap-3 text-left">
            <div className="grid size-11 place-items-center rounded-xl bg-lime-400/20 text-lime-400">
              <Zap size={22} className="fill-lime-400" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-lime-400">Competition Gear</p>
              <p className="text-sm font-black text-white">100% Calibrated Gear</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/40 bg-black/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-lime-400 backdrop-blur-xl shadow-xl shadow-lime-400/10">
          <Flame size={14} className="fill-lime-400 text-lime-400" />
          <span>Jaipur's Premier Fitness Sanctuary</span>
        </div>

        {/* High-Impact SEO H1 with Text Shadow For Contrast */}
        <h1 className="mt-8 text-4xl font-black uppercase tracking-tight text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)] sm:text-6xl md:text-7xl lg:text-8xl">
          All In One. <br />
          <span className="bg-gradient-to-r from-white via-white/95 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            One For Strength.
          </span>
        </h1>

        {/* Subtitle with Shadow */}
        <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] sm:text-xl md:text-2xl">
          Science-backed strength training, high-intensity conditioning, and personal coaching designed to build discipline, power, and long-term results.
        </p>

        {/* High-Visibility Dual Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="shimmer-btn inline-flex min-h-14 items-center gap-3 rounded-xl px-9 text-base font-black text-black shadow-[0_0_35px_rgba(190,242,100,0.45)] transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
          >
            Claim Free Day Pass <ArrowUpRight size={20} className="stroke-[2.5]" />
          </a>

          <a
            href="#programs"
            className="inline-flex min-h-14 items-center gap-2 rounded-xl border-2 border-white/40 bg-black/65 px-8 text-base font-bold text-white shadow-xl backdrop-blur-xl transition-all hover:border-lime-400 hover:bg-black/90 hover:text-lime-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
          >
            Explore Programs
          </a>
        </div>

        {/* Real Social Proof Badge with 3D Tilt */}
        <div className="mt-14 w-full max-w-2xl">
          <TiltCard maxTilt={8} scale={1.01}>
            <div className="rounded-2xl border-2 border-white/20 bg-black/80 p-4 shadow-2xl backdrop-blur-2xl sm:p-5">
              <div className="flex flex-col items-center justify-between gap-4 text-left sm:flex-row">
                <div className="flex items-center gap-3">
                  <div className="grid size-12 place-items-center rounded-xl bg-lime-400/20 text-lime-400 shadow-md shadow-lime-400/10">
                    <Star size={24} className="fill-lime-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-sm font-black text-white">
                      <span>4.9 / 5.0 Rating</span>
                      <span className="text-lime-400">★★★★★</span>
                    </div>
                    <p className="text-xs text-white/70">
                      Trusted by 500+ athletes &amp; beginners in Jaipur
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 border-t border-white/10 pt-3 text-xs font-semibold text-white/80 sm:border-t-0 sm:pt-0">
                  <span className="flex items-center gap-1.5">
                    <Shield size={14} className="text-lime-400" /> Certified Coaches
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Play size={14} className="text-lime-400" /> 1-on-1 Trial
                  </span>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Interactive Animated Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
        <a
          href="#programs"
          className="group flex flex-col items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-lime-400"
          aria-label="Scroll to Programs section"
        >
          <span className="transition-transform group-hover:translate-y-0.5">Scroll Down</span>
          <div className="flex h-9 w-5 justify-center rounded-full border-2 border-white/30 p-1 transition-colors group-hover:border-lime-400">
            <div className="h-2 w-1.5 animate-bounce rounded-full bg-lime-400" />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
