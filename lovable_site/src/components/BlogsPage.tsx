import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Logo from "./Logo";

interface BlogsPageProps {
  onBack: () => void;
}

export default function BlogsPage({ onBack }: BlogsPageProps) {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Navbar */}
      <nav className="fixed top-3 left-4 right-4 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#2a2a2a]/50 rounded-2xl">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-[13px] text-[#a0a0a0] hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
              Back
            </button>
            <Logo className="text-white/90" />
            <div className="w-16" />
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#666666] mb-4">
            Blogs
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
            No content available yet
          </h1>
          <p className="text-[15px] text-[#a0a0a0] leading-relaxed max-w-md mx-auto">
            We are not publishing blogs yet. Check back soon for insights on AI creatives, performance marketing, and brand growth.
          </p>
          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center gap-2 px-7 py-3 text-[13px] font-medium text-[#0a0a0a] bg-white rounded-full"
          >
            <ArrowLeft size={14} />
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
