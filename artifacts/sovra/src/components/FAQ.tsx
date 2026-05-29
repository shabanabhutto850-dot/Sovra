import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What types of brands do you work with?",
    a: "We work with all kind of business from service based business to clothing brand beauty brand fitness brand all kind of brand DTC mobile apps SaaS etc.",
  },
  {
    q: "Is there any catch?",
    a: "No catch. No contract. 3 free creatives included.",
  },
  {
    q: "Who is this for?",
    a: "It is for anyone who want to grow organically or want highly converting ad creatives.",
  },
  {
    q: "Where can I use these creatives?",
    a: "Ads + organic platforms.",
  },
  {
    q: "Still have questions?",
    a: "Email us at haseeb.rehman.student@gmail.com if you have any questions.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="relative py-32 lg:py-40">
      <div className="max-w-3xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#666666] mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight">
            Questions. <span className="text-[#a0a0a0]">Answered.</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1 + i * 0.08,
              }}
              className="border-b border-[#2a2a2a] last:border-b-0"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-6 text-left group px-4 rounded-xl hover:bg-[#111111]/50 transition-colors duration-300"
              >
                <span className="text-[15px] font-medium tracking-tight pr-8 group-hover:text-white transition-colors duration-300">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 text-[#666666] group-hover:text-white transition-colors duration-300">
                  {openIndex === i ? (
                    <Minus size={14} strokeWidth={1.5} />
                  ) : (
                    <Plus size={14} strokeWidth={1.5} />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[14px] text-[#a0a0a0] leading-relaxed pb-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
