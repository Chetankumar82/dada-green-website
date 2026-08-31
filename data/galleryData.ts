export interface GalleryMoment {
  id: number;
  numberString: string; // e.g. "01", "02", ...
  src: string;
  category: "all" | "fleet" | "maintenance" | "crew" | "infra";
  categoryLabel: string;
}

export const galleryMoments: GalleryMoment[] = Array.from({ length: 48 }, (_, index) => {
  const fileNumber = String(index + 3).padStart(4, "0");
  const num = index + 1;
  const numberString = String(num).padStart(2, "0");

  const categories: ("fleet" | "maintenance" | "crew" | "infra")[] = [
    "fleet",
    "maintenance",
    "crew",
    "infra",
  ];
  const catKey = categories[index % categories.length];

  const categoryLabels: Record<string, string> = {
    fleet: "Electric Fleet",
    maintenance: "Depot Maintenance",
    crew: "Operations Crew",
    infra: "Charging Infra",
  };

  return {
    id: num,
    numberString,
    src: `/gallery/IMG-20260819-WA${fileNumber}.jpg`,
    category: catKey,
    categoryLabel: categoryLabels[catKey],
  };
});

export const galleryCategories = [
  { id: "all", label: "All Photos", count: 48 },
  { id: "fleet", label: "Electric Fleet", count: 12 },
  { id: "maintenance", label: "Depot Maintenance", count: 12 },
  { id: "crew", label: "Operations Crew", count: 12 },
  { id: "infra", label: "Charging Infra", count: 12 },
] as const;
