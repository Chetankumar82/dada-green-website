"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Building2,
  Bus,
  Users,
  MapPin,
  ArrowRight,
  Sparkles,
  Zap,
  Activity,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { operationalProjects } from "@/data/projectsData";

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeProject = operationalProjects[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % operationalProjects.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + operationalProjects.length) % operationalProjects.length);
  }, []);

  // Auto-cycle timer (5 seconds per project)
  useEffect(() => {
    if (!isAutoPlaying || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, isHovered, handleNext]);

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden bg-[#f3fbf6] py-14 sm:py-16"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar with Live Indicator & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-6 border-b border-emerald-200/70">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span>Live Regional Operations</span>
            </div>

            <h2 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
              Our Active Projects
            </h2>

            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Select or auto-preview transit projects across Gujarat and Maharashtra.
            </p>
          </div>

          {/* Interactive Navigation Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* AutoPlay Toggle */}
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              title={isAutoPlaying ? "Pause Auto-Cycle" : "Play Auto-Cycle"}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-emerald-200/80 text-emerald-800 hover:bg-emerald-50 shadow-2xs transition cursor-pointer"
            >
              {isAutoPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
            </button>

            {/* Prev / Next Buttons */}
            <div className="flex rounded-full bg-white p-1 border border-emerald-200/80 shadow-2xs">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous project"
                className="flex h-7 w-7 items-center justify-center rounded-full text-slate-700 hover:bg-emerald-50 hover:text-emerald-900 transition cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project"
                className="flex h-7 w-7 items-center justify-center rounded-full text-slate-700 hover:bg-emerald-50 hover:text-emerald-900 transition cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 rounded-full bg-white border border-emerald-300 px-4 py-2 text-xs font-bold text-emerald-900 shadow-2xs hover:bg-emerald-50 transition"
            >
              <span>All Projects</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Compact Animated Master-Detail Spotlight */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column: Interactive Project Selector with Progress Indicators (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {operationalProjects.map((project, index) => {
              const isSelected = index === currentIndex;

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`group relative flex flex-col justify-between text-left rounded-2xl p-4 transition-all duration-300 border overflow-hidden cursor-pointer ${
                    isSelected
                      ? "bg-white border-emerald-400 shadow-md ring-1 ring-emerald-300/60"
                      : "bg-white/70 border-emerald-100 hover:bg-white hover:border-emerald-200 shadow-2xs"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="min-w-0 pr-3">
                      <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-800">
                        <span className={`h-1.5 w-1.5 rounded-full ${isSelected ? "bg-emerald-500 animate-pulse" : "bg-slate-300"}`} />
                        <span>{project.state} • {project.city}</span>
                      </div>

                      <h3 className="mt-1 text-sm font-bold text-slate-950 truncate group-hover:text-emerald-800 transition-colors">
                        {project.name}
                      </h3>

                      <div className="mt-1.5 flex items-center gap-3 text-xs text-slate-600 font-semibold">
                        <span className="flex items-center gap-1">
                          <Bus size={12} className="text-emerald-700" /> {project.busesOperated}+ Buses
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Users size={12} className="text-emerald-700" /> {project.manpowerDeployed}+ Crew
                        </span>
                      </div>
                    </div>

                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition ${
                      isSelected
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100"
                    }`}>
                      <ChevronRight size={16} />
                    </div>
                  </div>

                  {/* Animated Countdown Progress Bar when Active */}
                  {isSelected && isAutoPlaying && !isHovered && (
                    <motion.div
                      key={`progress-${currentIndex}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-1 bg-emerald-500 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Animated Dynamic Project Spotlight Card (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col justify-between h-full rounded-3xl bg-white border border-emerald-200/90 p-5 sm:p-6 shadow-md overflow-hidden"
              >
                <div>
                  {/* Photo with Overlay and Ambient Pulsing Status */}
                  <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
                    <motion.div
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={activeProject.image}
                        alt={activeProject.name}
                        fill
                        unoptimized
                        sizes="(max-width: 1024px) 100vw, 700px"
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                      <span className="rounded-full bg-emerald-600/90 backdrop-blur-md px-3 py-0.5 text-xs font-bold text-white shadow-xs">
                        {activeProject.category}
                      </span>

                      <span className="flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-xs font-mono font-bold text-emerald-300 border border-white/10">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        {activeProject.status}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-200">
                        <MapPin size={13} className="text-emerald-400" />
                        <span>{activeProject.city}, {activeProject.state}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-emerald-900 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200/70">
                      <span className="text-slate-600">Client / Authority:</span>
                      <strong className="text-slate-950 font-bold">{activeProject.client}</strong>
                    </div>

                    <h3 className="mt-3 text-lg sm:text-xl font-bold tracking-tight text-slate-950">
                      {activeProject.name}
                    </h3>

                    <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {activeProject.description}
                    </p>

                    {/* 3 Metric Pills with Animated Rolling Numbers */}
                    <div className="mt-3.5 grid grid-cols-3 gap-2">
                      <div className="rounded-xl bg-[#edf7f1] p-2.5 text-center border border-emerald-100">
                        <div className="text-base font-extrabold text-slate-950">
                          <CountUp end={activeProject.busesOperated} duration={1.2} />+
                        </div>
                        <div className="text-[10px] font-semibold text-slate-600">EV Buses</div>
                      </div>

                      <div className="rounded-xl bg-[#edf7f1] p-2.5 text-center border border-emerald-100">
                        <div className="text-base font-extrabold text-emerald-700">
                          <CountUp end={activeProject.manpowerDeployed} duration={1.2} />+
                        </div>
                        <div className="text-[10px] font-semibold text-slate-600">Crew Deployed</div>
                      </div>

                      <div className="rounded-xl bg-[#edf7f1] p-2.5 text-center border border-emerald-100">
                        <div className="text-base font-extrabold text-slate-950">24×7</div>
                        <div className="text-[10px] font-semibold text-slate-600">SLA Support</div>
                      </div>
                    </div>

                    {/* Depot Hub */}
                    <div className="mt-3 flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/60">
                      <Building2 size={13} className="text-emerald-700 shrink-0" />
                      <span className="truncate"><strong>Depot Hub:</strong> {activeProject.depotLocation}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    href="/projects"
                    className="flex items-center justify-between w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 transition group"
                  >
                    <span>View Complete Operational SLA & Scope</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
