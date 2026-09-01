export interface ProjectItem {
  id: string;
  name: string;
  client: string;
  city: string;
  state: "Gujarat" | "Maharashtra";
  depotLocation: string;
  busesOperated: number;
  manpowerDeployed: number;
  image: string;
  category: string;
  status: "Active Operations" | "Expanding";
  description: string;
  scope: string[];
  keyHighlights: string[];
}

export const operationalProjects: ProjectItem[] = [
  {
    id: "gsrtc-transit-operations",
    name: "GSRTC Electric Bus City & Intercity Transit",
    client: "GSRTC / Transit Operators",
    city: "Mansa & Gandhinagar Region",
    state: "Gujarat",
    depotLocation: "Mansa Depot & Gandhinagar Sector Hubs",
    busesOperated: 45,
    manpowerDeployed: 120,
    image: "/gallery/IMG-20260819-WA0003.jpg",
    category: "Scheduled Public Transit",
    status: "Active Operations",
    description:
      "End-to-end scheduled electric bus operations and passenger transit route management connecting Mansa, Gandhinagar, and Ahmedabad corridors.",
    scope: [
      "Daily scheduled route execution & timetable adherence",
      "Certified EV driver deployment & continuous shift rosters",
      "Night-shift depot maintenance, washing & safety inspections",
      "Battery SoC monitoring and fast-charging bay turnaround",
    ],
    keyHighlights: [
      "99.4% On-time dispatch rate",
      "Zero safety incidents recorded",
      "Trained regenerative eco-drivers",
    ],
  },
  {
    id: "olectra-evey-depot-operations",
    name: "Olectra & Evey Trans EV Fleet Depot Operations",
    client: "Olectra Greentech & Evey Trans",
    city: "Surat & Ahmedabad Hubs",
    state: "Gujarat",
    depotLocation: "Major Municipal Charging & Maintenance Depots",
    busesOperated: 60,
    manpowerDeployed: 160,
    image: "/gallery/IMG-20260819-WA0005.jpg",
    category: "Depot & Maintenance Manpower",
    status: "Active Operations",
    description:
      "Full depot maintenance manpower service, high-power DC charging management, and comprehensive workshop upkeep for heavy electric bus fleets.",
    scope: [
      "24×7 Mechanical & Electrical maintenance manpower",
      "Preventive maintenance schedules & battery health diagnostics",
      "Depot traffic flow coordination and charging bay allocation",
      "Statutory compliance, safety logging & spare parts tracking",
    ],
    keyHighlights: [
      "24×7 Workshop operational availability",
      "Rapid breakdown turnaround < 45 mins",
      "100% PPE & safety protocol compliance",
    ],
  },
  {
    id: "nagpur-smart-city-ev-transit",
    name: "Nagpur Municipal EV Transit Operations",
    client: "Municipal Transit Partners",
    city: "Nagpur",
    state: "Maharashtra",
    depotLocation: "Nagpur Central EV Depot",
    busesOperated: 35,
    manpowerDeployed: 95,
    image: "/gallery/IMG-20260819-WA0006.jpg",
    category: "Urban Public Mobility",
    status: "Active Operations",
    description:
      "Urban electric bus operations and technical maintenance manpower deployment supporting zero-emission municipal commuter transport in Nagpur.",
    scope: [
      "City route passenger transit execution",
      "Dedicated EV technicians and mechanical supervisors",
      "Charging infrastructure monitoring and energy tracking",
      "Driver performance monitoring & passenger service standards",
    ],
    keyHighlights: [
      "Over 1.2M+ green passenger kms operated",
      "Optimized kilowatt-hour consumption per km",
      "Continuous telematics oversight",
    ],
  },
  {
    id: "amravati-chandrapur-feeder-corridor",
    name: "Amravati & Chandrapur Feeder Fleet Operations",
    client: "Regional Transport Operators",
    city: "Amravati & Chandrapur",
    state: "Maharashtra",
    depotLocation: "Regional EV Maintenance Facilities",
    busesOperated: 25,
    manpowerDeployed: 70,
    image: "/gallery/IMG-20260819-WA0014.jpg",
    category: "Regional EV Corridors",
    status: "Active Operations",
    description:
      "Regional feeder route electric bus fleet management, driver deployment, and overnight maintenance upkeep across industrial transit links.",
    scope: [
      "Intercity & feeder route bus scheduling",
      "Overnight diagnostic testing & powertrain servicing",
      "Driver welfare, attendance tracking & biometric roster logging",
      "Emergency mobile support van on active standby",
    ],
    keyHighlights: [
      "High reliability on long-distance feeder routes",
      "Dedicated mobile breakdown response",
      "Proactive battery cooling upkeep",
    ],
  },
];
