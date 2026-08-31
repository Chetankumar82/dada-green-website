"use client";

import { MapPin, ShieldCheck, Users, Zap } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const keyStats = [
  {
    number: 600,
    suffix: "+",
    label: "Trained Workforce",
    subtext: "Certified EV bus drivers, technicians & workshop supervisors",
    icon: Users,
  },
  {
    number: 100,
    suffix: "%",
    label: "Zero-Emission Focus",
    subtext: "Dedicated exclusively to sustainable electric mobility",
    icon: ShieldCheck,
  },
  {
    number: 8,
    suffix: "+",
    label: "Operational Transit Hubs",
    subtext: "Depots across Mansa, Ahmedabad, Surat, Nagpur & expanding",
    icon: MapPin,
  },
  {
    number: 24,
    suffix: "/7",
    label: "Operational Support",
    subtext: "Dedicated on-ground technical support & coordination",
    icon: Zap,
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#e8f6ee] py-16 sm:py-20 border-y border-emerald-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
            <Zap size={13} className="text-emerald-700" />
            <span>Operational Scale</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Delivering scale and reliability across India
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-7 text-slate-600">
            Strengthening public and private electric bus mobility with disciplined execution and trained technical manpower.
          </p>
        </motion.div>

        {/* Stats Grid in Light Green styling */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {keyStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-emerald-200/90 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-emerald-400 hover:shadow-lg"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white shadow-sm">
                    <Icon size={22} />
                  </div>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
                      <CountUp end={stat.number} duration={2.5} enableScrollSpy scrollSpyOnce />
                    </span>
                    <span className="text-2xl font-bold text-emerald-700">{stat.suffix}</span>
                  </div>

                  <h3 className="mt-2 text-base font-bold text-slate-950">
                    {stat.label}
                  </h3>

                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                  <span>Dada Green Scale</span>
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
