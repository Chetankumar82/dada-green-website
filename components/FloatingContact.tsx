"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, MessageCircle, X, ChevronUp, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
          className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5"
        >
          {/* Expanded Quick Contact Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2 rounded-3xl bg-white p-3 shadow-2xl border border-emerald-200/90 w-64 max-w-[calc(100vw-2rem)]"
              >
                <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800 border-b border-slate-100">
                  Quick Support & Inquiries
                </div>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/918866554242?text=Hello%20Dada%20Green,%20I%20want%20to%20inquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-[#edf7f1] px-3.5 py-2.5 text-xs font-bold text-slate-900 transition hover:bg-emerald-600 hover:text-white border border-emerald-100"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <MessageSquare size={14} />
                  </div>
                  <span>WhatsApp: +91 88665 54242</span>
                </a>

                {/* Direct Phone Call */}
                <a
                  href="tel:+918866554242"
                  className="flex items-center gap-3 rounded-2xl bg-[#edf7f1] px-3.5 py-2.5 text-xs font-bold text-slate-900 transition hover:bg-emerald-600 hover:text-white border border-emerald-100"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <Phone size={14} />
                  </div>
                  <span>Call: +91 88665 54242</span>
                </a>

                {/* Email Support */}
                <a
                  href="mailto:info@dadagreens.com"
                  className="flex items-center gap-3 rounded-2xl bg-[#edf7f1] px-3.5 py-2.5 text-xs font-bold text-slate-900 transition hover:bg-emerald-600 hover:text-white border border-emerald-100"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <Mail size={14} />
                  </div>
                  <span>info@dadagreens.com</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Floating Trigger Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-md border border-slate-200 transition hover:bg-slate-100 hover:text-slate-950 cursor-pointer"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ChevronUp size={18} />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="group flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-700/25 transition hover:bg-emerald-700 hover:scale-102 cursor-pointer"
              aria-label="Quick contact"
            >
              {isOpen ? (
                <>
                  <X size={16} />
                  <span>Close</span>
                </>
              ) : (
                <>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                  <MessageCircle size={16} />
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
