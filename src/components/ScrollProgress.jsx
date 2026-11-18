import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-lime-500 via-lime-300 to-white shadow-[0_0_14px_rgba(190,242,100,0.85)]"
      aria-hidden="true"
    />
  );
}

export default ScrollProgress;
