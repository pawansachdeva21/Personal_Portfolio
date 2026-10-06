import HeadingBadge from "@/app/components/heading-badge";
import { SpotlightCard } from "@/app/components/ui/spotlight-card";
import { User } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-8"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge title="About Me" icon={<User size={14} />} />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            Discover My{" "}
            <span className="text-[#08090a] dark:text-emerald-500">Story</span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Learn about my journey from web development to building AI-powered
            products, and what drives me as an engineer.
          </p>
        </div>
      </div>

      <SpotlightCard
        gradientColor="rgba(34, 197, 94, 0.1)"
        lightGradientColor="rgba(8, 9, 10, 0.1)"
        spotlightSize={400}
        disableScale={true}
        className="p-6 rounded-sm border border-gray-200/80 dark:border-gray-800/50 bg-white dark:bg-[#0a0a0a] hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300 w-full"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              Who I Am
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              I&apos;m a full-stack and AI engineer with over 5 years of
              experience building products end to end—from pixel-perfect React
              and Next.js frontends to Python and FastAPI services and LLM-powered
              workflows. Today I lead development of an AI-enabled CRM platform
              serving 2M+ users across 5000+ schools.
            </p>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              I build AI that does real work: conversational agents with
              LangChain and LangGraph, RAG pipelines backed by Qdrant and
              PostgreSQL, and AI-generated call summaries that cut manual
              documentation by 90%. My approach blends solid engineering with
              practical problem-solving, so every feature is reliable, scalable,
              and genuinely useful.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              My Journey
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              My tech journey began in 2021 after earning my B.Tech from Guru
              Nanak Dev Engineering College, Ludhiana. I started at Cognizant
              building accessible pharma dashboards, then moved to Laminaar
              Aviation, where I led a team of 4 building airline operational
              modules with React and Node.js.
            </p>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              At Hitachi MGRM Net, my work grew from real-time calling with
              WebRTC and Asterisk into Generative AI—chatbots, agent workflows,
              and RAG systems in production. Along the way I&apos;ve shipped AI
              side projects too, like use-history-ai on NPM and the Gemini-powered
              assistant on this site. Each step has deepened my passion for
              building impactful, intelligent software.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              Beyond Coding
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              Outside of tech, I enjoy playing and watching cricket, following
              football, hitting the gym, and playing chess—all of which fuel my
              creativity and keep me inspired. I’m also passionate about fitness
              and love hitting the gym regularly to stay energized and focused
              in both work and life.
            </p>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
