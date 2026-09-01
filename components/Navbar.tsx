"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Our Projects", href: "/projects" },
  { name: "Safety", href: "/safety" },
  { name: "Careers", href: "/careers" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll position to enhance sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change or resize
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? "border-b border-emerald-200/90 bg-[#f3fbf6]/95 backdrop-blur-xl shadow-md shadow-emerald-950/5"
          : "border-b border-emerald-100/60 bg-[#f3fbf6]/80 backdrop-blur-md"
      }`}
    >
      <nav
        className={`relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
          isScrolled ? "h-14 sm:h-16 md:h-[72px]" : "h-16 sm:h-20 md:h-[84px]"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/dada-green-logo-ultra-hd.png"
            alt="Dada Green E-Mobility LLP"
            width={348}
            height={60}
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled
                ? "h-7 sm:h-9 md:h-[42px] max-w-[150px] sm:max-w-[200px] md:max-w-none"
                : "h-8 sm:h-10 md:h-[48px] max-w-[170px] sm:max-w-[230px] md:max-w-none"
            }`}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:gap-8 md:ml-auto md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 text-sm lg:text-base font-semibold transition-colors duration-200 ${
                  active
                    ? "text-emerald-800 font-bold"
                    : "text-slate-700 hover:text-emerald-700"
                }`}
              >
                {link.name}

                {active && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-emerald-600 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Contact Us CTA Button */}
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 rounded-full bg-emerald-600 font-bold text-white shadow-md shadow-emerald-600/20 transition-all duration-300 hover:bg-emerald-700 hover:scale-105 ${
              isScrolled
                ? "px-4 py-2 text-xs lg:text-sm"
                : "px-5 py-2.5 text-xs lg:text-sm"
            }`}
          >
            <span>Contact Us</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-200 bg-white text-slate-900 shadow-xs transition hover:bg-emerald-50 md:hidden cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={20} className="text-emerald-800" /> : <Menu size={20} className="text-emerald-800" />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer with Framer Motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-emerald-100 bg-[#f3fbf6] px-4 py-5 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition ${
                      active
                        ? "bg-emerald-100/90 text-emerald-900 font-bold border border-emerald-200"
                        : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className="h-2 w-2 rounded-full bg-emerald-600" />}
                  </Link>
                );
              })}

              {/* Mobile Contact Button */}
              <Link
                href="/contact"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-emerald-700"
              >
                <span>Contact Us</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}