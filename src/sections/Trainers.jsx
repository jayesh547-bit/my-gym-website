import { Star } from "lucide-react";

import bhumikImage from "../assets/images/bhumikmehra.jpg";
import himanshuImage from "../assets/images/himanshumehra.jpg";
import palakImage from "../assets/images/palakmehra.jpg";

const trainers = [
  {
    name: "Bhumik Mehra",
    role: "Strength Coach",
    exp: "8 Years",
    image: bhumikImage,
  },
  {
    name: "Himanshu Mehra",
    role: "HIIT & Boxing Coach",
    exp: "6 Years",
    image: himanshuImage,
  },
  {
    name: "Palak Mehra",
    role: "Mobility Coach",
    exp: "5 Years",
    image: palakImage,
  },
];

function Trainers() {
  return (
    <section id="trainers" className="px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-lime-300">
          Trainers
        </p>

        <h2 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Coaches who push you with proper form.
        </h2>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {trainers.map((trainer) => (
            <article
              key={trainer.name}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-2 hover:border-lime-300/50"
            >
              <div className="relative grid h-[420px] place-items-center overflow-hidden rounded-[24px] bg-black">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="absolute inset-0 h-full w-full object-contain p-3 transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-black/55 px-3 py-2 text-xs font-bold backdrop-blur-xl">
                  <Star size={14} className="fill-lime-300 text-lime-300" />
                  Elite
                </div>
              </div>

              <div className="p-3 pt-6">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">
                  {trainer.role}
                </p>

                <h3 className="mt-3 text-3xl font-black">{trainer.name}</h3>

                <p className="mt-3 text-white/55">
                  {trainer.exp} Experience
                </p>

                <button className="mt-6 rounded-xl border border-white/10 px-5 py-3 font-bold text-white/80 transition hover:border-lime-300/40 hover:text-lime-300">
                  View Coach
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;