import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useReveal() {
  useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Reveal items with [data-reveal]
      const revealItems = gsap.utils.toArray("[data-reveal]");
      revealItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 40,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: (index % 3) * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // 2. Parallax floating on elements with .scroll-parallax
      const parallaxItems = gsap.utils.toArray(".scroll-parallax");
      parallaxItems.forEach((el) => {
        gsap.to(el, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
}

export default useReveal;
