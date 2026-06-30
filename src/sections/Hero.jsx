import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import heroVideo from "../assets/videos/Gym.mp4";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-28 text-center"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(190,255,40,.16),transparent_32%),linear-gradient(to_bottom,rgba(0,0,0,.2),rgba(0,0,0,.55),#030405)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col items-center justify-center pb-32">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-white/85"
        >
          Premium Fitness Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="max-w-6xl font-serif text-5xl font-bold italic leading-[1.05] text-white drop-shadow-2xl md:text-7xl lg:text-8xl"
        >
          All-New Gym Training Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-2xl text-xl leading-8 text-white/85 md:text-3xl"
        >
          All in One, One for Strength
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          href="#programs"
          className="mt-10 inline-flex min-h-14 items-center gap-3 rounded-full border border-white/80 bg-white/10 px-9 text-xl font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-black"
        >
          Start Now <ArrowUpRight size={22} />
        </motion.a>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 w-[calc(100%-32px)] max-w-5xl -translate-x-1/2 rounded-2xl border border-white/25 bg-black/35 p-3 backdrop-blur-xl">
        <div className="flex items-center gap-4 text-left">
          <div className="h-16 w-24 shrink-0 rounded-xl bg-[radial-gradient(circle_at_50%_20%,rgba(190,255,40,.4),transparent_40%),linear-gradient(140deg,#1c2218,#050608)]" />

          <p className="text-sm leading-6 text-white/85 md:text-lg">
            Cinematic close-up of an athlete training under dramatic gym
            lighting, moving through strength, focus, and transformation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;