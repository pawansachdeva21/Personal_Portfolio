import HeadingBadge from "@/app/components/heading-badge";
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
import { Database, FileSearch, Lightbulb, Plug } from "lucide-react";

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

const highlights = [
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Projects" },
  { value: "8+", label: "Clients" },
  { value: "25+", label: "Technologies" },
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
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge title="Skills" icon={<Lightbulb size={14} />} />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            <span className="text-[#08090a] dark:text-emerald-500">Skills</span>{" "}
            I have
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Technologies and tools I&apos;ve worked with and enjoy using
          </p>
        </div>
      </div>

      <div className="w-full space-y-5">
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

      {/* Experience highlights */}
      <div className="w-full mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {highlights.map((highlight) => (
          <div
            key={highlight.label}
            className="group relative p-6 rounded-sm border border-gray-200/80 dark:border-gray-800/50 bg-white dark:bg-[#0a0a0a] hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300 text-center overflow-hidden"
          >
            <div className="relative z-10">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#08090a] to-[#737373] dark:from-emerald-600 dark:to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {highlight.value}
              </div>
              <div className="text-xs font-medium text-[#737373] dark:text-gray-400 mt-2 group-hover:text-[#08090a] dark:group-hover:text-white transition-colors duration-300">
                {highlight.label}
              </div>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(8,9,10,0.03)_0%,rgba(8,9,10,0.06)_35%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.03)_0%,rgba(34,197,94,0.06)_35%,transparent_70%)]" />
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#08090a]/30 dark:via-emerald-500/30 to-transparent scale-x-0 group-hover:scale-x-100 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
