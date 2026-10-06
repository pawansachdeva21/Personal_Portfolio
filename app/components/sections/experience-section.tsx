"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/app/components/section-header";
import { SpotlightCard } from "@/app/components/ui/spotlight-card";
import { Building2, Calendar, ChevronRight } from "lucide-react";
import { cn } from "@/app/lib/utils";

type Experience = {
  company: string;
  companyLink: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    company: "Hitachi MGRM Net",
    companyLink: "https://www.linkedin.com/company/hitachi-mgrm",
    position: "Software Developer",
    duration: "June 2024 - Present",
    description: [
      "Led development of AI-enabled CRM platform serving 2M+ users across 5000+ schools using NestJS and scalable micro-frontend architecture.",
      "Built AI-powered chatbot and conversational workflows using LangChain, LangGraph, and RAG, enabling context-aware responses and intelligent agent interactions within the CRM ecosystem.",
      "Designed and implemented RAG pipelines using Qdrant for vector search and PostgreSQL for persistent data, integrating FastAPI services to support scalable AI-powered workflows.",
      "Implemented real-time calling in the agent module with WebRTC, JsSIP, Asterisk, and Socket.IO, improving agent response time by 50%.",
      "Integrated AI-driven call summaries with RingCentral and added Jitsi for seamless in-browser video calls, reducing manual documentation by 90%.",
    ],
    technologies: [
      "NestJS",
      "LangChain",
      "LangGraph",
      "RAG",
      "Qdrant",
      "PostgreSQL",
      "FastAPI",
      "WebRTC",
      "JsSIP",
      "Asterisk",
      "Socket.IO",
      "RingCentral",
      "Jitsi",
    ],
  },
  {
    company: "Laminaar Aviation Infotech",
    companyLink:
      "https://www.linkedin.com/company/laminaar-aviation-infotech-private-limited/",
    position: "Associate Software Engineer",
    duration: "February 2023 - March 2024",
    description: [
      "Led a team of 4 to build airline operational modules using React.js, RTK, and a custom library.",
      "Developed backend services using Node.js for airline crew and operational management systems.",
      "Achieved over 85% test coverage using Jest, React Testing Library (RTL), and MSW, while maintaining less than 5% code duplication.",
      "Deployed Node.js services on Azure App Service, improving uptime and reliability for airline crew systems.",
    ],
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Jest",
      "React Testing Library",
      "MSW",
      "Azure App Service",
    ],
  },
  {
    company: "Cognizant",
    companyLink: "https://www.linkedin.com/company/cognizant",
    position: "Programmer Analyst Trainee",
    duration: "July 2021 - July 2022",
    description: [
      "Implemented pharma dashboards using React and Material UI v5, consuming REST APIs with a fully responsive UI across all major browsers.",
      "Ensured accessibility compliance (WCAG) and delivered component-driven frontends aligned with established UX standards.",
      "Integrated AWS services through CI/CD pipelines (Jenkins) to streamline deployments.",
    ],
    technologies: [
      "React",
      "Material UI",
      "REST APIs",
      "WCAG",
      "AWS",
      "Jenkins",
    ],
  },
];

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="w-full">
      <div className="space-y-8">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              Work{" "}
              <span className="text-[#08090a] dark:text-emerald-500">
                Experience
              </span>
            </>
          }
          description={
            <>
              Companies I&apos;ve worked with and the projects I&apos;ve been
              involved in
            </>
          }
        />

        <div className="space-y-3">
          {experiences.map((experience, index) => (
            <SpotlightCard
              key={index}
              className={cn(
                "p-6 cursor-pointer transition-all duration-300 group rounded-2xl border border-gray-200 dark:border-white/[0.08] ease-in-out hover:border-gray-900/30 dark:hover:border-emerald-500/30",
                "hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-emerald-500/5",
                expandedIndex === index ? "bg-opacity-10" : "",
              )}
              gradientColor="rgba(34, 197, 94, 0.15)"
              lightGradientColor="rgba(8, 9, 10, 0.15)"
              onClick={() => toggleExpand(index)}
              disableScale={true}
            >
              <div className="space-y-4">
                <div className="flex xs:flex-row flex-col items-start justify-between gap-4">
                  <section className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium text-[#08090a] dark:text-white">
                        {experience.position}
                      </h3>
                      <ChevronRight
                        className={cn(
                          "w-5 h-5 text-[#08090a] dark:text-emerald-500 transition-all duration-500",
                          "transform-gpu opacity-0 scale-95 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100",
                          "ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                          expandedIndex === index ? "rotate-90" : "rotate-0",
                          expandedIndex === index
                            ? "opacity-100 translate-x-0 scale-100"
                            : "",
                        )}
                      />
                    </div>
                    <div className="flex items-center gap-2 text-[#737373] dark:text-[#A1A1AA]">
                      <Building2 className="w-4 h-4" />
                      <span>{experience.company}</span>
                    </div>
                  </section>
                  <section className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-emerald-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </section>
                </div>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    expandedIndex === index
                      ? "grid-rows-[1fr] opacity-100 translate-y-0"
                      : "grid-rows-[0fr] opacity-0 -translate-y-4",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 space-y-4">
                      <ul className="space-y-2 text-[#737373] dark:text-[#A1A1AA] text-sm">
                        {experience.description.map((item, i) => (
                          <li
                            key={i}
                            style={{ transitionDelay: `${i * 100}ms` }}
                            className={cn(
                              "list-disc list-inside transition-all duration-500",
                              "transform-gpu",
                              expandedIndex === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4",
                            )}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <span
                            key={i}
                            style={{
                              transitionDelay:
                                expandedIndex === index
                                  ? `${i * 100 + 300}ms`
                                  : "0ms",
                            }}
                            className={cn(
                              "px-2 py-1 text-xs rounded-sm font-medium bg-white dark:bg-[#0a0a0a] border border-gray-200/80 dark:border-gray-800/50 text-[#737373] dark:text-[#A1A1AA] group-hover:border-gray-900/30 dark:group-hover:border-emerald-500/30 transition-all duration-300",
                              expandedIndex === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4",
                            )}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
