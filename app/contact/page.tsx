"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Building2,
  FileText,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-[#f3fbf6] text-slate-950 min-h-screen">
      {/* =========================================================
          HERO SECTION (Light Green)
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f6ec] via-[#f0faf3] to-[#f3fbf6] px-4 sm:px-6 pt-12 pb-16 sm:pt-16 sm:pb-24 text-slate-950 lg:px-8 lg:pt-20 lg:pb-28 border-b border-emerald-100">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/90 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-900 shadow-sm">
              <Mail size={14} className="text-emerald-700 shrink-0" />
              <span>Contact & Commercial Inquiries</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight text-slate-950">
              Let&apos;s power your electric
              <span className="block text-emerald-700">
                transit operations.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-700 md:text-xl">
              Have an electric bus route requirement, maintenance manpower inquiry, or charging depot project? Connect directly with the Dada Green operations team in Mansa.
            </p>

            {/* Quick Action Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/918866554242?text=Hello%20Dada%20Green,%20I%20want%20to%20request%20a%20commercial%20proposal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 hover:scale-102"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Operations (+91 88665 54242)</span>
              </a>

              <a
                href="tel:+918866554242"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-emerald-300 px-6 py-3.5 text-xs sm:text-sm font-bold text-emerald-800 shadow-xs hover:bg-emerald-50 transition"
              >
                <Phone size={15} className="text-emerald-700" />
                <span>Call Now: +91 88665 54242</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTACT SPLIT SECTION
      ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

            {/* LEFT COLUMN: EXECUTIVE CONTACT CARDS */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 shadow-sm">
                <Sparkles size={13} className="text-emerald-700" />
                <span>Executive Contact</span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
                We&apos;re here to power your operations.
              </h2>

              <p className="mt-3 text-base leading-7 text-slate-600">
                Reach out for electric bus fleet management, specialized maintenance manpower, driver deployment, or to schedule a depot site visit.
              </p>

              <div className="mt-8 space-y-4">
                {/* Phone Card */}
                <a
                  href="tel:+918866554242"
                  className="group flex items-start gap-4 rounded-3xl border border-emerald-100 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white shadow-sm">
                    <Phone size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Phone / Helpline
                    </p>
                    <p className="mt-1 text-base sm:text-lg font-bold text-slate-950 group-hover:text-emerald-700 transition-colors">
                      +91 88665 54242
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Monday to Saturday, 9:00 AM - 7:00 PM</p>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:info@dadagreens.com"
                  className="group flex items-start gap-4 rounded-3xl border border-emerald-100 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white shadow-sm">
                    <Mail size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Email Address
                    </p>
                    <p className="mt-1 text-base sm:text-lg font-bold text-slate-950 group-hover:text-emerald-700 transition-colors break-all">
                      info@dadagreens.com
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Fast turnaround for tenders and proposals</p>
                  </div>
                </a>

                {/* Address Card */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=13%2C+Srinath+Arcade+Mansa-+Gandhinagar+Road%2C+Mansa%2C+Near+Hyundai+Showroom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-3xl border border-emerald-100 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white shadow-sm">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Headquarters Office
                    </p>
                    <div className="mt-1 text-sm sm:text-base font-semibold leading-relaxed text-slate-900 group-hover:text-emerald-800 transition-colors">
                      <strong className="block text-base font-bold text-slate-950">Dada Green E-Mobility LLP</strong>
                      13, Srinath Arcade Mansa- Gandhinagar Road,
                      <br />
                      Mansa, Near Hyundai Showroom,
                      <br />
                      Gujarat, India
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: MODERN CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-emerald-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xl shadow-emerald-950/5"
            >
              <div className="mb-6">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  Business Inquiry & Proposal Desk
                </span>
                <h3 className="mt-3 text-2xl font-bold text-slate-950">
                  Send Your Project Requirements
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  Select your inquiry type below to route directly to our commercial operations desk.
                </p>
              </div>

              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE GOOGLE MAP CONTAINER
      ========================================================= */}
      <section className="bg-[#edf7f1] py-16 sm:py-20 border-t border-emerald-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
                <MapPin size={13} className="text-emerald-700" />
                <span>Headquarters Map</span>
              </div>

              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-950">
                Find Our Mansa Operations Office
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Located on Mansa-Gandhinagar Road, connecting central Gujarat transit networks.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=13%2C+Srinath+Arcade+Mansa-+Gandhinagar+Road%2C+Mansa%2C+Near+Hyundai+Showroom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white px-5 py-2.5 text-xs font-bold text-emerald-800 shadow-xs hover:bg-emerald-50 transition"
            >
              <span>Open in Google Maps</span>
              <ExternalLink size={14} />
            </a>
          </motion.div>

          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-3xl border border-emerald-200 bg-white shadow-xl">
            <iframe
              title="Dada Green E-Mobility Mansa Office Location"
              src="https://maps.google.com/maps?q=13,%20Srinath%20Arcade,%20Mansa-Gandhinagar%20Road,%20Mansa,%20Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </main>
  );
}