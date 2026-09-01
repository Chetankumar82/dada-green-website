"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  Briefcase,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Send,
  MessageSquare,
  PhoneCall,
  UserCheck,
  Award,
  Zap,
  HardHat,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { jobOpenings, JobOpening } from "@/data/careersData";

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "Drivers" | "Technicians" | "Operations" | "Management"
  >("All");

  const [expandedJobId, setExpandedJobId] = useState<string | null>(jobOpenings[0]?.id || null);

  const [applyingFor, setApplyingFor] = useState<string>("Electric Bus Driver");
  const [applicantName, setApplicantName] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantLocation, setApplicantLocation] = useState("");
  const [applicantExperience, setApplicantExperience] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const filteredJobs =
    selectedCategory === "All"
      ? jobOpenings
      : jobOpenings.filter((job) => job.category === selectedCategory);

  const handleQuickApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantPhone) return;

    setFormStatus("submitting");

    // Format WhatsApp direct message
    const msg = `*Job Application - Dada Green E-Mobility*%0A%0A*Position:* ${encodeURIComponent(
      applyingFor
    )}%0A*Name:* ${encodeURIComponent(applicantName)}%0A*Phone:* ${encodeURIComponent(
      applicantPhone
    )}%0A*City / Location:* ${encodeURIComponent(
      applicantLocation || "Not specified"
    )}%0A*Experience:* ${encodeURIComponent(applicantExperience || "Fresh / General")}`;

    setTimeout(() => {
      setFormStatus("success");
      // Redirect to WhatsApp
      window.open(`https://wa.me/918866554242?text=${msg}`, "_blank");
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#f3fbf6] text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f6ec] via-[#f0faf3] to-[#f3fbf6] pt-28 pb-16 sm:pt-36 sm:pb-20 border-b border-emerald-200/60">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
              <Users size={14} className="text-emerald-700" />
              <span>Join Our 600+ Operational Workforce</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-950">
              Build your career in
              <span className="block text-emerald-700">green electric mobility.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-slate-700">
              We offer stable careers, on-time monthly salaries, Provident Fund (PF), ESIC health benefits, professional training certifications, and growth opportunities across Gujarat and Maharashtra.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#apply-form"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 hover:scale-102"
              >
                <span>Apply Now (Instant Form)</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="https://wa.me/918866554242?text=Hello%20Dada%20Green%20HR,%20I%20want%20to%20apply%20for%20a%20job%20position"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-emerald-300 px-6 py-3.5 text-xs sm:text-sm font-bold text-emerald-800 shadow-xs hover:bg-emerald-50 transition"
              >
                <MessageSquare size={16} className="text-emerald-600" />
                <span>Apply via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Perks Row */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf7f1] text-emerald-700 mb-3">
                <ShieldCheck size={20} />
              </div>
              <div className="text-base font-bold text-slate-950">PF & ESIC Benefits</div>
              <div className="text-xs text-slate-600 mt-0.5">Medical & Family Coverage</div>
            </div>

            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf7f1] text-emerald-700 mb-3">
                <Clock size={20} />
              </div>
              <div className="text-base font-bold text-slate-950">Fixed Monthly Salary</div>
              <div className="text-xs text-slate-600 mt-0.5">100% On-Time Disbursal</div>
            </div>

            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf7f1] text-emerald-700 mb-3">
                <Zap size={20} />
              </div>
              <div className="text-base font-bold text-slate-950">EV Skill Training</div>
              <div className="text-xs text-slate-600 mt-0.5">OEM Certified Technical Skills</div>
            </div>

            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf7f1] text-emerald-700 mb-3">
                <Award size={20} />
              </div>
              <div className="text-base font-bold text-slate-950">Career Growth</div>
              <div className="text-xs text-slate-600 mt-0.5">Supervisor & Manager Tracks</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          JOB OPENINGS LISTING & QUICK APPLY
      ========================================================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Job Openings (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                  Open Positions
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Select a category to view job requirements and shift responsibilities.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 pb-2">
                {(["All", "Drivers", "Technicians", "Operations", "Management"] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "bg-white text-slate-600 hover:text-slate-950 border border-emerald-200/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Jobs Accordion */}
              <div className="space-y-4">
                {filteredJobs.map((job) => {
                  const isExpanded = expandedJobId === job.id;

                  return (
                    <div
                      key={job.id}
                      className={`rounded-3xl border bg-white transition duration-300 ${
                        isExpanded
                          ? "border-emerald-300 shadow-md ring-1 ring-emerald-200"
                          : "border-emerald-100 shadow-sm hover:border-emerald-200"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                        className="flex w-full items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                      >
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200/60">
                              {job.category}
                            </span>
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                              {job.type}
                            </span>
                            <span className="text-xs font-bold text-emerald-700">
                              {job.positions} Openings
                            </span>
                          </div>

                          <h3 className="mt-3 text-lg sm:text-xl font-bold text-slate-950">
                            {job.title}
                          </h3>

                          <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <MapPin size={13} className="text-emerald-600" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase size={13} className="text-emerald-600" />
                              {job.experience}
                            </span>
                          </div>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 shrink-0 ml-4">
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden border-t border-slate-100 px-5 pb-6 sm:px-6"
                          >
                            <p className="mt-4 text-sm leading-relaxed text-slate-600">
                              {job.description}
                            </p>

                            <div className="mt-5 space-y-4">
                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                                  Key Responsibilities:
                                </h4>
                                <div className="mt-2 space-y-1.5">
                                  {job.responsibilities.map((r, i) => (
                                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                                      <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                                      <span>{r}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                                  Candidate Requirements:
                                </h4>
                                <div className="mt-2 space-y-1.5">
                                  {job.requirements.map((req, i) => (
                                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                                      <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                                      <span>{req}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                                  Included Benefits & Welfare:
                                </h4>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {job.benefits.map((b, i) => (
                                    <span
                                      key={i}
                                      className="rounded-lg bg-[#edf7f1] px-2.5 py-1 text-xs font-medium text-emerald-900 border border-emerald-200"
                                    >
                                      ✓ {b}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Quick Select for Form */}
                            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                              <span className="text-xs text-slate-500 font-medium">
                                Ready to join?
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  setApplyingFor(job.title);
                                  const el = document.getElementById("apply-form");
                                  el?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 transition cursor-pointer"
                              >
                                <span>Apply for this Role</span>
                                <ArrowRight size={13} />
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Quick Application Form (lg:col-span-5) */}
            <div id="apply-form" className="lg:col-span-5">
              <div className="sticky top-28 rounded-3xl bg-white p-6 sm:p-8 border border-emerald-200/90 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/60 w-fit">
                  <Sparkles size={13} />
                  <span>Direct HR Application Desk</span>
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-slate-950">
                  Quick Job Application
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  Submit your details below. Our HR recruitment team will call or WhatsApp you directly within 24 hours.
                </p>

                <form onSubmit={handleQuickApply} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Position Applying For
                    </label>
                    <select
                      value={applyingFor}
                      onChange={(e) => setApplyingFor(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white"
                    >
                      {jobOpenings.map((j) => (
                        <option key={j.id} value={j.title}>
                          {j.title}
                        </option>
                      ))}
                      <option value="Other / General Application">Other / General Application</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Your Current City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mansa, Ahmedabad, Nagpur"
                      value={applicantLocation}
                      onChange={(e) => setApplicantLocation(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Years of Experience / License Type
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 3 Years Heavy Bus License / ITI Electrician"
                      value={applicantExperience}
                      onChange={(e) => setApplicantExperience(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 hover:scale-102 cursor-pointer disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Submit Application (via WhatsApp / HR)</span>
                      </>
                    )}
                  </button>

                  {formStatus === "success" && (
                    <div className="rounded-2xl bg-emerald-50 p-3 text-center text-xs font-bold text-emerald-800 border border-emerald-200">
                      ✓ Opening WhatsApp application window... Our HR team will connect with you!
                    </div>
                  )}

                  {/* Direct HR Helpline Call */}
                  <div className="pt-3 text-center border-t border-slate-100">
                    <p className="text-xs text-slate-500">
                      Prefer to speak directly with HR Recruitment?
                    </p>
                    <a
                      href="tel:+918866554242"
                      className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline"
                    >
                      <PhoneCall size={13} />
                      <span>Call Recruitment Desk: +91 88665 54242</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
