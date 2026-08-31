"use client";

import { ArrowRight, BusFront, CheckCircle2, Leaf, MapPin, Phone, ShieldCheck, Wrench, Users, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f6ec] via-[#f0faf3] to-[#f3fbf6] pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Soft luminous ambient glows */}
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

          {/* LEFT COLUMN: HERO HEADLINE & CTAS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Pill Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/90 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-900 shadow-sm">
              <Leaf size={14} className="text-emerald-700 shrink-0" />
              <span>Electric Bus Operations & Maintenance</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight text-slate-950">
              Powering reliable
              <span className="block text-emerald-700">
                electric bus mobility.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-700">
              <strong>Dada Green E-Mobility</strong> delivers end-to-end electric bus fleet operations, dedicated <strong>Maintenance Manpower Service</strong>, depot management, trained driver deployment, and charging support across India.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/services"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 font-bold text-white shadow-lg shadow-emerald-600/20 transition duration-300 hover:bg-emerald-700 hover:scale-[1.02]"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-emerald-700/20 bg-white/80 px-7 py-4 font-bold text-emerald-950 transition hover:bg-emerald-100/60 hover:border-emerald-700/40"
              >
                <span>Contact Our Team</span>
              </Link>
            </div>

            {/* Core Capability Chips */}
            <div className="mt-10 flex flex-wrap items-center gap-2.5 text-xs font-semibold text-emerald-900">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-emerald-200/80 shadow-sm">
                <BusFront size={14} className="text-emerald-700" /> Electric Bus Operations
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-emerald-200/80 shadow-sm">
                <Wrench size={14} className="text-emerald-700" /> Maintenance Manpower
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-emerald-200/80 shadow-sm">
                <Users size={14} className="text-emerald-700" /> Driver Deployment
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-emerald-200/80 shadow-sm">
                <Zap size={14} className="text-emerald-700" /> Charging & Depot Support
              </span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: HIGHLIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <div className="rounded-3xl border border-emerald-200/90 bg-white p-6 sm:p-8 shadow-xl shadow-emerald-950/5">
              
              {/* Header with Logo */}
              <div className="flex items-center gap-4 border-b border-emerald-100 pb-5">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-[#f0faf3] p-1 border border-emerald-200 flex items-center justify-center">
                  <Image
                    src="/favicon.png"
                    alt="Dada Green E-Mobility"
                    width={48}
                    height={48}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-950 leading-tight">
                    Dada Green E-Mobility
                  </h2>
                  <p className="text-xs font-medium text-emerald-700 mt-0.5">
                    Sustainable Electric Mobility Solutions
                  </p>
                </div>
              </div>

              {/* Verified Services List */}
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-start gap-2.5 rounded-2xl bg-[#f7fcf9] p-3 border border-emerald-100/80">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold">Electric Bus Fleet Operations</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Daily route execution, scheduling & fleet supervision.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 rounded-2xl bg-[#f7fcf9] p-3 border border-emerald-100/80">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold">Maintenance Manpower Service</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Dedicated mechanical & electrical technical workforce.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 rounded-2xl bg-[#f7fcf9] p-3 border border-emerald-100/80">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold">Depot Management & Charging</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Overnight charging bays, bus parking & depot upkeep.</p>
                  </div>
                </div>
              </div>

              {/* Office Address Snippet */}
              <div className="mt-5 rounded-2xl bg-emerald-50/80 p-3.5 border border-emerald-200/60 text-xs text-emerald-950">
                <div className="flex items-start gap-2">
                  <MapPin size={15} className="text-emerald-700 shrink-0 mt-0.5" />
                  <p className="leading-snug">
                    <strong>13, Srinath Arcade</strong>, Mansa-Gandhinagar Road, Mansa, Near Hyundai Showroom, Gujarat.
                  </p>
                </div>
              </div>

              {/* Direct Call / Contact Bar */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="tel:+918866554242"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition"
                >
                  <Phone size={14} />
                  <span>+91 88665 54242</span>
                </a>

                <Link
                  href="/contact"
                  className="text-xs font-bold text-slate-900 hover:text-emerald-700 transition flex items-center gap-1"
                >
                  <span>Contact Office →</span>
                </Link>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}