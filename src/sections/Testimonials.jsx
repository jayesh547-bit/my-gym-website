const testimonials = [
  {
    name: "Rohit Sharma",
    goal: "Fat Loss",
    text: "I lost 9 kg in 12 weeks. The trainers pushed me hard but always corrected my form.",
  },
  {
    name: "Ananya Singh",
    goal: "Strength",
    text: "The programming feels premium and structured. I finally understand progressive overload.",
  },
  {
    name: "Karan Mehta",
    goal: "Muscle Gain",
    text: "Best gym experience I have had. The atmosphere makes you want to train harder.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-lime-300">
          Results
        </p>

        <h2 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Real progress from real members.
        </h2>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[32px] border border-white/10 bg-white/[0.045] p-7"
            >
              <p className="text-lg leading-8 text-white/70">“{item.text}”</p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-2xl font-black">{item.name}</h3>
                <p className="mt-2 text-sm font-bold text-lime-300">
                  {item.goal}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;