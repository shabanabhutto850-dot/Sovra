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
          className="text-center mb-8 sm:mb-12"
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

        {/* Calendly Embed Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="border border-[#2a2a2a] bg-[#0d0d0d] overflow-hidden rounded-2xl sm:rounded-3xl w-full"
        >
          {/* Loading spinner */}
          {!loaded && (
            <div className="flex items-center justify-center h-[500px] sm:h-[700px]">
              <div className="w-5 h-5 border border-[#2a2a2a] border-t-white/40 rounded-full animate-spin" />
            </div>
          )}

          <div className="calendly-wrapper">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/haseeb-rehman-student/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ffffff&text_color=ffffff&background_color=0d0d0d"
            />
          </div>
        </motion.div>

        {/* Mobile fallback link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-5 text-center text-[12px] text-[#444444]"
        >
          Having trouble?{" "}
          <a
            href="https://calendly.com/haseeb-rehman-student/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#666666] hover:text-[#a0a0a0] underline underline-offset-2 transition-colors duration-200"
          >
            Open Calendly directly
          </a>
        </motion.p>
      </div>
    </section>
  );
}
