import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useCursorGlow } from "./hooks/useCursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhatWeDo from "./components/WhatWeDo";
import RiskFreeOffer from "./components/RiskFreeOffer";
import ExampleOutput from "./components/ExampleOutput";
import FAQ from "./components/FAQ";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
import BlogsPage from "./components/BlogsPage";

type Page = "home" | "blogs";

function App() {
  const [page, setPage] = useState<Page>("home");
  const progress = useScrollProgress();
  const glowRef = useCursorGlow();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <motion.div
        className="scroll-progress"
        style={{ scaleX: progress }}
      />

      <div ref={glowRef} className="cursor-glow hidden lg:block" />

      <div className="noise-overlay" />

      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-medium tracking-[0.15em] uppercase text-white/60 px-6 py-3 rounded-full border border-[#2a2a2a]"
            >
              Sovra
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {page === "blogs" ? (
          <motion.div
            key="blogs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <BlogsPage onBack={() => setPage("home")} />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Navbar />
            <main>
              <Hero />
              <HowItWorks />
              <WhatWeDo />
              <RiskFreeOffer />
              <ExampleOutput />
              <FAQ />
              <BookingSection />
            </main>
            <Footer onBlogsClick={() => setPage("blogs")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
