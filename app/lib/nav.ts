export type NavSection = {
  id: string;
  label: string;
};

export const NAV_SECTIONS: NavSection[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

// Approximate navbar height including margins
const NAVBAR_OFFSET = 80;

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET,
    behavior: "smooth",
  });
}
