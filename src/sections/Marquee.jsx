import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const disciplines = [
  { name: "STRENGTH LAB", desc: "Barbells • Progressive Overload • Max Power" },
  { name: "HIIT ARENA", desc: "Metabolic Conditioning • Calorie Annihilation" },
  { name: "BOXING ZONE", desc: "Striking Dynamics • Heavy Bags • Footwork" },
  { name: "MOBILITY SUITE", desc: "Postural Restoration • Active Recovery • Rehab" },
  { name: "1-ON-1 COACHING", desc: "Private Assessment • Nutrition Scans • Tailored Drills" },
];

function Marquee() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % disciplines.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-label="Gym Specialties"
      className="relative overflow-hidden border-y border-white/10 bg-[#07090c] px-5 py-16 text-white md:py-24"
      style={{ perspective: "1200px" }}
    >
      {/* 3D Ambient Depth Light */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/15 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[170px] max-w-7xl flex-col items-center justify-center text-center preserve-3d">
        <AnimatePresence mode="wait">
          <motion.div
            key={disciplines[activeIndex].name}
            initial={{
              opacity: 0,
              rotateX: -60,
              y: 50,
              z: -120,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              rotateX: 0,
              y: 0,
              z: 30,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotateX: 60,
              y: -50,
              z: -120,
              scale: 0.85,
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col items-center preserve-3d"
          >
            <div className="flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1 text-xs font-black uppercase tracking-[0.3em] text-lime-400">
              <span className="size-1.5 rounded-full bg-lime-400 animate-ping" />
              <span>Zone 0{activeIndex + 1} // Discipline</span>
            </div>

            <h2 className="relative mt-3 text-5xl font-black uppercase tracking-tight text-white drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] sm:text-7xl md:text-8xl lg:text-9xl">
              {disciplines[activeIndex].name}
              
              {/* 3D Chrome Floor Reflection */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-full block select-none -scale-y-100 opacity-20 blur-[2px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.8),transparent)]"
              >
                {disciplines[activeIndex].name}
              </span>
            </h2>

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-white/60 sm:text-sm">
              {disciplines[activeIndex].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive 3D Sector Nav Indicators */}
      <div className="mt-12 flex items-center justify-center gap-2.5">
        {disciplines.map((item, idx) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`Select discipline ${item.name}`}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === idx
                ? "h-2.5 w-12 bg-lime-400 shadow-[0_0_15px_rgba(190,242,100,0.9)]"
                : "h-2 w-4 border border-white/20 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Marquee;
