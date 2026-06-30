import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useReveal() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray(
        "[data-reveal], section article, section .rounded-\\[32px\\], section .rounded-\\[40px\\]"
      );

      revealItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 70,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: (index % 3) * 0.04,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              end: "bottom 12%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      gsap.to(".kling-float", {
        y: -18,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);
}

export default useReveal;