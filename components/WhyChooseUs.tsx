"use client";

import {
  Users,
  Wrench,
  Building2,
  Clock3,
  UserCheck,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const strengths = [
  {
    number: "01",
    icon: Users,
    title: "Experienced EV Operations Team",
    description:
      "Seasoned transit operations leadership with proven expertise managing large-scale municipal and private electric bus contracts.",
    stat: "10+ Years Leadership Exp",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Skilled & Trained Workforce",
    description:
      "A dedicated, disciplined force of 600+ certified drivers, technicians, auto-electricians, and depot workshop managers deployed across India.",
    stat: "600+ Deployed Personnel",
  },
  {
    number: "03",
    icon: Building2,
    title: "Multi-City Operations Experience",
    description:
      "Active, running projects across key transit corridors in Gujarat (Mansa, Gandhinagar, Ahmedabad, Surat) and Maharashtra (Nagpur, Amravati, Chandrapur).",
    stat: "8+ Regional Depot Hubs",
  },
  {
    number: "04",
    icon: Clock3,
    title: "24×7 Operational & Breakdown Support",
    description:
      "Round-the-clock shift coverage with night-shift preventive maintenance and dedicated rapid breakdown turnaround within SLA.",
    stat: "24×7 Active Response",
  },
  {
    number: "05",
    icon: Wrench,
    title: "Driver & Manpower Management",
    description:
      "End-to-end recruitment, background vetting, continuous biometric attendance, shift roster scheduling, and welfare management.",
    stat: "100% Roster Reliability",
  },
  {
    number: "06",
    icon: Zap,
    title: "EV Bus Technical Expertise",
    description:
      "Specialized competency in high-voltage DC fast charging, battery thermal management systems (BMS), motor inverters, and pneumatic braking.",
    stat: "OEM Certified Techs",
  },
  {
    number: "07",
    icon: ShieldCheck,
    title: "Statutory & Safety Compliance",
    description:
      "100% adherence to labor laws, PF, ESIC, safety gear (PPE), defensive driver training, and zero-accident standard operating procedures.",
    stat: "100% Legal & Safety Audit",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#edf7f1] py-20 sm:py-28 border-y border-emerald-100/90">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
            <Sparkles size={13} className="text-emerald-700" />
            <span>Why Choose Dada Green</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
            Engineered for reliability,
            <span className="block text-emerald-700">scale, and safety.</span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg leading-7 text-slate-600">
            We deliver the specialized operational manpower, technical expertise, and rigorous discipline needed to keep modern electric bus fleets running on time, every single day.
          </p>
        </motion.div>

        {/* Strengths Bento Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 0;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 border transition-all duration-300 ${
                  isFeatured
                    ? "bg-gradient-to-br from-[#e0f5e7] via-white to-white border-emerald-300 shadow-md sm:col-span-2 lg:col-span-2"
                    : "bg-white border-emerald-100/90 shadow-sm hover:border-emerald-300 hover:shadow-xl"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-emerald-100/80 pb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf7f1] text-emerald-700 border border-emerald-200 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg sm:text-xl font-bold tracking-tight text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    Pillar #{item.number}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 group-hover:underline flex items-center gap-1">
                    Verified Capability
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* CTA Box inside grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col justify-between rounded-3xl bg-emerald-700 p-6 sm:p-7 text-white shadow-xl"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-800/80 px-3 py-1 text-xs font-bold text-emerald-200">
                <span>Deploy Manpower</span>
              </div>
              <h3 className="mt-4 text-xl font-bold">Ready to scale your EV fleet?</h3>
              <p className="mt-2 text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Connect with our operational leadership to customize a manpower and depot management SLA for your routes.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs sm:text-sm font-bold text-emerald-950 shadow-md transition hover:bg-emerald-50"
            >
              <span>Request a Proposal</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}