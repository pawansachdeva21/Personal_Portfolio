import { SectionHeader } from "@/app/components/section-header";
import {
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLangchain,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRtl,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { Database, FileSearch, Plug } from "lucide-react";

type Skill = {
  name: string;
  icon?: React.ReactNode;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
    ],
  },
  {
    name: "Frontend Technologies",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "ShadCN", icon: <SiShadcnui /> },
      { name: "React Testing Library", icon: <SiRtl /> },
    ],
  },
  {
    name: "AI & LLM",
    skills: [
      { name: "LangChain", icon: <SiLangchain /> },
      { name: "LangGraph", icon: <SiLangchain /> },
      { name: "LangSmith", icon: <SiLangchain /> },
      { name: "RAG", icon: <FileSearch /> },
      { name: "MCP", icon: <Plug /> },
    ],
  },
  {
    name: "Backend & Databases",
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Node.JS", icon: <SiNodedotjs /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MS SQL", icon: <DiMsqlServer /> },
      { name: "Qdrant", icon: <Database /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Azure", icon: <VscAzure /> },
    ],
  },
];

const SkillTag = ({ name, icon }: Skill) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-sm bg-white dark:bg-[#0a0a0a] border border-gray-200/80 dark:border-gray-800/50 px-3 py-1.5 transition-all duration-300 hover:border-gray-900/30 dark:hover:border-emerald-500/30 hover:bg-gray-50 dark:hover:bg-[#111111] cursor-pointer">
      {icon && (
        <span className="flex items-center justify-center size-6 p-1 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-xs font-medium text-[#08090a] dark:text-emerald-500">
          {icon}
        </span>
      )}
      <span className="text-sm font-medium text-[#08090a] dark:text-gray-200">
        {name}
      </span>
    </div>
  );
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full flex flex-col items-start justify-start gap-y-10"
    >
      <SectionHeader
        eyebrow="Skills"
        title={
          <>
            <span className="text-[#08090a] dark:text-emerald-500">Skills</span>{" "}
            I have
          </>
        }
        description={
          <>Technologies and tools I&apos;ve worked with and enjoy using</>
        }
      />

      <div className="w-full grid gap-x-10 gap-y-5 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.name} className="space-y-3">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#08090a] dark:bg-emerald-500"></span>
              {category.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillTag key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
