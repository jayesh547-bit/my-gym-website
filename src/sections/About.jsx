import { CheckCircle2, Users, Target, Clock, Award, ShieldCheck } from "lucide-react";
import aboutImage from "../assets/images/about.jpg";
import TiltCard from "../components/TiltCard";

const keyPillars = [
  "Certified strength coaches & clinical nutritionists",
  "Tailored periodized training programs with form audits",
  "Rogue fitness racks, calibrated plates & recovery suite",
  "Quarterly InBody 270 body composition scans included",
];

const stats = [
  { icon: Users, value: "500+", label: "Active Members" },
  { icon: Target, value: "94%", label: "Goal Completion" },
  { icon: Clock, value: "5:30 AM", label: "Open Daily" },
  { icon: Award, value: "100%", label: "Coached Sessions" },
];

function About() {
  return (
    <section id="about" aria-label="About All For One Gym" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left Visual Column with 3D Tilt */}
        <div className="relative">
          <TiltCard maxTilt={8} scale={1.01}>
            <div className="relative h-[440px] sm:h-[520px] overflow-hidden rounded-[32px] border border-white/15 bg-black shadow-2xl preserve-3d">
              <img
                src={aboutImage}
                alt="Athletes training at All For One Gym state-of-the-art facility"
                loading="lazy"
                decoding="async"
                width="1066"
                height="1600"
                className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
              />
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(190,242,100,0.15),transparent_40%)]" />

              {/* Floating Feature Card with 3D Pop */}
              <div className="glass-card absolute bottom-6 left-6 right-6 rounded-2xl p-6 shadow-2xl sm:bottom-8 sm:left-8 sm:right-8 translate-z-40">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-lime-400" />
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-lime-400">
                    Premium Standards
                  </p>
                </div>
                <p className="mt-2 text-xl font-black text-white sm:text-2xl">
                  Built for serious transformation.
                </p>
                <p className="mt-1 text-xs text-white/70">
                  Clean, spacious, high-energy environment with zero clutter.
                </p>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Right Editorial Column */}
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
            About Our Philosophy
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
            More Than A Gym. <br />
            <span className="text-lime-400">A Standard Of Living.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
            At All For One Gym, we eliminate the guesswork from fitness. Whether your objective is stripping body fat, adding slabs of lean muscle, or building athletic endurance, our coaching framework is grounded in physiological science and accountable progress tracking.
          </p>

          <div className="mt-8 space-y-3.5">
            {keyPillars.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-lime-400" size={18} />
                <span className="text-sm font-semibold text-white/85 sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Stats Grid with Hover Lift */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="glass-card rounded-2xl p-4 text-center sm:p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-lime-400/40"
                >
                  <Icon className="mx-auto text-lime-400" size={22} />
                  <p className="mt-3 text-2xl font-black text-white sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-white/50">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
