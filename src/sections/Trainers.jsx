import { Star, Award, ArrowUpRight } from "lucide-react";
import TiltCard from "../components/TiltCard";

import bhumikImage from "../assets/images/bhumikmehra.jpg";
import himanshuImage from "../assets/images/himanshumehra.jpg";
import palakImage from "../assets/images/palakmehra.jpg";

const trainers = [
  {
    name: "Bhumik Mehra",
    role: "Head Strength & Hypertrophy Coach",
    exp: "8+ Years Experience",
    cert: "CSCS & Olympic Weightlifting Specialist",
    image: bhumikImage,
  },
  {
    name: "Himanshu Mehra",
    role: "Lead HIIT & Boxing Coach",
    exp: "6+ Years Experience",
    cert: "National Level Boxer & Functional Trainer",
    image: himanshuImage,
  },
  {
    name: "Palak Mehra",
    role: "Mobility & Recovery Specialist",
    exp: "5+ Years Experience",
    cert: "Postural Restoration & Rehabilitation",
    image: palakImage,
  },
];

function Trainers() {
  return (
    <section id="trainers" aria-label="Our Trainers" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
            Coaching Roster
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
            Coached By Proven Practitioners.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Our trainers are dedicated specialists with years of competitive and physiological coaching experience. No guesswork—only precision form and sustainable progress.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {trainers.map((trainer) => (
            <TiltCard key={trainer.name} maxTilt={10} scale={1.02}>
              <article className="glass-card group flex h-full flex-col justify-between overflow-hidden rounded-3xl p-5 transition duration-300 hover:border-lime-400/40 preserve-3d">
                <div>
                  {/* Photo container */}
                  <div className="relative h-[380px] w-full overflow-hidden rounded-2xl bg-[#090b0e]">
                    <img
                      src={trainer.image}
                      alt={`${trainer.name} - ${trainer.role} at All For One Gym`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* 3D Floating Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md translate-z-40 shadow-lg">
                      <Star size={14} className="fill-lime-400 text-lime-400" />
                      <span>Elite Trainer</span>
                    </div>
                  </div>

                  {/* Info block with 3D Depth */}
                  <div className="pt-6">
                    <p className="text-xs font-black uppercase tracking-wider text-lime-400 translate-z-20">
                      {trainer.role}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white translate-z-30">
                      {trainer.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-white/50 translate-z-10">
                      {trainer.exp}
                    </p>

                    <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/5 p-3 text-xs text-white/80 translate-z-20">
                      <Award size={16} className="shrink-0 text-lime-400" />
                      <span className="line-clamp-2">{trainer.cert}</span>
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="mt-6 translate-z-30">
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-lime-400/50 bg-lime-400/10 py-3.5 text-xs font-black uppercase tracking-wider text-lime-400 shadow-md backdrop-blur-md transition-all hover:border-lime-400 hover:bg-lime-400 hover:text-black hover:scale-[1.02] active:scale-95"
                  >
                    Book Consultation <ArrowUpRight size={16} className="stroke-[2.5]" />
                  </a>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;
