// "use client";

// import { ArrowUpRight, X } from "lucide-react";
// import { useState } from "react";

// const galleryItems = [
//   {
//     id: 1,
//     title: "Electric Mobility",
//     category: "EV Mobility",
//     description: "Building cleaner and smarter transportation solutions.",
//     image: "/gallery/ev-mobility.jpg",
//     size: "large",
//   },
//   {
//     id: 2,
//     title: "Fleet Operations",
//     category: "Fleet",
//     description: "Reliable electric fleet operations built for scale.",
//     image: "/gallery/fleet.jpg",
//     size: "small",
//   },
//   {
//     id: 3,
//     title: "Charging Infrastructure",
//     category: "Infrastructure",
//     description: "Supporting the infrastructure behind electric mobility.",
//     image: "/gallery/charging.jpg",
//     size: "small",
//   },
//   {
//     id: 4,
//     title: "Moving People",
//     category: "Public Transport",
//     description: "Electric mobility designed around real-world journeys.",
//     image: "/gallery/public-transport.jpg",
//     size: "wide",
//   },
//   {
//     id: 5,
//     title: "Our People",
//     category: "Team",
//     description: "People working together to move India forward.",
//     image: "/gallery/team.jpg",
//     size: "small",
//   },
//   {
//     id: 6,
//     title: "Sustainable Future",
//     category: "Vision",
//     description: "A greener future powered by clean energy.",
//     image: "/gallery/sustainable.jpg",
//     size: "small",
//   },
// ];

// export default function GalleryGrid() {
//   const [selectedImage, setSelectedImage] = useState<
//     (typeof galleryItems)[number] | null
//   >(null);

//   return (
//     <>
//       <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
//         {galleryItems.map((item) => (
//           <button
//             key={item.id}
//             type="button"
//             onClick={() => setSelectedImage(item)}
//             className={`group relative overflow-hidden rounded-3xl text-left ${
//               item.size === "large"
//                 ? "min-h-[520px] lg:col-span-7"
//                 : item.size === "wide"
//                   ? "min-h-[380px] lg:col-span-7"
//                   : "min-h-[380px] lg:col-span-5"
//             }`}
//           >
//             {/* Placeholder background */}
//             <div className="absolute inset-0 bg-[#020713] transition duration-500 group-hover:scale-105">
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,200,83,0.28),transparent_45%)]" />

//               <div className="absolute bottom-0 left-0 h-2/3 w-full bg-gradient-to-t from-black via-black/50 to-transparent" />

//               {/* EV-style visual placeholder */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="relative">
//                   <div className="h-40 w-40 rounded-full border border-green-400/20 bg-green-400/5 blur-sm" />

//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span className="text-5xl font-bold text-green-400/20">
//                       DG
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Number */}
//             <span className="absolute right-6 top-6 text-sm font-bold tracking-[0.2em] text-white/40">
//               0{item.id}
//             </span>

//             {/* Content */}
//             <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
//               <div className="flex items-end justify-between gap-5">
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-400">
//                     {item.category}
//                   </p>

//                   <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 max-w-lg text-sm leading-6 text-white/65">
//                     {item.description}
//                   </p>
//                 </div>

//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition duration-300 group-hover:border-green-400 group-hover:bg-green-500 group-hover:text-black">
//                   <ArrowUpRight size={19} />
//                 </span>
//               </div>
//             </div>
//           </button>
//         ))}
//       </div>

//       {/* Lightbox */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-md"
//           onClick={() => setSelectedImage(null)}
//         >
//           <button
//             type="button"
//             onClick={() => setSelectedImage(null)}
//             className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black"
//             aria-label="Close gallery"
//           >
//             <X size={22} />
//           </button>

//           <div
//             className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#020713]"
//             onClick={(event) => event.stopPropagation()}
//           >
//             <div className="relative aspect-video">
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,200,83,0.3),transparent_45%)]" />

//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-8xl font-bold text-green-400/20">
//                   DG
//                 </span>
//               </div>

//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
//                   {selectedImage.category}
//                 </p>

//                 <h3 className="mt-2 text-3xl font-bold text-white">
//                   {selectedImage.title}
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }