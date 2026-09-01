"use client";

import { ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Olectra",
    description: "Electric Bus & Heavy Mobility Leader",
    tag: "EV Partner",
  },
  {
    name: "Evey Trans",
    description: "Green Transportation & Transit Operations",
    tag: "Transit Partner",
  },
  {
    name: "GSRTC",
    description: "State Road Transport Corporation Operations",
    tag: "Public Transit",
  },
  {
    name: "Varde Mobility",
    description: "Electric Mobility Solutions",
    tag: "Mobility Partner",
  },
];

export default function TrustedBy() {
  return (
    <section className="border-y border-emerald-200/70 bg-[#edf7f1] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 shadow-sm">
            <Sparkles size={13} className="text-emerald-700" />
            <span>Trusted Partnerships</span>
          </div>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-950">
            Trusted by organizations advancing green mobility
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-slate-600">
            Partnering with electric vehicle manufacturers, public transit authorities, and mobility leaders.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 border border-emerald-100">
                    <ShieldCheck size={13} className="text-emerald-600" />
                    {partner.tag}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-emerald-800 transition-colors">
                  {partner.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                <span>Verified Partner</span>
                <span className="font-mono text-[11px] text-slate-400">#0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}