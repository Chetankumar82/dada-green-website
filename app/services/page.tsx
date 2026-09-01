"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BusFront,
  Building2,
  Cable,
  CheckCircle2,
  Users,
  Settings,
  ShieldCheck,
  Zap,
  Wrench,
  Sparkles,
  Clock,
  ClipboardList,
} from "lucide-react";
import { motion } from "framer-motion";

const detailedServices = [
  {
    number: "01",
    icon: BusFront,
    title: "Electric Bus Operations",
    badge: "Flagship Service",
    description:
      "End-to-end management of daily electric bus schedules, route execution, timetable adherence, passenger transit safety, and real-time fleet coordination.",
    features: [
      "Daily Route Execution & Timetable Management",
      "Driver Roster & Shift Coordination",
      "Real-time GPS Tracking & Telemetry Monitoring",
      "Passenger Safety Protocols & Punctuality Control",
    ],
  },
  {
    number: "02",
    icon: Wrench,
    title: "Maintenance Manpower Service",
    highlight: true,
    description:
      "Specialized mechanical and electrical engineers, certified workshop technicians, and preventive maintenance manpower dedicated to maximizing fleet uptime.",
    features: [
      "Routine & Preventive Maintenance Schedules",
      "Battery Diagnostic & Powertrain Checks",
      "Depot Workshop & Bay Technical Upkeep",
      "24×7 Night-Shift Servicing & Breakdown Response",
    ],
    trustedNote: "Trusted by Olectra, Evey Trans, GSRTC, and Varde Mobility",
  },
  {
    number: "03",
    icon: Users,
    title: "Driver & Crew Deployment",
    description:
      "Certified EV bus drivers trained in regenerative braking, passenger safety protocols, defensive driving, and continuous roster management.",
    features: [
      "Comprehensive Driver Vetting & Background Checks",
      "EV Regenerative Braking & Eco-Driving Training",
      "Biometric Attendance & Shift Compliance",
      "Zero-Accident Safety Culture & Refresher Programs",
    ],
  },
  {
    number: "04",
    icon: Building2,
    title: "Depot Management",
    description:
      "Complete depot operations including organized bus parking bay allocation, infrastructure coordination, security protocols, and workshop flow management.",
    features: [
      "Depot Parking & Bay Allocation Management",
      "Workshop & Spare Parts Inventory Oversight",
      "Depot Security, Cleanliness & Asset Safety",
      "Turnaround Time (TAT) Optimization for Morning Rollouts",
    ],
  },
  {
    number: "05",
    icon: Cable,
    title: "Charging Operations & Energy Support",
    description:
      "High-power DC fast-charging schedule planning, charger utilization monitoring, power substation safety, and energy optimization.",
    features: [
      "Overnight & Opportunity Charging Coordination",
      "DC Fast Charger Utilization Monitoring",
      "Power Load Balancing & Transformer Safety",
      "Charge Status Logging & Daily Energy Audits",
    ],
  },
  {
    number: "06",
    icon: Clock,
    title: "24×7 Operations & Rapid Support",
    description:
      "Round-the-clock on-ground operations command, emergency breakdown assistance, statutory compliance, and transparent MIS reporting.",
    features: [
      "24×7 Dedicated Operations Helpline & Quick Response",
      "On-Road Emergency Breakdown Assistance",
      "Daily Operational MIS & Analytics Dashboards",
      "Regulatory & Transport Authority Compliance",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Requirement & SLA Formulation",
    description: "Assessing fleet size, route density, depot infrastructure, and required manpower schedules.",
  },
  {
    step: "02",
    title: "Trained Team Mobilization",
    description: "Deploying certified EV drivers, specialized maintenance technicians, and field supervisors.",
  },
  {
    step: "03",
    title: "SOP-Driven Daily Execution",
    description: "Managing morning rollouts, daily route schedules, battery charging bays, and preventive depot checks.",
  },
  {
    step: "04",
    title: "MIS Analytics & 24×7 Continuity",
    description: "Delivering daily operational telemetry, mileage tracking, uptime reports, and rapid emergency support.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f3fbf6] text-slate-950 min-h-screen">
      {/* =========================================================
          HERO SECTION (Light Green)
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f6ec] via-[#f0faf3] to-[#f3fbf6] pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-emerald-100">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/90 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-900 shadow-sm">
              <Zap size={14} className="text-emerald-700 shrink-0" />
              <span>Full-Stack Operations & Maintenance</span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight text-slate-950">
              Reliable operations for
              <span className="block text-emerald-700">
                electric mobility projects.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-700 md:text-xl">
              Dada Green E-Mobility provides comprehensive electric bus fleet operations, maintenance manpower services, depot management, driver deployment, and charging infrastructure coordination across India.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#all-services"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 font-bold text-white shadow-md transition hover:bg-emerald-700 hover:scale-102"
              >
                <span>Explore Services</span>
                <ArrowRight size={17} />
              </a>

              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-emerald-700/20 bg-white/80 px-7 py-4 font-bold text-emerald-950 transition hover:bg-emerald-100/60"
              >
                <span>Request Operations Proposal</span>
              </Link>
            </div>
          </motion.div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 border-t border-emerald-200/90 pt-6 sm:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-3xl bg-white p-5 border border-emerald-100 shadow-sm"
            >
              <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider">Core Specialization</p>
              <p className="mt-1 font-bold text-slate-950 text-base sm:text-lg">
                EV Bus Operations & Maintenance
              </p>
              <p className="text-xs text-slate-600 mt-1">End-to-end operational execution</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-3xl bg-white p-5 border border-emerald-100 shadow-sm"
            >
              <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider">Workforce & Manpower</p>
              <p className="mt-1 font-bold text-slate-950 text-base sm:text-lg">
                1000+ Skilled Technicians & Drivers
              </p>
              <p className="text-xs text-slate-600 mt-1">Certified, verified & trained</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="rounded-3xl bg-white p-5 border border-emerald-100 shadow-sm"
            >
              <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider">SLA Commitment</p>
              <p className="mt-1 font-bold text-slate-950 text-base sm:text-lg">
                24×7 Operations & Rapid Support
              </p>
              <p className="text-xs text-slate-600 mt-1">Continuous on-ground assistance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DETAILED CORE SERVICES SECTION
      ========================================================= */}
      <section id="all-services" className="py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 shadow-sm">
              <Sparkles size={13} className="text-emerald-700" />
              <span>Service Portfolio</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              Built for real-world mobility and maintenance needs.
            </h2>

            <p className="mt-3 text-base sm:text-lg leading-7 text-slate-600">
              Explore our structured service capabilities designed to give public transport agencies, private operators, and EV OEMs peace of mind.
            </p>
          </motion.div>

          {/* Detailed Services Grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {detailedServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={`group relative flex flex-col justify-between rounded-3xl border bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-xl ${
                    service.highlight
                      ? "border-emerald-300 shadow-md shadow-emerald-950/5 ring-1 ring-emerald-300"
                      : "border-emerald-100/90 hover:border-emerald-300"
                  }`}
                >
                  <div>
                    {/* Top Row: Icon, Number, Badge */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white shadow-sm">
                        <Icon size={24} />
                      </div>

                      <span className="font-mono text-2xl sm:text-3xl font-bold text-emerald-200">
                        #{service.number}
                      </span>
                    </div>

                    {service.badge && (
                      <span className="mt-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
                        {service.badge}
                      </span>
                    )}

                    {/* Title & Description */}
                    <h3 className="mt-4 text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-emerald-800 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base leading-6 text-slate-600">
                      {service.description}
                    </p>

                    {/* Partner Trust Note */}
                    {service.trustedNote && (
                      <div className="mt-4 rounded-2xl bg-emerald-50 p-3.5 text-xs font-semibold text-emerald-900 border border-emerald-200/60">
                        🤝 {service.trustedNote}
                      </div>
                    )}

                    {/* Feature Checkpoints */}
                    <div className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Capabilities:
                      </p>
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="text-xs font-bold text-emerald-700 group-hover:text-emerald-800 transition flex items-center gap-1"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          4-STEP OPERATIONS WORKFLOW TIMELINE
      ========================================================= */}
      <section className="bg-[#edf7f1] py-16 sm:py-20 lg:py-24 border-y border-emerald-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
              <ClipboardList size={13} className="text-emerald-700" />
              <span>Operational Execution</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              How Dada Green executes mobility projects.
            </h2>

            <p className="mt-3 text-base text-slate-600">
              A structured, SOP-driven process ensuring timely mobilization, high fleet availability, and disciplined daily execution.
            </p>
          </motion.div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl border border-emerald-100 bg-white p-6 sm:p-7 shadow-sm transition duration-300 hover:border-emerald-300 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white font-mono font-bold text-sm shadow-sm">
                  {step.step}
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CALL TO ACTION (Light Green Theme)
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f6ec] via-[#f0faf3] to-[#f3fbf6] py-16 sm:py-20 lg:py-24 border-t border-emerald-200/80">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
                <Sparkles size={13} className="text-emerald-700" />
                <span>Partner With Us</span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
                Ready to deploy reliable EV
                <span className="block text-emerald-700">operations & maintenance?</span>
              </h2>

              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-700">
                Discuss your electric bus schedules, maintenance manpower requirements, driver recruitment, or depot management with our operations team in Mansa.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-emerald-600 px-8 py-4 font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 hover:scale-105"
              >
                <span>Contact Our Team</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}