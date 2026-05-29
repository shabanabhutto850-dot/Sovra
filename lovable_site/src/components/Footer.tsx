import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  onBlogsClick: () => void;
}

export default function Footer({ onBlogsClick }: FooterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="relative pt-20 pb-12 border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Blogs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          <button
            onClick={onBlogsClick}
            className="text-left group"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#666666] mb-4 group-hover:text-[#a0a0a0] transition-colors duration-300">
              Blogs
            </p>
            <p className="text-[15px] text-[#444444] group-hover:text-[#666666] transition-colors duration-300">
              We are not publishing blogs yet.
            </p>
          </button>
        </motion.div>

        {/* Footer Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20"
        >
          {/* Brand Column */}
          <div>
            <Logo className="text-white/90 mb-3" />
            <p className="text-[13px] text-[#666666] leading-relaxed">
              AI creative system for modern brands
            </p>
          </div>

          {/* Navigate Column */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#666666] mb-4">
              Navigate
            </p>
            <div className="space-y-3">
              {[
                { label: "Process", href: "#how-it-works" },
                { label: "Work", href: "#what-we-do" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-[13px] text-[#a0a0a0] hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://calendly.com/haseeb-rehman-student/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[13px] text-[#a0a0a0] hover:text-white transition-colors duration-300"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* Blogs Column */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#666666] mb-4">
              Blogs
            </p>
            <button
              onClick={onBlogsClick}
              className="text-[13px] text-[#a0a0a0] hover:text-white transition-colors duration-300"
            >
              View Blogs
            </button>
          </div>

          {/* Contact Column */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#666666] mb-4">
              Contact
            </p>
            <div className="space-y-3">
              {/* X.com Box */}
              <a
                href="https://x.com/StudentBhutto"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 bg-[#111111] border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-300 rounded-xl"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#444444] group-hover:text-[#666666] transition-colors duration-300"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span className="text-[13px] text-[#666666] group-hover:text-[#a0a0a0] transition-colors duration-300">X.com</span>
              </a>

              {/* Email Box */}
              <a
                href="mailto:haseeb.rehman.student@gmail.com"
                className="group flex items-center gap-3 p-3 bg-[#111111] border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-300 rounded-xl"
              >
                <Mail size={14} strokeWidth={1.5} className="text-[#444444] group-hover:text-[#666666] transition-colors duration-300" />
                <span className="text-[13px] text-[#a0a0a0] group-hover:text-white transition-colors duration-300">
                  haseeb.rehman.student@gmail.com
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2a2a2a]">
          <p className="text-[12px] text-[#444444]">
            &copy; {new Date().getFullYear()} Sovra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
