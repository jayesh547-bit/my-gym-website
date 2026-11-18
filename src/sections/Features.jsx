import { Brain, ChartNoAxesCombined, Dumbbell, Sparkles, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Calibrated Strength Arsenal",
    text: "Competition-grade barbells, multi-grip power cages, calibrated bumper plates, and ergonomic cable towers that ensure optimal biomechanics.",
    stat: "100% Calibrated Gear",
  },
  {
    icon: Brain,
    title: "Individualized Programming",
    text: "Every lift, set, and rest interval is tailored to your skeletal structure, mobility profile, and target timeline—adjusted every 4 weeks.",
    stat: "Custom Periodization",
  },
  {
    icon: ChartNoAxesCombined,
    title: "InBody Diagnostic Tracking",
    text: "Regular bio-impedance composition scans tracking visceral fat, skeletal muscle mass, and hydration balance to verify physiological progress.",
    stat: "Bi-Weekly Body Scans",
  },
  {
    icon: Sparkles,
    title: "High-Focus Studio Atmosphere",
    text: "A curated dark-aesthetic training environment with acoustics, ventilation, and lighting tuned to elevate mental focus and training output.",
    stat: "Zero Crowding Policy",
  },
];

function Features() {
  return (
    <section id="features" aria-label="Gym Features" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
            Engineered Excellence
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
            Why Athletes Choose All For One.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            We've eliminated the friction and intimidation of standard commercial gyms. Here's what sets our training ecosystem apart.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="glass-card group flex flex-col justify-between rounded-3xl p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid size-13 place-items-center rounded-2xl bg-lime-400 text-black shadow-md shadow-lime-400/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={24} className="stroke-[2.5]" />
                    </div>
                    <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-lime-400">
                      {feature.stat}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-white group-hover:text-lime-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                    {feature.text}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-white/50 border-t border-white/10 pt-4">
                  <ShieldCheck size={16} className="text-lime-400" />
                  <span>Available to all active members</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
