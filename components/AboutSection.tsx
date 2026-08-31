"use client";

import {
  ArrowUpRight,
  BusFront,
  Sparkles,
  Users,
  Wrench,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    icon: BusFront,
    title: "Electric Bus Operations",
    description:
      "Supporting daily fleet operations, scheduling, route execution, and performance monitoring.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Maintenance Manpower",
    description:
      "Dedicated mechanical and electrical technical workforce for preventive maintenance and workshop management.",
  },
  {
    number: "03",
    icon: Users,
    title: "Driver & Team Deployment",
    description:
      "Trained drivers, supervisors, and operational personnel for electric mobility projects.",
  },
  {
    number: "04",
    icon: Clock,
    title: "24×7 Operational Support",
    description:
      "Round-the-clock dedicated operational support to help maintain maximum fleet availability.",
    stat: "24×7",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-[#f3fbf6] py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 shadow-sm">
              <Sparkles size={13} className="text-emerald-700" />
              <span>Who We Are</span>
            </div>

            <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-slate-950">
              Built around
              <span className="block text-emerald-700">
                operational excellence.
              </span>
            </h2>

            <p className="mt-5 sm:mt-7 text-base sm:text-lg leading-7 sm:leading-8 text-slate-700">
              <strong>Dada Green E-Mobility LLP</strong> is an electric mobility operations company focused on helping transport operators run their EV fleets safely, efficiently, and reliably.
            </p>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-7 text-slate-600">
              From drivers and specialized maintenance technicians to fleet coordination, charging operations, and depot supervision, we provide the complete operational support required to keep electric mobility projects moving.
            </p>

            <Link
              href="/about"
              className="mt-7 sm:mt-9 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 sm:px-7 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:bg-emerald-700 hover:scale-105"
            >
              <span>More About Us</span>
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          {/* RIGHT CAPABILITIES */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex min-h-[220px] sm:min-h-[260px] flex-col overflow-hidden rounded-3xl border border-emerald-100/90 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white shadow-sm">
                      <Icon size={22} />
                    </div>

                    <span className="text-xs font-mono font-bold tracking-[0.18em] text-slate-400">
                      #{item.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-auto pt-6 sm:pt-8">
                    {item.stat && (
                      <div className="mb-2 sm:mb-3 text-3xl sm:text-4xl font-bold tracking-tight text-emerald-700">
                        {item.stat}
                      </div>
                    )}

                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-emerald-500/5 transition-transform duration-500 group-hover:scale-150" />
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}