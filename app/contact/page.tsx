"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setMessage("Contact form is not configured correctly. Please try again later or reach us directly by phone or email.");
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "New Contact Enquiry - Dada Green E-Mobility");
    formData.append("from_name", "Dada Green Website");

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage("Thank you! Your message has been sent successfully. Our operations team in Mansa will contact you shortly.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(result.message || "Something went wrong. Please try again or contact us directly by email.");
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      setStatus("error");
      setMessage("Unable to send your message right now. Please try again later or call our office.");
    }
  }

  return (
    <main className="bg-[#f3fbf6] text-slate-950 min-h-screen">
      {/* =========================================================
          HERO SECTION (Light Green)
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f6ec] via-[#f0faf3] to-[#f3fbf6] px-4 sm:px-6 pt-12 pb-16 sm:pt-16 sm:pb-24 text-slate-950 lg:px-8 lg:pt-20 lg:pb-28 border-b border-emerald-100">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/90 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-900 shadow-sm">
              <Mail size={14} className="text-emerald-700 shrink-0" />
              <span>Contact & Operations Office</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight text-slate-950">
              Let&apos;s build sustainable
              <span className="block text-emerald-700">
                mobility together.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-700 md:text-xl">
              Have an electric bus route requirement, maintenance manpower inquiry, or charging depot project? Connect directly with the Dada Green operations team in Mansa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTACT SPLIT SECTION
      ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

            {/* LEFT COLUMN: EXECUTIVE CONTACT CARDS */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 shadow-sm">
                <Sparkles size={13} className="text-emerald-700" />
                <span>Get In Touch</span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
                We&apos;re here to power your operations.
              </h2>

              <p className="mt-3 text-base leading-7 text-slate-600">
                Reach out for electric bus fleet management, specialized maintenance manpower, driver deployment, or general business inquiries.
              </p>

              <div className="mt-8 space-y-4">
                {/* Phone Card */}
                <a
                  href="tel:+918866554242"
                  className="group flex items-start gap-4 rounded-3xl border border-emerald-100 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white shadow-sm">
                    <Phone size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Phone Number
                    </p>
                    <p className="mt-1 text-base sm:text-lg font-bold text-slate-950 group-hover:text-emerald-700 transition-colors">
                      +91 88665 54242
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Monday to Saturday, 9:00 AM - 7:00 PM</p>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:info@dadagreens.com"
                  className="group flex items-start gap-4 rounded-3xl border border-emerald-100 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white shadow-sm">
                    <Mail size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Email Address
                    </p>
                    <p className="mt-1 text-base sm:text-lg font-bold text-slate-950 group-hover:text-emerald-700 transition-colors break-all">
                      info@dadagreens.com
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Fast responses for commercial inquiries</p>
                  </div>
                </a>

                {/* Address Card */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=13%2C+Srinath+Arcade+Mansa-+Gandhinagar+Road%2C+Mansa%2C+Near+Hyundai+Showroom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-3xl border border-emerald-100 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white shadow-sm">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Headquarters Office
                    </p>
                    <div className="mt-1 text-sm sm:text-base font-semibold leading-relaxed text-slate-900 group-hover:text-emerald-800 transition-colors">
                      <strong className="block text-base font-bold text-slate-950">Dada Green E-Mobility</strong>
                      13, Srinath Arcade Mansa- Gandhinagar Road,
                      <br />
                      Mansa, Near Hyundai Showroom,
                      <br />
                      Gujarat, India
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: MODERN CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-emerald-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xl shadow-emerald-950/5"
            >
              <div className="mb-6">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  Direct Inquiry Form
                </span>
                <h3 className="mt-3 text-2xl font-bold text-slate-950">
                  Send an Operations Inquiry
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  Fill in your fleet requirements and our team will get back to you promptly.
                </p>
              </div>

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs sm:text-sm font-semibold text-slate-900">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Rajesh Patel"
                    className="w-full rounded-2xl border border-slate-200 bg-[#fbfdfc] px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs sm:text-sm font-semibold text-slate-900">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full rounded-2xl border border-slate-200 bg-[#fbfdfc] px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-xs sm:text-sm font-semibold text-slate-900">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full rounded-2xl border border-slate-200 bg-[#fbfdfc] px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-xs sm:text-sm font-semibold text-slate-900">
                    Company / Transit Authority
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="e.g. City Bus Service / Logistics Operator"
                    className="w-full rounded-2xl border border-slate-200 bg-[#fbfdfc] px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs sm:text-sm font-semibold text-slate-900">
                    Requirements / Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your fleet size, maintenance manpower needs, driver requirements, or depot location..."
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-[#fbfdfc] px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-900">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                    <p>{message}</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                    {message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 font-bold text-white shadow-lg shadow-emerald-600/20 transition duration-300 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer hover:scale-102"
                >
                  <Send size={16} />
                  <span>{status === "sending" ? "Sending Message..." : "Submit Inquiry"}</span>
                </button>

                <p className="text-center text-xs text-slate-500">
                  🔒 Your information is confidential and will only be used to respond to your inquiry.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE GOOGLE MAP CONTAINER
      ========================================================= */}
      <section className="bg-[#edf7f1] py-16 sm:py-20 border-t border-emerald-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
                <MapPin size={13} className="text-emerald-700" />
                <span>Headquarters Map</span>
              </div>

              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-950">
                Find Our Mansa Operations Office
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                13, Srinath Arcade, Mansa-Gandhinagar Road, Mansa, Near Hyundai Showroom, Gujarat.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=13%2C+Srinath+Arcade+Mansa-+Gandhinagar+Road%2C+Mansa%2C+Near+Hyundai+Showroom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-emerald-800 border border-emerald-200 shadow-sm transition hover:bg-emerald-50 shrink-0"
            >
              <span>Open in Google Maps</span>
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Embedded Google Map Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl border border-emerald-200 bg-white shadow-xl shadow-emerald-950/5"
          >
            <iframe
              src="https://maps.google.com/maps?q=Srinath+Arcade,+Mansa-Gandhinagar+Road,+Mansa,+Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              className="h-[320px] sm:h-[400px] md:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Dada Green E-Mobility office location in Mansa"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}