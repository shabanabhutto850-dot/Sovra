import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

import vid1 from "@assets/0523(1)_1780050251681.mp4";
import vid2 from "@assets/0523(2)_1780050251682.mp4";
import vid3 from "@assets/0524(1)_1780050251683.mp4";
import vid4 from "@assets/UGC_Maxxing_AI_Content_System_for_Growth_Teams_(1)_1780050251685.mp4";
import vid5 from "@assets/UGC_Maxxing_AI_Content_System_for_Growth_Teams_(3)_1780050251686.mp4";
import vid6 from "@assets/UGC_Maxxing_AI_Content_System_for_Growth_Teams_1780050251687.mp4";

const videos = [vid1, vid2, vid3, vid4, vid5, vid6];

function VideoCard({ src, index, isInView }: { src: string; index: number; isInView: boolean }) {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0.1 + index * 0.08,
      }}
      className="group relative aspect-[9/16] bg-[#111111] border border-[#2a2a2a] overflow-hidden transition-all duration-500 hover:border-[#3a3a3a] hover:-translate-y-1 rounded-2xl"
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Hover glow overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
      </div>

      {/* Mute / Unmute button */}
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute" : "Mute"}
        className="absolute bottom-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-black/60 transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </button>

      {/* Always-visible mute indicator (small dot) */}
      <div className="absolute bottom-3 right-3 z-10 group-hover:hidden">
        <div className={`w-1.5 h-1.5 rounded-full ${muted ? "bg-white/20" : "bg-white/60"}`} />
      </div>
    </motion.div>
  );
}

export default function ExampleOutput() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 sm:mb-16 max-w-2xl"
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

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {videos.map((src, i) => (
            <VideoCard key={i} src={src} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Pagination dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mt-10"
        >
          {videos.map((_, i) => (
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
