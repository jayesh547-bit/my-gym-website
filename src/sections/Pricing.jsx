import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Rs. 1,499",
    desc: "Gym access and basic workout plan.",
    features: ["Gym floor access", "Basic workout plan", "Monthly progress check"],
  },
  {
    name: "Transform",
    price: "Rs. 2,999",
    desc: "Classes, custom plan, and coach review.",
    features: ["Group classes", "Custom workout plan", "Weekly coach review"],
  },
  {
    name: "Elite",
    price: "Rs. 5,999",
    desc: "Personal training and priority support.",
    features: ["Personal trainer", "Diet guidance", "Priority booking"],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-lime-300">
          Pricing
        </p>

        <h2 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Choose a plan that matches your goal.
        </h2>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex min-h-[460px] flex-col rounded-3xl border border-white/10 bg-white/[0.05] p-7"
            >
              <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">
                {plan.name}
              </p>

              <h3 className="mt-6 text-5xl font-black">{plan.price}</h3>

              <p className="mt-5 leading-7 text-white/60">{plan.desc}</p>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-lime-300" />
                    <span className="font-semibold text-white/75">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-auto inline-flex w-full justify-center rounded-xl bg-lime-300 px-6 py-4 font-black text-black transition hover:scale-105 hover:bg-lime-400"
              >
                Join Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;