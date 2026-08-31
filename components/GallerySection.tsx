"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Expand, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { galleryMoments, GalleryMoment } from "@/data/galleryData";
import { motion, AnimatePresence } from "framer-motion";

// Featured 6 moments for homepage showcase
const previewMoments = [
  galleryMoments[0],
  galleryMoments[1],
  galleryMoments[2],
  galleryMoments[4],
  galleryMoments[7],
  galleryMoments[9],
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const selectedMoment: GalleryMoment | null =
    lightboxIndex !== null ? previewMoments[lightboxIndex] : null;

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === 0 ? previewMoments.length - 1 : lightboxIndex - 1
    );
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === previewMoments.length - 1 ? 0 : lightboxIndex + 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#edf7f1] py-20 sm:py-28 border-y border-emerald-100/90">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Minimalist Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 sm:pb-12 border-b border-emerald-200/60"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-100/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
              <Sparkles size={13} className="text-emerald-700" />
              <span>On-Ground Operations</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              Fleet & Operations Gallery
            </h2>

            <p className="mt-3 text-base sm:text-lg leading-7 text-slate-600">
              An authentic glimpse into Dada Green&apos;s electric bus fleets, depot maintenance bays, certified drivers, and zero-emission transit operations.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-3 rounded-full bg-emerald-600 px-6 sm:px-7 py-3.5 sm:py-4 font-bold text-white shadow-md transition duration-300 hover:bg-emerald-700 hover:scale-105"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Clean Editorial Photo Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {previewMoments.map((moment, index) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setLightboxIndex(index)}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-emerald-100/90 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-emerald-300 aspect-[4/3]"
            >
              {/* Photo */}
              <Image
                src={moment.src}
                alt={`Dada Green Moment #${moment.numberString}`}
                fill
                loading="lazy"
                quality={75}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number Badge */}
              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-mono font-bold text-emerald-300 opacity-0 transition duration-300 group-hover:opacity-100 border border-white/10">
                <span>#{moment.numberString}</span>
              </div>

              {/* Expand Icon */}
              <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-md opacity-0 transition duration-300 group-hover:opacity-100 group-hover:scale-110">
                <Expand size={15} />
              </div>

              {/* Bottom Tag */}
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
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox for Homepage */}
      <AnimatePresence>
        {selectedMoment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-2xl"
            role="dialog"
            aria-modal="true"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-emerald-500/20 text-emerald-300 px-3.5 py-1 text-xs font-mono font-bold border border-emerald-500/30">
                  MOMENT #{selectedMoment.numberString}
                </span>
                <span className="text-white/60 text-xs sm:text-sm font-medium">
                  {selectedMoment.categoryLabel}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
                aria-label="Close viewer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Stage */}
            <div
              className="relative flex-1 flex items-center justify-center p-4 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 border border-white/10 text-white hover:bg-emerald-600 transition shadow-xl cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Image Container */}
              <div className="relative h-full w-full max-h-[75vh] max-w-5xl">
                <Image
                  src={selectedMoment.src}
                  alt={`Dada Green Moment #${selectedMoment.numberString}`}
                  fill
                  className="object-contain"
                  priority
                  sizes="100vw"
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 sm:right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 border border-white/10 text-white hover:bg-emerald-600 transition shadow-xl cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Bar with direct full gallery link */}
            <div
              className="px-4 sm:px-8 py-3.5 bg-black/80 border-t border-white/10 z-20 flex items-center justify-between text-xs text-white/60"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Photo {(lightboxIndex ?? 0) + 1} of {previewMoments.length}</span>
              <Link
                href="/gallery"
                className="text-emerald-400 font-semibold hover:underline flex items-center gap-1"
              >
                View Full Photo Gallery →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
