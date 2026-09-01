"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo, useCallback } from "react";
import {
  Camera,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Expand,
  Sparkles,
  LayoutGrid,
  Grid3X3,
  Columns3,
  Film,
  Play,
  Pause,
  ZoomIn,
  ZoomOut,
  Heart,
  Eye,
  Zap,
  ShieldCheck,
  Users,
} from "lucide-react";
import { galleryMoments, galleryCategories, GalleryMoment } from "@/data/galleryData";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"masonry" | "bento" | "grid" | "cinematic">("bento");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [visibleLimit, setVisibleLimit] = useState<number>(24);
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());

  // Lightbox slideshow state
  const [isSlideshowPlaying, setIsSlideshowPlaying] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Filter items based on activeCategory
  const filteredMoments = useMemo(() => {
    if (activeCategory === "all") return galleryMoments;
    return galleryMoments.filter((m) => m.category === activeCategory);
  }, [activeCategory]);

  const visibleMoments = useMemo(() => {
    return filteredMoments.slice(0, visibleLimit);
  }, [filteredMoments, visibleLimit]);

  // Active selected item for lightbox
  const currentMoment: GalleryMoment | null =
    selectedItemIndex !== null && filteredMoments[selectedItemIndex]
      ? filteredMoments[selectedItemIndex]
      : null;

  const handlePrev = useCallback(() => {
    if (selectedItemIndex === null || filteredMoments.length === 0) return;
    setZoomLevel(1);
    setSelectedItemIndex(
      selectedItemIndex === 0
        ? filteredMoments.length - 1
        : selectedItemIndex - 1
    );
  }, [selectedItemIndex, filteredMoments.length]);

  const handleNext = useCallback(() => {
    if (selectedItemIndex === null || filteredMoments.length === 0) return;
    setZoomLevel(1);
    setSelectedItemIndex(
      selectedItemIndex === filteredMoments.length - 1
        ? 0
        : selectedItemIndex + 1
    );
  }, [selectedItemIndex, filteredMoments.length]);

  const toggleLike = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") {
        setSelectedItemIndex(null);
        setIsSlideshowPlaying(false);
        setZoomLevel(1);
      }
      if (e.key === " ") {
        e.preventDefault();
        setIsSlideshowPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex, handlePrev, handleNext]);

  // Auto Slideshow Timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSlideshowPlaying && selectedItemIndex !== null) {
      timer = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isSlideshowPlaying, selectedItemIndex, handleNext]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (selectedItemIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsSlideshowPlaying(false);
      setZoomLevel(1);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItemIndex]);

  return (
    <main className="bg-[#f3fbf6] text-slate-950 min-h-screen">
      {/* =========================================================
          REFRESHING HERO WITH LIVE PHOTO STRIP
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f6ec] via-[#f0faf3] to-[#f3fbf6] pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
        {/* Ambient atmospheric glows */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[550px] w-[550px] rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[450px] w-[450px] rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Live status badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/90 px-3.5 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-900 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span>Live Operations & Fleet Archive</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight text-slate-950">
                India&apos;s Clean Fleet
                <span className="block text-emerald-700">in Motion.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-700 md:text-xl">
                A refreshing visual showcase of Dada Green&apos;s electric bus fleets, technical maintenance bays, certified crew operations, and charging stations across India.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#gallery-view"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-4 font-bold text-white transition hover:bg-emerald-700 shadow-md hover:scale-102"
                >
                  <Eye size={17} />
                  <span>Explore Gallery</span>
                  <span className="text-lg">↓</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-700/20 bg-white/80 px-7 py-4 font-bold text-emerald-950 transition hover:bg-emerald-100/60"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Fast metric pills */}
              <div className="mt-10 flex flex-wrap gap-2.5 sm:gap-3 text-xs text-emerald-900 font-semibold">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-emerald-200 shadow-sm">
                  <Zap size={13} className="text-emerald-700" /> 100% Zero-Emission
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-emerald-200 shadow-sm">
                  <ShieldCheck size={13} className="text-emerald-700" /> Depot Maintenance
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-emerald-200 shadow-sm">
                  <Users size={13} className="text-emerald-700" /> 600+ Skilled Crew
                </span>
              </div>
            </motion.div>

            {/* Hero Interactive Photo Strip / Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="relative grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:max-w-none">
                {/* Hero Item 1 */}
                <div
                  onClick={() => setSelectedItemIndex(0)}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-emerald-200 cursor-pointer transform -rotate-2 hover:rotate-0 transition duration-500 hover:scale-105"
                >
                  <Image
                    src={galleryMoments[0].src}
                    alt="Dada Green Operations"
                    fill
                    priority
                    className="object-cover"
                    sizes="300px"
                  />
                </div>

                {/* Hero Item 2 */}
                <div
                  onClick={() => setSelectedItemIndex(1)}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-emerald-200 cursor-pointer transform translate-y-6 rotate-2 hover:rotate-0 transition duration-500 hover:scale-105"
                >
                  <Image
                    src={galleryMoments[1].src}
                    alt="Dada Green Maintenance"
                    fill
                    priority
                    className="object-cover"
                    sizes="300px"
                  />
                </div>

                {/* Hero Item 3 */}
                <div
                  onClick={() => setSelectedItemIndex(2)}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-emerald-200 cursor-pointer transform -translate-y-3 rotate-1 hover:rotate-0 transition duration-500 hover:scale-105"
                >
                  <Image
                    src={galleryMoments[2].src}
                    alt="Dada Green Crew"
                    fill
                    priority
                    className="object-cover"
                    sizes="300px"
                  />
                </div>

                {/* Hero Item 4 */}
                <div
                  onClick={() => setSelectedItemIndex(3)}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-emerald-200 cursor-pointer transform translate-y-3 -rotate-2 hover:rotate-0 transition duration-500 hover:scale-105"
                >
                  <Image
                    src={galleryMoments[3].src}
                    alt="Dada Green Charging Infrastructure"
                    fill
                    priority
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY INTERACTIVE BROWSER
      ========================================================= */}
      <section id="gallery-view" className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Refreshing Control Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 rounded-3xl bg-white p-4 sm:p-6 border border-emerald-100 shadow-sm">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {galleryCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setVisibleLimit(24);
                    }}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20 scale-[1.02]"
                        : "bg-[#f3fbf6] text-slate-700 hover:bg-emerald-100/80 hover:text-slate-950 border border-emerald-100/90"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-mono font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-emerald-200/60 text-emerald-900"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center justify-between lg:justify-end gap-3 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
              <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
                View Style:
              </span>

              <div className="flex items-center rounded-2xl bg-[#f3fbf6] p-1 border border-emerald-100">
                {/* Bento Mode */}
                <button
                  onClick={() => setViewMode("bento")}
                  className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                    viewMode === "bento"
                      ? "bg-white text-emerald-800 shadow-sm"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                  title="Modern Bento Grid"
                >
                  <LayoutGrid size={15} />
                  <span className="hidden sm:inline">Bento</span>
                </button>

                {/* Masonry Mode */}
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                    viewMode === "masonry"
                      ? "bg-white text-emerald-800 shadow-sm"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                  title="Editorial Masonry Wall"
                >
                  <Columns3 size={15} />
                  <span className="hidden sm:inline">Masonry</span>
                </button>

                {/* Grid Mode */}
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                    viewMode === "grid"
                      ? "bg-white text-emerald-800 shadow-sm"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                  title="Uniform Grid"
                >
                  <Grid3X3 size={15} />
                  <span className="hidden sm:inline">Grid</span>
                </button>

                {/* Cinematic Mode */}
                <button
                  onClick={() => setViewMode("cinematic")}
                  className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                    viewMode === "cinematic"
                      ? "bg-white text-emerald-800 shadow-sm"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                  title="Cinematic Filmstrip"
                >
                  <Film size={15} />
                  <span className="hidden sm:inline">Filmstrip</span>
                </button>
              </div>
            </div>
          </div>

          {/* =====================================================
              VIEW 1: MODERN BENTO SHOWCASE VIEW
          ===================================================== */}
          {viewMode === "bento" && (
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {visibleMoments.map((moment, index) => {
                const isHero = index === 0 || index === 7 || index === 16;
                const isLiked = likedIds.has(moment.id);

                return (
                  <div
                    key={moment.id}
                    onClick={() => setSelectedItemIndex(index)}
                    className={`group relative overflow-hidden rounded-3xl bg-white border border-emerald-100/90 shadow-sm cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-emerald-300 ${
                      isHero
                        ? "sm:col-span-2 aspect-[16/10] sm:aspect-auto sm:h-[340px]"
                        : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={moment.src}
                      alt={`Dada Green Moment #${moment.numberString}`}
                      fill
                      loading={index < 8 ? "eager" : "lazy"}
                      quality={75}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes={
                        isHero
                          ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      }
                    />

                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Top Floating Badge */}
                    <div className="absolute inset-x-0 top-0 p-4 sm:p-5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-mono font-bold text-emerald-300 opacity-0 transition duration-300 group-hover:opacity-100 border border-white/10">
                        #{moment.numberString}
                      </span>

                      <div className="flex items-center gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
                        <button
                          type="button"
                          onClick={(e) => toggleLike(moment.id, e)}
                          className={`flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md transition ${
                            isLiked
                              ? "bg-red-500 text-white"
                              : "bg-white/20 text-white hover:bg-white/30"
                          }`}
                          aria-label="Favorite photo"
                        >
                          <Heart size={14} fill={isLiked ? "currentColor" : "none"} />
                        </button>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                          <Expand size={14} />
                        </span>
                      </div>
                    </div>

                    {/* Bottom Tag */}
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <div className="flex items-center justify-between text-white">
                        <span className="text-xs font-medium text-emerald-200">
                          {moment.categoryLabel}
                        </span>
                        <span className="text-xs font-semibold text-white/80">
                          View Fullscreen ↗
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* =====================================================
              VIEW 2: EDITORIAL MASONRY VIEW
          ===================================================== */}
          {viewMode === "masonry" && (
            <div className="mt-8 sm:mt-10 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 sm:gap-6 [column-fill:_balance] space-y-5 sm:space-y-6">
              {visibleMoments.map((moment, index) => {
                const isLiked = likedIds.has(moment.id);
                return (
                  <div
                    key={moment.id}
                    onClick={() => setSelectedItemIndex(index)}
                    className="group relative break-inside-avoid overflow-hidden rounded-3xl bg-white border border-emerald-100/90 shadow-sm cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-emerald-300"
                  >
                    <div className="relative w-full overflow-hidden bg-slate-100">
                      <Image
                        src={moment.src}
                        alt={`Dada Green Moment #${moment.numberString}`}
                        width={800}
                        height={600}
                        loading={index < 8 ? "eager" : "lazy"}
                        quality={80}
                        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-mono font-bold text-emerald-300 opacity-0 transition duration-300 group-hover:opacity-100 border border-white/10">
                      <span>#{moment.numberString}</span>
                    </div>

                    <div className="absolute right-4 top-4 flex items-center gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
                      <button
                        type="button"
                        onClick={(e) => toggleLike(moment.id, e)}
                        className={`flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md transition ${
                          isLiked
                            ? "bg-red-500 text-white"
                            : "bg-white/20 text-white hover:bg-white/30"
                        }`}
                      >
                        <Heart size={14} fill={isLiked ? "currentColor" : "none"} />
                      </button>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                        <Expand size={14} />
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <div className="flex items-center justify-between text-white">
                        <span className="text-xs font-medium text-emerald-200">
                          {moment.categoryLabel}
                        </span>
                        <span className="text-xs font-semibold text-white/80">
                          View ↗
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* =====================================================
              VIEW 3: UNIFORM GRID VIEW
          ===================================================== */}
          {viewMode === "grid" && (
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {visibleMoments.map((moment, index) => (
                <div
                  key={moment.id}
                  onClick={() => setSelectedItemIndex(index)}
                  className="group relative aspect-square overflow-hidden rounded-3xl bg-white border border-emerald-100 shadow-sm cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-300"
                >
                  <Image
                    src={moment.src}
                    alt={`Dada Green Moment #${moment.numberString}`}
                    fill
                    loading={index < 8 ? "eager" : "lazy"}
                    quality={75}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute left-3.5 top-3.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-xs font-mono font-bold text-emerald-300 opacity-0 group-hover:opacity-100 border border-white/10">
                    #{moment.numberString}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3.5 opacity-0 group-hover:opacity-100 text-white text-xs font-medium text-emerald-200">
                    {moment.categoryLabel}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* =====================================================
              VIEW 4: CINEMATIC FILMSTRIP CAROUSEL VIEW
          ===================================================== */}
          {viewMode === "cinematic" && (
            <div className="mt-8 sm:mt-10 space-y-6">
              <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles size={14} /> Scroll horizontally or swipe across moments:
              </p>
              <div className="flex items-center gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory">
                {visibleMoments.map((moment, index) => (
                  <div
                    key={moment.id}
                    onClick={() => setSelectedItemIndex(index)}
                    className="group relative shrink-0 w-[290px] sm:w-[360px] md:w-[420px] aspect-[16/10] overflow-hidden rounded-3xl bg-slate-900 border border-emerald-100 shadow-md cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-emerald-400 hover:shadow-2xl snap-center"
                  >
                    <Image
                      src={moment.src}
                      alt={`Moment #${moment.numberString}`}
                      fill
                      loading="lazy"
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="420px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full bg-emerald-500/90 text-slate-950 font-mono font-bold px-3 py-1 text-xs">
                      #{moment.numberString}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <p className="text-xs text-emerald-300 font-medium">
                        {moment.categoryLabel}
                      </p>
                      <p className="text-sm sm:text-base font-bold mt-0.5">
                        Dada Green E-Mobility Project Moment
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Progressive Load More Moments */}
          {visibleLimit < filteredMoments.length && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setVisibleLimit((prev) => prev + 24)}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 hover:shadow-lg"
              >
                <span>Load More Photos</span>
                <span className="text-base">↓</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          FULL-FEATURED CINEMATIC THEATER LIGHTBOX
      ========================================================= */}
      {currentMoment && (
        <div
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-2xl transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="High Resolution Image Viewer"
          onClick={() => setSelectedItemIndex(null)}
        >
          {/* Lightbox Top Control Bar */}
          <div
            className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-emerald-500/20 text-emerald-300 px-3.5 py-1 text-xs font-mono font-bold border border-emerald-500/30">
                MOMENT #{currentMoment.numberString}
              </span>
              <span className="text-white/60 text-xs sm:text-sm font-medium hidden sm:inline">
                {currentMoment.categoryLabel}
              </span>
            </div>

            {/* Middle Action Controls: Slideshow + Zoom */}
            <div className="flex items-center gap-2 text-white">
              {/* Slideshow Button */}
              <button
                type="button"
                onClick={() => setIsSlideshowPlaying((prev) => !prev)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold border transition ${
                  isSlideshowPlaying
                    ? "bg-emerald-500 text-slate-950 border-emerald-400"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                }`}
                title={isSlideshowPlaying ? "Pause slideshow" : "Play auto slideshow"}
              >
                {isSlideshowPlaying ? <Pause size={14} /> : <Play size={14} />}
                <span className="hidden md:inline">
                  {isSlideshowPlaying ? "Playing" : "Slideshow"}
                </span>
              </button>

              {/* Zoom In */}
              <button
                type="button"
                onClick={() => setZoomLevel((prev) => (prev >= 2 ? 1 : prev + 0.5))}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
                title="Zoom photo"
              >
                {zoomLevel > 1 ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
              </button>

              {/* Counter */}
              <span className="text-xs sm:text-sm font-mono text-white/70 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                {(selectedItemIndex ?? 0) + 1} / {filteredMoments.length}
              </span>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItemIndex(null)}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/25 hover:rotate-90"
                aria-label="Close viewer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Main Photo Center Viewer */}
          <div
            className="relative flex-1 flex items-center justify-center px-4 sm:px-16 py-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/20 bg-black/60 sm:bg-white/10 text-white transition hover:bg-emerald-500 hover:text-slate-950 hover:scale-110"
              aria-label="Previous photograph"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/20 bg-black/60 sm:bg-white/10 text-white transition hover:bg-emerald-500 hover:text-slate-950 hover:scale-110"
              aria-label="Next photograph"
            >
              <ChevronRight size={26} />
            </button>

            {/* Image Container with Dynamic Zoom */}
            <div
              className="relative h-[65vh] sm:h-[75vh] w-full max-w-5xl flex items-center justify-center transition-transform duration-300"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <Image
                src={currentMoment.src}
                alt={`Dada Green E-Mobility Moment #${currentMoment.numberString}`}
                fill
                priority
                quality={92}
                className="object-contain drop-shadow-2xl select-none"
                sizes="95vw"
              />
            </div>
          </div>

          {/* Bottom Thumbnail Ribbon */}
          <div
            className="px-4 sm:px-8 py-3 bg-black/80 border-t border-white/10 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-1 scrollbar-none">
              {filteredMoments.map((thumb, idx) => {
                const isCurrent = idx === selectedItemIndex;
                return (
                  <button
                    key={thumb.id}
                    onClick={() => {
                      setZoomLevel(1);
                      setSelectedItemIndex(idx);
                    }}
                    className={`relative h-11 w-14 sm:h-13 sm:w-18 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                      isCurrent
                        ? "border-emerald-400 scale-105 shadow-md shadow-emerald-500/30 opacity-100"
                        : "border-transparent opacity-40 hover:opacity-85"
                    }`}
                  >
                    <Image
                      src={thumb.src}
                      alt={`Thumbnail #${thumb.numberString}`}
                      fill
                      className="object-cover"
                      sizes="70px"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          CALL TO ACTION (Light Green Theme)
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f6ec] via-[#f0faf3] to-[#f3fbf6] py-16 sm:py-20 lg:py-24 border-t border-emerald-200/80">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
                <Sparkles size={13} className="text-emerald-700" />
                <span>Partner With Us</span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
                Powering India&apos;s Clean
                <span className="block text-emerald-700">Mobility Transition.</span>
              </h2>

              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-700">
                Need reliable electric bus operations, depot maintenance manpower, trained drivers, or fleet management? Let&apos;s build together.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-emerald-600 px-8 py-4 font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 hover:scale-105"
              >
                <span>Contact Our Team</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}