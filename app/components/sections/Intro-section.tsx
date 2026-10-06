import { ArrowRight, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/app/lib/constants";

const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "2M+", label: "Users on platforms I've built" },
  { value: "10+", label: "Projects shipped" },
  { value: "25+", label: "Technologies" },
];

const iconLink =
  "inline-flex size-10 items-center justify-center rounded-full border border-gray-300 dark:border-white/10 text-[#737373] dark:text-[#A1A1AA] hover:text-[#08090a] dark:hover:text-white hover:border-gray-400 dark:hover:border-white/25 transition-colors";

// Syntax-highlighted tokens for the profile card
const k = (t: string) => <span className="text-sky-300">{t}</span>;
const s = (t: string) => (
  <span className="text-emerald-300">&quot;{t}&quot;</span>
);
const list = (items: string[]) => (
  <>
    [
    {items.map((item, i) => (
      <span key={item}>
        {s(item)}
        {i < items.length - 1 && ", "}
      </span>
    ))}
    ]
  </>
);

function ProfileCard() {
  const lines = [
    <>
      <span className="text-purple-400">const</span> pawan = {"{"}
    </>,
    <>
      {"  "}
      {k("role")}: {s("Full Stack & AI Engineer")},
    </>,
    <>
      {"  "}
      {k("location")}: {s("Gurugram, India")},
    </>,
    <>
      {"  "}
      {k("experience")}: {s("5+ years")},
    </>,
    <>
      {"  "}
      {k("stack")}: {list(["React", "Next.js", "Python", "FastAPI"])},
    </>,
    <>
      {"  "}
      {k("ai")}: {list(["LangChain", "LangGraph", "RAG", "MCP"])},
    </>,
    <>
      {"  "}
      {k("openToWork")}: <span className="text-amber-300">true</span>,
    </>,
    <>{"};"}</>,
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-gray-400 font-mono">pawan.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-gray-300">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="w-8 shrink-0 select-none text-gray-600">
                {i + 1}
              </span>
              <code className="whitespace-pre">{line}</code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

export function IntroSection() {
  return (
    <section className="w-full">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Open to new opportunities
          </div>

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-[#08090a] dark:text-white">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[#08090a] to-emerald-700 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
              Pawan Sachdeva
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-[#08090a]/80 dark:text-gray-200">
            Senior Full Stack &amp; AI Engineer, based in Gurugram
          </p>

          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-[#737373] dark:text-[#A1A1AA]">
            I&apos;ve spent the last 5+ years building web apps with{" "}
            <span className="text-[#08090a] dark:text-emerald-400">
              React and Next.js
            </span>
            . These days I also write a lot of{" "}
            <span className="text-[#08090a] dark:text-emerald-400">
              Python, FastAPI and LangChain
            </span>
            , building AI chatbots and RAG systems that run in production. If
            you&apos;re working on something interesting, I&apos;d love to hear
            about it.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#08090a] dark:bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white dark:text-black hover:opacity-90 transition shadow-[0_0_30px_-8px_rgba(16,185,129,0.7)]"
            >
              Get in touch <ArrowRight className="size-4" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-white/15 px-5 py-2.5 text-sm font-medium text-[#08090a] dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition"
            >
              <FileText className="size-4" /> Resume
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={iconLink}
            >
              <FaGithub className="size-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconLink}
            >
              <FaLinkedin className="size-4" />
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <ProfileCard />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-gray-200 dark:border-white/[0.08] bg-gray-200 dark:bg-white/[0.08]">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-[#0c0c0c] px-6 py-6 text-center sm:text-left"
          >
            <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#08090a] to-[#737373] dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
              {stat.value}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-[#737373] dark:text-[#A1A1AA]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
