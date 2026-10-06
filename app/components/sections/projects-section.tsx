import { ProjectCard, type Project } from "@/app/components/project-card";
import { SectionHeader } from "@/app/components/section-header";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { GITHUB_URL } from "@/app/lib/constants";

const projects: Project[] = [
  {
    id: "1",
    title: "use-history-ai",
    description:
      "Released a React hook for AI-powered clipboard management, using Google Gemini for smart text insights. Track history, add tags and categories, published on NPM.",
    imageUrl: "/projects/use-history-ai.jpg",
    tags: ["TypeScript", "React", "Google Gemini AI", "NPM Package"],
    link: "https://www.npmjs.com/package/use-history-ai",
    npmLink: "https://www.npmjs.com/package/use-history-ai",
    githubLink: "https://github.com/pawansachdeva21/use-history-ai",
    year: "2025",
  },
  {
    id: "2",
    title: "Personal Portfolio with AI Chatbot",
    description:
      "This site! Integrated a Gemini AI chatbot that answers questions about my work through natural language, streaming responses grounded in my profile.",
    imageUrl: "/projects/portfolio.jpg",
    tags: ["Next.js", "Gemini AI", "TypeScript", "Tailwind CSS"],
    link: "https://personal-portfolio-pawan-kumar-sachdevas-projects.vercel.app/",
    githubLink: "https://github.com/pawansachdeva21/Personal_Portfolio",
    year: "2025",
  },
  {
    id: "3",
    title: "Figma Clone",
    description:
      "Developed a real-time collaborative design tool with live canvas drawing and multi-user sync, powered by Liveblocks.",
    videoUrl: "/projects/figma.mp4",
    posterUrl: "/projects/figma-poster.jpg",
    tags: ["Next.js", "ShadCN", "Liveblocks", "Tailwind CSS"],
    link: "https://figma-clone-git-main-pawan-kumar-sachdevas-projects.vercel.app/",
    year: "2024",
  },
  {
    id: "4",
    title: "RapidChat",
    description:
      "Built a full-stack real-time chat app using MERN and Socket.IO with authentication and live messaging.",
    videoUrl: "/projects/chat.mp4",
    posterUrl: "/projects/chat-poster.jpg",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
    link: "https://rapid-chat-q01f.onrender.com/",
    year: "2023",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full flex flex-col items-start justify-start gap-y-10"
    >
      <SectionHeader
        eyebrow="Projects"
        title={
          <>
            My{" "}
            <span className="text-[#08090a] dark:text-emerald-500">
              Projects
            </span>
          </>
        }
        description={
          <>
            Explore some of the projects I&apos;ve worked on. These showcase my
            skills and expertise in various domains of software development.
          </>
        }
      />

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-3 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="self-center inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-white/15 px-5 py-2.5 text-sm font-medium text-[#08090a] dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition"
      >
        <FaGithub className="size-4" /> More projects on GitHub
        <ArrowUpRight className="size-4" />
      </a>
    </section>
  );
}
