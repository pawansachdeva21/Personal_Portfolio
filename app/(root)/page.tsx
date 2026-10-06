import { AboutSection } from "@/app/components/sections/about-section";
import { ActivitySection } from "@/app/components/sections/activity-section";
import { ContactSection } from "@/app/components/sections/contact-section";
import { ExperienceSection } from "@/app/components/sections/experience-section";
import { IntroSection } from "@/app/components/sections/Intro-section";
import { ProjectsSection } from "@/app/components/sections/projects-section";
import { ServicesSection } from "@/app/components/sections/services-section";
import { SkillsSection } from "@/app/components/sections/skills-section";
import { CertificationsSection } from "@/app/components/sections/certification-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-y-16 lg:gap-y-24 pt-36 lg:pt-44">
      <IntroSection />
      <AboutSection />
      <ActivitySection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
