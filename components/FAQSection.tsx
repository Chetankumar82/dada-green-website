"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquareCheck, Sparkles, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What electric mobility services does Dada Green provide?",
    answer:
      "Dada Green E-Mobility LLP provides end-to-end electric bus fleet operations, Maintenance Manpower Service (technical mechanics and electrical engineers), depot management, trained driver and crew deployment, charging operations coordination, and 24×7 operational support.",
  },
  {
    question: "What is included in the Maintenance Manpower Service?",
    answer:
      "Our Maintenance Manpower Service provides dedicated mechanical and electrical technical personnel, workshop supervisors, and routine upkeep crews to execute preventive maintenance, depot servicing, battery checks, and ensure continuous fleet availability.",
  },
  {
    question: "Which companies and partners does Dada Green work with?",
    answer:
      "We work with industry leaders including Olectra, Envy Trans, Varde Mobility, and Electreon to support EV fleet operations, maintenance manpower, and sustainable transit projects.",
  },
  {
    question: "Where is Dada Green E-Mobility located and what regions do you serve?",
    answer:
      "Our headquarters is located at 13, Srinath Arcade, Mansa-Gandhinagar Road, Mansa, Near Hyundai Showroom, Gujarat. Our operations and crew presence span transit hubs across Gujarat and Maharashtra, including Mansa, Ahmedabad, Gandhinagar, Surat, Nagpur, Amravati, Chandrapur, and surrounding regions.",
  },
  {
    question: "How can transport operators get in touch for operations and manpower support?",
    answer:
      "You can contact our operations team directly via phone at +91 88665 54242, email at info@dadagreens.com, or through the contact form on our website to discuss tailored fleet operations and maintenance requirements.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#f0f9f4] py-16 sm:py-24 border-t border-emerald-100/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          
          {/* Left Column: Heading & Support card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 shadow-sm">
              <HelpCircle size={14} className="text-emerald-700" />
              <span>Frequently Asked Questions</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              Questions regarding our
              <span className="block text-emerald-700">operations & services.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-7 text-slate-600">
              Find clear answers about Dada Green&apos;s electric bus fleet management, maintenance manpower, partners, and depot locations.
            </p>

            {/* Quick Contact Card */}
            <div className="mt-8 rounded-3xl bg-white p-6 sm:p-7 border border-emerald-100/90 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <MessageSquareCheck size={22} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-950">Have a custom requirement?</h4>
                  <p className="text-xs text-slate-600">Contact our operations office in Mansa.</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-emerald-700 shrink-0" />
                  <a href="tel:+918866554242" className="font-semibold text-emerald-800 hover:underline">
                    +91 88665 54242
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={13} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span>13, Srinath Arcade, Mansa-Gandhinagar Road, Mansa</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 hover:scale-102"
              >
                <span>Contact Our Team</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className={`overflow-hidden rounded-2xl sm:rounded-3xl border transition-all duration-300 ${
                    isOpen
                      ? "border-emerald-300 bg-white shadow-md shadow-emerald-950/5"
                      : "border-emerald-100 bg-white/90 hover:bg-white hover:border-emerald-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-950">
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        isOpen
                          ? "bg-emerald-600 text-white"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base leading-6 sm:leading-7 text-slate-600 border-t border-slate-100">
                          <p className="mt-3">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
