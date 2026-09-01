"use client";

import { ArrowRight, ChevronDown, Menu, X, Building2, ShieldCheck, Images, Briefcase } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// About Dropdown Sub-Items (Including Careers & Hiring)
const aboutSubLinks = [
  {
    name: "About Company",
    href: "/about",
    description: "Our mission, leadership & operational footprint",
    icon: Building2,
  },
  {
    name: "Safety & Compliance",
    href: "/safety",
    description: "Zero-accident governance, 1000V PPE & PF/ESIC",
    icon: ShieldCheck,
  },
  {
    name: "Operations Gallery",
    href: "/gallery",
    description: "48+ authentic fleet, crew & depot photos",
    icon: Images,
  },
  {
    name: "Careers & Hiring",
    href: "/careers",
    description: "Join our 1000+ driver & technician workforce",
    icon: Briefcase,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if current route is under About group
  const isAboutActive = ["/about", "/safety", "/gallery", "/careers"].includes(pathname);

  // Track scroll position to enhance sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus and scroll to top whenever the route actually changes
  useEffect(() => {
    setOpen(false);
    setAboutDropdownOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 150);
  };

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
          isScrolled ? "h-14 sm:h-16 md:h-[72px]" : "h-16 sm:h-20 md:h-[80px]"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          scroll={true}
          className="flex shrink-0 items-center transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/dada-green-logo-ultra-hd.png"
            alt="Dada Green E-Mobility LLP"
            width={348}
            height={60}
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled
                ? "h-7 sm:h-9 md:h-[40px] max-w-[150px] sm:max-w-[200px] md:max-w-none"
                : "h-8 sm:h-10 md:h-[46px] max-w-[170px] sm:max-w-[230px] md:max-w-none"
            }`}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:gap-10 md:ml-auto md:flex">
          {/* 1. Home */}
          <Link
            href="/"
            scroll={true}
            className={`relative py-2 text-sm lg:text-[15px] font-semibold transition-colors duration-200 ${
              pathname === "/"
                ? "text-emerald-800 font-bold"
                : "text-slate-700 hover:text-emerald-700"
            }`}
          >
            Home
            {pathname === "/" && (
              <motion.span
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-emerald-600 shadow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          {/* 2. Services */}
          <Link
            href="/services"
            scroll={true}
            className={`relative py-2 text-sm lg:text-[15px] font-semibold transition-colors duration-200 ${
              pathname === "/services"
                ? "text-emerald-800 font-bold"
                : "text-slate-700 hover:text-emerald-700"
            }`}
          >
            Services
            {pathname === "/services" && (
              <motion.span
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-emerald-600 shadow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          {/* 3. Our Projects */}
          <Link
            href="/projects"
            scroll={true}
            className={`relative py-2 text-sm lg:text-[15px] font-semibold transition-colors duration-200 ${
              pathname === "/projects"
                ? "text-emerald-800 font-bold"
                : "text-slate-700 hover:text-emerald-700"
            }`}
          >
            Our Projects
            {pathname === "/projects" && (
              <motion.span
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-emerald-600 shadow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          {/* 4. About Us (Dropdown with About Company, Safety, Gallery, Careers) */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setAboutDropdownOpen((prev) => !prev)}
              aria-expanded={aboutDropdownOpen}
              className={`group relative flex items-center gap-1.5 py-2 text-sm lg:text-[15px] font-semibold transition-colors duration-200 cursor-pointer ${
                isAboutActive
                  ? "text-emerald-800 font-bold"
                  : "text-slate-700 hover:text-emerald-700"
              }`}
            >
              <span>About Us</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  aboutDropdownOpen ? "rotate-180 text-emerald-700" : "text-slate-400 group-hover:text-emerald-700"
                }`}
              />

              {isAboutActive && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-emerald-600 shadow-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* Dropdown Menu Container */}
            <AnimatePresence>
              {aboutDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-84 rounded-3xl bg-white p-3 shadow-2xl border border-emerald-200/90 z-50 ring-1 ring-black/5"
                >
                  <div className="space-y-1">
                    {aboutSubLinks.map((item) => {
                      const Icon = item.icon;
                      const active = pathname === item.href;

                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          scroll={true}
                          onClick={() => setAboutDropdownOpen(false)}
                          className={`group flex items-start gap-3 rounded-2xl p-2.5 transition-all duration-200 ${
                            active
                              ? "bg-emerald-50 text-emerald-950 border border-emerald-200/70"
                              : "hover:bg-[#f3fbf6] text-slate-800 hover:text-emerald-900"
                          }`}
                        >
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition ${
                              active
                                ? "bg-emerald-600 text-white shadow-xs"
                                : "bg-emerald-100/70 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white"
                            }`}
                          >
                            <Icon size={17} />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5 font-bold text-sm">
                              <span>{item.name}</span>
                              {active && (
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                              )}
                            </div>
                            <p className="mt-0.5 text-xs text-slate-500 line-clamp-1 leading-snug">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 5. Contact Us CTA Button */}
          <Link
            href="/contact"
            scroll={true}
            className={`inline-flex items-center gap-2 rounded-full bg-emerald-600 font-bold text-white shadow-md shadow-emerald-600/20 transition-all duration-300 hover:bg-emerald-700 hover:scale-105 ${
              isScrolled
                ? "px-5 py-2 text-xs lg:text-sm"
                : "px-6 py-2.5 text-xs lg:text-sm"
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

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-emerald-100 bg-[#f3fbf6] px-4 py-5 shadow-xl md:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-1.5">
              {/* Home */}
              <Link
                href="/"
                scroll={true}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  pathname === "/"
                    ? "bg-emerald-100/90 text-emerald-900 font-bold border border-emerald-200"
                    : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                }`}
              >
                <span>Home</span>
                {pathname === "/" && <span className="h-2 w-2 rounded-full bg-emerald-600" />}
              </Link>

              {/* Services */}
              <Link
                href="/services"
                scroll={true}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  pathname === "/services"
                    ? "bg-emerald-100/90 text-emerald-900 font-bold border border-emerald-200"
                    : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                }`}
              >
                <span>Services</span>
                {pathname === "/services" && <span className="h-2 w-2 rounded-full bg-emerald-600" />}
              </Link>

              {/* Our Projects */}
              <Link
                href="/projects"
                scroll={true}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  pathname === "/projects"
                    ? "bg-emerald-100/90 text-emerald-900 font-bold border border-emerald-200"
                    : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                }`}
              >
                <span>Our Projects</span>
                {pathname === "/projects" && <span className="h-2 w-2 rounded-full bg-emerald-600" />}
              </Link>

              {/* Mobile About Accordion */}
              <div className="rounded-2xl border border-emerald-100 bg-white/70 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileAboutOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800 hover:text-emerald-800 transition"
                >
                  <span className={isAboutActive ? "font-bold text-emerald-900" : ""}>About Us</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileAboutOpen ? "rotate-180 text-emerald-700" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Sub-links */}
                <div className={`px-2 pb-2 space-y-1 ${mobileAboutOpen ? "block" : "hidden"}`}>
                  {aboutSubLinks.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.href;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        scroll={true}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold transition ${
                          active
                            ? "bg-emerald-100 text-emerald-950 font-bold"
                            : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-900"
                        }`}
                      >
                        <Icon size={14} className={active ? "text-emerald-700" : "text-slate-400"} />
                        <span>{item.name}</span>
                        {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-600" />}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Contact CTA */}
              <Link
                href="/contact"
                scroll={true}
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700"
              >
                <span>Contact Us</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}