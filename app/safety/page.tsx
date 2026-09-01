"use client";

import Link from "next/link";
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
  FileText,
  Activity,
  Flame,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const safetyProtocols = [
  {
    category: "Driver & Route Safety",
    icon: HardHat,
    items: [
      {
        title: "Defensive Driving & Regenerative Modulation",
        desc: "Drivers undergo strict training on smooth deceleration, optimal regenerative braking to conserve energy, and maintaining safe braking distances with heavy commercial electric buses.",
      },
      {
        title: "Daily Pre-Trip & Post-Trip Vehicle Audits",
        desc: "Mandatory 24-point pre-departure inspection covering air brakes, tire pressure, digital instrument alerts, door interlocks, and high-voltage dashboard warning lights.",
      },
      {
        title: "Passenger Safety & Boarding Protocols",
        desc: "Strict adherence to bus curb alignment, ramp deployment for elderly passengers, and CCTV camera verification before route departures.",
      },
    ],
  },
  {
    category: "EV High-Voltage & Battery Safety",
    icon: Zap,
    items: [
      {
        title: "Thermal Management & BMS Monitoring",
        desc: "Continuous cell-level temperature tracking, coolant loop level verification, and automated fault code logging to prevent battery overheating or abnormal cell voltage balance.",
      },
      {
        title: "DC Fast-Charging Bay Safety Protocols",
        desc: "Grounding (earthing) verification before plug-in, emergency stop button testing, charging connector temperature inspection, and strict no-entry zones during active fast charging.",
      },
      {
        title: "Insulation & Megger Resistance Testing",
        desc: "Periodic high-voltage insulation tests conducted by certified auto-electricians using calibrated instruments to prevent leakage currents and ground faults.",
      },
    ],
  },
  {
    category: "Depot Workshop & PPE Standards",
    icon: Users2,
    items: [
      {
        title: "Certified 1000V Insulated Safety Gear (PPE)",
        desc: "Technicians operating on high-voltage components are equipped with class-0 certified insulated gloves, arc-flash face shields, insulated hand tools, and ESD safety footwear.",
      },
      {
        title: "High-Voltage Isolation Lockout/Tagout (LOTO)",
        desc: "Before any workshop underbody or high-voltage bay servicing begins, the vehicle's manual service disconnect (MSD) switch is locked and tagged following global LOTO standards.",
      },
      {
        title: "Daily Shift Toolbox Safety Talks",
        desc: "Shift supervisors conduct mandatory 10-minute briefing sessions before every morning and evening shift to review safety priorities, incident logs, and weather hazards.",
      },
    ],
  },
  {
    category: "Statutory Labor & Legal Compliance",
    icon: FileCheck2,
    items: [
      {
        title: "100% On-Time Wage Disbursal & Fair Remuneration",
        desc: "Full statutory compliance with state minimum wage regulations, with salaries disbursed electronically on a fixed monthly schedule without delay.",
      },
      {
        title: "Provident Fund (PF) & ESIC Medical Benefits",
        desc: "All 600+ deployed drivers, technicians, and depot staff are covered under active PF and ESIC healthcare schemes, ensuring comprehensive family welfare.",
      },
      {
        title: "Workmen Compensation & Group Accidental Insurance",
        desc: "Additional accidental insurance coverage providing comprehensive financial security for all on-ground technical personnel and driving staff.",
      },
    ],
  },
];

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-[#f3fbf6] text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f6ec] via-[#f0faf3] to-[#f3fbf6] pt-28 pb-16 sm:pt-36 sm:pb-20 border-b border-emerald-200/60">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
              <ShieldCheck size={14} className="text-emerald-700" />
              <span>Zero-Accident Mission</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-950">
              Safety, Compliance &
              <span className="block text-emerald-700">Operational Integrity.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-slate-700">
              In heavy commercial EV bus transit, safety and statutory discipline form the bedrock of daily operations. From high-voltage battery management to workforce welfare, we adhere to strict global best practices.
            </p>
          </div>

          {/* Compliance Badge Cards */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf7f1] text-emerald-700 mb-3">
                <ShieldCheck size={20} />
              </div>
              <div className="text-base font-bold text-slate-950">100% Statutory Compliant</div>
              <div className="text-xs text-slate-600 mt-0.5">PF, ESIC & Labor Laws</div>
            </div>

            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf7f1] text-emerald-700 mb-3">
                <Zap size={20} />
              </div>
              <div className="text-base font-bold text-slate-950">High-Voltage Certified</div>
              <div className="text-xs text-slate-600 mt-0.5">1000V LOTO & PPE Protocols</div>
            </div>

            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf7f1] text-emerald-700 mb-3">
                <HardHat size={20} />
              </div>
              <div className="text-base font-bold text-slate-950">Certified Driver Force</div>
              <div className="text-xs text-slate-600 mt-0.5">Defensive Driving Trained</div>
            </div>

            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf7f1] text-emerald-700 mb-3">
                <Activity size={20} />
              </div>
              <div className="text-base font-bold text-slate-950">Real-Time Incident Logs</div>
              <div className="text-xs text-slate-600 mt-0.5">24×7 Escalation Desk</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPREHENSIVE SAFETY PROTOCOLS BREAKDOWN
      ========================================================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto pb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Standard Operating Procedures (SOPs)
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Our structured 4-pillar safety framework governs every mile driven and every maintenance task executed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyProtocols.map((protocol, index) => {
              const Icon = protocol.icon;

              return (
                <motion.div
                  key={protocol.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-3xl bg-white p-7 sm:p-8 border border-emerald-100/90 shadow-md"
                >
                  <div className="flex items-center gap-3 pb-5 border-b border-emerald-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-emerald-700 uppercase">
                        Framework #{index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-slate-950">
                        {protocol.category}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6 space-y-5">
                    {protocol.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3.5">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 shrink-0 mt-0.5 border border-emerald-200">
                          <CheckCircle2 size={14} />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900 leading-snug">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          BOTTOM LIGHT GREEN CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f6ec] via-[#f0faf3] to-[#f3fbf6] py-16 sm:py-20 border-t border-emerald-200/70">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Request our complete safety & compliance manual.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            We provide full documentation, statutory audit certificates, and safety dossiers during tender evaluations and commercial contract onboarding.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 hover:scale-105"
            >
              <span>Contact Operations Team</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
