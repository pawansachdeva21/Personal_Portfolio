import { Fragment } from "react";
import { AboutSection } from "@/app/components/sections/about-section";
import { ActivitySection } from "@/app/components/sections/activity-section";
import { ContactSection } from "@/app/components/sections/contact-section";
import { ExperienceSection } from "@/app/components/sections/experience-section";
import { IntroSection } from "@/app/components/sections/Intro-section";
import { ProjectsSection } from "@/app/components/sections/projects-section";
import { ServicesSection } from "@/app/components/sections/services-section";
import { SkillsSection } from "@/app/components/sections/skills-section";
import { CertificationsSection } from "@/app/components/sections/certification-section";

const sections = [
  IntroSection,
  AboutSection,
  ActivitySection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  CertificationsSection,
  ServicesSection,
  ContactSection,
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-40">
      {sections.map((Section, index) => (
        <Fragment key={index}>
          {index > 0 && (
            <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10" />
          )}
          <Section />
        </Fragment>
      ))}
    </div>
  );
}
