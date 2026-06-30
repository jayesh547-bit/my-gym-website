import strengthLab from "../assets/images/strengthlab.jpg";
import boxingRoom from "../assets/images/boxingroom.jpg";
import hiitArena from "../assets/images/HIITArena.jpg";
import recoveryZone from "../assets/images/recoveryjone.jpg";

const galleryItems = [
  {
    title: "Strength Lab",
    image: strengthLab,
  },
  {
    title: "Boxing Room",
    image: boxingRoom,
  },
  {
    title: "HIIT Arena",
    image: hiitArena,
  },
  {
    title: "Recovery Zone",
    image: recoveryZone,
  },
];

function Gallery() {
  return (
    <section id="gallery" className="px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-lime-300">
          Gallery
        </p>

        <h2 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          A studio built to make hard work look cinematic.
        </h2>

        <div className="mt-16 grid gap-5 md:grid-cols-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative flex min-h-80 items-end overflow-hidden rounded-[32px] border border-white/10 p-6 transition hover:-translate-y-2 hover:border-lime-300/50"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(190,255,40,.16),transparent_35%)] opacity-0 transition group-hover:opacity-100" />

              <div className="relative z-10">
                <span className="text-sm font-black text-lime-300">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;