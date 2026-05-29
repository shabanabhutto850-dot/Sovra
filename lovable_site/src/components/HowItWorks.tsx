import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "We Find What Works For Your Business",
    desc: "We analyze market, competitors, audience to identify winning creative formats.",
  },
  {
    num: "02",
    title: "We Build Your Custom Content Formats",
    desc: "We design scalable creative systems tailored to your brand.",
  },
  {
    num: "03",
    title: "We Generate AI Ad Creatives",
    desc: "High-quality AI video + image creatives optimized for ads.",
  },
  {
    num: "04",
    title: "You Get Content That Compounds",
    desc: "More creatives → better data → improved performance → lower CAC",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-32 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#666666] mb-4">
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight">
            From zero to converting creatives. <span className="text-[#a0a0a0]">Fast.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#2a2a2a] hidden sm:block">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="absolute inset-0 bg-[#3a3a3a] origin-top"
            />
          </div>

          <div className="space-y-16 md:space-y-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.2 + i * 0.15,
                }}
                className="relative pl-0 sm:pl-20 md:pl-24"
              >
                {/* Step number */}
                <div className="hidden sm:flex absolute left-0 md:left-4 top-0 w-8 h-8 items-center justify-center rounded-full border border-[#2a2a2a]">
                  <span className="text-[11px] text-[#444444] font-medium tracking-wider">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <span className="sm:hidden text-[11px] text-[#444444] font-medium tracking-wider block mb-2">
                    {step.num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-light tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-[#a0a0a0] leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
