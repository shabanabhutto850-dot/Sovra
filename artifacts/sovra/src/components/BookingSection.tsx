import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Calendar, Clock, Video } from "lucide-react";

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

  const perks = [
    { icon: Clock, label: "30-minute call" },
    { icon: Video, label: "Google Meet / Zoom" },
    { icon: Calendar, label: "Pick any open slot" },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Two-column layout on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">

          {/* Left: Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#666666] mb-5">
              Booking
            </p>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight leading-tight mb-5">
              Let&apos;s Talk.
            </h2>
            <p className="text-[15px] text-[#a0a0a0] leading-relaxed mb-10">
              Book a free strategy call. We&apos;ll walk through your goals and show you exactly
              what AI creatives can do for your brand.
            </p>

            {/* Perks list */}
            <div className="space-y-4 mb-10">
              {perks.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#111111] border border-[#2a2a2a]">
                    <Icon size={14} className="text-[#666666]" />
                  </div>
                  <span className="text-[13px] text-[#a0a0a0]">{label}</span>
                </div>
              ))}
            </div>

            {/* Fallback CTA */}
            <a
              href="https://calendly.com/haseeb-rehman-student/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[13px] text-[#666666] hover:text-white transition-colors duration-300"
            >
              Open in Calendly
              <ArrowUpRight
                size={13}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </motion.div>

          {/* Right: Calendly embed */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#2a2a2a] bg-[#0d0d0d]"
            style={{ minHeight: "600px" }}
          >
            {/* Loading state */}
            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                <div className="w-5 h-5 border border-[#3a3a3a] border-t-white/50 rounded-full animate-spin" />
                <p className="text-[12px] text-[#444444] tracking-wide">Loading calendar…</p>
              </div>
            )}

            {/* Dark-themed Calendly */}
            <div className="calendly-wrapper w-full">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/haseeb-rehman-student/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ffffff&text_color=ffffff&background_color=0d0d0d"
                style={{ width: "100%", minWidth: "0" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
