"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, MessageCircle, X, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3"
        >
          {/* Expanded Quick Contact Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2.5 rounded-3xl bg-white p-3.5 shadow-2xl border border-emerald-200"
              >
                <a
                  href="tel:+918866554242"
                  className="flex items-center gap-3 rounded-2xl bg-[#f3fbf6] px-4 py-2.5 text-xs sm:text-sm font-bold text-emerald-950 transition hover:bg-emerald-600 hover:text-white border border-emerald-100"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-slate-950">
                    <Phone size={14} />
                  </div>
                  <span>Call: +91 88665 54242</span>
                </a>

                <a
                  href="mailto:info@dadagreens.com"
                  className="flex items-center gap-3 rounded-2xl bg-[#f3fbf6] px-4 py-2.5 text-xs sm:text-sm font-bold text-emerald-950 transition hover:bg-emerald-600 hover:text-white border border-emerald-100"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-slate-950">
                    <Mail size={14} />
                  </div>
                  <span>Email: info@dadagreens.com</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Floating Trigger Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg border border-slate-200 transition hover:bg-slate-100 hover:text-slate-950 cursor-pointer"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="group flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-xl shadow-emerald-700/30 transition hover:bg-emerald-700 hover:scale-105 cursor-pointer"
              aria-label="Quick contact"
            >
              {isOpen ? (
                <X size={18} />
              ) : (
                <>
                  <MessageCircle size={18} className="animate-pulse" />
                  <span>Quick Contact</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
