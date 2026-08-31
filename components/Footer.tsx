import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Clock } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us & Leadership", href: "/about" },
  { name: "Services & Capabilities", href: "/services" },
  { name: "Project Gallery", href: "/gallery" },
  { name: "Contact & Headquarters", href: "/contact" },
];

const serviceLinks = [
  { name: "Electric Bus Operations", href: "/services" },
  { name: "Maintenance Manpower Service", href: "/services" },
  { name: "Driver & Crew Deployment", href: "/services" },
  { name: "Depot Management", href: "/services" },
  { name: "Charging Operations", href: "/services" },
  { name: "24×7 Rapid Support", href: "/services" },
];

const partnerNames = ["Olectra", "Envy Trans", "Varde Mobility", "Electreon"];

export default function Footer() {
  return (
    <footer className="bg-[#e4f4e9] text-slate-900 border-t border-emerald-200/90 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:px-8">
        
        {/* =======================================================
            MAIN 4-COLUMN FOOTER GRID
        ======================================================= */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 sm:gap-12">
          
          {/* Col 1: Brand & Profile (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Image
                src="/dada-green-logo-ultra-hd.png"
                alt="Dada Green E-Mobility LLP"
                width={348}
                height={60}
                className="h-11 sm:h-13 md:h-14 w-auto object-contain"
                priority
                unoptimized
              />
            </Link>

            <p className="mt-5 text-sm leading-6 text-slate-700">
              <strong>Dada Green E-Mobility LLP</strong> delivers end-to-end electric bus fleet operations, <strong>Maintenance Manpower Service</strong>, depot management, and trained driver deployment across India.
            </p>

            {/* Trusted by chips */}
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                Trusted By Industry Leaders:
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {partnerNames.map((p) => (
                  <span
                    key={p}
                    className="rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-slate-800 border border-emerald-200/80 shadow-xs"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Core Services (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-950 border-b border-emerald-300/60 pb-2">
              Our Services
            </h4>

            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-700 transition hover:text-emerald-800 font-medium"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 transition-transform group-hover:scale-150" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-950 border-b border-emerald-300/60 pb-2">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-700 transition hover:text-emerald-800 font-medium hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-950 border-b border-emerald-300/60 pb-2">
              Headquarters Office
            </h4>

            <div className="mt-4 space-y-3.5 text-sm">
              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=13%2C+Srinath+Arcade+Mansa-+Gandhinagar+Road%2C+Mansa%2C+Near+Hyundai+Showroom"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 text-slate-700 hover:text-emerald-800 transition leading-snug"
              >
                <MapPin size={17} className="mt-0.5 shrink-0 text-emerald-700" />
                <span>
                  <strong className="text-slate-950 font-bold block">13, Srinath Arcade</strong>
                  Mansa-Gandhinagar Road, Mansa, Near Hyundai Showroom, Gujarat, India.
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+918866554242"
                className="flex items-center gap-2.5 text-slate-700 hover:text-emerald-800 transition font-semibold"
              >
                <Phone size={16} className="shrink-0 text-emerald-700" />
                <span>+91 88665 54242</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@dadagreens.com"
                className="flex items-center gap-2.5 text-slate-700 hover:text-emerald-800 transition font-semibold break-all"
              >
                <Mail size={16} className="shrink-0 text-emerald-700" />
                <span>info@dadagreens.com</span>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-2.5 text-xs text-slate-600 pt-1">
                <Clock size={15} className="shrink-0 text-emerald-700" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* =======================================================
            BOTTOM COPYRIGHT & BADGES BAR
        ======================================================= */}
        <div className="mt-12 sm:mt-16 border-t border-emerald-300/70 pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} <strong>Dada Green E-Mobility LLP</strong>. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-emerald-900 font-semibold flex-wrap">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} className="text-emerald-700" /> 100% Zero-Emission
            </span>
            <span>•</span>
            <span>600+ Skilled Workforce</span>
            <span>•</span>
            <span>24×7 Operations Support</span>
          </div>
        </div>

      </div>
    </footer>
  );
}