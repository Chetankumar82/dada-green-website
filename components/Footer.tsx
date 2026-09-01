import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Clock } from "lucide-react";

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Projects", href: "/projects" },
  { name: "Safety & Compliance", href: "/safety" },
  { name: "Careers", href: "/careers" },
  { name: "Gallery", href: "/gallery" },
];

const serviceLinks = [
  { name: "Electric Bus Operations", href: "/services" },
  { name: "Maintenance Manpower", href: "/services" },
  { name: "Driver & Crew Deployment", href: "/services" },
  { name: "Depot & Charging Management", href: "/services" },
];

const partnerNames = ["Olectra", "Evey Trans", "GSRTC", "Varde Mobility"];

export default function Footer() {
  return (
    <footer className="bg-[#e4f4e9] text-slate-900 border-t border-emerald-200/90 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 lg:px-8">
        
        {/* =======================================================
            COMPACT 4-COLUMN FOOTER GRID
        ======================================================= */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 sm:gap-10">
          
          {/* Col 1: Brand & Profile (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Image
                src="/dada-green-logo-ultra-hd.png"
                alt="Dada Green E-Mobility LLP"
                width={348}
                height={60}
                className="h-10 sm:h-12 w-auto object-contain"
                priority
                unoptimized
              />
            </Link>

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-700 max-w-md">
              Dada Green E-Mobility LLP delivers electric bus fleet operations, dedicated maintenance manpower, depot management, and trained crew deployment across India.
            </p>

            {/* Trusted by chips */}
            <div className="mt-4 flex items-center gap-2 flex-wrap text-xs text-slate-700 font-medium">
              <span className="font-bold text-emerald-950">Partners:</span>
              {partnerNames.map((p) => (
                <span
                  key={p}
                  className="rounded-md bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-800 border border-emerald-200 shadow-2xs"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Core Services (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-950 border-b border-emerald-300/60 pb-1.5">
              Services
            </h4>

            <ul className="mt-3.5 space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-xs sm:text-sm text-slate-700 transition hover:text-emerald-800 font-medium hover:underline block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-950 border-b border-emerald-300/60 pb-1.5">
              Company
            </h4>

            <ul className="mt-3.5 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-700 transition hover:text-emerald-800 font-medium hover:underline block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Headquarters (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-950 border-b border-emerald-300/60 pb-1.5">
              Headquarters
            </h4>

            <div className="mt-3.5 space-y-2.5 text-xs sm:text-sm">
              <a
                href="https://www.google.com/maps/search/?api=1&query=13%2C+Srinath+Arcade+Mansa-+Gandhinagar+Road%2C+Mansa%2C+Near+Hyundai+Showroom"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2 text-slate-700 hover:text-emerald-800 transition leading-snug"
              >
                <MapPin size={15} className="mt-0.5 shrink-0 text-emerald-700" />
                <span>
                  13, Srinath Arcade, Mansa-Gandhinagar Rd, Mansa, Gujarat.
                </span>
              </a>

              <a
                href="tel:+918866554242"
                className="flex items-center gap-2 text-slate-700 hover:text-emerald-800 transition font-semibold"
              >
                <Phone size={14} className="shrink-0 text-emerald-700" />
                <span>+91 88665 54242</span>
              </a>

              <a
                href="mailto:info@dadagreens.com"
                className="flex items-center gap-2 text-slate-700 hover:text-emerald-800 transition font-semibold"
              >
                <Mail size={14} className="shrink-0 text-emerald-700" />
                <span>info@dadagreens.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* =======================================================
            BOTTOM COPYRIGHT BAR
        ======================================================= */}
        <div className="mt-8 sm:mt-10 border-t border-emerald-300/70 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} <strong>Dada Green E-Mobility LLP</strong>. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-emerald-900 font-semibold flex-wrap">
            <span className="flex items-center gap-1">
              <ShieldCheck size={13} className="text-emerald-700" /> Zero-Emission
            </span>
            <span>•</span>
            <span>1000+ Skilled Workforce</span>
            <span>•</span>
            <span>24×7 Support</span>
          </div>
        </div>

      </div>
    </footer>
  );
}