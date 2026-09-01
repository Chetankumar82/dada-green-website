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
} from "lucide-react";
import { motion } from "framer-motion";
import { operationalProjects } from "@/data/projectsData";

export default function ProjectsSection() {
  const [selectedState, setSelectedState] = useState<"All" | "Gujarat" | "Maharashtra">("All");

  const filteredProjects =
    selectedState === "All"
      ? operationalProjects
      : operationalProjects.filter((p) => p.state === selectedState);

  return (
    <section className="relative overflow-hidden bg-[#f3fbf6] py-20 sm:py-28">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-emerald-200/70"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
              <Sparkles size={13} className="text-emerald-700" />
              <span>Current Operations & Footprint</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              Our Active Projects
            </h2>

            <p className="mt-3 text-base sm:text-lg leading-7 text-slate-600">
              Demonstrating on-ground operational experience across high-density electric bus corridors and depot facilities in Gujarat and Maharashtra.
            </p>
          </div>

          {/* State Filter Controls & Link */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <div className="flex rounded-full bg-white p-1 border border-emerald-200/80 shadow-xs">
              {(["All", "Gujarat", "Maharashtra"] as const).map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setSelectedState(st)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                    selectedState === st
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-emerald-200/90 px-5 py-2.5 text-xs font-bold text-slate-800 shadow-xs hover:bg-emerald-50 hover:text-emerald-900 transition"
            >
              <span>Full Details</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-emerald-100/90 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Badges on Image */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                    <span className="rounded-full bg-emerald-600/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-white shadow-sm">
                      {project.category}
                    </span>

                    <span className="flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-mono font-bold text-emerald-300 border border-white/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200">
                      <MapPin size={13} />
                      <span>{project.city}, {project.state}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between text-xs font-semibold text-emerald-800 bg-emerald-50/80 px-3 py-1.5 rounded-xl border border-emerald-200/60 mb-3">
                    <span>Client / Partner:</span>
                    <strong className="text-slate-900">{project.client}</strong>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 group-hover:text-emerald-800 transition-colors">
                    {project.name}
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                  {/* Operational Metrics Pill Bar */}
                  <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 rounded-2xl bg-[#edf7f1] p-3 border border-emerald-100">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-xs shrink-0">
                        <Bus size={20} />
                      </div>
                      <div>
                        <div className="text-lg font-extrabold text-slate-950 leading-tight">
                          {project.busesOperated}+
                        </div>
                        <div className="text-[11px] font-semibold text-slate-600">
                          EV Buses Operated
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-[#edf7f1] p-3 border border-emerald-100">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-xs shrink-0">
                        <Users size={20} />
                      </div>
                      <div>
                        <div className="text-lg font-extrabold text-slate-950 leading-tight">
                          {project.manpowerDeployed}+
                        </div>
                        <div className="text-[11px] font-semibold text-slate-600">
                          Crew Deployed
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Depot Hub Location */}
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200/60">
                    <Building2 size={14} className="text-emerald-700 shrink-0" />
                    <span><strong>Depot Hub:</strong> {project.depotLocation}</span>
                  </div>

                  {/* Key Highlights */}
                  <div className="mt-4 space-y-1.5">
                    {project.keyHighlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/projects"
                  className="flex items-center justify-between w-full rounded-2xl bg-emerald-50 px-4 py-2.5 text-xs font-bold text-emerald-800 transition hover:bg-emerald-600 hover:text-white"
                >
                  <span>Explore Operational Scope</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
