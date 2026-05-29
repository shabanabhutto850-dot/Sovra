import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight mb-5">
            AI Ad Creatives at Scale.
            <br />
            <span className="text-[#a0a0a0]">Without the Headcount.</span>
          </h2>
          <p className="text-[15px] text-[#a0a0a0] leading-relaxed mb-12 max-w-lg mx-auto">
            Start with 3 free AI creatives and scale from there.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => handleScrollTo("#how-it-works")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 px-7 py-3 text-[13px] font-medium text-[#0a0a0a] bg-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] rounded-full"
          >
            <span className="relative z-10">See How It Works</span>
            <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            onClick={() => handleScrollTo("#results")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-7 py-3 text-[13px] font-medium text-[#a0a0a0] border border-[#2a2a2a] hover:border-[#3a3a3a] hover:text-white transition-all duration-300 rounded-full"
          >
            View Results
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
