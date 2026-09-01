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
  Building2,
  FileCheck2,
} from "lucide-react";
import { motion } from "framer-motion";

const hiringRoles = [
  {
    icon: HardHat,
    title: "Electric Bus Drivers",
    badge: "Heavy Commercial License",
    description:
      "Operating modern electric buses on scheduled city and intercity transit routes with defensive driving and regenerative braking expertise.",
    skills: ["Valid Heavy Vehicle License (HMV)", "Clean Driving Track Record", "Passenger Safety Discipline"],
  },
  {
    icon: Zap,
    title: "EV Maintenance Technicians",
    badge: "Mechanical & Automobile",
    description:
      "Executing daily preventive maintenance, pneumatic brake servicing, chassis diagnostics, and depot workshop upkeep.",
    skills: ["ITI / Diploma in Automobile/Mechanical", "Workshop Tooling Competency", "Preventive Maintenance SOPs"],
  },
  {
    icon: Sparkles,
    title: "Auto Electricians (High Voltage)",
    badge: "Electrical & BMS",
    description:
      "Diagnosing high-voltage battery management systems, motor inverters, low-voltage wiring harnesses, and DC fast charger interfaces.",
    skills: ["Certified Auto Electrician / ITI", "High-Voltage Safety Standards", "CAN-Bus & BMS Diagnostic Checks"],
  },
  {
    icon: UserCheck,
    title: "Depot Workshop Supervisors",
    badge: "Operations & Leadership",
    description:
      "Leading technical shift teams, managing turnaround time for maintenance bays, and ensuring zero-defect morning rollouts.",
    skills: ["Diploma / Degree in Engineering", "Technical Team Management", "Inventory & Job Card Reporting"],
  },
  {
    icon: Building2,
    title: "Depot Operations Managers",
    badge: "Transit Management",
    description:
      "Overseeing complete depot KPIs including driver rosters, fleet uptime, charging turnaround, and transit authority coordination.",
    skills: ["5+ Years Fleet / Depot Experience", "Labor & Safety Compliance", "SLA & Route Punctuality Management"],
  },
  {
    icon: Users,
    title: "Fleet & Shift Coordinators",
    badge: "Control Room & MIS",
    description:
      "Monitoring real-time telemetry, GPS route tracking, battery state-of-charge (SoC), and attendance roster logging.",
    skills: ["Basic Computer & Telemetry Skills", "Shift Handover Coordination", "Effective Communication"],
  },
];

const benefitsList = [
  {
    icon: Clock,
    title: "Fixed Monthly Salary",
    desc: "100% on-time electronic wage transfer on a fixed monthly date.",
  },
  {
    icon: ShieldCheck,
    title: "PF & ESIC Health Benefits",
    desc: "Complete statutory Provident Fund (PF) and ESIC healthcare security for your family.",
  },
  {
    icon: Zap,
    title: "OEM Technical Skill Training",
    desc: "Hands-on certification training on modern electric powertrains and high-voltage safety.",
  },
  {
    icon: Award,
    title: "Clear Career Growth",
    desc: "Structured advancement tracks from Driver/Technician to Supervisor and Depot Manager.",
  },
  {
    icon: HardHat,
    title: "Safety Gear & Uniforms",
    desc: "Full provision of certified 1000V PPE, safety boots, high-visibility jackets, and uniforms.",
  },
  {
    icon: Building2,
    title: "Depot Rest Facilities",
    desc: "Clean driver restrooms, drinking water, and dormitory support at major transit hubs.",
  },
];

const hiringSteps = [
  {
    step: "01",
    title: "Submit Details or WhatsApp",
    desc: "Fill the fast application form below or message our HR recruitment desk on WhatsApp.",
  },
  {
    step: "02",
    title: "Document & Skill Assessment",
    desc: "Our recruitment officers verify your driving license / ITI certificate and schedule an interview.",
  },
  {
    step: "03",
    title: "Training & Depot Deployment",
    desc: "Undergo EV safety induction training and get deployed at an operational depot near your location.",
  },
];

