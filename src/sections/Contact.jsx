import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-white/4 p-5 backdrop-blur-xl sm:rounded-[36px] sm:p-8 lg:grid lg:grid-cols-[1fr_420px] lg:gap-10 lg:p-10">
        <div className="min-w-0">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-lime-300 sm:text-sm">
            Contact
          </p>

          <h2 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Ready to start your transformation?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Book your trial session today and our team will help you choose the
            right plan for your goal.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-black/45 p-5 sm:p-6 lg:mt-0">
          <div className="space-y-5">
            <p className="flex items-center gap-3 wrap-break-word text-sm text-white/70 sm:text-base">
              <Phone size={20} className="shrink-0 text-lime-300" />
              +91 99999 99999
            </p>

            <p className="flex items-center gap-3 break-all text-sm text-white/70 sm:text-base">
              <Mail size={20} className="shrink-0 text-lime-300" />
              hello@mygym.com
            </p>

            <p className="flex items-center gap-3 wrap-break-word text-sm text-white/70 sm:text-base">
              <MapPin size={20} className="shrink-0 text-lime-300" />
              Jaipur, Rajasthan
            </p>
          </div>

          <a
            href="tel:+919999999999"
            className="mt-8 inline-flex w-full justify-center rounded-xl bg-lime-300 px-5 py-4 text-center text-sm font-black text-black transition hover:scale-105 sm:text-base"
          >
            Book Trial Session
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;