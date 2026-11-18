import { Dumbbell, Flame, HeartPulse, ShieldCheck, ArrowRight } from "lucide-react";
import TiltCard from "../components/TiltCard";

const programs = [
  {
    icon: Dumbbell,
    tag: "Hypertrophy & Power",
    title: "Strength Lab",
    text: "Master barbell mechanics, build dense lean muscle, and apply progressive overload protocols under direct coach supervision.",
    highlights: ["Barbell Fundamentals", "Periodized Cycles", "Max Strength Metrics"],
  },
  {
    icon: Flame,
    tag: "Metabolic Conditioning",
    title: "HIIT & Fat Loss",
    text: "High-intensity functional intervals that elevate post-workout calorie burn, strip body fat, and rapidly build cardiovascular stamina.",
    highlights: ["Heart-Rate Pacing", "Calorie Burn", "Athletic Drills"],
  },
  {
    icon: HeartPulse,
    tag: "Endurance & Heart Health",
    title: "Cardio Performance",
    text: "Engineered circuit training, assault bikes, rowers, and dynamic pacing to boost VO2 max, lung capacity, and mental grit.",
    highlights: ["VO2 Max Boost", "Endurance Circuits", "Stamina Tracking"],
  },
  {
    icon: ShieldCheck,
    tag: "Tailored 1-on-1",
    title: "Personal Coaching",
    text: "Dedicated private coaching tailored to your body mechanics, injury history, schedule, and personalized macronutrient targets.",
    highlights: ["Custom Macro Plan", "Bi-Weekly Body Scans", "Form Audits"],
  },
];

function Programs() {
  return (
    <section id="programs" aria-label="Training Programs" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
            Engineered For Results
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
            Choose Your Training Path.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            No cookie-cutter routines. Every program at All For One Gym is designed around bio-mechanics, progressive overload, and quantifiable milestones.
          </p>
        </div>

        {/* Programs Grid with 3D Tilt Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <TiltCard key={program.title} maxTilt={14} scale={1.03}>
                <article className="glass-card group flex h-full flex-col justify-between rounded-3xl p-7 preserve-3d">
                  <div>
                    <div className="flex items-center justify-between translate-z-20">
                      <div className="grid size-13 place-items-center rounded-2xl bg-lime-400 text-black shadow-md shadow-lime-400/20 transition-transform duration-300 group-hover:scale-110 translate-z-40">
                        <Icon size={24} className="stroke-[2.5]" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-lime-400/90 translate-z-20">
                        {program.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-black text-white group-hover:text-lime-300 transition-colors translate-z-30">
                      {program.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/65 translate-z-10">
                      {program.text}
                    </p>

                    <ul className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs font-semibold text-white/75 translate-z-20">
                      {program.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-lime-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-lime-400/40 bg-lime-400/10 py-3 text-xs font-black uppercase tracking-wider text-lime-400 shadow-md backdrop-blur-md transition-all hover:border-lime-400 hover:bg-lime-400 hover:text-black hover:scale-[1.02] active:scale-95 translate-z-30"
                  >
                    Book Free Trial <ArrowRight size={14} className="stroke-[2.5]" />
                  </a>
                </article>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Programs;
