export type PhotoRole = "hero" | "profile" | "consultation" | "surgery" | "transplantTeam" | "conference" | "achievement" | "gallery";
export type DoctorPhoto = { src: string; role: PhotoRole; alt: string; caption: string; category: string; width: number; height: number; objectPosition?: string; requiresConsent: boolean };

// No supplied consent-safe solo portrait was suitable for the hero, so the UI uses the MM fallback.
// Professional-event assignments are intentionally conservative; original filenames are preserved.
export const doctorPhotos: DoctorPhoto[] = [
  { src: "/images/dr-milind/Profesional Photo.png", role: "hero", alt: "Dr. Milind Mandwar, organ transplant and HPB surgeon", caption: "Dr. Milind Mandwar", category: "Professional portrait", width: 677, height: 808, objectPosition: "50% 20%", requiresConsent: false },
  { src: "/images/dr-milind/Image 1.jpg", role: "achievement", alt: "Dr. Milind Mandwar being recognised at a liver health education event", caption: "Recognition during a liver health education programme", category: "Community and patient education", width: 1600, height: 1200, requiresConsent: false },
  { src: "/images/dr-milind/AHRPTWk8o63TcliFBhO3k0GRcRwqCEtVkQ-IeiFD8vhHgmFvNmEYGPR6BEmAy7Js1OLsOhsMNPCJLq0g1aiiWbo4fbEhREbVSy_t1ZXGLKs7iRdXecfz2UD1V7XgFij1Ne5XDjZkeL-8w5472-h3648-k-no.jpg", role: "conference", alt: "Dr. Milind Mandwar speaking at a professional medical event", caption: "Speaking at a professional medical programme", category: "Conferences and academic activities", width: 5472, height: 3648, objectPosition: "50% 35%", requiresConsent: false },
  { src: "/images/dr-milind/AHRPTWnsrbRkMfBKamGOktQP5nktaGUpJ_uBYIDgjWeHTYc4v6zrXx5PE_wn5tse9bwSMGgmnWs5LORmAh2tyhW-Aks3jyGLK5Uv7tUal5pqUxZuSilmp3rJXM4qyKGRl58lCSDltdIw6000-h4000-k-no.jpg", role: "gallery", alt: "Dr. Milind Mandwar presenting at a medical education event", caption: "Medical education and professional engagement", category: "Community and patient education", width: 6000, height: 4000, objectPosition: "50% 42%", requiresConsent: false }
];
export const visiblePhotos = doctorPhotos.filter((photo) => !photo.requiresConsent && photo.role !== "hero" && photo.role !== "profile");
export const heroPhoto = doctorPhotos.find((photo) => photo.role === "hero");
