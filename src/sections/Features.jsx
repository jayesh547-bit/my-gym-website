import { Brain, ChartNoAxesCombined, Dumbbell, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Planning",
    text: "Workout plans designed around your current level, goal, and weekly progress.",
  },
  {
    icon: Dumbbell,
    title: "Elite Equipment",
    text: "Premium machines, strength zones, boxing space, and recovery tools.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Progress Tracking",
    text: "Track strength, stamina, body changes, and consistency every week.",
  },
  {
    icon: Sparkles,
    title: "Premium Vibe",
    text: "Dark cinematic studio feel that makes training focused and addictive.",
  },
];

function Features() {
  return (
    <section id="features" className="px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-lime-300">
          Features
        </p>

        <h2 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Everything built for serious training.
        </h2>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-[32px] border border-white/10 bg-white/[0.045] p-7 transition hover:-translate-y-2 hover:border-lime-300/50"
              >
                <div className="grid size-14 place-items-center rounded-2xl bg-lime-300 text-black">
                  <Icon size={26} />
                </div>

                <h3 className="mt-8 text-3xl font-black">{feature.title}</h3>

                <p className="mt-5 max-w-xl leading-7 text-white/60">
                  {feature.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;