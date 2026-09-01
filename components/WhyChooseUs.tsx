"use client";

import {
  Users,
  Wrench,
  Building2,
  Clock3,
  UserCheck,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const keyPillars = [
  {
    number: "01",
    icon: Users,
    title: "Experienced EV Operations Team",
    stat: "10+ Years Exp",
    description:
      "Seasoned transit operations leaders with extensive expertise managing large-scale municipal, state transport, and private electric bus contracts.",
    bullets: [
      "Transit authority contract management",
      "Real-time fleet route optimization",
    ],
  },
  {
    number: "02",
    icon: UserCheck,
    title: "1000+ Skilled & Certified Workforce",
    stat: "1000+ Deployed",
    description:
      "A disciplined, vetted workforce of 1000+ heavy commercial drivers, EV technicians, auto-electricians, and depot workshop managers across India.",
    bullets: [
      "Defensive driving & regenerative braking trained",
      "100% biometric attendance & roster discipline",
    ],
  },
  {
    number: "03",
    icon: Building2,
    title: "Multi-City Operations Footprint",
    stat: "8+ Depot Hubs",
    description:
      "Active, running projects across Gujarat (Mansa, Gandhinagar, Ahmedabad, Surat) and Maharashtra (Nagpur, Amravati, Chandrapur).",
    bullets: [
      "Established regional depot facilities",
      "Fast deployment across new transit corridors",
    ],
  },
  {
    number: "04",
    icon: Clock3,
    title: "24×7 Operational & Breakdown SLA",
    stat: "24×7 SLA Support",
    description:
      "Round-the-clock shift coverage with night-shift preventive maintenance, mobile breakdown vans, and guaranteed turnaround times.",
    bullets: [
      "Dedicated night-shift servicing teams",
      "Rapid roadside emergency recovery",
    ],
  },
  {
    number: "05",
    icon: Wrench,
    title: "End-to-End Manpower Management",
    stat: "100% Roster Delivery",
    description:
      "Complete human resources management covering recruitment, background vetting, shift rostering, uniform provision, and employee welfare.",
    bullets: [
      "Zero driver absenteeism buffer system",
      "Full statutory PF, ESIC & wage compliance",
    ],
  },
  {
    number: "06",
    icon: Zap,
    title: "EV Bus Technical & BMS Expertise",
    stat: "OEM Certified",
    description:
      "Specialized competency in high-voltage DC fast charging, battery thermal management systems (BMS), traction motor diagnostics, and pneumatic brakes.",
    bullets: [
      "High-voltage electrical diagnostics",
      "Preventive battery health maintenance",
    ],
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#edf7f1] py-16 sm:py-20 border-y border-emerald-200/80">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

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
            We deliver the specialized operational manpower, technical expertise, and disciplined execution needed to keep modern electric bus fleets running on time, every single day.
          </p>
        </motion.div>

        {/* 6 Balanced Pillar Cards Grid (Responsive 1-col, 2-col, 3-col) */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {keyPillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 border border-emerald-200/90 shadow-sm transition-all duration-300 hover:border-emerald-400 hover:shadow-xl"
              >
                <div>
                  {/* Top Bar: Icon + Stat Chip */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf7f1] text-emerald-700 border border-emerald-200 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white shadow-xs">
                      <Icon size={22} />
                    </div>

                    <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/70">
                      {item.stat}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>

                  {/* Operational Bullet Points */}
                  <div className="mt-5 space-y-1.5 pt-4 border-t border-slate-100">
                    {item.bullets.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                  <span className="font-mono font-bold text-slate-400">
                    #{item.number}
                  </span>
                  <span className="font-semibold text-emerald-700 flex items-center gap-1">
                    Verified Operational SLA
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compact CTA Row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 hover:scale-102"
          >
            <span>Request Commercial Proposal</span>
            <ArrowRight size={15} />
          </Link>

          <a
            href="https://wa.me/918866554242?text=Hello%20Dada%20Green,%20I%20want%20to%20discuss%20an%20EV%20operations%20contract"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-emerald-300 px-6 py-3 text-xs sm:text-sm font-bold text-emerald-800 shadow-xs hover:bg-emerald-50 transition"
          >
            <PhoneCall size={14} className="text-emerald-700" />
            <span>Chat on WhatsApp (+91 88665 54242)</span>
          </a>
        </div>

      </div>
    </section>
  );
}