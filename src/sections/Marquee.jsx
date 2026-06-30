import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  "Strength",
  "HIIT",
  "Boxing",
  "Mobility",
  "Recovery",
  "Coaching",
  "Nutrition",
  "Cardio",
];

function Marquee() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black px-5 py-16 text-white md:py-24">
      <motion.div
        key={`glow-${activeIndex}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.4 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/20 blur-3xl"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(190,255,40,.15),transparent_34%)]" />

      <div className="relative mx-auto flex min-h-40 max-w-7xl items-center justify-center text-center perspective-[1200px]">
        <AnimatePresence mode="wait">
          <motion.h2
            key={items[activeIndex]}
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.55,
              rotateX: -55,
              rotateZ: -3,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: [1.15, 0.96, 1],
              rotateX: 0,
              rotateZ: 0,
            }}
            exit={{
              opacity: 0,
              y: -80,
              scale: 1.25,
              rotateX: 55,
              rotateZ: 3,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="relative text-7xl font-black uppercase leading-none tracking-tight text-white drop-shadow-[0_0_35px_rgba(190,255,40,0.35)] md:text-9xl lg:text-[11rem]"
          >
            {items[activeIndex]}

            <span className="pointer-events-none absolute inset-x-0 top-full block translate-y-4 scale-y-[-1] text-white/10 blur-[2px]">
              {items[activeIndex]}
            </span>
          </motion.h2>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Marquee;