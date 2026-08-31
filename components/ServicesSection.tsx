"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  BusFront,
  Clock,
  Settings2,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const servicesList = [
  {
    icon: BusFront,
    title: "Electric Bus Operations",
    description:
      "Daily fleet operations, timetable scheduling, route execution, and operational coordination for electric bus transit projects.",
    badge: "Core Service",
  },
  {
    icon: Wrench,
    title: "Maintenance Manpower Service",
    description:
      "Dedicated mechanical and electrical technical workforce, workshop supervisors, and skilled personnel ensuring routine and preventive maintenance.",
  },
  {
    icon: Users,
    title: "Driver & Crew Deployment",
    description:
      "Trained electric bus drivers, route supervisors, and operations personnel with complete attendance and statutory compliance management.",
  },
  {
    icon: Settings2,
    title: "Depot Management",
    description:
      "Depot supervision, organized bus parking bay coordination, and operational management for efficient depot workflow.",
  },
  {
    icon: BatteryCharging,
    title: "Charging Operations",
    description:
      "Charging schedule coordination, charger utilization monitoring, and energy management support for heavy EV transit.",
  },
  {
    icon: Clock,
    title: "24×7 Operational Support",
    description:
      "Round-the-clock dedicated operational support, MIS reporting, and emergency coordination to maintain maximum fleet availability.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f0f9f4] py-16 sm:py-24 text-slate-900 border-t border-emerald-100/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 sm:pb-12 border-b border-emerald-200/60"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 shadow-sm">
              <Sparkles size={13} className="text-emerald-700" />
              <span>What We Handle</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              Complete support for
              <span className="block text-emerald-700">electric mobility operations.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-7 text-slate-600">
              From trained drivers and specialized maintenance manpower to charging and depot coordination, we manage the operational backbone of green transit.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 sm:px-7 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:bg-emerald-700 hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Clean Services Cards Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-emerald-100/90 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
              >
                <div>
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white shadow-sm">
                      <Icon size={22} />
                    </div>

                    {service.badge && (
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200/60">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-950 group-hover:text-emerald-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm sm:text-base leading-6 sm:leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                  <span>Dada Green Capability</span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}