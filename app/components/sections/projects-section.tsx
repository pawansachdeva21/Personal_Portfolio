import { ProjectCard, type Project } from "@/app/components/project-card";
import HeadingBadge from "@/app/components/heading-badge";
import { FolderGit2 } from "lucide-react";

const projects: Project[] = [
  {
    id: "1",
    title: "use-history-ai",
    description:
      "Released a React hook for AI-powered clipboard management, using Google Gemini for smart text insights. Track history, add tags and categories, published on NPM.",
    imageUrl: "/projects/npmm.png",
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
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge title="Projects" icon={<FolderGit2 size={14} />} />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            My{" "}
            <span className="text-[#08090a] dark:text-emerald-500">
              Projects
            </span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Explore some of the projects I&apos;ve worked on. These showcase my
            skills and expertise in various domains of software development.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 gap-2 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
