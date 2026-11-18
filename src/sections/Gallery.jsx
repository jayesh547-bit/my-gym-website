import strengthLab from "../assets/images/strengthlab.jpg";
import boxingRoom from "../assets/images/boxingroom.jpg";
import hiitArena from "../assets/images/HIITArena.jpg";
import recoveryZone from "../assets/images/recoveryjone.jpg";

const galleryItems = [
  {
    title: "Strength Lab",
    desc: "Competition power racks, calibrated plates & heavy dumbbell section up to 60kg.",
    image: strengthLab,
    tag: "Heavy Lifting",
  },
  {
    title: "Boxing Arena",
    desc: "Heavy bags, speed bags & dedicated footwork ring for striking workouts.",
    image: boxingRoom,
    tag: "Combat Fitness",
  },
  {
    title: "HIIT & Cardio Grid",
    desc: "Curved treadmills, assault bikes, ski ergs & functional turf lanes.",
    image: hiitArena,
    tag: "Conditioning",
  },
  {
    title: "Recovery Suite",
    desc: "Dedicated myofascial release, percussive massage tools & stretching zone.",
    image: recoveryZone,
    tag: "Mobility & Rehab",
  },
];

function Gallery() {
  return (
    <section id="gallery" aria-label="Gym Facility Gallery" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
            The Facility
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
            Where Iron Meets Aesthetic.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Purpose-built zones engineered for maximum training flow, premium acoustics, and pristine hygiene.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <article
              key={item.title}
              className="glass-card group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-lime-400/50 hover:shadow-[0_20px_40px_-15px_rgba(190,242,100,0.25)] preserve-3d"
            >
              <img
                src={item.image}
                alt={`${item.title} at All For One Gym`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-lime-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 translate-z-30 transition-transform duration-300 group-hover:translate-y-[-4px]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-lime-400">
                    0{index + 1} // {item.tag}
                  </span>
                </div>

                <h3 className="mt-2 text-2xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-white/70 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
