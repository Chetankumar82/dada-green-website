"use client";

import {
  BarChart3,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    icon: Users,
    title: "Experienced EV Operations Team",
    description:
      "Specialized operations managers focused on high-density electric bus scheduling, driver discipline, and transit continuity.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Maintenance & Technical Manpower",
    description:
      "Dedicated mechanical and electrical engineering technicians providing routine upkeep, preventive diagnostics, and depot workshop support.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Rigorous Safety & Statutory Compliance",
    description:
      "Strict operational compliance with state transport mandates, driver safety protocols, battery handling standards, and zero-accident policies.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "SOP-Driven Operating Procedures",
    description:
      "Standard operating procedures for shift handovers, route readiness checks, emergency protocols, and vehicle hygiene.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Transparent MIS Analytics & Telemetry",
    description:
      "Comprehensive daily operational reporting and analytics dashboards tracking fleet uptime, kilometer efficiency, and energy consumption.",
  },
  {
    number: "06",
    icon: Clock3,
    title: "Dedicated 24×7 Rapid Response SLA",
    description:
      "Round-the-clock on-ground emergency assistance and rapid repair response teams to maintain maximum fleet availability.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#eaf6ee] py-16 sm:py-24 border-t border-emerald-100/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 shadow-sm">
            <Sparkles size={13} className="text-emerald-700" />
            <span>The Dada Green Advantage</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
            More than mobility.
            <span className="block text-emerald-700">
              We manage the complete operation behind it.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-slate-700">
            Reliable electric mobility depends on more than vehicles and charging hardware. It requires disciplined manpower, technical maintenance, structured SOPs, and dedicated operational support.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-emerald-100/80 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white shadow-sm">
                      <Icon size={22} />
                    </div>

                    <span className="text-2xl sm:text-3xl font-mono font-bold text-emerald-100 group-hover:text-emerald-300 transition-colors">
                      #{reason.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg sm:text-xl font-bold text-slate-950 group-hover:text-emerald-800 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-slate-600">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                  <span>Dada Green Standard</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}