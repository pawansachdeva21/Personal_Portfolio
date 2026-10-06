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

          <p className="text-xl sm:text-2xl font-medium text-[#737373] dark:text-[#A1A1AA] max-w-3xl">
            Senior Full Stack &amp; AI Engineer, based in Gurugram
          </p>

          <p className="text-sm sm:text-base font-normal text-[#737373] dark:text-[#A1A1AA] max-w-3xl">
            I&apos;ve spent the last 5+ years building web apps with{" "}
            <span className="text-[#08090a] dark:text-emerald-500">
              React and Next.js
            </span>
            . These days I also write a lot of{" "}
            <span className="text-[#08090a] dark:text-emerald-500">
              Python, FastAPI and LangChain
            </span>
            , building AI chatbots and RAG systems that run in production. If
            you&apos;re working on something interesting, I&apos;d love to hear
            about it.
          </p>
        </article>
      </div>
    </section>
  );
}
