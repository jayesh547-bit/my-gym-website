import { Star, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Software Architect",
    metric: "-11 kg Fat Loss in 14 Weeks",
    text: "The coaching at All For One Gym is lightyears ahead of typical gyms. The trainers don't just stand there; they actively track my progressive overload and corrected my posture within weeks.",
    program: "HIIT & Strength Protocol",
  },
  {
    name: "Ananya Singh",
    role: "Corporate Executive",
    metric: "Deadlift: 45kg → 105kg",
    text: "I used to be intimidated by the barbell section. Coach Bhumik broke down my hip hinge mechanics step-by-step. Now I look forward to 6:00 AM heavy lifting every single morning.",
    program: "Strength Lab",
  },
  {
    name: "Karan Mehta",
    role: "Entrepreneur",
    metric: "+6 kg Lean Muscle in 5 Months",
    text: "The atmosphere is unmatched. Clean, high-energy, with zero waiting for power racks. The InBody analysis kept me honest and the nutritional guidance made muscle building simple.",
    program: "Elite 1-on-1 Coaching",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" aria-label="Member Testimonials" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
            Real Transformations
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
            Proven Results. Zero Hype.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            See how our members transformed their body composition, confidence, and daily energy.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="glass-card group flex flex-col justify-between rounded-3xl p-8 transition-all hover:border-lime-400/40"
            >
              <div>
                {/* Header Rating & Quote */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-lime-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-lime-400" />
                    ))}
                  </div>
                  <Quote size={28} className="text-white/20" />
                </div>

                {/* Concrete Result Metric Pill */}
                <div className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-bold text-lime-400">
                  <CheckCircle2 size={13} />
                  <span>{item.metric}</span>
                </div>

                {/* Review Text */}
                <p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-base">
                  “{item.text}”
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 border-t border-white/10 pt-5">
                <h3 className="text-lg font-black text-white">{item.name}</h3>
                <div className="flex items-center justify-between text-xs text-white/50">
                  <span>{item.role}</span>
                  <span className="font-semibold text-lime-400">{item.program}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
