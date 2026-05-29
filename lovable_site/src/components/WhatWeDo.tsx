import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Sparkles, Layout, Layers, BarChart3, Zap } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Format Discovery",
    desc: "We identify winning creative structures before production.",
  },
  {
    icon: Sparkles,
    title: "AI Creative Generation",
    desc: "We produce AI video + image ads for paid + organic.",
  },
  {
    icon: Layout,
    title: "Custom Brand Formats",
    desc: "We build reusable creative systems for scale.",
  },
  {
    icon: Layers,
    title: "Paid + Organic Ready",
    desc: "Every asset works across all platforms.",
  },
  {
    icon: BarChart3,
    title: "Performance Learning",
    desc: "We optimize based on conversion results.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Rapid creative production for testing and scaling.",
  },
];

export default function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="what-we-do" className="relative py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 max-w-2xl"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#666666] mb-4">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight mb-5">
            What We Do
          </h2>
          <p className="text-[15px] text-[#a0a0a0] leading-relaxed">
            End-to-end AI creative production built for performance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.1 + i * 0.08,
                }}
                className="group relative"
              >
                <div className="relative h-full bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 transition-all duration-500 hover:border-[#3a3a3a] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.03)]">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-[#2a2a2a] group-hover:bg-[#3a3a3a] transition-colors duration-500" />

                  {/* Number */}
                  <span className="absolute top-5 right-6 text-[11px] text-[#333333] font-medium tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] mb-6 group-hover:border-[#3a3a3a] transition-colors duration-500">
                      <Icon
                        size={16}
                        strokeWidth={1.5}
                        className="text-[#666666] group-hover:text-[#a0a0a0] transition-colors duration-500"
                      />
                    </div>
                    <h3 className="text-base font-medium tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-[#a0a0a0] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
