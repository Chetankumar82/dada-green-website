"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  ArrowRight,
  Expand,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Play,
  Pause,
  Zap,
  ShieldCheck,
  Users,
  Eye,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Best curated photos from the gallery
const sliderMoments = [
  {
    id: 1,
    numberString: "01",
    src: "/gallery/IMG-20260819-WA0003.jpg",
    title: "GSRTC Electric Bus Operations",
    category: "Electric Fleet",
    description: "Daily scheduled route execution and passenger transit fleet management in Gujarat.",
    tag: "Fleet Operations",
  },
  {
    id: 2,
    numberString: "02",
    src: "/gallery/IMG-20260819-WA0004.jpg",
    title: "Depot Technical Briefing & SOPs",
    category: "Depot Maintenance",
    description: "On-ground briefing and safety protocol checks with certified maintenance supervisors.",
    tag: "Maintenance Team",
  },
  {
    id: 3,
    numberString: "03",
    src: "/gallery/IMG-20260819-WA0005.jpg",
    title: "Fleet Depot Lineup & Readiness",
    category: "Electric Fleet",
    description: "High-density electric bus fleet organized and ready for morning transit rollout.",
    tag: "Depot Base",
  },
  {
    id: 4,
    numberString: "04",
    src: "/gallery/IMG-20260819-WA0006.jpg",
    title: "High-Power Fast Charging Bays",
    category: "Charging Infra",
    description: "Dedicated DC fast chargers and energy management support for heavy EV buses.",
    tag: "Charging Infra",
  },
  {
    id: 5,
    numberString: "05",
    src: "/gallery/IMG-20260819-WA0007.jpg",
    title: "Certified EV Drivers on Route",
    category: "Operations Crew",
    description: "Skilled, disciplined driver personnel trained in regenerative braking and safety.",
    tag: "Crew Deployment",
  },
  {
    id: 6,
    numberString: "06",
    src: "/gallery/IMG-20260819-WA0010.jpg",
    title: "Depot Workshop Technical Team",
    category: "Depot Maintenance",
    description: "Specialized mechanical and electrical engineers executing routine maintenance.",
    tag: "Technical Upkeep",
  },
  {
    id: 7,
    numberString: "07",
    src: "/gallery/IMG-20260819-WA0014.jpg",
    title: "Zero-Emission Transit Rollouts",
    category: "Electric Fleet",
    description: "Clean public transit buses operating across major municipal routes.",
    tag: "Zero-Emission",
  },
  {
    id: 8,
    numberString: "08",
    src: "/gallery/IMG-20260819-WA0019.jpg",
    title: "Operations Supervision & Control",
    category: "Operations Crew",
    description: "Real-time route monitoring, shift coordination, and punctuality management.",
    tag: "Field Coordination",
  },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentSlide = sliderMoments[currentIndex];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % sliderMoments.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? sliderMoments.length - 1 : prev - 1));
  }, []);

  // Auto-play timer (advances every 4 seconds if not paused / hovered)
  useEffect(() => {
    if (isPlaying && !isHovered && !lightboxOpen) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 4000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, lightboxOpen, handleNext]);

  // Keyboard navigation for lightbox and slider
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "Escape") setLightboxOpen(false);
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, handleNext, handlePrev]);

  // Animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section className="relative overflow-hidden bg-[#edf7f1] py-16 sm:py-24 md:py-28 border-y border-emerald-100/90">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 sm:pb-10 border-b border-emerald-200/70"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
              <Sparkles size={13} className="text-emerald-700" />
              <span>On-Ground Operations Showcase</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              Fleet & Operations Gallery
            </h2>

            <p className="mt-3 text-base sm:text-lg leading-7 text-slate-600">
              A dynamic visual showcase of Dada Green&apos;s electric bus fleets, depot maintenance bays, certified drivers, and zero-emission transit operations across India.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Auto-play toggle button */}
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              className="flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-3 text-xs font-bold text-slate-800 shadow-sm transition hover:bg-emerald-50 hover:text-emerald-900 cursor-pointer"
              title={isPlaying ? "Pause Auto-Slide" : "Play Auto-Slide"}
            >
              {isPlaying ? (
                <>
                  <Pause size={14} className="text-emerald-700" />
                  <span className="hidden sm:inline">Auto-Slide On</span>
                </>
              ) : (
                <>
                  <Play size={14} className="text-emerald-700" />
                  <span className="hidden sm:inline">Auto-Slide Paused</span>
                </>
              )}
            </button>

            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition duration-300 hover:bg-emerald-700 hover:scale-105"
            >
              <span>Explore All 48 Photos</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* =======================================================
            MAIN INTERACTIVE SLIDER STAGE
        ======================================================= */}
        <div
          className="mt-8 sm:mt-10 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Slide Screen */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-3xl border border-emerald-200/90 bg-slate-950 shadow-2xl">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              >
                <Image
                  src={currentSlide.src}
                  alt={currentSlide.title}
                  fill
                  priority
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />

                {/* Ambient vignette gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60 hidden md:block" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 text-xs font-mono font-bold text-emerald-300 border border-white/10 shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Moment #{currentSlide.numberString} of {String(sliderMoments.length).padStart(2, "0")}
                    </span>

                    <span className="hidden sm:inline-flex items-center rounded-full bg-emerald-600/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-white shadow-sm">
                      {currentSlide.tag}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxOpen(true);
                    }}
                    className="pointer-events-auto flex items-center gap-1.5 rounded-full bg-white/20 hover:bg-emerald-600 text-white backdrop-blur-md px-3.5 py-1.5 text-xs font-bold transition duration-300 shadow-md border border-white/20 cursor-pointer hover:scale-105"
                  >
                    <Expand size={14} />
                    <span className="hidden sm:inline">Fullscreen</span>
                  </button>
                </div>

                {/* Bottom Slide Info Card */}
                <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-8 text-white pointer-events-none">
                  <div className="max-w-3xl">
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-300">
                      {currentSlide.category}
                    </span>
                    <h3 className="mt-1 text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-md">
                      {currentSlide.title}
                    </h3>
                    <p className="mt-1.5 max-w-2xl text-xs sm:text-base leading-relaxed text-slate-200 drop-shadow hidden sm:block">
                      {currentSlide.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-black/50 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/15 transition duration-300 shadow-xl hover:scale-110 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-black/50 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/15 transition duration-300 shadow-xl hover:scale-110 cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight size={22} />
            </button>

            {/* Auto-slide Progress Bar */}
            {isPlaying && !isHovered && !lightboxOpen && (
              <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20 overflow-hidden z-20">
                <motion.div
                  key={currentIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  className="h-full bg-emerald-400"
                />
              </div>
            )}
          </div>

          {/* =======================================================
              THUMBNAIL STRIP & SLIDE CONTROLS
          ======================================================= */}
          <div className="mt-4 sm:mt-6 flex items-center justify-between gap-4">
            {/* Thumbnails */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none max-w-full">
              {sliderMoments.map((item, idx) => {
                const isActive = idx === currentIndex;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`group relative h-14 w-20 sm:h-16 sm:w-24 shrink-0 overflow-hidden rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-emerald-600 shadow-md shadow-emerald-700/20 scale-105"
                        : "border-transparent opacity-60 hover:opacity-100 hover:scale-102"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="100px"
                      className="object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-emerald-600/20" />
                    )}
                    <span className="absolute bottom-1 right-1 rounded-md bg-black/70 px-1.5 py-0.5 text-[9px] font-mono font-bold text-white">
                      #{item.numberString}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Slide Index Counter */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono font-bold text-emerald-900 bg-white px-4 py-2.5 rounded-full border border-emerald-200 shadow-sm shrink-0">
              <span className="text-emerald-700">{String(currentIndex + 1).padStart(2, "0")}</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-600">{String(sliderMoments.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>

      </div>

      {/* =======================================================
          FULLSCREEN LIGHTBOX MODAL
      ======================================================= */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Top Toolbar */}
            <div
              className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white z-30 pointer-events-none"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold">
                  {currentSlide.category}
                </span>
                <span className="font-mono text-xs text-slate-300">
                  #{currentSlide.numberString} of {String(sliderMoments.length).padStart(2, "0")}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-red-600 text-white transition cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Centered High-Res Image */}
            <div
              className="relative max-h-[80vh] max-w-5xl w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentSlide.src}
                alt={currentSlide.title}
                fill
                quality={90}
                className="object-contain sm:object-cover"
                sizes="1200px"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 sm:p-8 text-white">
                <h4 className="text-xl sm:text-2xl font-bold">{currentSlide.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">{currentSlide.description}</p>
              </div>
            </div>

            {/* Lightbox Navigation Buttons */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 hover:bg-emerald-600 text-white backdrop-blur-md transition shadow-xl cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 hover:bg-emerald-600 text-white backdrop-blur-md transition shadow-xl cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
