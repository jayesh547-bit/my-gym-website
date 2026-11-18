import { useState } from "react";
import { CheckCircle2, Sparkles, Shield, ArrowRight } from "lucide-react";
import TiltCard from "../components/TiltCard";

const pricingData = {
  monthly: [
    {
      name: "Starter",
      badge: null,
      price: "₹1,999",
      period: "/month",
      desc: "Ideal for self-driven lifters seeking premium equipment and access.",
      features: [
        "Full gym floor & equipment access",
        "Starter exercise induction & form check",
        "Locker & shower facilities",
        "Free Wi-Fi & water bar access",
        "Monthly progress review",
      ],
      popular: false,
    },
    {
      name: "Transform",
      badge: "Most Popular",
      price: "₹3,499",
      period: "/month",
      desc: "Complete coaching solution with group classes and customized programming.",
      features: [
        "Everything in Starter, plus:",
        "Unlimited HIIT & Boxing classes",
        "Custom periodized workout regimen",
        "Tailored nutrition guide & macros",
        "Bi-weekly InBody composition scans",
        "Dedicated trainer weekly check-in",
      ],
      popular: true,
    },
    {
      name: "Elite Pro",
      badge: "VIP Coaching",
      price: "₹6,999",
      period: "/month",
      desc: "Intensive 1-on-1 personal coaching with guaranteed body transformation metrics.",
      features: [
        "Everything in Transform, plus:",
        "12 One-on-One personal training sessions",
        "Clinical dietitian customized meal plans",
        "Priority rack & session reservation",
        "Full recovery zone & percussive massage access",
        "24/7 direct WhatsApp coach support",
      ],
      popular: false,
    },
  ],
  quarterly: [
    {
      name: "Starter",
      badge: null,
      price: "₹4,999",
      period: "/3 months",
      desc: "Save 16% on 3 months of uninterrupted strength training access.",
      features: [
        "Full gym floor & equipment access",
        "Starter exercise induction & form check",
        "Locker & shower facilities",
        "Free Wi-Fi & water bar access",
        "Monthly progress review",
      ],
      popular: false,
    },
    {
      name: "Transform",
      badge: "Best Value",
      price: "₹8,499",
      period: "/3 months",
      desc: "Our signature 12-week body transformation protocol at a 20% savings.",
      features: [
        "Everything in Starter, plus:",
        "Unlimited HIIT & Boxing classes",
        "Custom periodized workout regimen",
        "Tailored nutrition guide & macros",
        "Bi-weekly InBody composition scans",
        "Dedicated trainer weekly check-in",
      ],
      popular: true,
    },
    {
      name: "Elite Pro",
      badge: "VIP Coaching",
      price: "₹17,499",
      period: "/3 months",
      desc: "Full 3-month personal coaching partnership for total body metamorphosis.",
      features: [
        "Everything in Transform, plus:",
        "36 One-on-One personal training sessions",
        "Clinical dietitian customized meal plans",
        "Priority rack & session reservation",
        "Full recovery zone & percussive massage access",
        "24/7 direct WhatsApp coach support",
      ],
      popular: false,
    },
  ],
};

function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = pricingData[billingCycle];

  return (
    <section id="pricing" aria-label="Membership Plans" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
            Investment In Yourself
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
            Transparent Membership Plans.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            No hidden maintenance fees. No automatic lock-ins. Straightforward, results-driven memberships.
          </p>

          {/* Billing Toggle with 3D Depth */}
          <div className="mt-10 inline-flex items-center rounded-2xl border-2 border-white/15 bg-black/60 p-1.5 backdrop-blur-xl shadow-xl">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-xl px-6 py-3 text-xs font-black uppercase tracking-wider transition-all ${
                billingCycle === "monthly"
                  ? "bg-lime-400 text-black shadow-lg shadow-lime-400/30"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("quarterly")}
              className={`inline-flex items-center gap-1.5 rounded-xl px-6 py-3 text-xs font-black uppercase tracking-wider transition-all ${
                billingCycle === "quarterly"
                  ? "bg-lime-400 text-black shadow-lg shadow-lime-400/30"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Quarterly <span className="rounded-full bg-lime-400/20 border border-lime-400/30 px-2 py-0.5 text-[10px] font-black text-lime-300">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards with 3D Tilt */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <TiltCard key={plan.name} maxTilt={plan.popular ? 12 : 8} scale={plan.popular ? 1.03 : 1.01}>
              <article
                className={`relative flex h-full flex-col justify-between rounded-3xl p-8 transition-all duration-300 preserve-3d ${
                  plan.popular
                    ? "glass-card border-lime-400/50 bg-white/[0.07] shadow-[0_0_50px_rgba(190,242,100,0.2)] ring-1 ring-lime-400/40"
                    : "glass-card hover:border-white/20"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 translate-z-50">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-400 px-4 py-1 text-[11px] font-black uppercase tracking-widest text-black shadow-lg shadow-lime-400/40">
                      <Sparkles size={12} className="stroke-[3]" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-lime-400 translate-z-20">
                    {plan.name}
                  </p>

                  <div className="mt-5 flex items-baseline gap-2 translate-z-40">
                    <span className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                      {plan.price}
                    </span>
                    <span className="text-sm font-semibold text-white/50">
                      {plan.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/65 translate-z-10">
                    {plan.desc}
                  </p>

                  <div className="my-8 border-t border-white/10" />

                  <ul className="space-y-3.5 text-sm translate-z-20">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-lime-400" />
                        <span className="text-white/80 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-4 translate-z-30">
                  <a
                    href="#contact"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-black uppercase tracking-wider transition-all ${
                      plan.popular
                        ? "shimmer-btn text-black shadow-lg shadow-lime-400/40 hover:scale-[1.02] active:scale-95"
                        : "border-2 border-white/30 bg-white/10 text-white font-black shadow-md hover:border-lime-400 hover:bg-lime-400 hover:text-black hover:scale-[1.02] active:scale-95"
                    }`}
                  >
                    Choose {plan.name} <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>

        {/* Trust Guarantees */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-10 text-xs font-semibold text-white/60">
          <span className="flex items-center gap-2">
            <Shield size={16} className="text-lime-400" /> 1-Day Complimentary Trial Session
          </span>
          <span className="flex items-center gap-2">
            <Shield size={16} className="text-lime-400" /> Zero Hidden Joining Or Locker Fees
          </span>
          <span className="flex items-center gap-2">
            <Shield size={16} className="text-lime-400" /> Medical &amp; Travel Membership Freeze
          </span>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
