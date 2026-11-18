import { useState } from "react";
import { MapPin, Phone, Clock, Send, CheckCircle2, MessageSquare } from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "Strength & Muscle Gain",
    preferredTime: "Morning (6 AM - 10 AM)",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate instant success
    setSubmitted(true);
  };

  return (
    <section id="contact" aria-label="Contact and Trial Booking" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="glass-card overflow-hidden rounded-[36px] border border-white/15 p-6 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Info Column (5 cols) */}
            <div className="lg:col-span-5">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
                Direct Connect
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
                Book Your Trial Session.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-white/70">
                Experience our facility, meet your coaches, and complete an InBody composition assessment with zero obligation.
              </p>

              <div className="mt-10 space-y-5 text-sm sm:text-base">
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 transition hover:border-lime-400 hover:text-white"
                >
                  <div className="grid size-11 place-items-center rounded-xl bg-lime-400 text-black">
                    <Phone size={20} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Call Us</p>
                    <p className="font-bold text-white">+91 99999 99999</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 transition hover:border-lime-400 hover:text-white"
                >
                  <div className="grid size-11 place-items-center rounded-xl bg-emerald-400 text-black">
                    <MessageSquare size={20} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">WhatsApp Concierge</p>
                    <p className="font-bold text-white">Chat With A Coach</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
                  <div className="grid size-11 place-items-center rounded-xl bg-lime-400 text-black">
                    <MapPin size={20} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Location</p>
                    <p className="font-bold text-white">Jaipur, Rajasthan, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
                  <div className="grid size-11 place-items-center rounded-xl bg-lime-400 text-black">
                    <Clock size={20} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Hours</p>
                    <p className="font-bold text-white">Mon–Sat: 5:30 AM – 10:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/15 bg-black/60 p-6 sm:p-10 backdrop-blur-xl">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto grid size-16 place-items-center rounded-full bg-lime-400 text-black shadow-lg shadow-lime-400/30">
                      <CheckCircle2 size={36} className="stroke-[2.5]" />
                    </div>
                    <h3 className="mt-6 text-2xl font-black text-white sm:text-3xl">
                      Trial Request Received!
                    </h3>
                    <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
                      Thanks, <span className="font-bold text-lime-400">{formData.name || "Athlete"}</span>. Our team will contact you via WhatsApp/Phone within 2 hours to confirm your scheduled slot.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-lime-400/50 bg-black/80 px-6 py-3 text-xs font-black uppercase tracking-wider text-lime-400 shadow-lg transition hover:bg-lime-400 hover:text-black hover:scale-105 active:scale-95"
                    >
                      Book Another Session
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-black text-white sm:text-2xl">
                      Claim Your Free Trial Pass
                    </h3>
                    <p className="text-xs text-white/60">
                      Fill out the details below to reserve your priority coaching slot.
                    </p>

                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-white/70">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Aryan Mehra"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/30 transition focus:border-lime-400 focus:bg-white/10 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-white/70">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/30 transition focus:border-lime-400 focus:bg-white/10 focus:outline-none"
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="goal" className="block text-xs font-bold uppercase tracking-wider text-white/70">
                          Primary Goal
                        </label>
                        <select
                          id="goal"
                          value={formData.goal}
                          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                          className="mt-2 w-full rounded-xl border border-white/15 bg-[#0e1115] px-4 py-3.5 text-sm text-white transition focus:border-lime-400 focus:outline-none"
                        >
                          <option value="Strength & Muscle Gain">Strength &amp; Muscle Gain</option>
                          <option value="Fat Loss & HIIT">Fat Loss &amp; HIIT</option>
                          <option value="Personal 1-on-1 Training">Personal 1-on-1 Training</option>
                          <option value="Mobility & Rehab">Mobility &amp; Rehab</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="time" className="block text-xs font-bold uppercase tracking-wider text-white/70">
                          Preferred Slot
                        </label>
                        <select
                          id="time"
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="mt-2 w-full rounded-xl border border-white/15 bg-[#0e1115] px-4 py-3.5 text-sm text-white transition focus:border-lime-400 focus:outline-none"
                        >
                          <option value="Morning (6 AM - 10 AM)">Morning (6 AM - 10 AM)</option>
                          <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                          <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 py-4 text-sm font-black uppercase tracking-wider text-black shadow-lg shadow-lime-400/25 transition-all hover:bg-lime-300 hover:scale-[1.01] active:scale-95"
                    >
                      Confirm Booking Request <Send size={16} />
                    </button>

                    <p className="text-center text-[11px] text-white/50">
                      🔒 No spam. We respect your privacy and will never share your number.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
