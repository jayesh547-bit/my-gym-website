import { CheckCircle2, Users, Target, Clock } from "lucide-react";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/about.jpg";

const features = [
  "Certified trainers for every fitness level",
  "Personalized workout & nutrition plans",
  "Premium strength & recovery equipment",
];

const stats = [
  { icon: Users, value: "2.5K+", label: "Members" },
  { icon: Target, value: "92%", label: "Success Rate" },
  { icon: Clock, value: "24/7", label: "Gym Access" },
];

function About() {
  return (
    <section id="about" className="px-5 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative h-[520px] overflow-hidden rounded-[32px] border border-white/10 bg-black">
            <img
              src={aboutImage}
              alt="Premium gym interior"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(190,255,40,.18),transparent_35%)]" />
          </div>

          <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-lime-300">
              Elite Studio
            </p>

            <h3 className="mt-3 text-3xl font-black">
              Built for serious transformation.
            </h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-lime-300">
            About Us
          </p>

          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            More than a gym.
            <br />
            A lifestyle.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
            We help people build stronger bodies, healthier habits and
            unstoppable confidence through premium coaching and science-based
            training.
          </p>

          <div className="mt-10 space-y-5">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-300" size={22} />
                <span className="font-semibold text-white/80">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl"
                >
                  <Icon className="text-lime-300" size={24} />

                  <h3 className="mt-4 text-3xl font-black">{item.value}</h3>

                  <p className="mt-2 text-xs uppercase tracking-widest text-white/45">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;