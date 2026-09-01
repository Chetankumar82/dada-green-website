"use client";

import {
  ShieldCheck,
  Zap,
  HardHat,
  AlertTriangle,
  FileCheck2,
  Users2,
  HeartPulse,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const safetyPillars = [
  {
    icon: HardHat,
    title: "Driver Safety & Eco-Training",
    description:
      "Defensive driving, regenerative braking modulation, emergency braking protocols, and passenger onboarding safety.",
  },
  {
    icon: Zap,
    title: "High-Voltage & Battery Safety",
    description:
      "Insulation resistance testing, thermal runaway prevention, BMS diagnostic monitoring, and strict high-voltage charging SOPs.",
  },
  {
    icon: FileCheck2,
    title: "100% Statutory Compliance",
    description:
      "Complete labor compliance including on-time wage disbursal, Provident Fund (PF), ESIC health insurance, and accident coverage.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Reporting & Response",
    description:
      "Structured real-time incident escalation, root cause analysis (RCA), and 24×7 emergency roadside assistance support.",
  },
  {
    icon: Users2,
    title: "Workshop PPE Standards",
    description:
      "Mandatory insulated high-voltage gloves (1000V rated), safety shoes, eye protection, and calibrated workshop tools.",
  },
  {
    icon: HeartPulse,
    title: "Daily SOPs & Skill Audits",
    description:
      "Daily shift toolbox talks, pre-rollout vehicle health checklists, breathalyzer driver fitness checks, and regular refresher workshops.",
  },
];

export default function SafetySection() {
  return (
    <section className="relative overflow-hidden bg-[#edf7f1] py-20 sm:py-28 border-y border-emerald-100/90">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-emerald-200/70"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
              <ShieldCheck size={14} className="text-emerald-700" />
              <span>Zero-Accident Culture</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              Safety & Compliance First
            </h2>

            <p className="mt-3 text-base sm:text-lg leading-7 text-slate-600">
              In heavy commercial EV transit, safety is non-negotiable. We enforce rigorous safety procedures and 100% statutory labor compliance across all depot operations.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/safety"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 hover:scale-105"
            >
              <span>View Safety Protocols</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* Pillars Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {safetyPillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 border border-emerald-100/90 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf7f1] text-emerald-700 border border-emerald-200 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg sm:text-xl font-bold tracking-tight text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 size={13} />
                  <span>Standardized Operational Protocol</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
