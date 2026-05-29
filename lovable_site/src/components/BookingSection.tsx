import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function BookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    // Load Calendly widget script
    const existing = document.getElementById("calendly-script");
    if (existing) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Don't remove on unmount to keep widget alive
    };
  }, [isInView]);

  return (
    <section id="contact" className="relative py-24 sm:py-32 lg:py-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#666666] mb-4">
            Booking
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight mb-5">
            Let&apos;s Talk.
          </h2>
          <p className="text-[15px] text-[#a0a0a0] leading-relaxed">
            Book a call instantly.
          </p>
        </motion.div>

        {/* Calendly Embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="border border-[#2a2a2a] bg-[#111111] overflow-hidden rounded-2xl sm:rounded-3xl"
        >
          <div className="calendly-wrapper">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/haseeb-rehman-student/new-meeting"
              style={{ minWidth: "100%", width: "100%", height: "700px" }}
            />
          </div>
          {!loaded && (
            <div className="flex items-center justify-center h-[400px] sm:h-[500px]">
              <div className="w-5 h-5 border border-[#2a2a2a] border-t-white/40 rounded-full animate-spin" />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
