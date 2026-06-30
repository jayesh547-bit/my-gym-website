import { Dumbbell, Flame, HeartPulse, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    text: "Build lean muscle, improve power, and track progressive overload with expert coaching.",
  },
  {
    icon: Flame,
    title: "Fat Loss",
    text: "Burn calories faster with HIIT, cardio circuits, and smart workout plans.",
  },
  {
    icon: HeartPulse,
    title: "Cardio Fitness",
    text: "Improve stamina, endurance, heart health, and athletic performance.",
  },
  {
    icon: ShieldCheck,
    title: "Personal Coaching",
    text: "Get one-to-one training, form correction, and weekly progress tracking.",
  },
];

function Programs() {
  return (
    <section id="programs" className="relative px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-lime-300">
          Training Programs
        </p>

        <h2 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Choose the training that fits your goal.
        </h2>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.article
                key={program.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-white/[0.045] p-7 transition hover:-translate-y-2 hover:border-lime-300/50"
              >
                <div className="grid size-14 place-items-center rounded-2xl bg-lime-300 text-black">
                  <Icon size={26} />
                </div>

                <h3 className="mt-8 text-3xl font-black">{program.title}</h3>

                <p className="mt-5 leading-7 text-white/60">
                  {program.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Programs;