export default function CareersPage() {
  const [applyingFor, setApplyingFor] = useState<string>("Electric Bus Driver");
  const [applicantName, setApplicantName] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantLocation, setApplicantLocation] = useState("");
  const [applicantExperience, setApplicantExperience] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleQuickApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantPhone) return;

    setFormStatus("submitting");

    const msg = `*Job Application - Dada Green E-Mobility*%0A%0A*Position:* ${encodeURIComponent(
      applyingFor
    )}%0A*Name:* ${encodeURIComponent(applicantName)}%0A*Phone:* ${encodeURIComponent(
      applicantPhone
    )}%0A*Location / City:* ${encodeURIComponent(
      applicantLocation || "Not specified"
    )}%0A*Experience / License:* ${encodeURIComponent(applicantExperience || "Fresh / General")}`;

    setTimeout(() => {
      setFormStatus("success");
      window.open(`https://wa.me/918866554242?text=${msg}`, "_blank");
    }, 500);
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
              <span>Join Our 1000+ Operational Workforce</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-950">
              Build your career in
              <span className="block text-emerald-700">green electric mobility.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-slate-700">
              We offer stable careers, on-time monthly salaries, Provident Fund (PF), ESIC health benefits, professional training certifications, and growth opportunities across Gujarat and Maharashtra.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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

          {/* Quick Stats Strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">1000+</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Active Deployed Workforce</div>
            </div>

            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">100%</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">PF & ESIC Compliance</div>
            </div>

            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">8+ Hubs</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Gujarat & Maharashtra</div>
            </div>

            <div className="rounded-3xl bg-white p-5 border border-emerald-200/90 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">On-Time</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Fixed Monthly Salary</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ROLES WE REGULARLY HIRE FOR
      ========================================================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto pb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
              <Briefcase size={13} className="text-emerald-700" />
              <span>Career Opportunities</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Roles We Regularly Deploy
            </h2>

            <p className="mt-3 text-base text-slate-600">
              As an expanding electric mobility operations company, we continuously recruit and mobilize talent across several key technical and driving functions.
            </p>
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiringRoles.map((role, index) => {
              const Icon = role.icon;

              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 border border-emerald-100/90 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf7f1] text-emerald-700 border border-emerald-200 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                        <Icon size={22} />
                      </div>

                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200/60">
                        {role.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-950 group-hover:text-emerald-800 transition-colors">
                      {role.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {role.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 mb-2">
                        Preferred Qualifications:
                      </div>
                      <div className="space-y-1">
                        {role.skills.map((skill, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                            <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => {
                        setApplyingFor(role.title);
                        const el = document.getElementById("apply-form");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white py-2.5 text-xs font-bold transition cursor-pointer"
                    >
                      <span>Apply for this Role</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          BENEFITS & EMPLOYEE WELFARE
      ========================================================= */}
      <section className="bg-[#edf7f1] py-16 sm:py-20 border-y border-emerald-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto pb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Why Work With Dada Green?
            </h2>
            <p className="mt-2 text-base text-slate-600">
              We provide our on-ground crew with dignity, industry-standard safety, and career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsList.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-3xl bg-white p-6 border border-emerald-100 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#edf7f1] text-emerald-700 border border-emerald-200">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          3-STEP RECRUITMENT PROCESS & APPLICATION DESK
      ========================================================= */}
      <section id="apply-form" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: How We Recruit (lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
                  <FileCheck2 size={13} className="text-emerald-700" />
                  <span>Simple Hiring Process</span>
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
                  How Our Recruitment Works
                </h2>

                <p className="mt-3 text-base text-slate-600 leading-relaxed">
                  Joining Dada Green is straightforward. Whether you are an experienced heavy bus driver or an automobile technician, our recruitment officers support you through onboarding.
                </p>

                <div className="mt-8 space-y-6">
                  {hiringSteps.map((step) => (
                    <div key={step.step} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white font-mono font-bold text-lg shrink-0 shadow-sm">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-950">{step.title}</h3>
                        <p className="mt-1 text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Call Assistance */}
              <div className="mt-10 rounded-3xl bg-white p-6 border border-emerald-200/80 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 shrink-0">
                    <PhoneCall size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">Direct HR Recruitment Helpline</h4>
                    <p className="text-xs text-slate-600">Speak directly with our hiring managers</p>
                    <a href="tel:+918866554242" className="text-sm font-bold text-emerald-700 hover:underline">
                      +91 88665 54242
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick Application Form (lg:col-span-6) */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 border border-emerald-200/90 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/60 w-fit">
                  <Sparkles size={13} />
                  <span>HR Recruitment Desk</span>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-slate-950">
                  Quick Job Application
                </h3>

                <p className="mt-1.5 text-sm text-slate-600">
                  Submit your details below to connect directly with our HR team on WhatsApp or phone.
                </p>

                <form onSubmit={handleQuickApply} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Position of Interest *
                    </label>
                    <select
                      value={applyingFor}
                      onChange={(e) => setApplyingFor(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white"
                    >
                      {hiringRoles.map((r) => (
                        <option key={r.title} value={r.title}>
                          {r.title}
                        </option>
                      ))}
                      <option value="Other / General Application">Other / General Technical Application</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white"
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
                      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Current City / District
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mansa, Gandhinagar, Ahmedabad, Nagpur"
                      value={applicantLocation}
                      onChange={(e) => setApplicantLocation(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Experience / Driving License / Education
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 3 Years Heavy Bus License / ITI Mechanical"
                      value={applicantExperience}
                      onChange={(e) => setApplicantExperience(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 py-4 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 hover:scale-102 cursor-pointer disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? (
                      <span>Redirecting to WhatsApp...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Application (Instant WhatsApp / HR)</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <a
                      href="https://wa.me/918866554242?text=Hello%20Dada%20Green%20HR,%20I%20want%20to%20apply%20for%20a%20job"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:underline"
                    >
                      <MessageSquare size={13} />
                      <span>Or Click Here to Message HR Directly on WhatsApp</span>
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
