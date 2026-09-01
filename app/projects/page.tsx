"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Building2,
  Bus,
  Users,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  PhoneCall,
  Clock3,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { operationalProjects } from "@/data/projectsData";

export default function ProjectsPage() {
  const [selectedState, setSelectedState] = useState<"All" | "Gujarat" | "Maharashtra">("All");

  const filteredProjects =
    selectedState === "All"
      ? operationalProjects
      : operationalProjects.filter((p) => p.state === selectedState);

  const totalBuses = operationalProjects.reduce((acc, curr) => acc + curr.busesOperated, 0);
  const totalCrew = operationalProjects.reduce((acc, curr) => acc + curr.manpowerDeployed, 0);

  return (
    <main className="min-h-screen bg-[#f3fbf6] text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* =========================================================
          1. HERO SECTION (TYPOGRAPHY MATCHED TO HOMEPAGE & SERVICES)
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f6ec] via-[#f0faf3] to-[#f3fbf6] pt-12 pb-14 sm:pt-16 sm:pb-20 border-b border-emerald-200/70">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-xs">
              <Sparkles size={13} className="text-emerald-700" />
              <span>Operational Transit Network</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight text-slate-950">
              Our Active Projects &
              <span className="block text-emerald-700">Fleet Operations.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-slate-700">
              Dada Green manages daily scheduled electric bus routes, dedicated maintenance manpower, and charging depot infrastructure across Gujarat and Maharashtra.
            </p>
          </motion.div>

          {/* Clean 4-KPI Grid with Matching Plus Jakarta Sans Typography */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="rounded-3xl bg-white p-5 sm:p-6 border border-emerald-200/90 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Total Fleet</span>
                <Bus size={18} className="text-emerald-600" />
              </div>
              <div className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                <CountUp end={totalBuses} duration={1.8} enableScrollSpy />
                <span className="text-emerald-700">+</span>
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600">
                Electric buses in operation
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-3xl bg-white p-5 sm:p-6 border border-emerald-200/90 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Deployed Crew</span>
                <Users size={18} className="text-emerald-600" />
              </div>
              <div className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                <CountUp end={totalCrew} duration={1.8} enableScrollSpy />
                <span className="text-emerald-700">+</span>
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600">
                Certified drivers & technicians
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="rounded-3xl bg-white p-5 sm:p-6 border border-emerald-200/90 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Depot Hubs</span>
                <Building2 size={18} className="text-emerald-600" />
              </div>
              <div className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                <CountUp end={8} duration={1.5} enableScrollSpy />
                <span className="text-emerald-700">+ Hubs</span>
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600">
                Active operational facilities
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-3xl bg-white p-5 sm:p-6 border border-emerald-200/90 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Uptime SLA</span>
                <ShieldCheck size={18} className="text-emerald-600" />
              </div>
              <div className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                <CountUp end={99.4} decimals={1} duration={2} enableScrollSpy />
                <span className="text-emerald-700">%</span>
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600">
                On-time timetable dispatch SLA
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. COMPACT & PREMIUM PROJECTS GRID
      ========================================================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-emerald-200/70">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                Active Operational Depots & Corridors
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Summary of key fleet contracts, deployed teams, and daily transit operations.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center rounded-full bg-white p-1 border border-emerald-200/80 shadow-2xs self-start sm:self-auto">
              {(["All", "Gujarat", "Maharashtra"] as const).map((st) => {
                const count =
                  st === "All"
                    ? operationalProjects.length
                    : operationalProjects.filter((p) => p.state === st).length;

                return (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setSelectedState(st)}
                    className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                      selectedState === st
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-950 hover:bg-emerald-50"
                    }`}
                  >
                    <span>{st}</span>
                    <span className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                      selectedState === st ? "bg-emerald-800 text-emerald-100" : "bg-emerald-100 text-emerald-800"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Compact, Premium 2-Column Grid */}
          <motion.div layout className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group flex flex-col justify-between rounded-3xl bg-white border border-emerald-200/80 shadow-xs transition-all duration-300 hover:shadow-lg hover:border-emerald-400 overflow-hidden"
                >
                  <div>
                    {/* Compact Image Header */}
                    <div className="relative aspect-[16/8] w-full overflow-hidden bg-slate-950">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        unoptimized
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 inset-x-3.5 flex items-center justify-between">
                        <span className="rounded-full bg-emerald-600/95 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white shadow-xs">
                          {project.category}
                        </span>
                        <span className="flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.8 text-[11px] font-bold text-emerald-300 border border-white/15">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {project.status}
                        </span>
                      </div>

                      {/* Location Badge on Image */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
                        <div className="flex items-center gap-1 text-xs font-bold text-emerald-300">
                          <MapPin size={13} />
                          <span>{project.city}, {project.state}</span>
                        </div>
                        <span className="text-[11px] font-semibold text-white/90 bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                          {project.client}
                        </span>
                      </div>
                    </div>

                    {/* Compact Card Body */}
                    <div className="p-5">
                      <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-950 leading-snug">
                        {project.name}
                      </h3>

                      {/* 3 Metric Badges Strip */}
                      <div className="mt-3.5 grid grid-cols-3 gap-2 text-center">
                        <div className="rounded-xl bg-[#edf7f1] py-2 px-2 border border-emerald-100/80">
                          <span className="block text-[10px] font-semibold text-emerald-800">Fleet</span>
                          <strong className="block text-sm sm:text-base font-extrabold tracking-tight text-slate-950">
                            {project.busesOperated} <span className="text-[10px] font-bold text-slate-600">Buses</span>
                          </strong>
                        </div>

                        <div className="rounded-xl bg-[#edf7f1] py-2 px-2 border border-emerald-100/80">
                          <span className="block text-[10px] font-semibold text-emerald-800">Crew</span>
                          <strong className="block text-sm sm:text-base font-extrabold tracking-tight text-slate-950">
                            {project.manpowerDeployed} <span className="text-[10px] font-bold text-slate-600">Crew</span>
                          </strong>
                        </div>

                        <div className="rounded-xl bg-[#edf7f1] py-2 px-2 border border-emerald-100/80">
                          <span className="block text-[10px] font-semibold text-emerald-800">SLA</span>
                          <strong className="block text-sm sm:text-base font-extrabold tracking-tight text-slate-950">
                            24×7
                          </strong>
                        </div>
                      </div>

                      {/* 2 Key Deliverables */}
                      <div className="mt-3.5 space-y-1.5">
                        {project.scope.slice(0, 2).map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clean Footer Bar */}
                  <div className="px-5 pb-5 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 pt-3 text-xs">
                    <span className="text-slate-500 truncate max-w-[200px]">
                      Depot: <strong className="text-slate-800 font-semibold">{project.depotLocation}</strong>
                    </span>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white shadow-2xs hover:bg-emerald-700 transition shrink-0"
                    >
                      <span>Inquire SLA</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          3. OPERATIONAL EXCELLENCE & DISPATCH STANDARDS
      ========================================================= */}
      <section className="bg-[#edf7f1] py-14 sm:py-16 border-y border-emerald-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
              <ShieldCheck size={13} className="text-emerald-700" />
              <span>Standard Operating Procedures</span>
            </div>

            <h2 className="mt-3.5 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              Engineered for 99.4% on-time dispatch.
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every depot operation follows structured digital rosters, preventive maintenance schedules, and high-voltage safety compliance.
            </p>
          </div>

          {/* 4 Standard Grid Pillars */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-3xl bg-white p-5 sm:p-6 border border-emerald-200/90 shadow-xs transition-all duration-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                <Users size={18} />
              </div>
              <h3 className="mt-3.5 text-sm sm:text-base font-bold tracking-tight text-slate-950">Buffer Crew System</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Zero driver absenteeism through our active standby relief roster on every transit corridor.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-3xl bg-white p-5 sm:p-6 border border-emerald-200/90 shadow-xs transition-all duration-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                <Clock3 size={18} />
              </div>
              <h3 className="mt-3.5 text-sm sm:text-base font-bold tracking-tight text-slate-950">&lt; 45 Min Breakdown SLA</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Dedicated emergency mobile recovery vans deployed across regional highways and city links.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-3xl bg-white p-5 sm:p-6 border border-emerald-200/90 shadow-xs transition-all duration-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                <Zap size={18} />
              </div>
              <h3 className="mt-3.5 text-sm sm:text-base font-bold tracking-tight text-slate-950">BMS & Fast Charging</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                High-voltage DC charging bay turnaround, thermal diagnostics, and battery health tracking.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-3xl bg-white p-5 sm:p-6 border border-emerald-200/90 shadow-xs transition-all duration-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                <ShieldCheck size={18} />
              </div>
              <h3 className="mt-3.5 text-sm sm:text-base font-bold tracking-tight text-slate-950">100% PF & ESIC Verified</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Complete statutory labor compliance, 1000V PPE gear, and daily breathalyzer testing.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* =========================================================
          4. BOTTOM ACTION BANNER
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f6ec] via-[#f0faf3] to-[#f3fbf6] py-14 sm:py-18 border-t border-emerald-200/70">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
            <Sparkles size={13} className="text-emerald-700" />
            <span>Commercial Deployment Desk</span>
          </div>

          <h2 className="mt-3.5 text-2xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Ready to scale electric transit in your city?
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Connect with our operations leadership in Mansa to discuss tender contracts, maintenance manpower SLAs, or driver deployment.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 hover:scale-102"
            >
              <span>Request Commercial Proposal</span>
              <ArrowRight size={15} />
            </Link>

            <a
              href="https://wa.me/918866554242?text=Hello%20Dada%20Green,%20I%20want%20to%20discuss%20an%20electric%20bus%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white border border-emerald-300 px-6 py-3 text-xs sm:text-sm font-bold text-emerald-800 shadow-xs hover:bg-emerald-50 transition"
            >
              <PhoneCall size={14} className="text-emerald-700" />
              <span>Chat on WhatsApp (+91 88665 54242)</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
