"use client";

import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Users,
  ShieldCheck,
  Lightbulb,
  Target,
  MapPin,
  Sparkles,
  Building,
  CheckCircle2,
  Award,
} from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const leadership = [
  {
    name: "Mrs. Rinaben Chaudhari",
    role: "Founder & Managing Partner",
    initials: "RC",
    description:
      "Providing foundational strategic leadership, statutory governance, and driving the long-term vision of zero-emission transit operations across India.",
    expertise: "Corporate Governance & Strategic Vision",
  },
  {
    name: "Mr. Ajaybhai Chaudhari",
    role: "Co-Founder & Executive Director",
    initials: "AC",
    description:
      "Spearheading strategic expansions, public transit authority partnerships, EV OEM alliances, and nationwide commercial service contracts.",
    expertise: "Fleet Scale & Client Partnerships",
  },
  {
    name: "Mr. Dineshbhai Chaudhari",
    role: "General Manager & Operations Head",
    initials: "DC",
    description:
      "Overseeing daily route operations, 600+ deployed personnel, depot mobilization, fleet availability KPIs, and on-ground transit execution.",
    expertise: "Transit Operations & Workforce Mobilization",
  },
  {
    name: "Technical & Workshop Lead",
    role: "Head of EV Technical Services",
    initials: "TL",
    description:
      "Directing preventive maintenance schedules, high-voltage battery diagnostic SOPs, workshop bay toolings, and rapid breakdown recovery SLAs.",
    expertise: "EV Powertrain & High-Voltage Systems",
  },
  {
    name: "HR & Compliance Head",
    role: "Head of HR & Statutory Compliance",
    initials: "HR",
    description:
      "Managing continuous recruitment, driver background vetting, biometric attendance, PF & ESIC statutory audits, and workforce welfare.",
    expertise: "Manpower Deployment & Labor Law Compliance",
  },
];

const peopleStats = [
  {
    number: 600,
    suffix: "+",
    label: "Drivers & Technicians",
    subtext: "On-ground operations & maintenance workforce",
  },
  {
    number: 50,
    suffix: "+",
    label: "Operations & Back-Office",
    subtext: "Fleet coordinators, supervisors & support team",
  },
  {
    number: 10,
    suffix: "",
    label: "Finance & Accounts",
    subtext: "Commercial compliance & financial oversight",
  },
  {
    number: 6,
    suffix: "",
    label: "HR & Recruitment",
    subtext: "Workforce vetting, training & welfare",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Operational Reliability",
    text: "Building dependable mobility and maintenance operations with disciplined SOPs, safety standards, and service quality.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    text: "Accelerating India's transition to 100% zero-emission urban transportation and cleaner air for our cities.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    text: "Adopting modern telemetry, intelligent charging management, and proactive maintenance workflows.",
  },
  {
    icon: Users,
    title: "People First",
    text: "Empowering our large workforce of EV drivers, technicians, mechanics, and supervisors with dignified employment and safety.",
  },
];

const gujaratLocations = [
  "Mansa (Headquarters)",
  "Ahmedabad Depot",
  "Gandhinagar Depot",
  "Surat EV Terminal",
  "Morbi Operations Hub",
  "Rajkot Transit Depot",
  "Vadodara Fleet Base",
  "Jamnagar Station",
];

const maharashtraLocations = [
  "Nagpur Fleet Base",
  "Amravati Transit Hub",
  "Chandrapur Terminal",
  "Bhandara Operations",
];

