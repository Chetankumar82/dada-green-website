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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// The absolute best high-resolution and landscape photos from the 48-photo gallery
const bestGalleryPhotos = [
  { id: 1, src: "/gallery/IMG-20260819-WA0036.jpg", alt: "Dada Green Electric Fleet Operations - 4K High Resolution" },
  { id: 2, src: "/gallery/IMG-20260819-WA0038.jpg", alt: "Electric Bus Transit Depot - 4K Ultra High Resolution" },
  { id: 3, src: "/gallery/IMG-20260819-WA0040.jpg", alt: "Dada Green Fleet Deployment - 4K Ultra High Resolution" },
  { id: 4, src: "/gallery/IMG-20260819-WA0003.jpg", alt: "GSRTC Electric Bus Operations in Transit Bay" },
  { id: 5, src: "/gallery/IMG-20260819-WA0004.jpg", alt: "Depot Technical Operations and Maintenance Briefing" },
  { id: 6, src: "/gallery/IMG-20260819-WA0005.jpg", alt: "Electric Bus Fleet Lineup at Depot Base" },
  { id: 7, src: "/gallery/IMG-20260819-WA0006.jpg", alt: "High-Power EV Charging Bays and Infrastructure" },
  { id: 8, src: "/gallery/IMG-20260819-WA0014.jpg", alt: "Zero-Emission Electric Buses on Public Route" },
  { id: 9, src: "/gallery/IMG-20260819-WA0025.jpg", alt: "Fleet Maintenance and Technical Inspection Bay" },
  { id: 10, src: "/gallery/IMG-20260819-WA0041.jpg", alt: "Electric Public Mobility Fleet in Operations" },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentPhoto = bestGalleryPhotos[currentIndex];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % bestGalleryPhotos.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? bestGalleryPhotos.length - 1 : prev - 1));
  }, []);

  // Auto-play interval (every 4 seconds)
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

  // Keyboard navigation
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

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring" as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section className="relative overflow-hidden bg-[#edf7f1] py-16 sm:py-24 md:py-28 border-y border-emerald-100/90">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header */}
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
              <span>Operations Showcase</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              Fleet & Operations Gallery
            </h2>

            <p className="mt-3 text-base sm:text-lg leading-7 text-slate-600">
              An authentic glimpse into Dada Green&apos;s electric bus fleets, depot maintenance bays, certified drivers, and zero-emission transit operations.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Auto-Slide Play/Pause Toggle */}
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              className="flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-3 text-xs font-bold text-slate-800 shadow-sm transition hover:bg-emerald-50 hover:text-emerald-900 cursor-pointer"
              title={isPlaying ? "Pause Auto-Slide" : "Play Auto-Slide"}
            >
              {isPlaying ? (
                <>
                  <Pause size={14} className="text-emerald-700" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play size={14} className="text-emerald-700" />
                  <span className="hidden sm:inline">Play</span>
                </>
              )}
            </button>

            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition duration-300 hover:bg-emerald-700 hover:scale-105"
            >
              <span>View All 48 Photos</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* =======================================================
            MAIN CLEAN SLIDER CANVAS (ZERO TEXT OVERLAYS)
        ======================================================= */}
        <div
          className="mt-8 sm:mt-10 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Slide Image Box */}
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
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  fill
                  priority
                  quality={90}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1400px"
                />

                {/* Subtle top fullscreen button */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxOpen(true);
                    }}
                    className="flex items-center gap-1.5 rounded-full bg-black/40 hover:bg-emerald-600 text-white backdrop-blur-md px-3.5 py-1.5 text-xs font-bold transition duration-300 shadow-md border border-white/20 cursor-pointer hover:scale-105"
                    title="View Fullscreen"
                  >
                    <Expand size={14} />
                    <span className="hidden sm:inline">Fullscreen</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Left Previous Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/40 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 transition duration-300 shadow-2xl hover:scale-110 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Next Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/40 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 transition duration-300 shadow-2xl hover:scale-110 cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight size={24} />
            </button>

            {/* Auto-Slide Progress Bar */}
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
              CLEAN THUMBNAILS & COUNTER
          ======================================================= */}
          <div className="mt-4 sm:mt-6 flex items-center justify-between gap-4">
            {/* Thumbnail Strip */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none max-w-full">
              {bestGalleryPhotos.map((item, idx) => {
                const isActive = idx === currentIndex;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`group relative h-14 w-20 sm:h-16 sm:w-26 shrink-0 overflow-hidden rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-emerald-600 shadow-md shadow-emerald-700/25 scale-105"
                        : "border-transparent opacity-60 hover:opacity-100 hover:scale-102"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-emerald-600/20" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Slide Index Counter */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono font-bold text-emerald-900 bg-white px-4 py-2.5 rounded-full border border-emerald-200 shadow-sm shrink-0">
              <span className="text-emerald-700 font-extrabold">{String(currentIndex + 1).padStart(2, "0")}</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-600">{String(bestGalleryPhotos.length).padStart(2, "0")}</span>
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
            <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white z-30 pointer-events-none">
              <span className="font-mono text-xs text-slate-300">
                {String(currentIndex + 1).padStart(2, "0")} / {String(bestGalleryPhotos.length).padStart(2, "0")}
              </span>

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
              className="relative max-h-[85vh] max-w-6xl w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                quality={95}
                className="object-contain"
                sizes="1400px"
              />
            </div>

            {/* Lightbox Navigation */}
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
