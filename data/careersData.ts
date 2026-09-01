export interface JobOpening {
  id: string;
  title: string;
  category: "Drivers" | "Technicians" | "Operations" | "Management";
  location: string;
  positions: number;
  experience: string;
  type: "Full-Time" | "Rotational Shift";
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: "electric-bus-driver",
    title: "Electric Bus Driver (Heavy Commercial)",
    category: "Drivers",
    location: "Mansa, Gandhinagar, Ahmedabad, Surat, Nagpur",
    positions: 40,
    experience: "2+ Years (Heavy Vehicle License Required)",
    type: "Rotational Shift",
    description:
      "Deploy on scheduled electric bus passenger routes. Maintain defensive driving, smooth regenerative braking, passenger safety, and timetable punctuality.",
    responsibilities: [
      "Operate electric buses safely adhering to city transit routes and schedules",
      "Perform pre-trip and post-trip bus inspections (brakes, tires, battery SoC)",
      "Ensure polite passenger assistance and safe boarding/alighting procedures",
      "Follow eco-driving techniques to maximize regenerative battery efficiency",
    ],
    requirements: [
      "Valid Commercial Heavy Vehicle Driving License (HMV / Transport)",
      "Clean driving track record with zero major safety violations",
      "Basic understanding of EV digital dashboard displays and indicators",
      "Minimum 2 years of bus or heavy vehicle commercial driving experience",
    ],
    benefits: [
      "On-time competitive monthly salary + performance incentives",
      "Provident Fund (PF) & ESIC Medical Insurance coverage",
      "Provided uniform, safety shoes, and professional driver badge",
      "Restroom & dormitory support at terminal depots",
    ],
  },
  {
    id: "ev-maintenance-technician",
    title: "EV Maintenance Technician & Mechanical Crew",
    category: "Technicians",
    location: "Mansa, Ahmedabad, Surat, Nagpur Hubs",
    positions: 15,
    experience: "1-3 Years in Automotive / EV Servicing",
    type: "Full-Time",
    description:
      "Perform daily preventive maintenance, brake servicing, suspension checks, cooling system diagnostics, and mechanical upkeep for electric buses.",
    responsibilities: [
      "Execute scheduled preventive maintenance routines on electric buses",
      "Inspect chassis, pneumatic braking systems, air suspension, and steering components",
      "Assist electrical team during battery pack and motor inverter inspections",
      "Log job cards and component replacements accurately in workshop register",
    ],
    requirements: [
      "ITI / Diploma in Automobile or Mechanical Engineering (or equivalent experience)",
      "Prior experience in commercial bus, truck, or EV workshop servicing",
      "Familiarity with workshop pneumatic tools, hydraulic lifts, and torque wrenches",
      "Strict commitment to workshop PPE and safety procedures",
    ],
    benefits: [
      "Provident Fund (PF) + ESIC health coverage",
      "Overtime compensation & performance bonuses",
      "Continuous technical training on latest EV powertrain technologies",
      "Complete set of safety PPE and specialized toolkits",
    ],
  },
  {
    id: "auto-electrician-high-voltage",
    title: "Auto Electrician (High Voltage & EV Systems)",
    category: "Technicians",
    location: "Gujarat & Maharashtra Depots",
    positions: 10,
    experience: "2+ Years (Automotive Electrical / EV Experience Preferred)",
    type: "Full-Time",
    description:
      "Inspect, diagnose, and troubleshoot low-voltage and high-voltage wiring, sensors, battery management systems (BMS), telemetry units, and chargers.",
    responsibilities: [
      "Diagnose electrical faults, wiring harnesses, relays, and contactor boxes",
      "Monitor battery pack voltage balance, BMS fault codes, and CAN bus communication",
      "Conduct insulation resistance (megger) testing and high-voltage safety checks",
      "Support DC fast charger connectivity and charging protocol verification",
    ],
    requirements: [
      "ITI / Diploma in Electrical Engineering or certified Auto Electrician",
      "Understanding of DC circuit theory, relays, fuses, and multimeters/oscilloscopes",
      "Certified in High-Voltage (HV) safety precautions and insulated PPE use",
      "Ability to read automotive electrical wiring schematics accurately",
    ],
    benefits: [
      "Attractive salary package with specialized skill allowances",
      "Full PF & ESIC benefits + group accidental insurance",
      "Hands-on OEM manufacturer training certifications",
      "Fast-track career advancement to Workshop Supervisor",
    ],
  },
  {
    id: "depot-workshop-supervisor",
    title: "Depot Workshop Supervisor",
    category: "Operations",
    location: "Mansa & Nagpur Depots",
    positions: 5,
    experience: "3-5 Years in Fleet / Depot Supervision",
    type: "Full-Time",
    description:
      "Oversee shift technicians, ensure turnaround time for maintenance bays, verify safety compliance, and maintain 99%+ fleet availability for morning rollout.",
    responsibilities: [
      "Manage maintenance shift allocations, job card sign-offs, and breakdown response",
      "Ensure zero defect buses are dispatched for scheduled commercial transit",
      "Conduct daily morning safety tool-box talks and PPE audits for maintenance crew",
      "Track spare parts inventory, consumables, and lubricant stock levels",
    ],
    requirements: [
      "Diploma / Degree in Mechanical / Electrical / Automobile Engineering",
      "Proven leadership in managing technical workforce (15+ technicians)",
      "Strong problem-solving skills under tight transit schedule constraints",
      "Proficiency in basic computer reporting (MS Excel / ERP logging)",
    ],
    benefits: [
      "Competitive executive remuneration package",
      "Annual performance bonus + company insurance",
      "Direct leadership exposure across multi-city projects",
    ],
  },
  {
    id: "depot-operations-manager",
    title: "Depot Operations Manager",
    category: "Management",
    location: "Gujarat / Maharashtra Hubs",
    positions: 3,
    experience: "5+ Years in Public Transit / Fleet Operations",
    type: "Full-Time",
    description:
      "Lead complete depot operations including driver crew scheduling, maintenance SLAs, client coordination with transit authorities, and statutory audit readiness.",
    responsibilities: [
      "Oversee end-to-end depot KPIs: fleet uptime, driver punctuality, charging turnaround",
      "Act as primary liaison with transit authorities and EV OEM partners",
      "Ensure 100% compliance with labor laws, safety norms, and audit documentation",
      "Drive continuous improvement in energy efficiency and route reliability",
    ],
    requirements: [
      "Bachelor's degree in Management, Logistics, or Engineering",
      "Extensive experience in municipal transport, STU, or large fleet operations",
      "Strong leadership, communication, and client management skills",
    ],
    benefits: [
      "Senior management salary package with performance incentives",
      "Comprehensive medical & executive welfare benefits",
      "Key strategic role in company's nationwide green transit expansion",
    ],
  },
];