export default function AboutPage() {
  return (
    <main className="bg-[#f3fbf6] text-slate-950 min-h-screen">
      {/* =========================================================
          HERO SECTION (Light Green)
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f6ec] via-[#f0faf3] to-[#f3fbf6] pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-emerald-100">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/90 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-900 shadow-sm">
              <Leaf size={14} className="text-emerald-700 shrink-0" />
              <span>About Dada Green E-Mobility</span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight text-slate-950">
              Built for a
              <span className="block text-emerald-700">
                greener tomorrow.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-700 md:text-xl">
              Dada Green E-Mobility LLP is working at the forefront of India&apos;s electric mobility revolution. Headquartered in Mansa (Gujarat), we provide end-to-end electric bus fleet operations, dedicated maintenance manpower services, depot management, and trained driver deployment.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/services"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 font-bold text-white shadow-md transition hover:bg-emerald-700 hover:scale-102"
              >
                <span>Our Core Services</span>
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-emerald-700/20 bg-white/80 px-7 py-4 font-bold text-emerald-950 transition hover:bg-emerald-100/60"
              >
                <span>Visit Mansa Headquarters</span>
              </Link>
            </div>
          </motion.div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 border-t border-emerald-200/90 pt-6 sm:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-3xl bg-white p-5 border border-emerald-100 shadow-sm"
            >
              <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider">Mission</p>
              <p className="mt-1 font-bold text-slate-950 text-base sm:text-lg">
                Sustainable EV Operations & Maintenance
              </p>
              <p className="text-xs text-slate-600 mt-1">100% Zero-Emission Fleet</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-3xl bg-white p-5 border border-emerald-100 shadow-sm"
            >
              <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider">Workforce</p>
              <p className="mt-1 font-bold text-slate-950 text-base sm:text-lg">
                600+ Skilled Technicians & Drivers
              </p>
              <p className="text-xs text-slate-600 mt-1">Nationwide depot presence</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="rounded-3xl bg-white p-5 border border-emerald-100 shadow-sm"
            >
              <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider">Headquarters</p>
              <p className="mt-1 font-bold text-slate-950 text-base sm:text-lg">
                Mansa, Gandhinagar Road, Gujarat
              </p>
              <p className="text-xs text-slate-600 mt-1">13, Srinath Arcade</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR STORY & MISSION
      ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 shadow-sm">
                <Sparkles size={13} className="text-emerald-700" />
                <span>Our Story</span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-slate-950">
                Moving beyond vehicles.
                <span className="block text-emerald-700">
                  Building operational backbone.
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-slate-700">
                Dada Green E-Mobility LLP was founded with the mission of turning the promise of green urban mobility into reliable daily operations. While electric buses represent the vehicle technology, their long-term success relies on disciplined manpower, strict maintenance protocols, and seamless depot execution.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-slate-600">
                Today, Dada Green manages electric fleets and maintenance manpower across major municipal and private transit routes in Gujarat and Maharashtra, trusted by leading partners including Olectra, Evey Trans, Varde Mobility, and Electreon.
              </p>
            </motion.div>

            {/* Mission & Vision Bento Cards */}
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-emerald-200/90 bg-white p-6 sm:p-8 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 font-bold shadow-sm">
                  <Target size={22} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-950">Our Mission</h3>
                <p className="mt-2 text-sm sm:text-base leading-6 text-slate-600">
                  To provide premier operational reliability, specialized maintenance manpower, and disciplined fleet execution for electric mobility projects across India.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-emerald-200/90 bg-white p-6 sm:p-8 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 font-bold shadow-sm">
                  <Lightbulb size={22} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-950">Our Vision</h3>
                <p className="mt-2 text-sm sm:text-base leading-6 text-slate-600">
                  To be India&apos;s most trusted electric mobility operations and maintenance partner, powering zero-emission public and commercial transit in every major Indian city.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ORGANIZATION SCALE & PEOPLE STATS
      ========================================================= */}
      <section className="bg-[#edf7f1] py-16 sm:py-20 border-y border-emerald-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
              <Users size={13} className="text-emerald-700" />
              <span>Our People & Workforce</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Powered by disciplined operational teams
            </h2>

            <p className="mt-3 text-base text-slate-600">
              A large, certified, and dedicated team on the ground and behind the scenes.
            </p>
          </motion.div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {peopleStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-emerald-100 bg-white p-6 sm:p-7 shadow-sm transition duration-300 hover:border-emerald-300 hover:shadow-md text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-slate-950 flex items-center justify-center gap-1">
                  <CountUp end={stat.number} duration={2.5} enableScrollSpy scrollSpyOnce />
                  <span className="text-emerald-600">{stat.suffix}</span>
                </div>

                <h3 className="mt-2 text-base font-bold text-slate-950">
                  {stat.label}
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  {stat.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LEADERSHIP & FOUNDERS
      ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 shadow-sm">
              <Award size={13} className="text-emerald-700" />
              <span>Leadership</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Guiding Dada Green&apos;s Mission
            </h2>

            <p className="mt-3 text-base text-slate-600">
              Experienced leadership committed to operational discipline and sustainable mobility growth.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-emerald-100/90 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    {/* Executive Initial Badge */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7f6ec] text-emerald-900 font-bold text-lg border border-emerald-200 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition">
                      {leader.initials}
                    </div>

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                      {leader.role}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-950 group-hover:text-emerald-800 transition-colors">
                    {leader.name}
                  </h3>

                  <div className="mt-1.5 text-xs font-semibold text-emerald-700">
                    {leader.expertise}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {leader.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  <span>Executive Leadership</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OPERATIONAL PRESENCE & DEPOTS
      ========================================================= */}
      <section className="bg-[#edf7f1] py-16 sm:py-20 border-y border-emerald-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
              <Building size={13} className="text-emerald-700" />
              <span>Nationwide Footprint</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Operational Presence Across Key Regions
            </h2>

            <p className="mt-3 text-base text-slate-600">
              Dada Green operates transit depots, workshop bays, and crew deployment centers across major transit hubs in Gujarat and Maharashtra.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Gujarat Hubs */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-emerald-200 bg-white p-6 sm:p-8 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <MapPin size={18} className="text-emerald-700" />
                <span>Gujarat Depots & Operations</span>
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
                {gujaratLocations.map((loc) => (
                  <div
                    key={loc}
                    className="flex items-center gap-2 rounded-2xl bg-[#f7fcf9] p-3 text-xs sm:text-sm font-semibold text-slate-800 border border-emerald-100"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Maharashtra Hubs */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-emerald-200 bg-white p-6 sm:p-8 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <MapPin size={18} className="text-emerald-700" />
                <span>Maharashtra Depots & Operations</span>
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
                {maharashtraLocations.map((loc) => (
                  <div
                    key={loc}
                    className="flex items-center gap-2 rounded-2xl bg-[#f7fcf9] p-3 text-xs sm:text-sm font-semibold text-slate-800 border border-emerald-100"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE VALUES
      ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Our Core Operational Values
            </h2>
            <p className="mt-3 text-base text-slate-600">
              The fundamental principles that guide our day-to-day work.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {values.map((v, index) => {
              const Icon = v.icon;

              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-emerald-100 bg-white p-6 sm:p-7 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">{v.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-600">{v.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

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
                <span>Join Our Green Movement</span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
                Let&apos;s build sustainable
                <span className="block text-emerald-700">mobility together.</span>
              </h2>

              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-700">
                Connect with our leadership and operations team in Mansa to partner on electric bus operations, maintenance manpower, and sustainable transit.
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