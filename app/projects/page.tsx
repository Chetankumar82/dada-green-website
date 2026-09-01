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
  Calendar,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
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
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f6ec] via-[#f0faf3] to-[#f3fbf6] pt-28 pb-16 sm:pt-36 sm:pb-20 border-b border-emerald-200/60">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
              <Sparkles size={13} className="text-emerald-700" />
              <span>Proven Operational Track Record</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-950">
              Our Projects &
              <span className="block text-emerald-700">Current Operations.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-slate-700">
              Dada Green E-Mobility manages daily electric bus transit routes, maintenance manpower services, and charging depot operations across leading transit networks in Gujarat and Maharashtra.
            </p>
          </div>

          {/* Operational Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="text-2xl sm:text-4xl font-extrabold text-emerald-700">
                {totalBuses}+
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-600">
                Electric Buses in Operation
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="text-2xl sm:text-4xl font-extrabold text-emerald-700">
                {totalCrew}+
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-600">
                Deployed Drivers & Technicians
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="text-2xl sm:text-4xl font-extrabold text-emerald-700">
                8+ Hubs
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-600">
                Active Depot Locations
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="text-2xl sm:text-4xl font-extrabold text-emerald-700">
                99.4%
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-600">
                Fleet Uptime & SLA Delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS DIRECTORY & BREAKDOWN
      ========================================================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-emerald-200/70">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                Operational Depots & Route Contracts
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Explore project locations, deployed manpower, and technical scope of work.
              </p>
            </div>

            <div className="flex rounded-full bg-white p-1 border border-emerald-200/80 shadow-xs self-start">
              {(["All", "Gujarat", "Maharashtra"] as const).map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setSelectedState(st)}
                  className={`rounded-full px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                    selectedState === st
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Project Detailed Cards */}
          <div className="mt-10 space-y-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-3xl bg-white border border-emerald-100/90 shadow-md transition duration-300 hover:border-emerald-300 hover:shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column: Photo & Key Metrics */}
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-5 bg-slate-950 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                      <span className="rounded-full bg-emerald-600/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-white shadow-sm">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-mono font-bold text-emerald-300 border border-white/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                        <MapPin size={14} />
                        <span>{project.city}, {project.state}</span>
                      </div>
                      <h3 className="mt-1 text-lg sm:text-xl font-bold">{project.name}</h3>
                    </div>
                  </div>

                  {/* Right Column: Detailed Specifications & Scope */}
                  <div className="p-6 sm:p-8 lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Client Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-emerald-100/90">
                        <div className="text-xs text-slate-500 font-medium">
                          Client / Authority: <strong className="text-slate-900 text-sm">{project.client}</strong>
                        </div>
                        <div className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                          {project.state} Region
                        </div>
                      </div>

                      <p className="mt-4 text-sm sm:text-base leading-6 text-slate-700">
                        {project.description}
                      </p>

                      {/* Numbers Bar */}
                      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className="rounded-2xl bg-[#edf7f1] p-3.5 border border-emerald-200/60">
                          <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold">
                            <Bus size={15} />
                            <span>Fleet Size</span>
                          </div>
                          <div className="mt-1 text-xl font-black text-slate-950">
                            {project.busesOperated} Buses
                          </div>
                        </div>

                        <div className="rounded-2xl bg-[#edf7f1] p-3.5 border border-emerald-200/60">
                          <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold">
                            <Users size={15} />
                            <span>Workforce</span>
                          </div>
                          <div className="mt-1 text-xl font-black text-slate-950">
                            {project.manpowerDeployed} Crew
                          </div>
                        </div>

                        <div className="rounded-2xl bg-[#edf7f1] p-3.5 border border-emerald-200/60 col-span-2 sm:col-span-1">
                          <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold">
                            <Building2 size={15} />
                            <span>Depot Base</span>
                          </div>
                          <div className="mt-1 text-xs font-bold text-slate-950 line-clamp-1">
                            {project.depotLocation}
                          </div>
                        </div>
                      </div>

                      {/* Scope of Operations */}
                      <div className="mt-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                          Operational Scope & Deliverables:
                        </h4>
                        <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.scope.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Highlights Chips */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.keyHighlights.map((hl, i) => (
                          <span
                            key={i}
                            className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-900 border border-emerald-200/60"
                          >
                            ✓ {hl}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs text-slate-500">
                        Interested in a similar operations SLA?
                      </span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700"
                      >
                        <span>Discuss Project Requirements</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          BOTTOM LIGHT GREEN CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f6ec] via-[#f0faf3] to-[#f3fbf6] py-16 sm:py-20 border-t border-emerald-200/70">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Partner with India&apos;s leading EV operations team.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            From city transit contracts to specialized maintenance manpower, we provide verified operational readiness from day one.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 hover:scale-105"
            >
              <span>Contact Our Team</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="https://wa.me/918866554242?text=Hello%20Dada%20Green,%20I%20want%20to%20discuss%20an%20electric%20bus%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white border border-emerald-300 px-8 py-4 text-sm font-bold text-emerald-800 shadow-sm transition hover:bg-emerald-50"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
