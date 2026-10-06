import HeadingBadge from "@/app/components/heading-badge";
import { Hand } from "lucide-react";

export function IntroSection() {
  return (
    <section className="w-full flex flex-col items-start justify-center">
      <div className="space-y-6 ">
        <HeadingBadge title="Introduction" icon={<Hand size={14} />} />

        <article className="space-y-5 sm:space-y-6">
          <h1 className="text-5xl font-bold tracking-tight leading-tight">
            <span className="text-[#08090a] dark:text-emerald-500">
              Hi, I&apos;m Pawan Sachdeva
            </span>{" "}
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-[#737373] dark:text-[#A1A1AA] max-w-2xl">
            A Senior Full Stack &amp; AI Engineer building intelligent,
            scalable products
          </p>

          <p className="text-sm sm:text-base font-normal text-[#737373] dark:text-[#A1A1AA] max-w-2xl">
            With 5+ years of experience, I build full-stack apps and GenAI
            systems with{" "}
            <span className="text-[#08090a] dark:text-emerald-500">
              React, Next.js, Python, FastAPI, LangChain, LangGraph and RAG.
            </span>{" "}
            From AI chatbots and agent workflows to platforms serving millions
            of users, I love turning complex problems into products people
            actually use. Let&apos;s connect if you&apos;ve got a project that
            could use my skills!
          </p>
        </article>
      </div>
    </section>
  );
}
