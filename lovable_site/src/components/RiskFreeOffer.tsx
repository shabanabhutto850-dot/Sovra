import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function RiskFreeOffer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="results" className="relative py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#666666] mb-4">
            Risk-Free
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight mb-5">
            Try It Free. <span className="text-[#a0a0a0]">No Risk.</span>
          </h2>
          <p className="text-[15px] text-[#a0a0a0] leading-relaxed mb-12 max-w-lg mx-auto">
            We don&apos;t charge you first.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="border border-[#2a2a2a] bg-[#111111] p-10 md:p-14 max-w-2xl mx-auto mb-12 rounded-3xl"
        >
          <p className="text-[15px] text-[#a0a0a0] leading-relaxed mb-6">
            Your first 3 AI ad creatives are completely free.
            We build, test, and deliver before you pay anything.
          </p>
          <p className="text-[15px] text-white leading-relaxed">
            If you love them, we continue.
            <br />
            If not, you walk away with 3 free creatives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
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
