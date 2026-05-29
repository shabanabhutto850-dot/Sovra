import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function BookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isInView) return;

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
  }, [isInView]);

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
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
          <div className="calendly-wrapper relative">
            {/* Loading spinner shown until script loads */}
            {!loaded && (
              <div className="flex items-center justify-center h-[500px] sm:h-[700px]">
                <div className="w-5 h-5 border border-[#2a2a2a] border-t-white/40 rounded-full animate-spin" />
              </div>
            )}

            {/* Calendly embed — always rendered so the widget can attach */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/haseeb-rehman-student/new-meeting"
              style={{
                width: "100%",
                minWidth: "100%",
              }}
            />
          </div>
        </motion.div>

        {/* Fallback direct link for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center"
        >
          <a
            href="https://calendly.com/haseeb-rehman-student/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] text-[#666666] hover:text-[#a0a0a0] transition-colors duration-300"
          >
            <span>Or open Calendly directly</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
