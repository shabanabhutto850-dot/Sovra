import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ExampleOutput() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#666666] mb-4">
            Output
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight mb-5">
            Example Output
          </h2>
          <p className="text-[15px] text-[#a0a0a0] leading-relaxed">
            AI-generated creatives ready for ads and organic.
          </p>
        </motion.div>

        {/* Output Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1 + i * 0.08,
              }}
              className="group relative aspect-[3/4] bg-[#111111] border border-[#2a2a2a] overflow-hidden transition-all duration-500 hover:border-[#3a3a3a] hover:-translate-y-1 rounded-2xl"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-white/[0.03] to-transparent rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mt-10"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                i === 0 ? "bg-white/60" : "bg-white/15"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
